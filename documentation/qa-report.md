# AERELLE browser QA

Verified on 19 November 2026 using headless Brave/Chromium and Playwright.

## Current identity and scope

AERELLE replaces the former brand throughout all six pages, metadata, shared navigation, drawer, footer, favicon, configuration and downloaded appointment requests. The original bird SVG is shared across brand placements and remains unmirrored in RTL. Instrument Serif and DM Sans remain self-hosted.

Cloud white, neutral surfaces and ink form the foundation. Deep sky #356D88 serves buttons and selected details in light mode. Pale sky #A6D5ED provides contrasting actions and accents on near-black dark-mode surfaces. The direction control shows its next action as RTL or LTR, with matching accessible labels.

Home 1 has a headline above a landscape consultation photograph, the consultation experience and a colour-process detail feature. Existing signature services, shared-data highlights, studio introduction, Lookbook and closing invitation remain. Home 2 retains its separate photographic hero and occasion navigation, adds the Occasion Edit and consolidates the former planning steps into Your Appointment, Your Way.

Contact adds functional enquiry navigation, visit preparation and five FAQ disclosures. The existing request form, validation, review, edit, preparation and download remain.

## Photography audit

Static HTML references and the dynamically generated service/gallery catalogues were audited.

| Placement | Image |
| --- | --- |
| Home 1 hero | banner.webp, new landscape consultation |
| Home 1 Experience | hero.webp, replaced with curls being styled |
| Home 1 Signature Services | hair.webp, skin.webp, makeup.webp retained |
| Home 1 Inside the Studio | interior.webp retained |
| Home 1 Beauty Details | colour.webp, moved from the Home 2 feature |
| Home 1 Lookbook | waves.webp and bridal.webp retained, look-skin.webp replaces the repeated skin.webp |
| Home 2 hero | studio-edit.webp retained |
| Home 2 Occasion Edit | occasion-hair.webp, occasion-skin.webp, occasion-makeup.webp, all new |
| Home 2 Bring Your Inspiration | wash.webp replaces colour.webp |
| Services | Category thumbnails retain the established hair/skin/makeup references |
| Pricing and Contact | No decorative photographs added |
| Gallery | Existing references retained, updated curls image and the new facial-massage Lookbook reference included |

The two homepages have distinct major photographic features. Each homepage uses each of its photographs once. Category thumbnails and gallery references provide continuity with the service menu and preview links. Source credits and licenses are recorded in asset-credits.md.

## Functional verification

The baseline regression suite was repeated across 78 page/width combinations, with internal links checked under a GitHub Pages-style subdirectory. It covered desktop Home dropdown and Escape, sticky header, physical-left drawer in both directions, scrolling lock, theme/direction persistence, category filters, service links, booking preselection, gallery filtering, lightbox navigation and keyboard dismissal, invalid phone/email/past dates, review/edit/preparation, downloaded text, FAQ disclosure and back-to-top.

Additional browser checks covered Contact's three category shortcuts, the general consultation link, all five FAQ disclosures, RTL/LTR text and persistence, unmirrored brand flow, editing a category after review, the AERELLE request contents and aerelle-appointment.txt filename.

The responsive matrix covered all six pages at 320, 390, 430, 768, 820, 1024, 1180, 1280 and 1440 pixels in light/dark and LTR/RTL, totalling 216 combinations. The 1180-pixel width supplements the requested set. Images decoded successfully and no horizontal overflow or JavaScript exceptions were recorded.

Full-page screenshots were inspected for all six pages on mobile, tablet and desktop, including light RTL and dark LTR tablet views and dark RTL mobile views. Review included hero framing, portrait proportions, added sections, Contact spacing, logo scale, footer grouping and control visibility. Hero intrinsic sizing was corrected during visual review. Browser scripts and screenshots are retained outside the deployable project in /tmp.

## Deployment and remaining integration

The release uses the existing repository and GitHub Pages address. Native JavaScript modules and relative links retain repository-subdirectory compatibility. No build system is required.

Booking details are prepared in the browser and can be downloaded. Salon confirmation still requires direct contact. Production integration requires verified contact details, approved offerings and prices, and a scheduling or request-delivery system. AERELLE is a proposed working brand. Trademark and domain availability have not been verified.

Verification used Chromium. Physical devices, Safari and Firefox were not independently tested.
