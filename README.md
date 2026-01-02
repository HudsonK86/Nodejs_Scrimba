# From the Other Side - Paranormal Sightings Platform

A full-stack Node.js web application for sharing and viewing paranormal encounters. Built with vanilla Node.js (no frameworks) to demonstrate core backend development skills.

## 🚀 Features

- **RESTful API** - GET endpoint for retrieving paranormal sightings
- **Static File Serving** - Custom implementation for serving HTML, CSS, JavaScript, and images
- **JSON Data Storage** - File-based data persistence using Node.js file system
- **Modular Architecture** - Clean separation of concerns with dedicated handlers and utilities
- **Error Handling** - Robust error handling for file operations and API requests
- **Responsive Design** - Modern, user-friendly interface

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Native HTTP Module** - Built-in Node.js HTTP server (no Express.js)
- **ES6 Modules** - Modern JavaScript module system
- **File System (fs/promises)** - Async file operations
- **Path Module** - Cross-platform file path handling
- **HTML/CSS/JavaScript** - Frontend implementation

## 📁 Project Structure

```
Nodejs_Scrimba/
├── server.js              # Main HTTP server
├── handlers/
│   └── routeHandlers.js   # API route handlers (GET, POST)
├── utils/
│   ├── getData.js         # Data retrieval utility
│   ├── sendResponse.js    # HTTP response utility
│   ├── serveStatic.js     # Static file serving utility
│   └── getContentType.js  # MIME type detection
├── data/
│   └── data.json          # JSON data storage
└── public/
    ├── index.html         # Homepage
    ├── sightings.html     # View sightings page
    ├── upload-sighting.html # Upload form
    ├── index.css          # Stylesheet
    ├── index.js           # Frontend JavaScript
    └── images/            # Static assets
```

## 🏃 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HudsonK86/Nodejs_Scrimba.git
cd Nodejs_Scrimba
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:8000
```

## 📡 API Endpoints

### GET /api
Retrieves all paranormal sightings.

**Response:**
```json
[
  {
    "uuid": "a9f1c6e5-9383-4d12-b28d-734c9370f861",
    "location": "Exeter, UK",
    "timeStamp": "7 Jan 2025 at 09:30",
    "title": "The Phantom Warning",
    "text": "I was drifting through town..."
  }
]
```

## 💡 Key Learning Objectives

This project demonstrates:

- **Core Node.js Concepts**: Understanding the Node.js runtime, event loop, and built-in modules
- **HTTP Server Creation**: Building servers from scratch without frameworks
- **Async/Await Patterns**: Handling asynchronous operations with modern JavaScript
- **File System Operations**: Reading and writing data using Node.js fs module
- **RESTful API Design**: Creating clean, standard API endpoints
- **Static File Serving**: Implementing custom static file server
- **Error Handling**: Proper error management in async contexts
- **Code Organization**: Modular architecture and separation of concerns
- **ES6 Modules**: Using import/export for code organization

## 🎯 Skills Demonstrated

- ✅ Native Node.js development (no frameworks)
- ✅ HTTP server implementation
- ✅ RESTful API design
- ✅ File system operations
- ✅ Asynchronous programming
- ✅ Error handling
- ✅ Code modularity and organization
- ✅ Frontend-backend integration

## 📝 Notes

- This project was built as part of the Scrimba Node.js course
- The server runs on port 8000 by default
- Data is stored in JSON format in the `data/` directory
- POST endpoint implementation is in progress (see routeHandlers.js)

## 👤 Author

**HudsonK86**

- GitHub: [@HudsonK86](https://github.com/HudsonK86)
- LinkedIn: [Nguyen Van Khoa](https://www.linkedin.com/in/khoa-nguyen-van-37a8062ab/)

## 📄 License

This project is licensed under the ISC License.

---

**Built with ❤️ using vanilla Node.js**

