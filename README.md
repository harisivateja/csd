# Centralized Student Dashboard - Presentation Website

## Project Overview

**Team:** Group 20 - QuadraMind  
**Institution:** Horizon State University  
**Project:** Centralized Student Dashboard  
**Team Members:**
- Shashank Manchikatla
- Hari Siva Sai Teja Mogali
- Manindra Porandla
- Manohar Naidu Talari
- Sandeep Thota

## About This Website

This is a static HTML presentation website showcasing the Centralized Student Dashboard project. Built for a 5-minute, 5-speaker presentation, the site serves as both a visual aid during the presentation and a portfolio piece demonstrating the team's work.

### Key Features

- **10 Self-Contained HTML Pages** - Each page is fully functional with inline CSS and minimal JavaScript
- **Dark Mode Toggle** - Persistent theme switching with localStorage
- **Responsive Design** - Mobile-first approach with elegant breakpoints
- **Modern UI** - Clean, colorful, and highly visual design
- **Accessibility-Focused** - Semantic HTML, alt text, keyboard-friendly navigation
- **Zero Dependencies** - No build tools, no external CSS/JS libraries required
- **Google Fonts Only** - Inter (body) + Playfair Display (headings)

## Site Structure

```
project/
├── index.html           # Home page + Executive Summary
├── problem.html         # Problem Statement & Stakeholders
├── research.html        # Research & Insights
├── solution.html        # Proposed Solution & Features
├── architecture.html    # System Architecture (3-tier)
├── data.html            # Data Design & ERD
├── dashboard.html       # Dashboard Screenshots & Insights
├── ethics.html          # Ethical Considerations
├── lessons.html         # Lessons Learned & Timeline
├── appendix.html        # Resources, References, Links
├── images/              # Image assets folder
│   ├── hero-abstract.jpg
│   ├── enterprise-architecture.png
│   ├── erd-diagram.png
│   ├── dashboard-home.png
│   └── [additional AI-generated images]
├── README.md            # This file
├── AI_IMAGE_PROMPTS.md  # Prompts for generating images
└── PRESENTATION_SCRIPT.md # 5-minute presentation script
```

## How to Run Locally

### Option 1: Direct File Open
1. Download/clone this repository
2. Navigate to the project folder
3. Double-click `index.html` to open in your default browser
4. Navigation between pages works immediately

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (install http-server globally first)
npx http-server -p 8000
```
Then visit: `http://localhost:8000`

## Deploying to GitHub Pages

### Step 1: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit: Student Dashboard presentation site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Step 3: Verify Links
Once deployed, verify all internal links work correctly:
- Navigation between pages
- Dashboard link to https://harisivasaiteja.github.io/Studentdashboard/
- Image displays (lightbox functionality)

## Adding Images

### Where to Place Images
All images go in the `/images/` folder. Create it if it doesn't exist:
```bash
mkdir images
```

### Required Images

#### From Your Report (Extract these from your PDF/Doc):
1. **enterprise-architecture.png** - 3-tier architecture diagram
2. **erd-diagram.png** - Entity Relationship Diagram

#### From Your Live Dashboard (Take screenshots):
3. **dashboard-home.png** - Main dashboard view with KPI cards

#### AI-Generated Images (See AI_IMAGE_PROMPTS.md):
4. **hero-abstract.jpg** - Hero section background (abstract tech)
5. **data-integration.jpg** - Visual for data consolidation
6. **teamwork-collaboration.jpg** - Team working on analytics
7. **predictive-analytics.jpg** - AI/ML concept visualization
8. **student-success.jpg** - Students celebrating/studying
9. **ethical-technology.jpg** - Privacy/security concept

### Image Specifications
- **Format:** JPG for photos, PNG for diagrams/screenshots
- **Size:** Max 1920px width (for performance)
- **Quality:** 80-85% JPEG quality is sufficient
- **Naming:** Use lowercase with hyphens (e.g., `dashboard-home.png`)

### Replacing Placeholder Images
1. Generate/capture your images
2. Name them exactly as referenced in the HTML
3. Place them in the `/images/` folder
4. Refresh your browser - images will display automatically

## Updating Content

### Executive Summary (index.html)
Find this section around line 180:
```html
<section id="executive-summary">
```
Edit the text content within this section.

### Team Members (index.html)
Find this section around line 260:
```html
<div class="team-grid">
```
Add/remove/edit team member cards as needed.

### Dashboard Link
The live dashboard link appears in multiple places:
- Hero CTA button: `<a href="https://harisivasaiteja.github.io/Studentdashboard/">`
- Footer quick links
- Dashboard page

Use Find & Replace to update all occurrences if URL changes.

### Date
Update "Last updated" in footer across all pages:
```html
<p>&copy; 2025 Group 20 - QuadraMind. Last updated: January 2025</p>
```

## Dark Mode

Dark mode is implemented with pure CSS variables and localStorage persistence:

**Toggle:** Click the "🌓 Theme" button in the navigation bar

**How it works:**
- CSS variables defined for both light/dark themes
- JavaScript toggles `data-theme="dark"` attribute on `<html>`
- Choice is saved to localStorage
- On page load, saved preference is applied

**Customizing colors:**
Edit CSS variables in each HTML file's `<style>` section:
```css
:root {
    --primary: #2563eb;      /* Light mode primary color */
    --secondary: #10b981;    /* Light mode secondary color */
    /* ... */
}

[data-theme="dark"] {
    --primary: #3b82f6;      /* Dark mode primary color */
    /* ... */
}
```

## Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

**Minimum requirements:**
- CSS Grid support (2017+)
- CSS Variables support (2016+)
- localStorage API (2011+)

## Performance

**Inline CSS benefits:**
- No external CSS file requests
- Instant page rendering
- No flash of unstyled content (FOUC)

**Optimization tips:**
- Images should be compressed (use TinyPNG or similar)
- Each HTML file is ~15-20KB (extremely fast)
- Google Fonts are preconnected for speed

## Accessibility Checklist

- ✅ Semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`)
- ✅ Logical heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for all images (add when placing images)
- ✅ Keyboard navigation support (tab, enter, escape)
- ✅ Sufficient color contrast (WCAG AA compliant)
- ✅ Focus states on interactive elements
- ✅ Smooth scroll behavior for internal links

## Troubleshooting

### Images not displaying?
1. Check image filenames match exactly (case-sensitive)
2. Verify images are in `/images/` folder
3. Check browser console for 404 errors (F12 → Console)

### Dark mode not persisting?
1. Check if localStorage is enabled in browser
2. Try clearing browser cache and refreshing
3. Some privacy modes disable localStorage

### Links not working?
1. Verify all HTML files are in the same directory
2. Check for typos in `href` attributes
3. Relative links should start with `./` or just the filename

### Mobile display issues?
1. Ensure `<meta name="viewport">` tag is present
2. Test with browser dev tools mobile emulation (F12 → Device Toolbar)
3. Check responsive breakpoints in CSS `@media` queries

## Credits

**Project Team:** Group 20 - QuadraMind  
**Institution:** Horizon State University  
**Year:** 2025  

**Design System:**
- Typography: Google Fonts (Inter, Playfair Display)
- Color Palette: Custom (Blue primary, Green secondary, Amber accent)
- Layout: CSS Grid + Flexbox
- Animations: CSS transitions and keyframes

**Special Thanks:**
- Horizon State University for the opportunity
- Our advisors and stakeholders for feedback
- Research cited in the References section

## License

This project is for academic/portfolio purposes.  
Feel free to use this template structure for your own presentations.

---

**Need Help?**  
Contact: group20@horizonstate.edu  
Live Dashboard: https://harisivasaiteja.github.io/Studentdashboard/