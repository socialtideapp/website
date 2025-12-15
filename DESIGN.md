# Social Tide Design System

## Color Palette

Our design follows the natural colors of water, the tide, and the sun, creating a calming yet energetic atmosphere.

### Ocean & Water Colors
- **Ocean Deep**: `#0a4d68` - Deep ocean blue, used for depth and contrast
- **Ocean Light**: `#088395` - Lighter ocean blue, primary brand color
- **Tide Blue**: `#05bfdb` - Bright tide color, used for accents and highlights
- **Ocean Foam**: `#e0f4f7` - Light foam color, used for text on dark backgrounds

### Sun Colors
- **Sun Yellow**: `#ffd93d` - Bright yellow, represents warmth and connection
- **Sun Orange**: `#ff9a3d` - Orange gradient, adds energy to CTAs

## Typography

- **Headings**: Bold, using system fonts for fast loading
- **Body Text**: Clean, readable sans-serif stack
- **Font Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

## Design Principles

### 1. **Performance First**
- Minimal JavaScript
- Static site generation
- Optimized assets
- Fast page loads

### 2. **Ocean-Inspired Aesthetics**
- Gradient backgrounds mimicking water depths
- Animated wave effects for subtle movement
- Smooth transitions like tide movements
- Rounded corners reflecting natural water shapes

### 3. **Mobile-First**
- Responsive design starting from mobile
- Touch-friendly interactive elements
- Readable text sizes on all devices

### 4. **Accessibility**
- High contrast ratios
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support

## Components

### Hero Section
- Large, bold typography
- Animated logo/icon with sun colors
- Clear value proposition

### Feature Cards
- Glass morphism effect (backdrop blur + transparency)
- Hover states for interactivity
- Icon + title + description pattern

### CTA Section
- Prominent placement
- Sun gradient background for attention
- "Coming Soon" state with disabled styling
- App store badge icons

### Animations
- **Wave Animation**: Subtle background movement (15-25s cycles)
- **Pulse Animation**: Logo breathing effect (4s cycle)
- **Hover Transitions**: 300ms for smooth interactions

## Usage Guidelines

### Adding New Sections
When adding content, maintain the ocean theme:
- Use colors from the defined palette
- Keep backgrounds gradient-based
- Add subtle animations for engagement
- Ensure responsive design

### Color Usage
- **Primary Actions**: Sun orange/yellow gradient
- **Backgrounds**: Ocean deep → tide blue gradients
- **Text on Dark**: Ocean foam (#e0f4f7)
- **Text on Light**: Ocean deep (#0a4d68)
- **Borders**: White with 10-30% opacity

### Spacing
- Use Tailwind's spacing scale
- Maintain consistent padding (p-6, p-8, p-12)
- Generous white space for breathing room

## Future Enhancements

Consider adding:
- **Dark mode toggle** (optional, but colors work well in light mode)
- **Micro-interactions** on scroll
- **Video background** of ocean waves
- **FAQ section** with accordion
- **Email signup** for launch notification
