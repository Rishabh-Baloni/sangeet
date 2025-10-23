<h1 align="center">🎵 Sangeet - Full-Stack Music Streaming Platform 🎵</h1>

![Demo App](/frontend/public/screenshot-for-readme.png)

**Sangeet** is a comprehensive music streaming web application with real-time social features. It's designed for music enthusiasts, developers, and students who want to build a modern streaming platform with chat capabilities.

## ✨ Key Features

### � **Music Player & Streaming**
- 🎧 **Full Playback Control** with play, pause, skip, and previous navigation
- � **Volume Management** with interactive slider and mute functionality
- 🔀 **Shuffle & Repeat Modes** for personalized listening experience
- 📊 **Progress Bar** with seek functionality to jump anywhere in the track
- 🎼 **Queue Management** to view and control upcoming songs

### � **Real-time Social Features**
- **Live Chat System**: Instant messaging with other users powered by Socket.IO
- **Friends Activity Feed**: See what your friends are currently listening to
- **Online/Offline Status**: Track which users are active on the platform
- **Message History**: Persistent chat storage with MongoDB database
- **Activity Updates**: Real-time notifications when friends play new songs

### 🎧 **Content Management (Admin)**
- 📀 **Album Creation** with custom cover art and organization
- 🎼 **Song Upload** with audio files, titles, artists, and duration
- �️ **Media Management** via Cloudinary CDN for images and audio
- � **Analytics Dashboard** with user counts and content statistics
- ✏️ **Edit & Delete** full CRUD operations for content
- � **Search & Filter** capabilities for the music library

### 🏗️ **Tech Stack**
- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express.js + MongoDB
- **Real-time**: Socket.IO for chat and activity updates
- **Authentication**: Clerk with OAuth providers
- **Storage**: Cloudinary CDN for media files
- **State Management**: Zustand for client state

## 🎓 **Perfect For**
- **Music Enthusiasts** wanting to build their own streaming service
- **Full-Stack Developers** learning MERN stack with real-time features
- **Students** studying WebSocket implementation and cloud storage
- **Portfolio Projects** showcasing modern web development skills
- **Anyone** interested in building scalable streaming applications

## 🚀 **Getting Started**

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Environment Setup

1. **Download the repository**
```bash
git clone https://github.com/Rishabh-Baloni/sangeet.git
cd sangeet
```

2. **Install dependencies**
```bash
# Backend
cd backend && npm install
# Frontend
cd ../frontend && npm install
```

3. **Set up backend environment variables**
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ADMIN_EMAIL=your_admin_email
```

4. **Set up frontend environment variables**
Create a `.env` file in the `frontend` folder:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

5. **Run the development servers**
```bash
# Terminal 1: cd backend && npm run dev
# Terminal 2: cd frontend && npm run dev
```

6. **Open your browser**
Navigate to `http://localhost:3000`

## 🔧 **Usage**

### **For Regular Users**
1. Sign up or log in using email or OAuth providers
2. Browse the music library with featured songs and albums
3. Click on any song to start playback
4. Use player controls to manage your listening experience

### **For Admin Users**
1. Log in with your registered admin email
2. Access the admin dashboard from the navigation
3. Upload new songs:
   - Select audio file (MP3 format)
   - Add cover image and fill in song details
   - Create albums and organize your music library
4. View analytics and platform statistics
5. Manage existing content with edit/delete options

## 📱 **Supported Features**
- MP3 audio format support
- Real-time chat with Socket.IO
- OAuth authentication (Google, GitHub)
- File upload with Cloudinary
- Admin role management
- Responsive design
- Dark theme UI
- Queue management
- Volume persistence
- And more...

## 🎨 **Design System**
- Modern dark UI with elegant aesthetics
- Gradient backgrounds and glassmorphism effects
- Responsive grid layouts for albums and songs
- Custom scrollbars and smooth animations

## 🔒 **Security & Privacy**
- Secure authentication with Clerk
- Protected API routes with middleware
- Environment variable management
- CORS configuration for security

## 🤝 **Contributing**
We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

## 📄 **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 **Support**
If you encounter any issues or have questions:
- Check the existing issues
- Create a new issue with detailed information
- Reach out to the maintainers

---

**Built with ❤️ using React, Node.js, Socket.IO, and modern web technologies**
