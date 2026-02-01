# Rebira Adugna - Premium Portfolio

A high-end, modern, and client-attracting personal portfolio built with React, Tailwind CSS, Three.js, and Framer Motion. This project is designed to impress visitors with its premium aesthetics, smooth animations, and interactive 3D elements.

## 🚀 Features

- **Premium 3D Hero Section**: Rotating iridescent sphere with floating particles using @react-three/fiber.
- **Glassmorphism Design**: Elegant translucent cards and components for a modern look.
- **Interactive Projects Gallery**: Filterable project list with animated glassmorphism cards.
- **Micro-interactions**: Subtle button hovers, icon animations, and smooth section transitions.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewers.
- **Performance Optimized**: Lazy loading with React Suspense and tree-shaking for fast load times.
- **Smooth Navigation**: Sticky navbar with active section highlighting and mobile support.

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) / @react-three/fiber
- **Icons**: [Lucide React](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Rebira_Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
Rebira_Portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Project, skill, and testimonial data
│   ├── three/           # 3D scenes and components
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main application entry
│   └── index.css        # Tailwind 4 configuration and global styles
└── public/              # Static assets
```

## 📝 Customization

You can easily update the content by editing the files in `src/data/`:
- **Projects**: `src/data/projects.js`
- **Skills**: `src/data/skills.js`
- **Testimonials**: `src/data/testimonials.js`

## 🌍 Deployment (Vercel/Netlify)

To deploy this project:
1. Push your code to a GitHub repository.
2. Connect the repository to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
3. Use the following build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

---

Built with ❤️ by Rebira Adugna
