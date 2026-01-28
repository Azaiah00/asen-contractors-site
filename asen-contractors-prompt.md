# Build the World's Greatest Contractor Website - Asen Contractors

## Your Mission

You are the **world's greatest web developer and designer** that has ever existed. You are a world-class web designer with an unparalleled ability to create stunning, luxurious, and engaging websites that stand out far beyond any competitor. Your task is to completely rebuild and revolutionize the website for **Asen Contractors LLC** (https://asencontractors.com/), creating the absolute best, most engaging web design for contractors that has ever been created.

## Project Overview

Build a complete, revolutionary Next.js website for **Asen Contractors LLC** that will:
- **Completely transform** their online presence
- **Stand out** as the most engaging contractor website ever created
- **Reflect luxury and professionalism** through stunning design
- **Feature revolutionary scroll-based video animation** with glassy card overlays
- **Use a sophisticated black, white, and gold color scheme**
- **Implement dark translucent glassy cards/boxes** for all text content in the hero section

---

## Phase 1: Pre-Development - Content Analysis

**BEFORE YOU START CODING**, you MUST perform a comprehensive analysis of the current Asen Contractors website:

### Website Analysis Checklist

1. **Visit and Analyze**: Go to https://asencontractors.com/ and thoroughly examine:
   - All pages and sections
   - Company information, services, and offerings
   - Contact information (phone: 804-405-7796)
   - Service descriptions and details
   - Project galleries and portfolio items
   - Reviews and testimonials
   - About Us content
   - Any special offers or promotions
   - Service areas and locations
   - Company values and differentiators

2. **Extract All Content**:
   - Company name, tagline, mission
   - Complete list of services with descriptions
   - All service categories (Construction & Installation, Repair & Remodeling, Maintenance & Home Services)
   - Project gallery images and descriptions
   - Customer reviews and testimonials
   - Contact details and business hours
   - Any unique selling points or guarantees

3. **Document Everything**: Create a comprehensive content document with all extracted information before beginning design work.

**CRITICAL**: **DO NOT** use placeholder content. Extract and use the actual company information from their current website.

---

## Phase 2: Design System

### Design Reference: Luxury Restaurant Template

**IMPORTANT**: Reference images have been provided showing a luxury restaurant website template (SAVORIA). These images are **ONLY for CSS styling, typography, and layout reference** - NOT for content extraction.

### Color Scheme

#### Primary Colors:
- **Background**: Deep black (#000000 or #0a0a0a) - main theme throughout
- **Text**: Primarily white (#FFFFFF) and light cream (#F5F5F5) for maximum contrast
- **Gold Accents**: Rich gold tones (#D4AF37, #FFD700, #C9A961) used extensively for:
  - Borders and highlights
  - Button accents
  - Icon colors
  - Decorative elements
  - Hover states
  - Call-to-action elements
  - Section dividers

#### Glassy Card Colors:
- **Card Background**: Dark translucent gray/black (rgba(20, 20, 20, 0.7) to rgba(0, 0, 0, 0.8))
- **Card Borders**: Subtle gold accents (rgba(212, 175, 55, 0.3))
- **Backdrop Blur**: Use backdrop-blur-md or backdrop-blur-lg for glass effect
- **Text**: White with high contrast for readability

### Typography

#### Font Selection:
- **Headings**: Elegant serif fonts (consider Playfair Display, Cormorant Garamond, or similar luxury serif)
- **Body**: Clean, modern sans-serif (Inter, Poppins, or similar)
- **Navigation**: Clean sans-serif, all caps with letter-spacing for elegance

#### Typography Hierarchy:
- **Headings**: Elegant, luxurious serif fonts (similar to "SAVORIA" logo style)
- **Body/Navigation**: Clean, modern sans-serif fonts
- **Hierarchy**: Clear visual hierarchy with varying weights and sizes
- **Impact**: Dramatic size differences, bold weights for impact

### Layout Principles

- **Luxury & Elegance**: Premium feel with sophisticated spacing
- **Modern**: Clean, contemporary layouts
- **Professional**: Maintains contractor credibility
- **Engaging**: Interactive elements and smooth animations
- **Mobile-First**: Fully responsive, beautiful on all devices
- **Performance**: Optimized for fast loading and smooth 60fps animations

### Glassy Card Effect (CRITICAL)

The glassy card effect is central to the design:

- **Dark, Semi-Transparent Backgrounds**: Dark translucent gray/black
- **Softly Rounded Corners**: Modern, refined appearance
- **Frosted Glass Appearance**: Backdrop blur for smoked glass effect
- **High Legibility**: White text for maximum contrast
- **Subtle Depth and Layering**: Cards elegantly overlay dynamic backgrounds
- **Gold Border Accents**: Subtle gold borders for luxury feel

### Animation Philosophy

- **Framer Motion Everywhere**: All animations use Framer Motion
- **Parallax Effects**: Multiple layers moving at different speeds
- **Scroll-Triggered Animations**: Elements animate as they enter viewport
- **Micro-Interactions**: Hover effects, button animations, card lifts
- **Stagger Animations**: Sequential animations for service cards and galleries
- **Smooth Springs**: Natural-feeling spring physics
- **Glassy Card Animations**: Cards fade in, slide up, and scale elegantly

---

## Phase 3: Technical Stack & Architecture

### Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (for all animations)
- **Lucide React** (for icons)

### Component Structure

Create modular, reusable components:

```
components/
  sections/
    Hero.tsx (scroll video with glassy cards)
    WhyChooseUs.tsx
    Services.tsx
    ProjectGallery.tsx
    Testimonials.tsx
    ContactCTA.tsx
  ui/
    GlassyCard.tsx (reusable glassy card component)
    Button.tsx (gold-accented buttons)
    ServiceCard.tsx
    ProjectCard.tsx
    TestimonialCard.tsx
  layout/
    Header.tsx (sticky, glass morphism)
    Footer.tsx
```

### GlassyCard Component (Critical)

Create a reusable GlassyCard component with:
- Dark translucent background
- Backdrop blur
- Rounded corners
- Optional gold border
- Smooth animations
- Responsive padding
- Configurable opacity and blur levels

---

## Phase 4: Core Features & Implementation

### Hero Section - Scroll-Based Video Animation

**CRITICAL**: You MUST implement a revolutionary scroll-based video animation in the hero section with **glassy card overlays**.

#### Frame Sequence System:
- Video will be converted to WebP frames (numbered `frame_001.webp`, `frame_002.webp`, etc.)
- Frames will be placed in `/public/frames/` directory
- **FFmpeg Extraction**: When ready, the user will provide the video file. Use FFmpeg to extract frames:
  ```
  ffmpeg -i input_video.mp4 -vf "fps=30,scale=1920:-1" public/frames/frame_%03d.webp
  ```
- Adjust frame rate and scale as needed for optimal performance

#### Canvas Rendering:
- Use HTML5 Canvas to render frames based on scroll position
- GPU acceleration with `transform: translate3d(0, 0, 0)` and `backfaceVisibility: hidden`

#### Framer Motion Integration:
- Use `useScroll`, `useTransform`, and `useSpring` from Framer Motion
- Ultra-smooth scroll tracking with `useSpring` (stiffness: 100, damping: 30)
- Container: `h-[300vh]` (3x viewport height) for scroll space
- Sticky wrapper: `sticky top-0 h-screen` for viewport

#### Glassy Card Overlays (CRITICAL DIFFERENCE):
- **DO NOT** use floating text directly over the video
- **INSTEAD**, place ALL text content inside dark translucent glassy cards/boxes
- Each text section should be in its own glassy card with:
  - Dark semi-transparent background (rgba(20, 20, 20, 0.75))
  - Backdrop blur effect
  - Rounded corners (rounded-lg or rounded-xl)
  - Subtle gold border accents
  - Proper padding and spacing
  - Smooth fade-in/out animations as user scrolls
- Cards should elegantly overlay the scrolling video background
- Multiple cards can appear/disappear at different scroll positions

#### Multiple Glassy Card Sections:
Create 3-4 glassy card sections that animate in/out:
- **Card 1**: Main hero headline with company name and tagline + CTA buttons
- **Card 2**: Key value proposition and services overview
- **Card 3**: Company story, trust indicators, or awards
- **Card 4**: Service highlights or unique selling points

#### Loading & Preload:
- **Loading State**: Beautiful loading progress indicator with gold accents while frames load
- **Preload System**: Preload all WebP frames in parallel for smooth playback

#### Implementation Pattern:
```tsx
// Example structure for glassy card
<motion.div 
  className="absolute inset-0 flex items-center justify-center px-6 md:px-20" 
  style={{ opacity: cardOpacity, y: cardY }}
>
  <div className="bg-black/75 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gold/30 shadow-2xl max-w-4xl">
    <h1 className="text-white text-5xl md:text-8xl font-serif mb-6">
      Your Content Here
    </h1>
    {/* More content */}
  </div>
</motion.div>
```

### Required Pages & Sections

#### 1. Home Page

**Hero Section:**
- Scroll-based video animation with glassy card overlays
- Multiple animated cards revealing company story
- Smooth transitions between card sections
- Gold-accented CTAs

**Why Choose Asen Contractors:**
- Glassy cards with icons and animations
- Gold accents on hover
- Parallax effects

**Services Overview:**
- Three main service categories in glassy cards:
  - Construction & Installation
  - Repair & Remodeling
  - Maintenance & Home Services
- Hover effects with gold accents
- Smooth scroll animations

**Project Gallery:**
- Stunning image grid with glassy overlays
- Lightbox or modal views
- Parallax scrolling effects
- Gold accent borders on hover

**Reviews/Testimonials:**
- Glassy testimonial cards
- Smooth carousel or scroll animations
- Gold star ratings

**Contact CTA Section:**
- Prominent glassy card with contact form
- Gold-accented buttons
- Phone number: 804-405-7796 prominently displayed

#### 2. Services Page
- Detailed service descriptions in glassy cards
- Service categories with expandable sections
- Image galleries for each service
- Gold-accented CTAs throughout

#### 3. About Us Page
- Company story in elegant glassy cards
- Team highlights (if available)
- Awards and recognition
- Company values and mission

#### 4. Contact Page
- Contact form in glassy card design
- Phone number: 804-405-7796 (prominently displayed with gold accent)
- Service area information
- Business hours
- Map integration (if applicable)

#### 5. Project Gallery Page
- Full project gallery with filtering
- Glassy card layouts for each project
- Lightbox viewing experience
- Smooth animations and transitions

#### 6. Header/Navigation
- Sticky header with glass morphism effect
- Black background with gold accents
- Smooth scroll navigation
- Mobile hamburger menu with animations
- Phone number always visible in header

#### 7. Footer
- Service area information
- Contact information with gold accents
- Social media links
- Site navigation
- Copyright and legal links

### Animation Examples to Include

- **Hero Scroll Animation**: Revolutionary scroll-based video with glassy card overlays
- **Parallax Sections**: Background elements moving at different speeds
- **Fade-in on Scroll**: Glassy cards fade in as they enter viewport
- **Stagger Animations**: Service cards and gallery items animate in sequence
- **Hover Effects**: Cards lift, scale, and show gold accents on hover
- **Button Animations**: Gold-accented buttons with smooth transitions
- **Loading States**: Beautiful loading animations with gold accents
- **Form Interactions**: Smooth validation and submission states
- **Card Transitions**: Smooth transitions between hero card sections

---

## Phase 5: Development Guidelines

### Performance Considerations

- Optimize images (use Next.js Image component)
- Lazy load components below the fold
- Use React.memo for expensive components
- Optimize Framer Motion animations (GPU acceleration)
- Code splitting for pages
- Minimize bundle size
- Efficient frame loading and caching

### Accessibility

- Proper semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states with gold accents
- Alt text for all images
- Proper color contrast ratios (white on dark with gold accents)
- Screen reader compatibility

### Video Frame Extraction (When Ready)

When the user provides the video file:

1. Install FFmpeg (if not already installed)
2. Extract frames using:
   ```
   ffmpeg -i [video_file_path] -vf "fps=30,scale=1920:-1" public/frames/frame_%03d.webp
   ```
3. Adjust parameters:
   - `fps=30`: Frame rate (adjust based on video)
   - `scale=1920:-1`: Width (adjust for optimal file size vs quality)
4. Output: `frame_001.webp`, `frame_002.webp`, etc.
5. Count frames and update `TOTAL_FRAMES` constant in Hero component
6. Test scroll animation for smoothness

---

## Phase 6: Success Criteria & Implementation Approach

### Success Criteria

The website should:
- ✅ Look absolutely stunning and luxurious
- ✅ Be the most engaging contractor website ever created
- ✅ Feature smooth, beautiful Framer Motion animations throughout
- ✅ Include revolutionary scroll-based video with glassy card overlays
- ✅ Use black background, white text, and extensive gold accents
- ✅ Have all hero text in dark translucent glassy cards (not floating text)
- ✅ Be fully responsive and mobile-friendly
- ✅ Load quickly and perform smoothly at 60fps
- ✅ Be accessible and user-friendly
- ✅ Reflect Asen Contractors' professionalism and quality
- ✅ Convert visitors into customers with clear, gold-accented CTAs
- ✅ Use actual company information (no placeholders)

### Implementation Approach

1. **First**: Deeply analyze https://asencontractors.com/ and extract ALL company information
2. **Second**: Study the design reference images for typography, layout, and glassy card styling
3. **Third**: Design the overall layout and color scheme (black, white, gold)
4. **Fourth**: Build the Hero component with scroll animation structure and glassy card overlays
5. **Fifth**: Create all other sections with glassy cards and animations
6. **Sixth**: Ensure everything is responsive and works on all devices
7. **Seventh**: Add micro-interactions and polish throughout
8. **Eighth**: Test performance and optimize as needed
9. **Ninth**: When video is provided, extract frames using FFmpeg and integrate

### Critical Reminders

- Extract real content from Asen Contractors' current website - **NO placeholders**
- Use glassy cards for **ALL text in hero section** - **NO floating text**
- Gold accents everywhere - buttons, borders, icons, highlights
- Black background as the main theme throughout
- White text for maximum contrast and readability
- Luxury serif fonts for headings, clean sans-serif for body
- Reference the template images for styling inspiration only
- FFmpeg extraction will happen when video is provided

---

## Remember

You are the world's greatest web developer and designer. This website should be a masterpiece that revolutionizes how contractor companies present themselves online. Make it luxurious, make it engaging, make it professional, and make it absolutely unforgettable with stunning glassy cards, smooth animations, and elegant gold accents.

**Let's build something extraordinary!** 🏗️✨
