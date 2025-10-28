# SANGEET - Music Streaming Platform
## Project Analysis & Technical Documentation

---

## 📋 PROJECT OVERVIEW

**Project Name:** Sangeet (means "Music" in Hindi/Sanskrit)  
**Tagline:** "Your Sound, Your Vibe"  
**Type:** Full-Stack Real-Time Music Streaming Web Application  
**Tech Stack:** MERN Stack + Real-Time Features  
**Purpose:** A modern music streaming platform with social features, real-time chat, and admin management capabilities

---

## 🎯 KEY FEATURES

### 1. **Music Streaming & Playback**
- Stream high-quality audio files stored on Cloudinary CDN
- Full-featured audio player with:
  - Play/Pause controls
  - Skip forward/backward
  - Progress bar with seek functionality
  - Volume control slider
  - Real-time playback time display
- Album-based music organization
- Featured songs section
- Auto-play next song in album

### 2. **Real-Time Social Features**
- **Live Chat System:**
  - One-on-one messaging between users
  - Real-time message delivery using Socket.IO
  - Online/offline status indicators
  - Message timestamps
  - Persistent chat history stored in MongoDB

- **Friends Activity:**
  - See what music friends are currently playing
  - Real-time updates when friends start/stop playing songs
  - Online status indicators with visual badges

### 3. **User Authentication & Authorization**
- Clerk Authentication integration
  - Google OAuth login
  - Secure JWT-based authentication
  - User profile management
  - Role-based access control (Admin/Regular User)

### 4. **Admin Dashboard**
- **Song Management:**
  - Upload new songs with metadata (title, artist, album, duration)
  - Upload cover images
  - Delete existing songs
  - File uploads handled via Cloudinary

- **Album Management:**
  - Create new albums with cover art
  - Associate songs with albums
  - Delete albums
  - View album statistics

- **Analytics & Statistics:**
  - Total users count
  - Total songs count
  - Total albums count
  - Visual statistics dashboard

### 5. **Modern UI/UX**
- Dark theme design (inspired by music streaming platforms)
- Responsive layout for mobile and desktop
- Smooth animations and transitions
- Skeleton loaders for better UX
- Red accent color theme throughout
- Calligraphic "SANGEET" branding with headphone icon logo

---

## 🏗️ SYSTEM ARCHITECTURE

### **Frontend Architecture (React + TypeScript)**

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Topbar.tsx      # Navigation bar with logo & auth buttons
│   │   ├── SignInOAuthButtons.tsx
│   │   ├── skeletons/      # Loading states
│   │   └── ui/             # Shadcn UI components (40+ components)
│   │
│   ├── pages/              # Route-based pages
│   │   ├── home/           # Main music browsing page
│   │   ├── album/          # Album detail & playback page
│   │   ├── admin/          # Admin dashboard pages
│   │   ├── chat/           # Real-time chat interface
│   │   └── auth-callback/  # OAuth callback handler
│   │
│   ├── layout/             # Layout components
│   │   ├── MainLayout.tsx          # Main app layout wrapper
│   │   ├── AudioPlayer.tsx         # Hidden audio element controller
│   │   ├── PlaybackControls.tsx    # Bottom player controls
│   │   ├── LeftSidebar.tsx         # Album navigation sidebar
│   │   └── FriendsActivity.tsx     # Right sidebar with friends
│   │
│   ├── stores/             # State management (Zustand)
│   │   ├── useAuthStore.ts         # Authentication state
│   │   ├── useMusicStore.ts        # Music data & playback state
│   │   ├── usePlayerStore.ts       # Audio player state
│   │   └── useChatStore.ts         # Chat & Socket.IO state
│   │
│   ├── lib/
│   │   ├── axios.ts        # Axios instance with interceptors
│   │   └── utils.ts        # Utility functions
│   │
│   └── types/
│       └── index.ts        # TypeScript interfaces
```

### **Backend Architecture (Node.js + Express)**

```
backend/
├── src/
│   ├── index.js            # Express server & Socket.IO setup
│   │
│   ├── models/             # MongoDB Schemas
│   │   ├── user.model.js   # User data (Clerk ID, admin status)
│   │   ├── song.model.js   # Song metadata & file URLs
│   │   ├── album.model.js  # Album info & song references
│   │   └── message.model.js # Chat messages
│   │
│   ├── controller/         # Business logic
│   │   ├── auth.controller.js   # Authentication & user management
│   │   ├── song.controller.js   # Song CRUD operations
│   │   ├── album.controller.js  # Album CRUD operations
│   │   ├── admin.controller.js  # Admin-only operations
│   │   ├── stat.controller.js   # Analytics & statistics
│   │   └── user.controller.js   # User operations & chat
│   │
│   ├── routes/             # API endpoints
│   │   ├── auth.route.js   # /api/auth/*
│   │   ├── song.route.js   # /api/songs/*
│   │   ├── album.route.js  # /api/albums/*
│   │   ├── admin.route.js  # /api/admin/*
│   │   ├── stat.route.js   # /api/stats/*
│   │   └── user.route.js   # /api/users/*
│   │
│   ├── middleware/
│   │   └── auth.middleware.js # Clerk JWT verification & admin check
│   │
│   ├── lib/
│   │   ├── db.js           # MongoDB connection
│   │   ├── cloudinary.js   # Cloudinary SDK configuration
│   │   └── socket.js       # Socket.IO event handlers
│   │
│   └── seeds/              # Database seeding scripts
│       ├── songs.js
│       └── albums.js
```

---

## 🔄 DATA FLOW & REAL-TIME FEATURES

### **Music Playback Flow:**
1. User clicks on a song/album
2. Frontend fetches song data from backend API
3. Audio URL (Cloudinary CDN) loaded into HTML5 audio element
4. Zustand store manages playback state (playing/paused, current time, volume)
5. Socket.IO broadcasts "song started" event to all connected users
6. Friends see real-time updates in "Friends Activity" sidebar

### **Real-Time Chat Flow:**
1. User sends message via chat interface
2. Frontend emits Socket.IO event: `sendMessage`
3. Backend receives event, saves message to MongoDB
4. Backend emits `receiveMessage` event to recipient's socket
5. Recipient's UI updates instantly with new message
6. Message history persisted in database for future sessions

### **Socket.IO Events:**
- `userConnected` - User comes online
- `userDisconnected` - User goes offline
- `songStarted` - User starts playing a song
- `songEnded` - User stops playing a song
- `sendMessage` - Send chat message
- `receiveMessage` - Receive chat message
- `getOnlineUsers` - Request list of online users

---

## 🗄️ DATABASE SCHEMA

### **MongoDB Collections:**

**1. Users Collection**
```javascript
{
  _id: ObjectId,
  clerkId: String,        // Clerk authentication ID
  fullName: String,
  imageUrl: String,       // Profile picture URL
  isAdmin: Boolean,       // Admin privileges flag
  createdAt: Date
}
```

**2. Songs Collection**
```javascript
{
  _id: ObjectId,
  title: String,          // Song title
  artist: String,         // Artist name
  imageUrl: String,       // Cover image URL (Cloudinary)
  audioUrl: String,       // Audio file URL (Cloudinary)
  duration: Number,       // Duration in seconds
  albumId: ObjectId,      // Reference to Album
  createdAt: Date
}
```

**3. Albums Collection**
```javascript
{
  _id: ObjectId,
  title: String,          // Album title
  artist: String,         // Album artist
  imageUrl: String,       // Album cover art (Cloudinary)
  releaseYear: Number,
  songs: [ObjectId],      // Array of Song references
  createdAt: Date
}
```

**4. Messages Collection**
```javascript
{
  _id: ObjectId,
  senderId: String,       // Clerk ID of sender
  receiverId: String,     // Clerk ID of receiver
  content: String,        // Message text
  createdAt: Date
}
```

---

## 🔐 SECURITY IMPLEMENTATION

### **Authentication:**
- Clerk handles all user authentication
- JWT tokens issued by Clerk
- Tokens verified on every protected API request
- Automatic token refresh

### **Authorization:**
- Middleware checks admin status for protected routes
- Admin email stored in environment variable
- Role-based access control for admin dashboard

### **Data Security:**
- Environment variables for all sensitive data
- CORS configured to prevent unauthorized access
- MongoDB connection secured with credentials
- Cloudinary API keys kept in .env file

---

## 🚀 TECHNOLOGY STACK DETAILS

### **Frontend:**
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 5.4.10** - Build tool & dev server
- **Tailwind CSS 3.4.14** - Utility-first CSS
- **Zustand 5.0.1** - State management (lightweight alternative to Redux)
- **React Router DOM** - Client-side routing
- **Clerk React 5.14.0** - Authentication
- **Socket.IO Client 4.8.1** - Real-time communication
- **Axios 1.7.7** - HTTP requests
- **Lucide React** - Icon library
- **Shadcn UI** - Component library (40+ components)

### **Backend:**
- **Node.js** - Runtime environment
- **Express 4.21.1** - Web framework
- **MongoDB + Mongoose 8.8.0** - Database & ODM
- **Socket.IO 4.8.1** - Real-time bidirectional communication
- **Clerk Express SDK 1.3.4** - Authentication middleware
- **Cloudinary 2.5.1** - Media storage & CDN
- **Multer 1.4.5-lts.1** - File upload handling
- **CORS** - Cross-origin resource sharing

### **Cloud Services:**
- **MongoDB Atlas** - Managed database hosting
- **Cloudinary** - Media file storage (audio & images)
- **Clerk** - Authentication service
- **Render** - Backend deployment (optional)

---

## 📊 KEY TECHNICAL DECISIONS

### **1. Why Zustand over Redux?**
- Simpler API, less boilerplate code
- Better TypeScript support
- Smaller bundle size (~1KB vs ~10KB for Redux)
- Sufficient for this application's state management needs

### **2. Why Socket.IO?**
- Reliable real-time bidirectional communication
- Automatic reconnection
- Room support for targeted messaging
- Fallback to long polling if WebSocket unavailable

### **3. Why Cloudinary?**
- Free tier sufficient for project needs
- Automatic image optimization
- CDN for fast global delivery
- Easy audio/video streaming support

### **4. Why Clerk?**
- Quick OAuth implementation
- Pre-built UI components
- Secure JWT handling
- User management dashboard
- Free tier available

### **5. Why MongoDB?**
- Flexible schema for evolving features
- Easy to work with JSON-like documents
- Good performance for read-heavy operations
- Mongoose provides elegant data modeling

---

## 🔌 API ENDPOINTS

### **Authentication Routes (`/api/auth`)**
- `POST /callback` - Handle Clerk authentication callback

### **Song Routes (`/api/songs`)**
- `GET /` - Get all songs
- `GET /featured` - Get featured songs
- `GET /made-for-you` - Get personalized recommendations
- `GET /trending` - Get trending songs

### **Album Routes (`/api/albums`)**
- `GET /` - Get all albums
- `GET /:albumId` - Get specific album with songs

### **Admin Routes (`/api/admin`)**
- `POST /songs` - Create new song (with file upload)
- `DELETE /songs/:id` - Delete song
- `POST /albums` - Create new album
- `DELETE /albums/:id` - Delete album
- `GET /check` - Check if user is admin

### **Stats Routes (`/api/stats`)**
- `GET /` - Get platform statistics

### **User Routes (`/api/users`)**
- `GET /` - Get all users
- `GET /messages/:userId` - Get chat messages with specific user
- `POST /messages` - Send chat message

---

## 🎨 UI/UX FEATURES

### **Design System:**
- **Color Scheme:** Dark theme with red accents (replacing original green)
- **Typography:** Bold, calligraphic "SANGEET" branding
- **Icons:** Headphones icon as logo, Lucide icons throughout
- **Responsive:** Mobile-first design, adapts to all screen sizes

### **User Experience:**
- Skeleton loaders during data fetching
- Smooth hover effects and transitions
- Real-time feedback (online status, typing indicators concept)
- Persistent playback state
- Intuitive navigation with sidebars

---

## 🚧 CURRENT LIMITATIONS & FUTURE ENHANCEMENTS

### **Not Implemented (UI Placeholders):**
- Shuffle functionality
- Repeat/Loop functionality
- Lyrics display (Mic button)
- Queue management
- Device selection (Connect to Device)
- Search functionality
- User playlists
- Like/Favorite songs

### **Potential Enhancements:**
1. Add search functionality for songs/artists/albums
2. Implement user playlists (create, edit, share)
3. Add shuffle and repeat modes
4. Implement queue management
5. Add lyrics integration (Genius API)
6. Social features: follow users, share songs
7. Recommendation algorithm based on listening history
8. Audio equalizer controls
9. Download songs for offline listening
10. Podcast support

---

## 📈 SCALABILITY CONSIDERATIONS

### **Current Setup:**
- Supports hundreds of concurrent users
- MongoDB Atlas auto-scaling
- Cloudinary CDN handles media delivery
- Socket.IO can be scaled with Redis adapter

### **For Production Scale:**
1. **Database:** Add indexing, sharding for large datasets
2. **Caching:** Implement Redis for frequently accessed data
3. **Load Balancing:** Use Nginx or cloud load balancers
4. **CDN:** Cloudinary already provides this
5. **Socket.IO:** Use Redis adapter for horizontal scaling
6. **Monitoring:** Add logging (Winston), APM tools (New Relic)

---

## 🧪 TESTING APPROACH

### **Manual Testing Coverage:**
- User authentication flow
- Music playback functionality
- Real-time chat between users
- Admin CRUD operations
- File upload functionality
- Responsive design testing

### **Areas for Automated Testing:**
- Unit tests for utility functions
- Integration tests for API endpoints
- E2E tests for critical user flows
- Socket.IO event testing

---

## 📦 DEPLOYMENT

### **Local Development:**
- Frontend: `npm run dev` (Vite dev server on port 3001)
- Backend: `npm run dev` (Nodemon on port 5000)
- MongoDB: Atlas cloud connection

### **Production Deployment:**
- **Frontend:** Can deploy to Vercel, Netlify, or Render
- **Backend:** Deployed on Render (or similar)
- **Environment:** Production environment variables configured
- **Database:** MongoDB Atlas (production cluster)

### **Environment Variables:**
```
# Backend
PORT=5000
MONGODB_URI=mongodb+srv://...
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
ADMIN_EMAIL=...
NODE_ENV=development

# Frontend
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

---

## 💡 INTERVIEW TALKING POINTS

### **Technical Challenges Solved:**
1. **Real-time synchronization:** Implemented Socket.IO for instant updates across multiple clients
2. **File handling:** Integrated Cloudinary for efficient media storage and CDN delivery
3. **State management:** Used Zustand for clean, performant state management
4. **Authentication:** Integrated third-party OAuth with Clerk for secure user management
5. **Responsive design:** Created mobile-first UI that works across devices

### **What Makes This Project Unique:**
1. **Social integration:** Not just music streaming, but a social platform
2. **Real-time features:** Live chat and activity updates
3. **Modern tech stack:** Latest React, TypeScript, and best practices
4. **Complete CRUD:** Full admin dashboard for content management
5. **Production-ready:** Environment-based configuration, security measures

### **Learning Outcomes:**
1. Full-stack development with MERN stack
2. Real-time communication with WebSockets
3. Cloud service integration (Cloudinary, MongoDB Atlas, Clerk)
4. TypeScript for type-safe development
5. Modern React patterns (hooks, custom hooks, context)
6. RESTful API design
7. Authentication and authorization
8. File upload handling
9. Responsive UI design
10. State management strategies

---

## 📞 PROJECT LINKS

- **GitHub Repository:** https://github.com/Rishabh-Baloni/sangeet
- **Live Demo:** https://spotify-clone-s3c2.onrender.com (if deployed)
- **Documentation:** README.md in repository

---

## 🎓 SKILLS DEMONSTRATED

### **Frontend:**
✓ React.js & TypeScript  
✓ State Management (Zustand)  
✓ Responsive Design (Tailwind CSS)  
✓ Real-time Features (Socket.IO Client)  
✓ API Integration (Axios)  
✓ Component-based Architecture  
✓ Custom Hooks  
✓ OAuth Integration  

### **Backend:**
✓ Node.js & Express.js  
✓ MongoDB & Mongoose ODM  
✓ RESTful API Design  
✓ WebSocket/Socket.IO  
✓ Authentication & Authorization  
✓ File Upload Handling  
✓ Middleware Implementation  
✓ Error Handling  

### **DevOps & Tools:**
✓ Git & GitHub  
✓ Environment Configuration  
✓ Cloud Services Integration  
✓ Database Design  
✓ API Testing  
✓ Deployment (Render)  

---

**Last Updated:** November 2024  
**Project Status:** Feature Complete - Ready for Portfolio/Interview Discussion
