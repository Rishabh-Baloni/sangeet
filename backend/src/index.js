import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";
import fs from "fs";
import { createServer } from "http";
import cron from "node-cron";

import { initializeSocket } from "./lib/socket.js";
import { autoWake } from "./keepAlive.js";

import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;

const httpServer = createServer(app);
initializeSocket(httpServer);

app.use(
	cors({
		origin: process.env.NODE_ENV === "production" 
			? ["https://sangeet-himk.onrender.com", "http://localhost:3000", "https://sangeet-himk.onrender.com/"]
			: "http://localhost:3000",
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
		allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
	})
);

app.use(express.json()); // to parse req.body
app.use(clerkMiddleware()); // this will add auth to req obj => req.auth
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: path.join(__dirname, "tmp"),
		createParentPath: true,
		limits: {
			fileSize: 10 * 1024 * 1024, // 10MB  max file size
		},
	})
);

// cron jobs
const tempDir = path.join(process.cwd(), "tmp");
cron.schedule("0 * * * *", () => {
	if (fs.existsSync(tempDir)) {
		fs.readdir(tempDir, (err, files) => {
			if (err) {
				console.log("error", err);
				return;
			}
			for (const file of files) {
				fs.unlink(path.join(tempDir, file), (err) => {});
			}
		});
	}
});

// Bulletproof UptimeRobot handlers - explicit method support
const sendHealthResponse = (res) => {
	res.status(200).json({ 
		status: 'Sangeet Music Platform', 
		timestamp: new Date().toISOString(),
		version: '1.0.0',
		uptime: process.uptime()
	});
};

// Root endpoint - explicit methods for UptimeRobot
app.get('/', (req, res) => {
	if (process.env.NODE_ENV === "production") {
		res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
	} else {
		sendHealthResponse(res);
	}
});

app.head('/', (req, res) => {
	res.status(200).end();
});

app.post('/', (req, res) => sendHealthResponse(res));
app.put('/', (req, res) => sendHealthResponse(res));
app.delete('/', (req, res) => sendHealthResponse(res));
app.options('/', (req, res) => sendHealthResponse(res));
app.patch('/', (req, res) => sendHealthResponse(res));

// Health endpoint - explicit methods
app.get('/health', (req, res) => {
	res.status(200).json({ 
		status: 'healthy', 
		timestamp: new Date().toISOString(),
		uptime: process.uptime()
	});
});

app.head('/health', (req, res) => {
	res.status(200).end();
});

app.post('/health', (req, res) => {
	res.status(200).json({ 
		status: 'healthy', 
		timestamp: new Date().toISOString(),
		uptime: process.uptime()
	});
});

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/dist")));
	// Catch-all handler for frontend routes (except root and health)
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
	});
}

// error handler
app.use((err, req, res, next) => {
	res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message });
});

// Configure timeouts for Render deployment
httpServer.keepAliveTimeout = 120000; // 120 seconds
httpServer.headersTimeout = 120000; // 120 seconds



httpServer.listen(PORT, "0.0.0.0", () => {
	console.log("Server is running on port " + PORT);
	connectDB();
	
	// Initialize auto-wake system
	autoWake();
});
