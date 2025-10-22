<h1 align="center">🎵 Spotify Clone</h1><h1 align="center">🎵 Realtime Spotify Clone</h1><h1 align="center">Realtime Spotify Application ✨</h1>



<p align="center">

  <strong>A modern full-stack music streaming platform with real-time capabilities</strong>

</p><p align="center">![Demo App](/frontend/public/screenshot-for-readme.png)



<p align="center">  <strong>A full-stack music streaming application with real-time features</strong>

  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react" alt="React" />

  <img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js" alt="Node.js" /></p>[Watch Full Tutorial on Youtube](https://youtu.be/4sbklcQ0EXc)

  <img src="https://img.shields.io/badge/MongoDB-8.8.0-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />

  <img src="https://img.shields.io/badge/Socket.IO-4.8.1-010101?style=for-the-badge&logo=socket.io" alt="Socket.IO" />

  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />

</p><p align="center">About This Course:



![Demo App](/frontend/public/screenshot-for-readme.png)  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react" alt="React" />



---  <img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js" alt="Node.js" />-   🎸 Listen to music, play next and previous songs



## 📋 Table of Contents  <img src="https://img.shields.io/badge/MongoDB-8.8.0-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />-   🔈 Update the volume with a slider



- [Features](#-features)  <img src="https://img.shields.io/badge/Socket.IO-4.8.1-010101?style=for-the-badge&logo=socket.io" alt="Socket.IO" />-   🎧 Admin dashboard to create albums and songs

- [Tech Stack](#-tech-stack)

- [Prerequisites](#-prerequisites)  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />-   💬 Real-time Chat App integrated into Spotify

- [Installation](#-installation)

- [Environment Variables](#-environment-variables)</p>-   👨🏼‍💼 Online/Offline status

- [Running the Application](#-running-the-application)

- [Seeding Sample Data](#-seeding-sample-data)-   👀 See what other users are listening to in real-time

- [Project Structure](#-project-structure)

- [API Endpoints](#-api-endpoints)![Demo App](/frontend/public/screenshot-for-readme.png)-   📊 Aggregate data for the analytics page

- [Troubleshooting](#-troubleshooting)

- [Contributing](#-contributing)-   🚀 And a lot more...

- [License](#-license)

<p align="center">

---

  <a href="https://youtu.be/4sbklcQ0EXc">📺 Watch Full Tutorial on YouTube</a>### Setup .env file in _backend_ folder

## ✨ Features

</p>

### 🎵 Music Player

- **Play/Pause/Skip** - Full control over music playback```bash

- **Volume Control** - Adjustable volume with slider

- **Queue Management** - View and manage your music queue---PORT=...

- **Progress Bar** - Seek to any position in the track

- **Repeat & Shuffle** - Loop songs or shuffle your playlistMONGODB_URI=...



### 👨‍💼 User Management## 📋 Table of ContentsADMIN_EMAIL=...

- **Authentication** - Secure sign-up/sign-in with Clerk

- **OAuth Integration** - Sign in with Google, GitHub, etc.NODE_ENV=...

- **User Profiles** - View and manage your profile

- **Admin Dashboard** - Special access for administrators- [Features](#-features)



### 💬 Real-time Features- [Tech Stack](#-tech-stack)CLOUDINARY_API_KEY=...

- **Live Chat** - Message other users in real-time

- **Online/Offline Status** - See who's currently online- [Prerequisites](#-prerequisites)CLOUDINARY_API_SECRET=...

- **Activity Feed** - See what friends are listening to

- **Real-time Updates** - Instant notifications for messages and activities- [Installation](#-installation)CLOUDINARY_CLOUD_NAME=...



### 🎧 Content Management (Admin)- [Environment Variables](#-environment-variables)

- **Upload Songs** - Add new tracks with audio files

- **Create Albums** - Organize songs into albums- [Running the Application](#-running-the-application)

- **Upload Cover Art** - Add images for songs and albums

- **Manage Content** - Edit or delete existing content- [Seeding Sample Data](#-seeding-sample-data)CLERK_PUBLISHABLE_KEY=...



### 📊 Analytics- [Project Structure](#-project-structure)CLERK_SECRET_KEY=...

- **User Statistics** - Track total users and engagement

- **Song Analytics** - View play counts and popular tracks- [API Endpoints](#-api-endpoints)```

- **Album Stats** - Monitor album performance

- **Artist Metrics** - Analyze artist popularity- [Troubleshooting](#-troubleshooting)



### 🎨 UI/UX- [Contributing](#-contributing)### Setup .env file in _frontend_ folder

- **Responsive Design** - Works on desktop, tablet, and mobile

- **Dark Theme** - Modern dark interface inspired by Spotify- [License](#-license)

- **Smooth Animations** - Polished transitions and effects

- **Intuitive Navigation** - Easy-to-use interface```bash



------VITE_CLERK_PUBLISHABLE_KEY=...



## 🛠️ Tech Stack```



### Frontend## ✨ Features

- **React 18.3** - UI library

- **TypeScript** - Type safety### 🎵 Music Player

- **Vite** - Build tool and dev server- **Play/Pause/Skip** - Full control over music playback

- **TailwindCSS** - Utility-first CSS framework- **Volume Control** - Adjustable volume with slider

- **Zustand** - State management- **Queue Management** - View and manage your music queue

- **React Router** - Client-side routing- **Progress Bar** - Seek to any position in the track

- **Axios** - HTTP client- **Repeat & Shuffle** - Loop songs or shuffle your playlist

- **Socket.IO Client** - Real-time communication

- **Clerk React** - Authentication### 👨‍💼 User Management

- **Radix UI** - Accessible component primitives- **Authentication** - Secure sign-up/sign-in with Clerk

- **Lucide React** - Icon library- **OAuth Integration** - Sign in with Google, GitHub, etc.

- **User Profiles** - View and manage your profile

### Backend- **Admin Dashboard** - Special access for administrators

- **Node.js** - Runtime environment

- **Express.js** - Web framework### 💬 Real-time Features

- **MongoDB** - NoSQL database- **Live Chat** - Message other users in real-time

- **Mongoose** - MongoDB ODM- **Online/Offline Status** - See who's currently online

- **Socket.IO** - WebSocket library- **Activity Feed** - See what friends are listening to

- **Clerk Express** - Authentication middleware- **Real-time Updates** - Instant notifications for messages and activities

- **Cloudinary** - Media storage and CDN

- **Express FileUpload** - File upload middleware### 🎧 Content Management (Admin)

- **Node Cron** - Task scheduling- **Upload Songs** - Add new tracks with audio files

- **CORS** - Cross-origin resource sharing- **Create Albums** - Organize songs into albums

- **Upload Cover Art** - Add images for songs and albums

### Development Tools- **Manage Content** - Edit or delete existing content

- **Nodemon** - Auto-restart server

- **ESLint** - Code linting### 📊 Analytics

- **PostCSS** - CSS processing- **User Statistics** - Track total users and engagement

- **Autoprefixer** - CSS vendor prefixes- **Song Analytics** - View play counts and popular tracks

- **Album Stats** - Monitor album performance

---- **Artist Metrics** - Analyze artist popularity



## 📦 Prerequisites### 🎨 UI/UX

- **Responsive Design** - Works on desktop, tablet, and mobile

Before you begin, ensure you have the following installed:- **Dark Theme** - Modern dark interface like Spotify

- **Smooth Animations** - Polished transitions and effects

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)- **Intuitive Navigation** - Easy-to-use interface

- **npm** or **yarn** - Comes with Node.js

- **Git** - [Download](https://git-scm.com/)---



You'll also need accounts for these services (all have free tiers):## 🛠️ Tech Stack



- **MongoDB Atlas** - [Sign Up](https://www.mongodb.com/cloud/atlas/register)### Frontend

- **Clerk** - [Sign Up](https://clerk.com)- **React 18.3** - UI library

- **Cloudinary** - [Sign Up](https://cloudinary.com)- **TypeScript** - Type safety

- **Vite** - Build tool and dev server

---- **TailwindCSS** - Utility-first CSS framework

- **Zustand** - State management

## 🚀 Installation- **React Router** - Client-side routing

- **Axios** - HTTP client

### 1. Install Backend Dependencies- **Socket.IO Client** - Real-time communication

- **Clerk React** - Authentication

```bash- **Radix UI** - Accessible component primitives

cd backend- **Lucide React** - Icon library

npm install

```### Backend

- **Node.js** - Runtime environment

### 2. Install Frontend Dependencies- **Express.js** - Web framework

- **MongoDB** - NoSQL database

```bash- **Mongoose** - MongoDB ODM

cd frontend- **Socket.IO** - WebSocket library

npm install- **Clerk Express** - Authentication middleware

```- **Cloudinary** - Media storage and CDN

- **Express FileUpload** - File upload middleware

---- **Node Cron** - Task scheduling

- **CORS** - Cross-origin resource sharing

## 🔐 Environment Variables

### Development Tools

### Backend Environment Variables- **Nodemon** - Auto-restart server

- **ESLint** - Code linting

Create a `.env` file in the `backend` folder:- **PostCSS** - CSS processing

- **Autoprefixer** - CSS vendor prefixes

```env

# Server Configuration---

PORT=5000

NODE_ENV=development## 📦 Prerequisites



# MongoDB DatabaseBefore you begin, ensure you have the following installed:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/spotify-clone?retryWrites=true&w=majority

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)

# Admin Configuration- **npm** or **yarn** - Comes with Node.js

ADMIN_EMAIL=your-admin-email@example.com- **Git** - [Download](https://git-scm.com/)



# Clerk AuthenticationYou'll also need accounts for these services (all have free tiers):

CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx- **MongoDB Atlas** - [Sign Up](https://www.mongodb.com/cloud/atlas/register)

- **Clerk** - [Sign Up](https://clerk.com)

# Cloudinary File Upload- **Cloudinary** - [Sign Up](https://cloudinary.com)

CLOUDINARY_CLOUD_NAME=your-cloud-name

CLOUDINARY_API_KEY=123456789012345---

CLOUDINARY_API_SECRET=your-api-secret

```## 🚀 Installation



### Frontend Environment Variables### 1. Install Backend Dependencies



Create a `.env` file in the `frontend` folder:```bash

cd backend

```envnpm install

# Clerk Authentication (Frontend)```

VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

```### 2. Install Frontend Dependencies



### 📝 How to Get These Credentials```bash

cd ../frontend

#### MongoDB Atlasnpm install

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)```

2. Create a free cluster (M0)

3. Create a database user with username and password---

4. Whitelist your IP address (use `0.0.0.0/0` for development)

5. Click "Connect" → "Connect your application"## 🔐 Environment Variables

6. Copy the connection string

7. Replace `<password>` with your database user password### Backend Environment Variables

8. Replace `<username>` with your database username

Create a `.env` file in the `backend` folder:

#### Clerk

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)```env

2. Create a new application# Server Configuration

3. Choose authentication methods (Email, Google, GitHub, etc.)PORT=5000

4. Go to "API Keys" section in the sidebarNODE_ENV=development

5. Copy the **Publishable Key** (starts with `pk_test_`)

6. Copy the **Secret Key** (starts with `sk_test_`)# MongoDB Database

7. Use the same Publishable Key for both backend and frontendMONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/spotify-clone?retryWrites=true&w=majority



#### Cloudinary# Admin Configuration

1. Go to [Cloudinary](https://cloudinary.com) and sign upADMIN_EMAIL=your-admin-email@example.com

2. After login, you'll see the dashboard

3. Find your credentials in the "Account Details" section:# Clerk Authentication

   - **Cloud Name** - Your account identifierCLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

   - **API Key** - Your API access key (numbers)CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

   - **API Secret** - Your API secret (alphanumeric)

# Cloudinary File Upload

---CLOUDINARY_CLOUD_NAME=your-cloud-name

CLOUDINARY_API_KEY=123456789012345

## 🏃 Running the ApplicationCLOUDINARY_API_SECRET=your-api-secret

```

### Development Mode

### Frontend Environment Variables

Open two separate terminal windows:

Create a `.env` file in the `frontend` folder:

**Terminal 1 - Backend Server:**

```bash```env

cd backend# Clerk Authentication (Frontend)

npm run devVITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

``````

✅ Server runs on `http://localhost:5000`

### 📝 How to Get These Credentials

**Terminal 2 - Frontend Server:**

```bash#### MongoDB Atlas

cd frontend1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

npm run dev2. Create a free cluster (M0)

```3. Create a database user with username and password

✅ Frontend runs on `http://localhost:3000`4. Whitelist your IP address (use `0.0.0.0/0` for development)

5. Click "Connect" → "Connect your application"

The application will automatically open in your browser at `http://localhost:3000`6. Copy the connection string

7. Replace `<password>` with your database user password

### Production Mode8. Replace `<username>` with your database username



**1. Build Frontend:**#### Clerk

```bash1. Go to [Clerk Dashboard](https://dashboard.clerk.com)

cd frontend2. Create a new application

npm run build3. Choose authentication methods (Email, Google, GitHub, etc.)

```4. Go to "API Keys" section in the sidebar

5. Copy the **Publishable Key** (starts with `pk_test_`)

**2. Start Backend:**6. Copy the **Secret Key** (starts with `sk_test_`)

```bash7. Use the same Publishable Key for both backend and frontend

cd backend

npm start#### Cloudinary

```1. Go to [Cloudinary](https://cloudinary.com) and sign up

2. After login, you'll see the dashboard

The backend will serve the built frontend files.3. Find your credentials in the "Account Details" section:

   - **Cloud Name** - Your account identifier

---   - **API Key** - Your API access key (numbers)

   - **API Secret** - Your API secret (alphanumeric)

## 🌱 Seeding Sample Data

---

To populate your database with sample songs and albums for testing:

## 🏃 Running the Application

### Prerequisites

- Ensure MongoDB is connected### Development Mode

- Place audio files in `frontend/public/songs/` (1.mp3 to 18.mp3)

- Place album covers in `frontend/public/albums/` (1.jpg to 4.jpg)Open two separate terminal windows:

- Place song covers in `frontend/public/cover-images/` (1.jpg to 18.jpg)

**Terminal 1 - Backend Server:**

### Run Seed Commands```bash

cd backend

```bashnpm run dev

cd backend```

✅ Server runs on `http://localhost:5000`

# Seed albums and songs

npm run seed:albums**Terminal 2 - Frontend Server:**

``````bash

cd frontend

This will create:npm run dev

- **4 albums**: Urban Nights, Coastal Dreaming, Midnight Sessions, Eastern Dreams```

- **14 songs** with various artists across different genres✅ Frontend runs on `http://localhost:3000`



---The application will automatically open in your browser at `http://localhost:3000`



## 📁 Project Structure### Production Mode



```**1. Build Frontend:**

spotify-clone/```bash

├── backend/cd frontend

│   ├── src/npm run build

│   │   ├── controller/          # Request handlers```

│   │   │   ├── admin.controller.js

│   │   │   ├── album.controller.js**2. Start Backend:**

│   │   │   ├── auth.controller.js```bash

│   │   │   ├── song.controller.jscd backend

│   │   │   ├── stat.controller.jsnpm start

│   │   │   └── user.controller.js```

│   │   ├── lib/                 # Utilities

│   │   │   ├── cloudinary.js    # File upload configThe backend will serve the built frontend files.

│   │   │   ├── db.js            # MongoDB connection

│   │   │   └── socket.js        # Socket.IO setup---

│   │   ├── middleware/          # Express middleware

│   │   │   └── auth.middleware.js## 🌱 Seeding Sample Data

│   │   ├── models/              # Mongoose schemas

│   │   │   ├── album.model.jsTo populate your database with sample songs and albums for testing:

│   │   │   ├── message.model.js

│   │   │   ├── song.model.js### Prerequisites

│   │   │   └── user.model.js- Ensure MongoDB is connected

│   │   ├── routes/              # API routes- Place audio files in `frontend/public/songs/` (1.mp3 to 18.mp3)

│   │   │   ├── admin.route.js- Place album covers in `frontend/public/albums/` (1.jpg to 4.jpg)

│   │   │   ├── album.route.js- Place song covers in `frontend/public/cover-images/` (1.jpg to 18.jpg)

│   │   │   ├── auth.route.js

│   │   │   ├── song.route.js### Run Seed Commands

│   │   │   ├── stat.route.js

│   │   │   └── user.route.js```bash

│   │   ├── seeds/               # Database seederscd backend

│   │   │   ├── albums.js

│   │   │   └── songs.js# Seed albums and songs

│   │   └── index.js             # Entry pointnpm run seed:albums

│   ├── .env                     # Environment variables```

│   └── package.json

│This will create:

├── frontend/- **4 albums**: Urban Nights, Coastal Dreaming, Midnight Sessions, Eastern Dreams

│   ├── src/- **14 songs** with various artists across different genres

│   │   ├── components/          # Reusable components

│   │   │   ├── ui/              # Shadcn UI components---

│   │   │   ├── skeletons/       # Loading skeletons

│   │   │   ├── SignInOAuthButtons.tsx## 📁 Project Structure

│   │   │   └── Topbar.tsx

│   │   ├── layout/              # Layout components```

│   │   │   ├── MainLayout.tsxrealtime-spotify-clone/

│   │   │   └── components/      # Layout-specific components├── backend/

│   │   ├── lib/                 # Utilities│   ├── src/

│   │   │   ├── axios.ts         # Axios config│   │   ├── controller/          # Request handlers

│   │   │   └── utils.ts         # Helper functions│   │   │   ├── admin.controller.js

│   │   ├── pages/               # Page components│   │   │   ├── album.controller.js

│   │   │   ├── 404/│   │   │   ├── auth.controller.js

│   │   │   ├── admin/│   │   │   ├── song.controller.js

│   │   │   ├── album/│   │   │   ├── stat.controller.js

│   │   │   ├── auth-callback/│   │   │   └── user.controller.js

│   │   │   ├── chat/│   │   ├── lib/                 # Utilities

│   │   │   └── home/│   │   │   ├── cloudinary.js    # File upload config

│   │   ├── providers/           # Context providers│   │   │   ├── db.js            # MongoDB connection

│   │   │   └── AuthProvider.tsx│   │   │   └── socket.js        # Socket.IO setup

│   │   ├── stores/              # Zustand stores│   │   ├── middleware/          # Express middleware

│   │   │   ├── useAuthStore.ts│   │   │   └── auth.middleware.js

│   │   │   ├── useChatStore.ts│   │   ├── models/              # Mongoose schemas

│   │   │   ├── useMusicStore.ts│   │   │   ├── album.model.js

│   │   │   └── usePlayerStore.ts│   │   │   ├── message.model.js

│   │   ├── types/               # TypeScript types│   │   │   ├── song.model.js

│   │   │   └── index.ts│   │   │   └── user.model.js

│   │   ├── App.tsx│   │   ├── routes/              # API routes

│   │   ├── main.tsx│   │   │   ├── admin.route.js

│   │   └── index.css│   │   │   ├── album.route.js

│   ├── public/                  # Static assets│   │   │   ├── auth.route.js

│   │   ├── albums/              # Album cover images│   │   │   ├── song.route.js

│   │   ├── cover-images/        # Song cover images│   │   │   ├── stat.route.js

│   │   └── songs/               # Audio files│   │   │   └── user.route.js

│   ├── .env                     # Environment variables│   │   ├── seeds/               # Database seeders

│   └── package.json│   │   │   ├── albums.js

││   │   │   └── songs.js

└── README.md│   │   └── index.js             # Entry point

```│   ├── .env                     # Environment variables

│   └── package.json

---│

├── frontend/

## 🔌 API Endpoints│   ├── src/

│   │   ├── components/          # Reusable components

### Authentication│   │   │   ├── ui/              # Shadcn UI components

- `POST /api/auth/callback` - Sync user with database after Clerk authentication│   │   │   ├── skeletons/       # Loading skeletons

│   │   │   ├── SignInOAuthButtons.tsx

### Songs│   │   │   └── Topbar.tsx

- `GET /api/songs` - Get all songs (Admin only)│   │   ├── layout/              # Layout components

- `GET /api/songs/featured` - Get featured songs│   │   │   ├── MainLayout.tsx

- `GET /api/songs/made-for-you` - Get personalized recommendations│   │   │   └── components/      # Layout-specific components

- `GET /api/songs/trending` - Get trending songs│   │   ├── lib/                 # Utilities

│   │   │   ├── axios.ts         # Axios config

### Albums│   │   │   └── utils.ts         # Helper functions

- `GET /api/albums` - Get all albums│   │   ├── pages/               # Page components

- `GET /api/albums/:albumId` - Get album by ID│   │   │   ├── 404/

│   │   │   ├── admin/

### Admin (Protected)│   │   │   ├── album/

- `POST /api/admin/songs` - Upload a new song│   │   │   ├── auth-callback/

- `DELETE /api/admin/songs/:id` - Delete a song│   │   │   ├── chat/

- `POST /api/admin/albums` - Create a new album│   │   │   └── home/

- `DELETE /api/admin/albums/:id` - Delete an album│   │   ├── providers/           # Context providers

- `GET /api/admin/check` - Check if user is admin│   │   │   └── AuthProvider.tsx

│   │   ├── stores/              # Zustand stores

### Users│   │   │   ├── useAuthStore.ts

- `GET /api/users` - Get all users (for chat)│   │   │   ├── useChatStore.ts

- `GET /api/users/messages/:userId` - Get messages with a specific user│   │   │   ├── useMusicStore.ts

│   │   │   └── usePlayerStore.ts

### Stats (Admin only)│   │   ├── types/               # TypeScript types

- `GET /api/stats` - Get platform statistics│   │   │   └── index.ts

│   │   ├── App.tsx

### Socket.IO Events│   │   ├── main.tsx

│   │   └── index.css

**Client → Server:**│   ├── public/                  # Static assets

- `user_connected` - User comes online│   │   ├── albums/              # Album cover images

- `send_message` - Send a chat message│   │   ├── cover-images/        # Song cover images

- `update_activity` - Update current listening activity│   │   └── songs/               # Audio files

- `disconnect` - User goes offline│   ├── .env                     # Environment variables

│   └── package.json

**Server → Client:**│

- `users_online` - List of online users└── README.md

- `user_connected` - Notification of user coming online```

- `user_disconnected` - Notification of user going offline

- `receive_message` - Incoming chat message---

- `message_sent` - Confirmation of sent message

- `activities` - Current user activities## 🔌 API Endpoints

- `activity_updated` - User activity changed

### Authentication

---- `POST /api/auth/callback` - Sync user with database after Clerk authentication



## 🐛 Troubleshooting### Songs

- `GET /api/songs` - Get all songs (Admin only)

### Common Issues- `GET /api/songs/featured` - Get featured songs

- `GET /api/songs/made-for-you` - Get personalized recommendations

#### ❌ "Cannot connect to MongoDB"- `GET /api/songs/trending` - Get trending songs

**Solution:**

- Check your `MONGODB_URI` in `.env`### Albums

- Ensure your IP is whitelisted in MongoDB Atlas- `GET /api/albums` - Get all albums

- Verify database user credentials- `GET /api/albums/:albumId` - Get album by ID



#### ❌ "Clerk authentication failed"### Admin (Protected)

**Solution:**- `POST /api/admin/songs` - Upload a new song

- Verify `CLERK_PUBLISHABLE_KEY` matches in both frontend and backend `.env`- `DELETE /api/admin/songs/:id` - Delete a song

- Check that `CLERK_SECRET_KEY` is correct in backend `.env`- `POST /api/admin/albums` - Create a new album

- Ensure Clerk application is active in dashboard- `DELETE /api/admin/albums/:id` - Delete an album

- `GET /api/admin/check` - Check if user is admin

#### ❌ "Port already in use"

**Solution:**### Users

- `GET /api/users` - Get all users (for chat)

Windows (PowerShell):- `GET /api/users/messages/:userId` - Get messages with a specific user

```powershell

# Find process using port 5000### Stats (Admin only)

netstat -ano | findstr :5000- `GET /api/stats` - Get platform statistics

# Kill the process (replace PID with actual process ID)

taskkill /PID <PID> /F### Socket.IO Events

```

**Client → Server:**

Mac/Linux:- `user_connected` - User comes online

```bash- `send_message` - Send a chat message

# Find and kill process using port 5000- `update_activity` - Update current listening activity

lsof -ti:5000 | xargs kill -9- `disconnect` - User goes offline

```

**Server → Client:**

#### ❌ "Cannot upload files"- `users_online` - List of online users

**Solution:**- `user_connected` - Notification of user coming online

- Verify Cloudinary credentials in `.env`- `user_disconnected` - Notification of user going offline

- Check file size limits (default: 10MB)- `receive_message` - Incoming chat message

- Ensure file format is supported (mp3 for songs, jpg/png for images)- `message_sent` - Confirmation of sent message

- `activities` - Current user activities

#### ❌ "Real-time chat not working"- `activity_updated` - User activity changed

**Solution:**

- Check that both backend and frontend servers are running---

- Verify CORS configuration in `backend/src/index.js`

- Check browser console for Socket.IO connection errors## 🐛 Troubleshooting

- Ensure both users are signed in and online

### Common Issues

#### ❌ "Cannot access admin dashboard"

**Solution:**#### ❌ "Cannot connect to MongoDB"

- Verify your email matches `ADMIN_EMAIL` in backend `.env`**Solution:**

- Sign out and sign in again- Check your `MONGODB_URI` in `.env`

- Check browser console for errors- Ensure your IP is whitelisted in MongoDB Atlas

- Verify database user credentials

---

#### ❌ "Clerk authentication failed"

## 👥 Contributing**Solution:**

- Verify `CLERK_PUBLISHABLE_KEY` matches in both frontend and backend `.env`

Contributions are welcome! Please follow these steps:- Check that `CLERK_SECRET_KEY` is correct in backend `.env`

- Ensure Clerk application is active in dashboard

1. Fork the repository

2. Create a new branch (`git checkout -b feature/amazing-feature`)#### ❌ "Port already in use"

3. Commit your changes (`git commit -m 'Add some amazing feature'`)**Solution:**

4. Push to the branch (`git push origin feature/amazing-feature`)

5. Open a Pull RequestWindows (PowerShell):

```powershell

---# Find process using port 5000

netstat -ano | findstr :5000

## 📄 License# Kill the process (replace PID with actual process ID)

taskkill /PID <PID> /F

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.```



---Mac/Linux:

```bash

## 📞 Contact# Find and kill process using port 5000

lsof -ti:5000 | xargs kill -9

For questions or support, please open an issue in the GitHub repository.```



---#### ❌ "Cannot upload files"

**Solution:**

<p align="center">Built with ❤️ and 🎵</p>- Verify Cloudinary credentials in `.env`

- Check file size limits (default: 10MB)
- Ensure file format is supported (mp3 for songs, jpg/png for images)

#### ❌ "Real-time chat not working"
**Solution:**
- Check that both backend and frontend servers are running
- Verify CORS configuration in `backend/src/index.js`
- Check browser console for Socket.IO connection errors
- Ensure both users are signed in and online

#### ❌ "Cannot access admin dashboard"
**Solution:**
- Verify your email matches `ADMIN_EMAIL` in backend `.env`
- Sign out and sign in again
- Check browser console for errors

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For questions or support, please open an issue in the GitHub repository.

---

<p align="center">Built with ❤️ and 🎵</p>
