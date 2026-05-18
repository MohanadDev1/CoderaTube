# CoderaTube

CoderaTube is a premium modern web application for downloading publicly accessible videos from social media platforms. Designed with a luxurious UI, Arabic/English support, Dark/Light modes, and a fast robust backend.

## Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion
- **Backend**: Next.js API Routes / Node.js
- **Database**: PostgreSQL (via Prisma)
- **Queue/Caching**: Redis, BullMQ
- **Video Processing**: `yt-dlp` and `ffmpeg`
- **Deployment**: Docker, Nginx

## Getting Started

### Prerequisites
Make sure you have installed:
- Node.js (v20+)
- npm or pnpm
- Docker & Docker Compose (for production/local full stack run)
- Python 3 and FFmpeg (installed locally if not using Docker)

### Environment Setup
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/coderatube"
REDIS_URL="redis://localhost:6379"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-strong-secret-key"
```

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate Prisma Client:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Docker Deployment
For a complete, production-ready environment using Docker Compose:
```bash
docker-compose up -d --build
```
This will spin up:
- The Next.js application on port 3000
- PostgreSQL database
- Redis cache
- A worker instance (if configured for background downloads)

## Features Included
- RTL and LTR support (Arabic & English)
- Elegant dark mode with smooth transitions
- API mock implementation for Video Metadata extraction
- Advanced UI components (glassmorphism, gradient backgrounds)
- Production Docker and Docker Compose files
- SEO Optimizations (robots.txt, sitemap.xml, proper metadata)

*Note: This project is meant for personal fair-use only.*
