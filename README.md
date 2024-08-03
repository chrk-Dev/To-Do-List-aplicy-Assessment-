
# MERN Stack App README

## Overview

This project is a MERN (MongoDB, Express, React, Node) stack application. It includes separate folders for the backend and frontend code, providing a full-stack JavaScript solution for building web applications.


## Installation

### Prerequisites

-   Node.js and npm installed
-   MongoDB instance running (locally or on a cloud service like MongoDB Atlas)

### Backend Setup

1.  Navigate to the `backend` directory:
    
   
    
    
    `cd backend` 
    
2.  Install the dependencies:
    

    
    `npm install` 
    
3.  Create a `.env` file in the `backend` directory with the following content:
    
 
    
    `MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret` 
    
4.  Start the backend server:
    
    
    `npm start` 
    

### Frontend Setup

1.  Navigate to the `frontend` directory:
    
 
    
    `cd frontend` 
    
2.  Install the dependencies:
    
    
    `npm install` 
    
3.  Create a `.env` file in the `frontend` directory with the following content:
    

    
    `REACT_APP_API_URL=your_backend_api_url` 
    
4.  Start the frontend development server:
    

    
    `npm start` 
    

## Running the Application

1.  Start the backend server:
    

    
    `cd backend
    npm start` 
    
2.  In another terminal, start the frontend server:
    

    
    `cd frontend
    npm start` 
    

Access the application in your browser at `http://localhost:3000`.

## Environment Variables

### Backend (`backend/.env`)

-   `MONGO_URI`: MongoDB connection string.
-   `JWT_SECRET`: Secret key for JWT authentication.

### Frontend (`frontend/.env`)

-   `REACT_APP_API_URL`: URL of the backend API.

## MongoDB Setup

Ensure you have a MongoDB instance running. If you're using MongoDB Atlas, follow these steps:

1.  Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  Create a new cluster.
3.  Get the connection string for your cluster.
4.  Replace `your_mongodb_connection_string` in the `.env` file with your actual MongoDB connection string.

## JWT Secret

JWT (JSON Web Token) is used for secure authentication. Set your JWT secret key in the `.env` file:

plaintext

Copy code

`JWT_SECRET=your_jwt_secret` 

This key is used to sign and verify the tokens.
