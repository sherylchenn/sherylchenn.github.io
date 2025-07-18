# Sheryl Chen - Personal Portfolio Website

A beautiful, responsive portfolio website with a light peach pastel theme and retro computer font styling. Built with modern web technologies and designed to showcase your skills as a software engineer and CS student.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Light Peach Theme**: Professional yet unique color scheme with pastel peach tones
- **Retro Computer Font**: JetBrains Mono font for that classic programming aesthetic
- **Terminal-Inspired Elements**: Command prompts and terminal styling throughout
- **Smooth Animations**: Subtle hover effects, scroll animations, and transitions
- **Interactive Elements**: 
  - Clickable profile image upload
  - Email copy to clipboard
  - Dark/light theme toggle
  - Smooth scrolling navigation
  - Mobile-responsive hamburger menu
- **Three Main Sections**:
  - **Home**: Introduction, photo, and social links
  - **Portfolio**: Experiences, projects, and research
  - **Personal**: Podcast recommendations and interests

## 🚀 Quick Start

1. **Clone or download** this repository to your local machine
2. **Replace the placeholder content** with your own information
3. **Add your profile photo** by clicking on the placeholder image
4. **Update social media links** in the HTML file
5. **Deploy to GitHub Pages** (instructions below)

## 📝 Customization Guide

### Update Personal Information

1. **Profile Photo**: Click on the placeholder image on the home page to upload your own photo
2. **Bio**: Edit the introduction paragraph in the home section
3. **Social Links**: Update the href attributes in the social-links section:
   ```html
   <a href="https://github.com/yourusername" target="_blank" class="social-link">
   <a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-link">
   <a href="mailto:your.email@domain.com" class="social-link">
   ```

### Add Your Experiences

Update the timeline items in the portfolio section:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h4>Your Job Title</h4>
        <p class="company">Company Name</p>
        <p class="duration">Start Date - End Date</p>
        <p class="description">Description of your role and achievements...</p>
    </div>
</div>
```

### Add Your Projects

Update the project cards:
```html
<div class="project-card">
    <div class="project-header">
        <h4>Project Name</h4>
        <div class="project-links">
            <a href="github-link" target="_blank"><i class="fab fa-github"></i></a>
            <a href="live-demo-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
    <p>Project description...</p>
    <div class="tech-stack">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</div>
```

### Add Research Projects

Update the research items:
```html
<div class="research-item">
    <h4>Research Project Title</h4>
    <p class="research-lab">Lab/Institution Name</p>
    <p class="research-duration">Time Period</p>
    <p class="research-description">Description of your research...</p>
    <div class="research-tags">
        <span class="research-tag">Research Area 1</span>
        <span class="research-tag">Research Area 2</span>
    </div>
</div>
```

### Customize Podcast Recommendations

Update the podcast list in the personal section:
```html
<div class="podcast-item">
    <h4>Podcast Name</h4>
    <p>Description of why you recommend this podcast...</p>
</div>
```

### Update Interests & Hobbies

Modify the interests grid with your own interests:
```html
<div class="interest-item">
    <i class="fas fa-icon-name"></i>
    <span>Your Interest</span>
</div>
```

## 🎨 Color Customization

The color scheme is defined in CSS custom properties at the top of `styles.css`. You can easily change colors by modifying these variables:

```css
:root {
    --primary-peach: #FFCCCB;    /* Main peach color */
    --light-peach: #FFF5F5;      /* Light background */
    --soft-peach: #FFE5E5;       /* Soft accent */
    --medium-peach: #FFB6B6;     /* Medium accent */
    --dark-peach: #FF9A9A;       /* Darker accent */
    --accent-coral: #FF6B6B;     /* Coral accent */
    --accent-mint: #51D4A0;      /* Mint accent */
}
```

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Flexible grid layouts that adapt to screen size
- Optimized typography and spacing for all devices

## 🌙 Dark Mode

The website includes an optional dark mode toggle button (bottom right corner). The dark theme automatically adjusts all colors for better nighttime viewing.

## 🚀 Deployment to GitHub Pages

1. **Create a new repository** on GitHub named `yourusername.github.io`
2. **Upload all files** to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save
4. **Your site will be available** at `https://yourusername.github.io`

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons for social links and sections
- **Google Fonts**: JetBrains Mono for retro computer aesthetics

## ✨ Key Features Explained

### Terminal Aesthetic
- Command prompt styling in navigation and section headers
- Monospace font throughout for that classic coding feel
- Terminal-inspired color scheme with green text on dark backgrounds

### Animation Effects
- Smooth fade-in animations on scroll
- Hover effects on cards and buttons
- Glitch effect on the main heading
- Typing animation for terminal commands

### Interactive Elements
- Click profile image to upload your own photo (saves to browser storage)
- Email link copies email to clipboard with notification
- Theme toggle for dark/light mode switching
- Smooth scrolling navigation with active section highlighting

## 🎯 Performance Optimizations

- Throttled scroll events for better performance
- Optimized animations using CSS transforms
- Efficient DOM queries and event handling
- Responsive images and scalable vector icons

## 📞 Support

If you need help customizing your portfolio or have questions about deployment, feel free to refer to GitHub's documentation or web development resources.

## 📄 License

This portfolio template is free to use and modify for personal projects.

---

**Happy coding!** 🚀✨ 