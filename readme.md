# CollegeHub - College Discovery Platform


Live Demo

Frontend

https://college-discovery-platform-dusky-chi.vercel.app/

Backend API

https://college-discovery-platform-n4hr.onrender.com

 

## Overview

CollegeHub is a full-stack college discovery platform that helps students explore, compare, and save colleges based on key information such as fees, ratings, placements, courses, and reviews.

The platform provides a seamless user experience with authentication, search and filtering, college comparison, and saved items functionality.

---

## Features

### 1. College Listing & Search

* Browse colleges
* Search colleges by name
* Filter colleges by:

  * Location
  * Rating
  * Fees
* Pagination support
* Responsive card-based UI

### 2. College Detail Page

Each college has a dedicated detail page containing:

* Overview
* Courses
* Placements
* Reviews
* Fees
* Rating
* Location

### 3. Compare Colleges

Compare two colleges side-by-side based on:

* Location
* Fees
* Rating
* Placements

Users can also save comparisons for future reference.

### 4. Authentication

* User Registration
* User Login
* JWT-based Authentication
* Protected saved items functionality

### 5. Saved Items

Users can:

* Save colleges
* View saved colleges
* Save comparisons
* View saved comparisons

### 6. Responsive UI

* Mobile-friendly design
* Clean user interface
* Built with Tailwind CSS

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

### Database

* PostgreSQL
* Prisma ORM

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: Neon PostgreSQL

---

## Project Architecture

Frontend (Next.js)
↓
REST APIs
↓
Backend (Express.js)
↓
Prisma ORM
↓
PostgreSQL (Neon)

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Colleges

GET /api/colleges

GET /api/colleges/:id

### Compare Colleges

GET /api/colleges/compare

POST /api/comparisons

GET /api/comparisons/:userId

### Saved Colleges

POST /api/saved

GET /api/saved/:userId

---

## Database Models

### User

* id
* name
* email
* password

### College

* id
* name
* location
* fees
* rating
* overview
* courses
* placements
* reviews

### SavedCollege

* id
* userId
* collegeId

### SavedComparison

* id
* userId
* college1Id
* college2Id

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd college-discovery-platform
```

### Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

Run Backend

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

## Deployment

### Frontend

Deployed on Vercel

### Backend

Deployed on Render

### Database

Hosted on Neon PostgreSQL

---

## Edge Cases Handled

* Duplicate email registration
* Invalid login credentials
* Empty search results
* Unauthorized save actions
* Invalid college IDs
* Missing comparison selections
* Missing user session

---

## Tradeoffs & Design Decisions

* Used REST APIs instead of GraphQL for simplicity.
* Used localStorage for client-side session management.
* Implemented pagination instead of infinite scrolling.
* Prisma ORM chosen for type safety and developer productivity.
* PostgreSQL selected for reliability and scalability.

---

## Future Improvements

* User-generated reviews
* College ranking system
* Advanced filtering
* Wishlist folders
* Recently viewed colleges
* Recommendation engine
* OAuth login (Google/GitHub)

---

## Author

Bhumika Yadav

Full Stack Engineer Assignment Submission
