# NOVA — Modern SaaS Landing Page Template

NOVA is a clean, modern, responsive SaaS landing page template built with plain HTML, CSS, and JavaScript.

It is designed for startups, SaaS products, agencies, digital services, and other modern businesses.

No frameworks or build tools are required.

---

## Features

* Responsive desktop, tablet, and mobile layouts
* Modern SaaS landing page design
* Responsive navigation with mobile menu
* Smooth anchor scrolling
* Interactive FAQ accordion
* CSS-based dashboard product preview
* Feature cards with inline SVG icons
* Pricing section with featured plan
* Testimonials section
* About section
* Contact form layout
* Call-to-action section
* Responsive footer
* CSS custom properties for easy theming
* Accessible focus states and button behavior

---

## File Structure

```text
NOVA/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

---

## Getting Started

NOVA does not require Node.js, npm, or any build system.

Simply open `index.html` in your browser.

For a better development experience, use a local development server such as the VS Code Live Server extension.

---

# Customization

Most visual customization can be done from the `:root` section at the beginning of:

```text
css/style.css
```

You can change the following:

### Brand Colors

```css
--color-primary: #6C5CE7;
--color-primary-dark: #5848D6;
--color-primary-soft: #EEE9FF;
--color-primary-light: #D8D2FF;
```

### Neutral Colors

```css
--color-text: #111111;
--color-muted: #666666;
--color-border: #E5E5E5;
--color-background: #FFFFFF;
--color-surface: #F8F8FF;
```

### Typography

```css
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 22px;
--font-size-2xl: 34px;
--font-size-3xl: 42px;
--font-size-hero: 64px;
```

### Border Radius

```css
--radius-sm: 8px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
```

### Spacing

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 80px;
```

---

# Changing the Brand

The demo brand is called **NOVA**.

To change the brand name, search for:

```text
NOVA
```

inside `index.html`.

The logo appears in the navbar, dashboard preview, and footer.

Replace it with your own company or product name.

Example:

```html
<a href="#" class="logo">YOUR BRAND</a>
```

---

# Editing Page Content

All main page content can be edited directly in:

```text
index.html
```

The page includes:

1. Navbar
2. Hero
3. Dashboard Preview
4. Features
5. How It Works
6. About
7. Pricing
8. Testimonials
9. FAQ
10. Contact
11. CTA
12. Footer

You can edit, remove, duplicate, or reorder sections as needed.

---

# Editing the Hero

The main headline can be changed here:

```html
<h1>
    Build smarter.
    <span>Launch faster.</span>
</h1>
```

The highlighted second line uses the primary brand color.

You can replace the text with your own headline.

---

# Editing Features

Each feature follows the same reusable structure:

```html
<div class="feature-card">

    <div class="feature-icon">
        ...
    </div>

    <h3>Feature Title</h3>

    <p>
        Feature description.
    </p>

</div>
```

You can change:

* Feature title
* Description
* SVG icon

The existing icons are inline SVGs, so no external icon library is required.

---

# Editing Pricing

Pricing plans are located in the Pricing section of `index.html`.

You can edit:

* Plan name
* Price
* Billing period
* Included features
* Button text
* Recommended plan

Example:

```html
<div class="pricing-card">

    <h3>Starter</h3>

    <div class="price">
        <span>$19</span>
        <small>/month</small>
    </div>

</div>
```

The featured plan uses:

```html
<div class="pricing-card featured">
```

and includes:

```html
<span class="pricing-badge">
    MOST POPULAR
</span>
```

You can remove the `featured` class and badge if you do not want a highlighted plan.

---

# Editing Testimonials

Testimonials are demo content and should be replaced with your own customer testimonials.

Each testimonial uses:

```html
<div class="testimonial-card">
    ...
</div>
```

Replace the sample name, company, role, and testimonial text with your own content.

---

# Editing FAQ

The FAQ section contains an interactive accordion.

Each FAQ item follows this structure:

```html
<div class="faq-item">

    <button
        type="button"
        class="faq-question">

        Question?

        <span>+</span>

    </button>

    <div class="faq-answer">
        <p>
            Answer.
        </p>
    </div>

</div>
```

The interaction is handled automatically by:

```text
js/script.js
```

You can add additional FAQ items by copying an existing `.faq-item`.

---

# Contact Form

The Contact section includes a styled HTML form.

The current form is a **front-end template only**.

It does not automatically send email or store submissions.

To make the form functional, connect it to your preferred:

* Form service
* Backend
* API
* Server-side email handler

The demo email address should also be replaced with your own contact address.

---

# JavaScript

JavaScript is located in:

```text
js/script.js
```

It currently handles:

* Mobile navigation
* Mobile menu state
* `aria-expanded` navigation state
* Closing the mobile menu after selecting a link
* FAQ accordion behavior

No JavaScript framework is required.

---

# Responsive Breakpoints

NOVA includes three layout ranges:

### Desktop

```text
1025px and above
```

### Tablet

```text
769px – 1024px
```

### Mobile

```text
768px and below
```

The responsive styles are located near the bottom of:

```text
css/style.css
```

---

# Changing the Design

For quick visual changes, start with the variables in:

```text
:root
```

For deeper changes, edit the component styles below the theme section.

Common customization targets include:

```text
Colors
Typography
Spacing
Border radius
Card styles
Buttons
Section spacing
Responsive behavior
```

---

# Demo Content

The following content is included as sample/demo content and should be replaced when using the template for a real project:

* NOVA brand name
* Demo dashboard information
* Demo user names
* Demo companies
* Demo statistics
* Pricing values
* Testimonials
* Contact information

---

# Credits & Dependencies

NOVA is built using:

* HTML5
* CSS3
* Vanilla JavaScript
* Inline SVG

No external CSS framework or JavaScript framework is required.

---

# License

This template is intended to be customized and used according to the license terms provided with your purchase.

Please refer to the license file included with your package for usage and redistribution restrictions.

---

## Support

For template-specific support, refer to the documentation included with your purchase.

Enjoy building with NOVA.
