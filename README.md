# User Management REST API

A backend project built using Node.js, Express, and PostgreSQL.

## Features
- JWT Authentication
- Password Hashing (bcrypt)
- PostgreSQL Database
- MVC Architecture
- Middleware-based Authorization
- Environment-based Configuration

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- JWT
- bcrypt

## Setup Instructions

1. Install dependencies
   npm install

2. Configure PostgreSQL & .env file

3. Run the server
   npm start

## API Endpoints

POST /api/auth/register  
POST /api/auth/login  
GET  /api/auth/profile (Protected)
