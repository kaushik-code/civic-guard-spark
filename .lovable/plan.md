

## Fix Heading Colors, Improve Fonts, Animations, and Buttons

### Root Cause: Missing Dark Mode
The biggest issue is that the site renders in **light mode** by default (light background with dark text), but all the design -- glassmorphism cards, glowing effects, gradient headings -- was built for a dark theme. This causes headings and text to clash with backgrounds across every section.

**Fix:** Add `class="dark"` to the `<html>` tag in `index.html` so the dark CSS variables activate.

---

### Changes Overview

#### 1. Enable Dark Mode (index.html)
Add `class="dark"` to `<html>` so the dark color palette (navy backgrounds, light text, glowing accents) takes effect across all sections.

#### 2. Upgrade Typography (index.css)
- Replace current font imports with **Plus Jakarta Sans** (body) and **Sora** (headings) -- modern, geometric, premium startup fonts
- Update `font-family` declarations in both CSS and Tailwind config

#### 3. Fix FooterSection (FooterSection.tsx)
- Remove ~200 empty lines that are a clear bug
- Clean up the component structure

#### 4. Better Hero Background (hero-city.png)
- Generate a new higher-quality cinematic smart city image with deeper blues and more visible data-stream effects

#### 5. Enhanced Buttons (index.css + components)
- Add gradient border effect on outline buttons
- Improve hover states with smoother scale transitions and richer glow
- Add subtle shimmer/shine animation on primary CTA buttons
- Increase padding and border-radius for a more premium feel

#### 6. Smoother Animations (ScrollReveal.tsx + all sections)
- Increase ScrollReveal duration and use smoother cubic-bezier easing
- Add stagger delays to card grids for a cascade reveal effect
- Smooth out hover transitions (use spring physics instead of linear)
- Add subtle parallax depth to section backgrounds
- Improve the floating phone mockup animation timing

#### 7. Section-Level Polish (all section components)
- Ensure all heading gradient text (`text-gradient-blue`, `text-gradient-emerald`) has proper contrast against the dark background
- Add subtle divider gradients between sections for smoother visual flow
- Improve glass-card backdrop-blur and border opacity for better depth

---

### Technical Details

**Files to modify:**
- `index.html` -- add `class="dark"`
- `src/index.css` -- new font imports (Plus Jakarta Sans, Sora), button shimmer keyframe, section divider styles, improved glass-card values
- `tailwind.config.ts` -- update fontFamily entries
- `src/assets/hero-city.png` -- regenerate with better quality
- `src/components/ScrollReveal.tsx` -- smoother easing, longer duration
- `src/components/HeroSection.tsx` -- smoother particle/line animations, better button markup
- `src/components/ProblemSection.tsx` -- staggered card animations
- `src/components/SolutionSection.tsx` -- smoother connection line animations
- `src/components/CivicCreditsSection.tsx` -- improved dashboard glow
- `src/components/TrustSection.tsx` -- staggered reveals
- `src/components/MarketSection.tsx` -- improved counter styling
- `src/components/WhyNowSection.tsx` -- smoother timeline animation
- `src/components/FounderSection.tsx` -- refined text animations
- `src/components/InvestorCTASection.tsx` -- better CTA buttons
- `src/components/FooterSection.tsx` -- fix empty lines bug, clean up

