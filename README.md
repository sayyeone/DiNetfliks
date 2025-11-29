# DiNetfliks

A modern Netflix-style streaming platform landing page. Clean design, interactive features, and fully responsive.

**Live Demo:** [DiNetfliks.github.io](https://sayyeone.github.io/DiNetfliks/)
## What's This?

DiNetfliks is a complete landing page for a movie and TV show streaming service. Features trending content rankings, FAQ section, login modal, and smooth animations throughout. Perfect for showcasing a streaming service concept or as a portfolio project.

## Tech Stack

Just the basics:

* HTML5 & CSS3
* Tailwind CSS (via CDN)
* Vanilla JavaScript
* Custom animations

No build tools required. Download and open.

## Getting Started

**Option 1: Just open it**

Clone the repo and double-click `index.html`. Done.
```
git clone https://github.com/yourusername/distreaming.git
cd distreaming
# Double click index.html
```

**Option 2: Use Live Server (recommended)**

If you're using VS Code:
1. Install the Live Server extension
2. Right click `index.html` → Open with Live Server
3. Browser opens automatically at `localhost:5500`

**Option 3: Python server**
```
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

## Deploying to GitHub Pages

Want to put this online? Super easy.

1. Push your code to GitHub:
```
git add .
git commit -m "initial commit"
git push origin main
```

2. Go to your repo → Settings → Pages
3. Under "Source", select `main` branch and `/ (root)` folder
4. Hit Save and wait a minute

Your site will be live at `https://yourusername.github.io/distreaming`

**Custom Domain**

Got your own domain? Create a `CNAME` file with your domain:
```
yourdomain.com
```

Then configure DNS with your domain provider. Wait 24 hours for propagation.

## Customizing

Everything's straightforward to customize.

**Change colors:** Edit the Tailwind classes or add custom CSS in `style.css`:
```css
/* Main brand color: red-600 */
.bg-red-600 { background-color: #your-color; }
```

**Update trending content:** Replace image URLs in `index.html`:
```html
<img src="your-image-url.jpg" alt="Trending 1">
```

**Modify FAQ:** Edit questions and answers directly in the FAQ section:
```html
<span>Your question?</span>
<p>Your answer here.</p>
```

**Change pricing:** Update the pricing text in the FAQ section to match your needs.

## Project Structure
```
distreaming/
├── index.html          # Main landing page
├── old-page.html       # Legacy design
├── script.js           # JavaScript functionality
├── style.css           # Custom styles
├── old-style.css       # Legacy page styles
├── img/                # Image assets
└── README.md           # You're reading it
```

Simple structure - easy to understand and modify.

## Features

* **Hero Section** - Full-screen hero with gradient overlay and CTA
* **Trending Rankings** - Top 5 content with large numbered displays
* **Feature Cards** - 4 benefit cards with gradient backgrounds
* **FAQ Accordion** - Interactive collapsible Q&A section
* **Login Modal** - Form validation for name and email
* **Responsive Design** - Works perfectly on all devices
* **Smooth Animations** - Hover effects and transitions
* **Old Page** - Preserved legacy design for comparison

## Browser Support

Works on all modern browsers:

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest)

## Credits

* Design inspired by Netflix
* Tailwind CSS for styling
* Images from Netflix CDN (for demonstration)

---

Made with ❤️ by [Sayyeone](https://github.com/sayyeone)

Questions? Open an issue or reach out!
