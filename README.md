# 🚀 Full-Stack Monorepo Project

A modern full-stack application with NestJS backend and React frontend.

## 📁 Project Structure

```
fullstack-app/
├── server/           # NestJS backend (port 3000)
├── client/           # React + Vite frontend (port 5000)
├── test/             # E2E tests
└── package.json      # Root workspace
```

## 🛠️ Tech Stack

### Backend

- **NestJS** - Progressive Node.js framework
- **Prisma** - ORM for database
- **SQLite** - Development database
- **TypeScript** - Type safety

### Frontend

- **React 18** - UI library
- **Vite** - Build tool
- **React Query** - Server state management
- **Material-UI** - Component library
- **TypeScript** - Type safety

## ⚡ Quick Start

### 1. Install Dependencies

```bash
npm run setup
```

This installs dependencies for both server and client.

### 2. Setup Database

```bash
cd server
npx prisma migrate dev --name init
npx prisma db seed
```

### 3. Start Development

**Option 1: Run both concurrently**

```bash
npm run dev
```

**Option 2: Run separately**

```bash
# Terminal 1 - Start server
npm run server:start:dev

# Terminal 2 - Start client
npm run client:start:dev
```

### 4. Access the App

- **Frontend**: http://localhost:5000
- **Backend API**: http://localhost:3000

## 📚 Available Commands

### Root Commands

```bash
npm run setup              # Install all dependencies
npm run dev               # Start both server and client
npm run format            # Format all code
```

### Server Commands

```bash
cd server
npm run start             # Production build
npm run start:dev         # Development mode with watch
npm run build             # Build for production
```

### Client Commands

```bash
cd client
npm run start:dev         # Development server
npm run build             # Production build
npm run preview           # Preview production build
```

## 🗄️ Database Setup

The project uses SQLite with Prisma for database management.

### Database Schema

**User Model**

- id (Integer, Primary Key)
- name (String)
- email (String, Unique)
- items (Relation to Item)
- createdAt & updatedAt (Timestamps)

**Item Model**

- id (Integer, Primary Key)
- title (String)
- description (String, Optional)
- userId (Foreign Key to User)
- user (Relation to User)
- createdAt & updatedAt (Timestamps)

### Prisma Commands

```bash
# Run migrations
npx prisma migrate dev --name <name>

# Generate Prisma client
npx prisma generate

# Seed database
npx prisma db seed

# Open Prisma Studio (GUI)
npx prisma studio
```

## 📡 API Endpoints

### Users

- `GET /users` - Get all users
- `POST /users` - Create user
- `GET /users/:id` - Get user by ID

### Items

- `GET /items` - Get all items
- `POST /items` - Create item
- `GET /items/:id` - Get item by ID

## 🔗 Client-Server Communication

The client communicates with the server through a Vite proxy:

- **Client requests**: `/api/users` → Vite proxy
- **Proxy rewrites**: `/api/users` → `/users`
- **Forwarded to**: `http://localhost:3000/users`

This setup avoids CORS issues during development.

## 📝 Project Features

- ✅ Full-stack TypeScript setup
- ✅ Modular NestJS architecture
- ✅ Database with Prisma ORM
- ✅ React components with hooks
- ✅ Server state management (React Query)
- ✅ API proxy configuration
- ✅ Development and production builds
- ✅ Database seeding

## 🚀 Deployment

### Server Deployment

```bash
# Build
npm run build

# Start production
npm run start:prod
```

### Client Deployment

```bash
# Build
npm run build

# Output is in client/dist/
```

## 📚 Learn More

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Query Documentation](https://tanstack.com/query)

## 📄 License

MIT
