---
name: Precision Academic System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5c3f40'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0037'
  primary: '#b80035'
  on-primary: '#ffffff'
  primary-container: '#e11d48'
  on-primary-container: '#fffaf9'
  inverse-primary: '#ffb3b6'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#535b71'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c738a'
  on-tertiary-container: '#fcfaff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  max-width: 1280px
---

## Brand & Style

The design system is engineered for **TrainRight Technologies**, a professional educational platform that prioritizes accuracy, authority, and student success. The brand personality is disciplined and high-performance, bridging the gap between traditional academic rigor and modern digital efficiency.

The visual style is **Corporate / Modern** with a focus on high-clarity information architecture. It utilizes a structured grid, bold typographic hierarchies, and a high-energy color palette to drive engagement while maintaining institutional trust. The interface avoids unnecessary flourishes, opting instead for functional aesthetics that reflect the precision required in professional training and certification.

## Colors

The palette is derived directly from the institutional logo, utilizing a "Triple-Threat" color strategy of Red, Blue, and Black to signal urgency, intelligence, and authority.

- **Primary (Academic Red):** Used for critical actions, progress indicators, and primary branding elements. It signifies energy and the "check-mark" of completion.
- **Secondary (Digital Blue):** Used for navigation, interactive components, and links. It provides a professional, calming counter-balance to the red.
- **Tertiary (Deep Obsidian):** Used for headings and high-contrast text to ensure maximum readability and a premium feel.
- **Surface & Background:** A clean, paper-white base (`#FFFFFF`) with subtle off-white (`#F8FAFC`) containers to keep the focus on the educational content.

## Typography

Typography in the design system is a study in clarity. **Montserrat** is the primary choice for headings, providing a geometric, authoritative presence that feels modern yet established. **Inter** is utilized for all body copy and UI labels, selected for its exceptional legibility at small sizes and its neutral, systematic tone.

- **Scale:** A 1.25x (Major Third) scale is applied for headlines to ensure clear information hierarchy.
- **Hierarchy:** Use bold weights for headlines to anchor the page, while keeping body text at a standard regular weight to reduce cognitive load during long reading sessions.
- **Legibility:** Line heights are intentionally generous (1.5x for body) to facilitate better reading comprehension for educational materials.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is centered on "Focused Density"—meaning information is organized tightly but separated by clear, logical margins to prevent overwhelm.

- **Breakpoints:** Mobile (<600px), Tablet (600px-1024px), Desktop (>1024px).
- **Gutter & Margins:** A consistent 24px gutter ensures elements don't feel cramped. Desktop layouts are capped at 1280px to maintain optimal line lengths for educational content.
- **Vertical Rhythm:** All vertical spacing must be a multiple of 4px. Use `stack-lg` for separating major sections and `stack-sm` for internal component elements (like a label above an input).

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows to convey depth. This maintains the "Modern & Clean" aesthetic while ensuring the UI feels light and fast.

- **Level 0 (Base):** Primary background (`#FFFFFF`).
- **Level 1 (Cards/Containers):** Subsurface (`#F8FAFC`) with a subtle 1px border (`#E2E8F0`).
- **Level 2 (Interactive):** When a user hovers over an element, apply a soft, neutral shadow (0px 4px 12px rgba(15, 23, 42, 0.08)) to suggest lift.
- **Level 3 (Modals/Overlays):** Distinct separation using a semi-transparent backdrop blur (12px) and a medium shadow to focus the user's attention entirely on the task at hand.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding removes the aggressive sharpness of brutalist designs while maintaining the professional, "engineered" look required for an educational platform.

- **Standard Elements:** Buttons, inputs, and small chips use the base 0.25rem (4px) radius.
- **Large Containers:** Course cards and modal windows use `rounded-lg` (8px) to soften the overall layout.
- **Progress Bars:** Use a full "pill" radius for progress tracks to distinguish them from interactive containers.

## Components

### Buttons
- **Primary:** Academic Red background, White text. High contrast, used for "Start Course" or "Submit."
- **Secondary:** White background, Digital Blue border and text. Used for "Save Draft" or "View Details."
- **Tertiary:** No border, Obsidian text. Used for "Cancel" or "Go Back."

### Input Fields
Inputs use a white background with a 1px Slate border. On focus, the border shifts to Digital Blue with a 2px offset ring to provide high visibility for accessibility.

### Progress & Status
- **Success:** Use a check-mark icon within a red circle (per the logo) to indicate completed modules.
- **In-Progress:** Use Digital Blue for active progress bars.

### Cards
Educational cards should be minimal. Use a white surface, Level 1 border, and Montserrat Bold for titles. Categorization chips should be placed in the top-left corner using the Secondary (Blue) palette with 10% opacity for the background.

### Lists & Navigation
Sidebar navigation uses Deep Obsidian for text, with a thick Red left-border indicator to mark the active section. This reinforces the brand's precision and "Current Location" within the learning path.