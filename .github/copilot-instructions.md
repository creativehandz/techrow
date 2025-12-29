# Copilot Instructions for TechRow

## Project Overview
TechRow is a modern React + TypeScript fundraising website built with Vite, using Tailwind CSS for styling and React Router for navigation. This is a non-profit streaming platform focused on diverse programming distribution.

## Architecture & Key Patterns

### Component Structure
- **Page Components**: Each route has its own component (`HomePage`, `AboutUs`, etc.) in `/src/components/`
- **Reusable Components**: `HeroSection`, `Header`, `Footer`, `VideoSlider` follow a consistent prop-based pattern
- **Shared Styling**: All components import `'./Button.css'` for custom button and typography styles

### Styling Approach
- **Hybrid CSS Strategy**: Combines Tailwind utility classes with custom CSS in `Button.css`
- **Typography**: Uses League Spartan (headings) and Quicksand (UI elements) fonts defined in `tailwind.config.js`
- **Custom Classes**: Hero sections use `.hero-title`, `.hero-subtitle`, `.hero-subtitle-bottom` for consistent typography
- **Button Patterns**: `.menu-button` class provides the standard button appearance with `#676EE140` background

### Media & Assets
- **Static Assets**: All media lives in `/public/media/` with organized subdirectories (`images/clients/`, `videos/hero/`, etc.)
- **Path Convention**: Always use absolute paths starting with `/media/` for consistency
- **Video Integration**: Hero sections commonly use autoplay videos with fallback background images

### External Libraries
- **Swiper**: For carousels and sliders, imported with modules (`Autoplay`, `Navigation`)
- **React Router**: Simple flat routing structure defined in `App.tsx`
- **Type Declarations**: Custom module declarations in `src/swiper.d.ts` for CSS imports

## Development Workflow

### Key Scripts
```bash
npm run dev        # Development server with HMR
npm run build      # TypeScript compile + Vite build  
npm run preview    # Preview production build locally
npm run lint       # ESLint with TypeScript-aware rules
```

### Build Configuration
- **Rolldown Vite**: Uses `rolldown-vite@7.2.5` override for enhanced performance
- **TypeScript**: Dual config with `tsconfig.app.json` (app) and `tsconfig.node.json` (build tools)
- **Auto-deployment**: GitHub Actions deploy to FTP on main branch pushes (see `DEPLOYMENT.md`)

## Component Conventions

### HeroSection Pattern
```tsx
<HeroSection 
  videoSrc="/media/videos/hero/video.mp4"
  title="Main Heading"
  subtitle="Optional subtitle"
  showActionButtons={true}
  height="calc(100vh - 100px)"
/>
```

### State Management
- Uses React hooks (`useState`) for local component state
- Menu toggle pattern with closing animations in HomePage
- Video refs for autoplay control

### Data Structures
- Client logos and video data defined as arrays of objects with consistent `id`, `src`, `alt` properties
- Color-coded video titles using `titleColor` prop in video slider components

## File Organization Rules
- Pages go in `/src/components/` (not `/src/pages/`)
- Shared CSS in `Button.css` imported by all components
- Type definitions for external modules in `/src/` root
- Media assets organized by type and usage in `/public/media/`

## Common Patterns to Follow
- Import `'./Button.css'` in every component that uses custom styling
- Use `calc(100vh - 100px)` for full-height sections accounting for header
- Implement video autoplay with error handling using refs
- Define data arrays inline for dynamic content (logos, videos, etc.)