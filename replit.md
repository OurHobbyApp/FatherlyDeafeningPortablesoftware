# Afford A Build Website

## Overview
A professional website for Afford A Build, a building and construction company. Features a black and gold color scheme with modern, elegant styling.

## Project Structure
- `server.js` - Express server running on port 5000, handles static files and contact form API
- `public/index.html` - Main website with all sections
- `contacts.json` - Stores contact form submissions

## Features
- **Hero Section** - Full-screen intro with background image
- **About Section** - Company info with stats (15+ years, 500+ projects)
- **Services Section** - 9 service cards (Extensions, Bricklaying, Groundworks, etc.)
- **Projects Gallery** - Showcase of completed work
- **Testimonials** - Customer reviews with 5-star ratings
- **Contact Form** - Functional form that saves to JSON file
- **Navigation** - Sticky nav with mobile hamburger menu
- **Footer** - Links, certifications, and contact info

## Design
- Black background (#0a0a0a)
- Gold accent color (#c9ab5d)
- Fonts: Cinzel (headings), Cormorant Garamond (accents), Montserrat (body)
- Fully responsive for mobile devices

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - View all submissions (admin)

## Running the Project
The server runs automatically via the configured workflow on port 5000.
