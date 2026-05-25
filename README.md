# Next Gen Dashboard

A modern animated learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

---

## Features

- Responsive dashboard layout
- Bento grid UI design
- Animated course cards
- Smooth Framer Motion animations
- Supabase database integration
- Server-side data fetching
- Modern dark-themed interface
- Search bar and activity widgets

---

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Vercel

---

## Environment Variables

Create a `.env.local` file using the values from `.env.example`.

Required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/avishkarmaitra04/next-gen-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Architecture Choices

### Server / Client Component Split

- `app/page.tsx` is a Server Component.
- Supabase data fetching is handled server-side.
- Interactive UI elements and animations are handled using Client Components.

### Why This Architecture?

- Faster initial rendering
- Better SEO performance
- Reduced client-side API requests
- Cleaner separation of logic and UI

---

## Challenges Faced

### Supabase Integration

Faced issues with:
- incorrect API URL
- environment variable setup
- invalid REST endpoint paths

These were resolved by configuring Supabase correctly and creating a reusable client in `lib/supabase.ts`.

### TypeScript Deployment Errors

Vercel deployment initially failed due to mismatched component props.

Resolved by updating TypeScript prop definitions to match Supabase response data.

### Deployment Configuration

Handled:
- Vercel environment variables
- GitHub integration
- production build debugging

---

## Deployment

### Live Demo

https://next-gen-dashboard-git-main-avishkar-projects.vercel.app

### GitHub Repository

https://github.com/avishkarmaitra04/next-gen-dashboard

---

## Author

Avishkar Maitra