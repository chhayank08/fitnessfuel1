# Fitness Fuel - Personalized Health & Fitness Platform

A modern, responsive web application for personalized fitness tracking and health management. Built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

### User Management
- Email-based authentication
- Secure profile management
- Customizable user preferences
- Initial profile setup wizard

### Fitness Tracking
- Personalized diet plans
- Custom exercise routines
- Progress monitoring
- Weight and measurement tracking
- Goal setting and tracking

### Dashboard Features
- Real-time progress visualization
- Activity tracking
- Customizable workout plans
- Nutrition management
- Interactive charts and statistics

### Technical Features
- Responsive design for all devices
- Dark theme optimized UI
- Real-time data synchronization
- Secure data storage
- Type-safe development

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Chart.js
- Lucide Icons

### Backend
- Supabase
  - PostgreSQL Database
  - Authentication
  - Row Level Security
  - Real-time subscriptions

## Project Structure

```
fitness-fuel/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── dashboard/     # Dashboard-specific components
│   │   └── landing/       # Landing page components
│   ├── context/           # React Context providers
│   ├── lib/               # Utility functions and configurations
│   ├── pages/             # Page components
│   │   └── dashboard/     # Dashboard page components
│   └── types/             # TypeScript type definitions
├── supabase/
│   └── migrations/        # Database migrations
├── public/               # Static assets
└── package.json         # Project dependencies
```

## Database Schema

### Tables
- `profiles`: User profile information
  - Personal details
  - Fitness metrics
  - Preferences
- `diet_plans`: Customized nutrition plans
  - Meal details
  - Nutritional information
  - User associations
- `exercise_plans`: Workout routines
  - Exercise details
  - Duration and difficulty
  - User associations
- `progress_logs`: Fitness tracking
  - Weight logs
  - Progress notes
  - Mood tracking

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fitness-fuel
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

### Database Setup

1. Connect to Supabase:
   - Click "Connect to Supabase" button in the project
   - Follow the setup wizard

2. Database migrations will run automatically

## Security Features

### Authentication
- Email-based authentication
- Secure password policies
- Protected routes
- Session management

### Data Security
- Row Level Security (RLS)
- User data isolation
- Secure API endpoints
- Type-safe database operations

## Key Components

### AuthModal
- Handles user authentication
- Signup and signin flows
- Initial profile setup

### Dashboard
- Main user interface
- Progress tracking
- Plan management
- Settings configuration

### Profile Management
- User details
- Measurement tracking
- Goal setting
- Progress visualization

## License

This project is licensed under the MIT License - see the LICENSE file for details.
