# DrPaint

Website for DrPaint — a painting/home-improvement business. The project has a static, multi-page Bootstrap frontend and a Node.js/Express + MongoDB backend that handles contact form submissions, consultation bookings, and blog posts.

## Project Structure

```
DrPaint/
├── Backend/            Express API + MongoDB
│   ├── controllers/     Request handlers (Customer, Consultance, Post)
│   ├── Models/           Mongoose schemas
│   ├── routes/           API route definitions
│   ├── middleware/        Error handling
│   ├── dbConfig/          MongoDB connection
│   ├── utils/             Email sending helpers (nodemailer)
│   └── index.js            App entry point
└── Frontend/            Static multi-page site (HTML/CSS/JS, Bootstrap 5)
    ├── Home/
    ├── About/
    ├── Services/
    ├── Projects/
    ├── Consultancy/
    ├── Blog/
    ├── Blogging/          Individual blog post pages
    └── Contact/
```

Each frontend page directory is self-contained with its own `css/`, `js/`, `img/`, and `lib/` (third-party assets) folders.

## Tech Stack

**Backend**
- Node.js, Express
- MongoDB with Mongoose
- Nodemailer (email notifications for contact/consultation forms)
- CORS, Helmet, Morgan, body-parser

**Frontend**
- Static HTML/CSS/JavaScript
- Bootstrap 5, Bootstrap Icons, Font Awesome

## Getting Started

### Prerequisites
- Node.js
- A MongoDB instance (local or hosted)

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/` with:

```
MONGODB_URL=<your MongoDB connection string>
PORT=8800
APP_URL=http://localhost:8800/
AUTH_EMAIL=<email used to send notifications>
AUTH_PASSWORD=<app password for that email>
MANAGER_EMAIL=<email that receives contact/consultation notifications>
```

Run the server:

```bash
npm start
```

The API will be available at `http://localhost:8800`.

### Frontend Setup

The frontend is a static site with no build step. Open any page (e.g. `Frontend/Home/home.html`) directly in a browser, or serve the `Frontend/` folder with a static file server.

## API Endpoints

| Method | Endpoint            | Description                          |
|--------|----------------------|---------------------------------------|
| POST   | `/contact`            | Submit a contact form message         |
| GET    | `/getContacts`         | List all contact submissions          |
| POST   | `/createPost`           | Create a blog post                     |
| GET    | `/getPosts`              | List all blog posts                    |
| POST   | `/consultance`            | Book a consultation                    |
| GET    | `/getConsultances`         | List all consultations                 |
| GET    | `/todayConsultances`        | List consultations scheduled for today |
