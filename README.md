# Next Gen Dashboard

A modern animated dashboard built using Next.js, Tailwind CSS, Framer Motion, and Supabase.

## Features

- Left Sidebar Navigation
- Bento Grid Dashboard Layout
- Animated Course Cards
- Framer Motion Animations
- Supabase Database Integration
- Server-side Data Fetching
- Responsive Design
- Weekly Activity Analytics
- Dynamic Course Rendering

## Tech Stack

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Architecture

The application uses the Next.js App Router architecture.

### Server Components

The main dashboard page (`app/page.tsx`) is implemented as a server component to fetch course data directly from Supabase using async server-side rendering.

### Client Components

Interactive UI components such as:
- Course Cards
- Activity Tile
- Sidebar
- Search Bar
- Animations

are implemented as client components using `"use client"`.

## Database

Supabase is used as the backend database for storing course information dynamically.

## Challenges Faced

- Configuring Supabase environment variables correctly
- Managing server/client component separation
- Implementing responsive Bento grid layouts
- Creating reusable animated components
- Fetching dynamic data securely

## Environment Variables

Create a `.env.local` file using the values from `.env.example`.

## Run Locally

```bash
npm install
npm run dev
```

## Deployment

The project is deployed using Vercel.

## Live Demo



## GitHub Repository

https://github.com/avishkarmaitra04/next-gen-dashboard