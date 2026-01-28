# Conscious Nurturing Website

A professional, responsive static website for Conscious Nurturing - a mental health and life skills education organization for school students and adolescents.

## About Conscious Nurturing

Conscious Nurturing is founded by a team of five certified psychiatrists specializing in adolescent mental health. We provide structured life skills education and mental wellness programs for school students, designed in alignment with the World Health Organization (WHO) framework.

## Website Features

- **5 Complete Pages:**
  - Home Page with hero section and service highlights
  - About Us Page with mission, vision, and team information
  - Services Page with detailed program descriptions
  - Events & Programs Page showcasing past and upcoming initiatives
  - Contact Us Page with form validation and contact information

- **Professional Design:**
  - Calm, trustworthy color scheme (blues and greens)
  - Fully responsive for mobile, tablet, and desktop
  - Clean typography and accessible layout
  - Smooth animations and transitions

- **Technical Features:**
  - Semantic HTML5 markup
  - Custom CSS with organized structure
  - JavaScript form validation
  - Mobile-friendly navigation
  - SEO-friendly meta tags
  - No backend required (static site)

## Folder Structure

```
Conscious/
│
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── events.html             # Events & Programs page
├── contact.html            # Contact page
├── README.md               # This file
│
├── css/
│   └── styles.css          # Main stylesheet
│
├── js/
│   └── main.js             # JavaScript for navigation and form validation
│
└── images/                 # Placeholder folder for images
    └── .gitkeep            # (Place your images here)
```

## Setup Instructions

### 1. Local Setup

1. **Download or clone the website files** to your local machine

2. **Place images** (optional):
   - Add your organization's logo, photos, and graphics to the `images/` folder
   - Update image references in HTML files if needed

3. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - No server or build process required!

### 2. Testing

- **Desktop**: Open in Chrome, Firefox, Safari, or Edge
- **Mobile**: Test responsive design by resizing browser window or using browser dev tools
- **Form Validation**: Try submitting the contact form to see validation in action

### 3. Customization

#### Update Contact Information

Current contact information:

- **Director**: Dr. S. Perarul
- **Phone**: +91-8148391318
- **Email**: info@consciousnurturing.com

To update, edit the footer sections in all HTML files.

#### Update Colors

Edit `css/styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #4A90E2;        /* Main blue color */
    --secondary-color: #7CB342;      /* Green accent */
    --accent-color: #66BB6A;         /* Light green */
}
```

#### Add Your Logo

1. Place your logo in the `images/` folder
2. Update the nav-brand section in each HTML file:

```html
<div class="nav-brand">
    <img src="images/logo.png" alt="Conscious Nurturing" style="height: 40px;">
</div>
```

## Deployment Options

### Option 1: Netlify (Recommended - Free)

1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop your website folder
3. Get instant live URL
4. Custom domain support available

### Option 2: GitHub Pages (Free)

1. Create GitHub account
2. Create new repository
3. Upload all files
4. Enable GitHub Pages in repository settings
5. Access at `username.github.io/repository-name`

### Option 3: Traditional Web Hosting

1. Purchase hosting plan (Hostinger, Bluehost, etc.)
2. Upload files via FTP/cPanel
3. Point your domain to hosting

### Option 4: Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Import project from GitHub or upload directly
3. Get instant deployment

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Form Validation Features

The contact form includes:

- **Real-time validation** on field blur
- **Required field checking**
- **Email format validation**
- **Phone number validation** (10-digit Indian format)
- **Minimum length validation** for name and message
- **Auto-formatting** for phone numbers
- **Character counter** for message field
- **Success message** display
- **Accessibility** features for screen readers

## Customization Guide

### Add New Service

1. Open `services.html`
2. Copy an existing `.service-detail` section
3. Update content, icon, and description
4. Save and refresh browser

### Add New Event

1. Open `events.html`
2. Copy an existing `.event-card`
3. Update date, title, venue, and description
4. Save and refresh browser

### Modify Navigation

Edit the navigation menu in all HTML files:

```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <!-- Add more links here -->
</ul>
```

## SEO Optimization

Each page includes:

- Meta descriptions
- Relevant keywords
- Semantic HTML structure
- Descriptive headings (H1-H4)
- Alt text ready for images

To improve SEO further:

1. Add unique meta descriptions for each page
2. Include alt text when adding images
3. Submit sitemap to Google Search Console
4. Add Google Analytics tracking code

## Accessibility

The website follows accessibility best practices:

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High color contrast ratios
- Focus indicators for navigation
- Screen reader friendly structure

## Performance

- **Lightweight**: No heavy libraries or frameworks
- **Fast loading**: Minimal CSS and JavaScript
- **Optimized**: Uses modern CSS for animations
- **No dependencies**: Pure HTML, CSS, and JavaScript

## Support & Maintenance

### Regular Updates

- Update events page with new programs quarterly
- Refresh statistics on impact section annually
- Update team information as needed
- Add new success stories and testimonials

### Backup

- Keep regular backups of all files
- Use version control (Git) for change tracking
- Document any customizations

## Technical Specifications

- **HTML Version**: HTML5
- **CSS Version**: CSS3
- **JavaScript**: ES6+ (modern browsers)
- **Responsive Breakpoints**:
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: 320px - 767px

## License

© 2026 Conscious Nurturing Pvt Ltd. All rights reserved.

This website is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact for Website Support

For technical support or questions about the website:

- **Director**: Dr. S. Perarul
- **Phone**: +91-8148391318
- **Email**: info@consciousnurturing.com

---

**Built with care for mental wellness education** 🧠💚

For updates and more information, visit the live website or contact the Conscious Nurturing team.
