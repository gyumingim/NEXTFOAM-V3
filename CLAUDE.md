# CLAUDE.md - AI Assistant Guide for NEXTFOAM-V3

## Project Overview

This is a **Next.js 16** marketing website for NEXTFOAM, a Korean company specializing in CFD (Computational Fluid Dynamics) simulation software. The site showcases their products, particularly BARAM, an open-source CFD solution.

### Key Information
- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript with strict mode
- **UI Framework**: React 19.2.0
- **Styling**: Tailwind CSS v4
- **Primary Language**: Korean (ko)
- **Theme**: Dark (black background throughout)

---

## Technology Stack

### Core Dependencies
```json
{
  "next": "16.0.1",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "typescript": "^5",
  "tailwindcss": "^4",
  "lenis": "^1.3.15"
}
```

### Key Libraries
- **Lenis**: Smooth scroll implementation
- **react-use-draggable-scroll**: Horizontal scroll interactions (currently commented out in some places)
- **next/font**: Custom font loading (Pretendard Variable)

---

## Directory Structure

```
NEXTFOAM-V3/
├── app/                      # Next.js App Router
│   ├── (main)/              # Route group for main page
│   │   └── page.tsx         # Homepage (/)
│   ├── about/               # /about route
│   ├── community/           # /community route
│   ├── consult/             # /consult route
│   ├── contactus/           # /contactus route
│   ├── docs/                # /docs route
│   ├── education/           # /education route
│   ├── product/             # /product route
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
│
├── shared/                  # Shared utilities and components
│   ├── assets/             # Static assets (fonts, images)
│   │   └── PretendardVariable.woff2
│   ├── providers/          # React context providers
│   │   └── LenisProviders.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button/
│       ├── Input/
│       └── Modal/
│
├── widgets/                # Feature-specific components
│   └── header/
│       └── Header.tsx      # Site header/navigation
│
├── public/                 # Static files served at root
│   ├── news/              # Press coverage images
│   └── port/              # Portfolio images
│
└── Configuration files
    ├── next.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    ├── postcss.config.mjs
    └── package.json
```

### Directory Conventions

1. **`app/`**: Next.js App Router pages and layouts
   - `(main)` is a route group that doesn't affect URL structure
   - Each folder represents a route
   - `page.tsx` files export default React components

2. **`shared/`**: Reusable code across the application
   - `providers/`: React Context providers
   - `ui/`: Generic UI components (buttons, inputs, modals)
   - `assets/`: Fonts, images, other static assets

3. **`widgets/`**: Feature-specific, composed components
   - Larger, more specific components than `shared/ui`
   - Example: Header navigation component

---

## Architecture Patterns

### 1. Component Structure

**All page components follow this pattern:**
```tsx
"use client"  // Required for client-side interactivity

export default function PageName() {
    return (
        <div className="w-full h-full">
            <Header />
            <Section1 />
            <Section2 />
            <Footer />
        </div>
    );
}

// Internal section components defined in same file
const Section1 = () => { /* ... */ }
const Section2 = () => { /* ... */ }
```

**Key Points:**
- All pages use `"use client"` directive
- Pages compose multiple section components
- Section components are defined in the same file as internal components
- Each section typically takes full viewport height

### 2. Layout Architecture

**Root Layout** (`app/layout.tsx`):
```tsx
- Sets HTML lang="ko"
- Loads Pretendard custom font
- Wraps entire app with LenisProvider for smooth scrolling
- Sets metadata (title, description)
```

### 3. Styling Approach

- **Tailwind CSS**: Utility-first with inline classes
- **No CSS Modules**: All styling via Tailwind or global CSS
- **Responsive**: Mobile-first responsive design
- **Dark Theme**: Black background (#000000) is the default
- **Custom Font**: Pretendard Variable (Korean optimized)

### 4. State Management

- **No Global State Library**: Uses React hooks (useState, useRef, useEffect)
- **Local Component State**: Each component manages its own state
- **Context**: Lenis smooth scroll provider is the only global context

### 5. Data Patterns

- **Static Data**: Arrays of objects defined directly in components
- **No API Calls**: Currently all content is hardcoded
- **Image Imports**: Static imports from `/public` directory

---

## Code Conventions

### Import Order
```tsx
"use client"
import { Header } from "@/widgets/header/Header";  // Widgets
import Image from "next/image";                     // Next.js
import space from "@/public/space.png"              // Images
import React, { useRef, useState } from 'react';   // React hooks
```

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)
- Always use `@/` prefix for internal imports
- Example: `@/widgets/header/Header`, `@/public/image.png`

### TypeScript
- **Strict mode enabled**
- **Target**: ES2017
- **JSX**: react-jsx (new transform)
- Type interfaces when needed, but minimal type annotations
- Props are typed with inline interfaces

### Component Naming
- **PascalCase** for component names
- **Descriptive names**: `HeroPage`, `PortfolioPage`, `InfiniteScrollRow`
- Internal components can be defined in the same file

### Class Names (Tailwind)
- Extensive use of utility classes
- Responsive prefixes: `sm:`, `md:`, `lg:`
- Custom values with arbitrary properties: `text-[3rem]`, `h-[100vh]`
- Opacity utilities: `text-white/60`, `bg-black/40`

---

## Styling Conventions

### Global Styles (`app/globals.css`)

```css
/* Key global rules: */
- User selection disabled globally (*::before, *::after)
- User drag disabled on images
- Scrollbar hidden globally
- Black background (html, body)
- Lenis smooth scroll styles
```

### Common Patterns

1. **Full viewport sections:**
   ```tsx
   <div className="w-full h-[100vh]">
   ```

2. **White text on black:**
   ```tsx
   <div className="bg-black text-white">
   ```

3. **Opacity for emphasis:**
   ```tsx
   <span className="text-white/100">Emphasized</span>
   <span className="text-white/60">De-emphasized</span>
   ```

4. **Responsive font sizes with clamp:**
   ```tsx
   <div className="text-[clamp(2.12187vw,2.12187vw,2.12187vw)]">
   ```

5. **Fixed positioning:**
   ```tsx
   <header className="fixed z-10000">
   ```

---

## Development Workflows

### Running the Project

```bash
# Development server (port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

### Adding New Pages

1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Follow existing page component structure:
   ```tsx
   "use client"
   import { Header } from "@/widgets/header/Header";

   export default function NewPage() {
       return (
           <div className="w-full h-full">
               <Header />
               {/* Your sections */}
           </div>
       );
   }
   ```

### Adding New Components

**For reusable UI components:**
1. Create folder in `shared/ui/ComponentName/`
2. Add `ComponentName.tsx` and `index.ts`
3. Export from `index.ts`

**For feature widgets:**
1. Create folder in `widgets/feature-name/`
2. Add `FeatureName.tsx`

### Working with Images

1. Place images in `public/` directory (or subdirectories)
2. Import using `@/public/path/to/image.ext`
3. Use Next.js Image component:
   ```tsx
   import Image from "next/image";
   import myImage from "@/public/my-image.png";

   <Image src={myImage} alt="Description" />
   ```

---

## Key Features & Behaviors

### 1. Smooth Scrolling (Lenis)

- **Global provider**: Wraps entire app in `app/layout.tsx`
- **Configuration**: `LenisProviders.tsx`
  - Duration: 1.2s
  - Vertical orientation
  - Smooth wheel enabled
  - Infinite scrolling disabled

**Utility functions available:**
```tsx
import { scrollTo, stopScroll, startScroll, getLenis } from '@/shared/providers/LenisProviders';
```

### 2. Infinite Scroll Carousels

Multiple sections use infinite scrolling:
- Press coverage section
- Partnership logos
- Company news

**Pattern:**
```tsx
// Duplicate content 3 times for seamless loop
{[...Array(3)].map((_, setIndex) => (
    items.map((item) => <div key={`set-${setIndex}-${item.id}`}>...)
))}
```

### 3. Horizontal Scroll Sections

Some sections use horizontal scrolling with custom controls:
- BaramFeaturePage (carousel with prev/next buttons)
- Portfolio grid

### 4. Image Handling

- **No dragging**: User drag disabled globally
- **Optimization**: All images use Next.js Image component
- **Lazy loading**: Automatic with Next.js Image

---

## Common Patterns to Follow

### 1. Section Component Pattern

```tsx
const SectionName = () => {
    return (
        <div className="bg-black w-full h-[100vh] flex flex-col p-[1rem]">
            <Index text={"SECTION NAME"} className={"mt-[8rem] mb-[8rem]"} />
            {/* Section content */}
        </div>
    )
}
```

### 2. Index Label Component

Used as section headers throughout the site:
```tsx
const Index = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={className}>
            <span className="text-black bg-white px-[.5rem] py-[.25rem]">{text}</span>
            <span className="text-white px-[.5rem]">{text}</span>
        </div>
    )
}
```

### 3. Hover Effects

```tsx
// Text color change on hover
<div className="text-white hover:text-black hover:bg-white">

// Brightness change on hover
<img className="filter brightness-100 hover:brightness-125 transition-all duration-300" />
```

### 4. Animation Patterns

**CSS animations with styled-jsx:**
```tsx
<style jsx>{`
    @keyframes animationName {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    }
    .animate-class {
        animation: animationName 100s linear infinite;
    }
`}</style>
```

**RAF-based animations:**
```tsx
useEffect(() => {
    const animate = () => {
        // Animation logic
        animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    };
}, [dependencies]);
```

---

## Common Issues & Solutions

### Issue: Page duplication across routes

**Current State**: Most page routes (about, community, consult, etc.) have identical content.

**When updating**: If asked to modify a page, clarify with the user whether:
- Only specific route should be updated
- All routes should be updated
- A shared component should be extracted

### Issue: Commented code

**Pattern**: `react-use-draggable-scroll` is imported but commented out in several files.

**When working with it**: Ask user before uncommenting or removing.

### Issue: Hardcoded dates

**Pattern**: Documentation dates are hardcoded as "2025.11.21".

**Future work**: This should likely be dynamic or pulled from a CMS.

---

## Testing Approach

**Current State**: No testing framework configured.

**If adding tests:**
1. Consider Jest + React Testing Library
2. Add test scripts to `package.json`
3. Create `__tests__` directories adjacent to components

---

## Performance Considerations

### Current Optimizations
- ✅ Next.js Image optimization
- ✅ Font optimization with `next/font`
- ✅ Automatic code splitting (App Router)

### Potential Improvements
- Consider lazy loading for heavy sections
- Optimize animation performance (use transform/opacity)
- Add loading states for images
- Consider static generation for unchanging content

---

## Git Workflow

### Branch Strategy
- Main branch: `main` (assumed, not explicitly configured)
- Feature branches: Use descriptive names
- Claude branches: Follow pattern `claude/claude-md-*`

### Commit Conventions
When committing code:
1. Use descriptive commit messages
2. Group related changes together
3. Follow conventional commits format (optional):
   - `feat: Add new feature`
   - `fix: Fix bug`
   - `docs: Update documentation`
   - `style: Update styling`
   - `refactor: Refactor code`

---

## AI Assistant Guidelines

### When Modifying Code

1. **Always read before editing**: Never propose changes without reading the file first
2. **Maintain consistency**: Follow existing patterns in the codebase
3. **Preserve "use client"**: All page components need this directive
4. **Keep Korean content**: Don't translate Korean text to English unless requested
5. **Respect the black theme**: All new sections should maintain the dark aesthetic
6. **Use Tailwind**: Don't add CSS modules or styled-components

### When Adding Features

1. **Check for duplication**: Many pages share identical content - extract to shared components if appropriate
2. **Follow section pattern**: New sections should follow the established full-height pattern
3. **Maintain smooth scroll**: Ensure new components work with Lenis
4. **Use Next.js Image**: Always use `next/image` for images, not `<img>`
5. **Type safety**: Add TypeScript interfaces for props

### When Refactoring

1. **One step at a time**: Don't refactor everything at once
2. **Preserve functionality**: Ensure smooth scrolling and animations still work
3. **Extract carefully**: When extracting shared components, ensure all pages that use them are updated
4. **Test thoroughly**: Check all routes after major refactors

### Communication Style

1. **Be specific**: Reference exact file paths and line numbers
2. **Explain Korean text**: If modifying Korean content, explain what it means
3. **Highlight breaking changes**: Clearly indicate if changes affect multiple files
4. **Suggest alternatives**: When there are multiple approaches, explain trade-offs

---

## Quick Reference

### File Locations
- **Root layout**: `app/layout.tsx`
- **Homepage**: `app/(main)/page.tsx`
- **Global styles**: `app/globals.css`
- **Header**: `widgets/header/Header.tsx`
- **Smooth scroll**: `shared/providers/LenisProviders.tsx`

### Common Tasks

**Add a new route:**
```bash
mkdir app/new-route
touch app/new-route/page.tsx
```

**Add a shared component:**
```bash
mkdir -p shared/ui/ComponentName
touch shared/ui/ComponentName/{ComponentName.tsx,index.ts}
```

**Add an image:**
```bash
# Place in public/
cp image.png public/
# Import in component
import imageName from "@/public/image.png"
```

---

## Project Context

### About NEXTFOAM
- Founded 2011 with 3 members
- Now 24 employees
- Korean CFD consulting company
- Develops BARAM open-source CFD software
- Based on OpenFOAM
- Serves 100+ institutions, 300+ consulting projects

### Website Purpose
This website serves as:
- Company portfolio and showcase
- Product marketing (BARAM software)
- Documentation hub
- News and press coverage aggregation
- Recruitment platform
- Community building tool

### Content Sections (Homepage)
1. Hero - Opening message
2. Introduction - Company history
3. Purpose - Mission and vision
4. BARAM - Product showcase
5. Portfolio - Project examples
6. Documentation - Technical resources
7. Press Coverage - News articles
8. Partnerships - Client logos
9. Releases - Product updates
10. Company News - Internal updates
11. Careers - Join team CTA
12. Footer - Contact information

---

## Additional Notes

### Language Mixing
- UI labels and navigation: Often in English
- Content: Primarily Korean
- Technical terms: English (CFD, OpenFOAM, etc.)
- This is intentional and should be preserved

### Accessibility Considerations
- **Current state**: Limited accessibility features
- **Future improvements**:
  - Add ARIA labels
  - Improve keyboard navigation
  - Add focus indicators
  - Consider motion preferences (prefers-reduced-motion)
  - Re-enable text selection for accessibility

### Browser Support
- Modern browsers (ES2017+)
- Targets latest Chrome, Firefox, Safari, Edge
- Mobile responsive design

---

## Contact & Resources

- **Company Email**: marketing@nextfoam.co.kr
- **Phone**: 070-8796-3019
- **Address**: 서울 금천구 디지털로9길 32 A동 1106호
- **Documentation**: Check `/docs` route (when implemented)

---

## Version History

- **v0.1.0**: Initial Next.js setup with Tailwind CSS 4
- **Current**: Active development of marketing pages

---

*Last Updated: 2025-12-10*
*This document should be updated whenever significant architectural changes are made.*
