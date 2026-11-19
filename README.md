# AERELLE — Salon & Beauty Studio

A six-page static salon website built with HTML, CSS and native JavaScript modules. All fonts and photographs are served from the project.

AERELLE is a proposed working brand. Trademark and domain availability have not been verified.

Live site — https://teknritsolutions-2.github.io/Salon-Beauty-Parlour/

## Preview

From the project root, run `python3 -m http.server 8000 --bind 127.0.0.1`. Open [the homepage](http://127.0.0.1:8000/). Use HTTP for preview so the browser can load JavaScript modules.

## Pages

| Page | File |
| --- | --- |
| Main homepage | `index.html` |
| Occasion-based homepage | `pages/home2.html` |
| Services | `pages/services.html` |
| Pricing menu | `pages/pricing.html` |
| Inspiration gallery | `pages/gallery.html` |
| Contact and appointment requests | `pages/contact.html` |

## Content and configuration

- Edit service names, categories, durations, descriptions and indicative INR prices in `assets/js/services-data.js`. Keep service IDs stable for existing booking links.
- Set verified contact details in `assets/js/site-config.js`. Empty fields are omitted from the contact page.
- The gallery catalogue in `assets/js/gallery.js` defines image categories, descriptions and intrinsic sizes.
- Colours, layout and type scales are in `assets/css/`. Theme and direction preferences persist in browser storage when available.
- See [asset credits](documentation/asset-credits.md) and the [browser QA report](documentation/qa-report.md).

## Booking

The browser validates the visitor's details, preferred local date and time, and treatment selection. Visitors can review, edit and download their request. Personal booking information stays in page memory and the customer’s downloaded file. Reloading the page clears the form.

To receive live booking requests, connect a salon-approved delivery or scheduling system. To confirm appointments automatically, integrate staff calendars, enforce availability and conflicting-slot checks on the server, and return the salon’s confirmation to the customer.

## GitHub Pages

Publish the repository root from the chosen branch with GitHub Pages. No build command or server rewrite is required. Navigation, scripts, styles, photographs and fonts use relative paths, including when the site is hosted under a repository subdirectory.
