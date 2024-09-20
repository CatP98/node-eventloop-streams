# node-eventloop-streams
# Node.js Event Loop and Async Operations

## Description
This project demonstrates various core concepts of Node.js, including the event loop, asynchronous operations, file I/O handling, and threading using the `crypto` module. The application shows how to handle asynchronous code with timers, `setImmediate`, `process.nextTick`, and offloading CPU-intensive tasks to the Node.js thread pool. Additionally, it sets up a basic HTTP server and showcases how to manage multiple incoming requests with event listeners.

---

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Language](#language)
- [Frameworks and Libraries](#frameworks-and-libraries)
- [Tools](#tools)
- [Installation](#installation)
- [How to Run](#how-to-run)
- [What I Learned](#what-i-learned)

---

## Features
- Demonstrates the use of the Node.js event loop, handling async tasks with timers and I/O.
- Includes file reading using streams and demonstrates how to handle large files without blocking the event loop.
- Uses Node.js's native `crypto` module to handle CPU-intensive tasks asynchronously.
- Implements a basic HTTP server with event listeners to handle incoming requests.

---

## Project Structure
├── app.js             # Main application file with event loop and async operations
├── test-file.txt      # Test file for I/O operations
├── README.md          # Documentation for the project
├── package.json       # Node.js project metadata and dependencies

### Language
- **JavaScript (Node.js)**: The project is built using Node.js, leveraging its event-driven, non-blocking architecture to handle asynchronous operations.

### Frameworks and Libraries
- **Node.js**: Core runtime for JavaScript on the server side.
- **Crypto (built-in)**: Used for encrypting data asynchronously using the thread pool.
- **FS (built-in)**: File system module to handle file I/O operations asynchronously.

### Tools
- **Git**: Version control system used to track changes in the project.
- **NPM**: Node package manager to manage project dependencies and scripts.
- **VSCode**: Code editor used for writing and managing the project files.
- **GitHub**: Remote repository hosting and collaboration tool.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/CatP98/node-eventloop-demo.git

## Navigate to the Project Directory
```bash
cd node-eventloop-demo
```


## Install the Necessary Dependencies (if any)
```bash
npm install
```
## How to Run
 1. Ensure you have Node.js installed. You can verify your installation with:

```bash
node -v
```

 2. Run the application:

```bash
node file-name.js
```

3. The application will start an HTTP server at http://127.0.0.1:8000/. You can test it by sending requests using your browser or tools like Postman.

## What I learned

