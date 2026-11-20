# CIELVANE browser QA

Verified on 19 November 2026 using headless Brave/Chromium and Playwright.

## Current identity and scope

CIELVANE replaces the former brand throughout all six pages, metadata, shared navigation, drawer, footer, favicon, configuration and downloaded appointment requests. The original wing SVG is shared across brand placements and remains unmirrored in RTL. Instrument Serif and DM Sans remain self-hosted.

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
| Services | Dedicated service-hair.webp, service-skin.webp and service-makeup.webp photographs |
| Pricing and Contact | No decorative photographs added |
| Gallery | Ten dedicated gallery-prefixed photographs, separate from all homepage and Services photographs |

The site has 28 distinct page-level photographic placements. Each photograph is assigned to one placement. Source credits and licenses are recorded in asset-credits.md.

## Functional verification

The baseline regression suite was repeated across 78 page/width combinations, with internal links checked under a GitHub Pages-style subdirectory. It covered desktop Home dropdown and Escape, sticky header, physical-left drawer in both directions, scrolling lock, theme/direction persistence, category filters, service links, booking preselection, gallery filtering, lightbox navigation and keyboard dismissal, invalid phone/email/past dates, review/edit/preparation, downloaded text, FAQ disclosure and back-to-top.

Additional browser checks covered Contact's three category shortcuts, the general consultation link, all five FAQ disclosures, RTL/LTR text and persistence, unmirrored brand flow, editing a category after review, the CIELVANE request contents and cielvane-appointment.txt filename.

The responsive matrix covered all six pages at 320, 360, 390, 425, 430, 768, 820, 960, 1024, 1180, 1280 and 1440 pixels in light/dark and LTR/RTL, totalling 288 combinations. All requested mobile, tablet and desktop widths are included. Images decoded successfully and no horizontal overflow or JavaScript exceptions were recorded.

Full-page screenshots were inspected for all six pages on mobile, tablet and desktop, including light RTL and dark LTR tablet views and dark RTL mobile views. Review included hero framing, portrait proportions, added sections, Contact spacing, logo scale, footer grouping and control visibility. Hero intrinsic sizing was corrected during visual review. Browser scripts and screenshots are retained outside the deployable project in /tmp.

## Deployment and remaining integration

The release uses the existing repository and GitHub Pages address. Native JavaScript modules and relative links retain repository-subdirectory compatibility. No build system is required.

Booking details are prepared in the browser and can be downloaded. Salon confirmation still requires direct contact. Production integration requires verified contact details, approved offerings and prices, and a scheduling or request-delivery system. CIELVANE is a proposed working brand. Trademark and domain availability have not been verified.

Verification used Chromium. Physical devices, Safari and Firefox were not independently tested.

## Final layout, brand and navigation refinement

CIELVANE is the selected working name after a basic public search. The search scope and unrelated uses are recorded in asset-credits.md. The entirely redrawn mark uses a flowing wing outline and a single inner contour. The former logo asset was removed. Site metadata, shared wordmarks, configuration, booking summary and cielvane-appointment.txt use the new name. Existing preference storage keys are retained to preserve returning visitors’ theme and direction choices.

Both homepages retain their section sequence and character. Experience text aligns to the top of a closer, more balanced image column. Studio photography uses a landscape frame. Beauty Details uses its natural portrait ratio with a smaller image column. Lookbook and Occasion Edit use column proportions matched to source-image ratios so the images and captions align. Occasion descriptions flex within equal-height rows to keep service links aligned. Featured treatment rows use consistent spacing. Home 1 adds four working Before Your Appointment disclosures. Home 2 adds three catalogue-driven Popular Treatment Choices with category, duration, indicative price and booking handoff.

At 1150 pixels and below, the header contains only the brand and hamburger, with the same physical positions in either reading direction. Navigation links, Appearance controls and the booking action live in the physical-left drawer. The existing control nodes move between their desktop and compact positions, keeping unique IDs, handlers and state. Appearance changes keep the drawer open. Navigation, its close control, backdrop click and Escape dismiss it. Background scrolling locks while open. Native modal focus restoration returns to the hamburger. The panel can scroll internally. Desktop appearance and booking controls remain in the header.

The dedicated navigation suite passed 72 page/width combinations across all six pages and all 12 requested widths. It verified header contents, unique control IDs, utility placement, theme/direction changes while the drawer stays open, physical-left placement in both directions, scroll locking, Escape and close behavior, focus restoration and utility relocation after resizing between compact and desktop. New FAQ disclosures and catalogue-based treatment prices, durations and booking links also passed. The existing 78-combination workflow regression and the 288-combination theme/direction matrix passed. Full-page screenshots were inspected on mobile, tablet and desktop, together with compact drawer screenshots.

The palette, fonts, footer structure, Services, Pricing, Gallery and Contact workflows remain the existing implementation. No new photography was needed for this finishing pass.

## Typography, homepage and price-menu refinement — 20 November 2026

This pass uses the published 92a3245 revision as its preserved baseline. The CIELVANE identity, font families, sky palette, footer and physical HTML architecture remain the basis of the implementation.

Desktop paragraphs now inherit 17px text, with 16px on phones. Eyebrows use 14px, service/card supporting text uses 16–17px, important durations/captions use approximately 15px, and footer supporting text uses 15–17px. The brand descriptor is 11px in compact layouts. Buttons, navigation and form labels retain their readable role-specific sizes.

Home 1 now has a photographic banner with a restrained directional gradient on desktop. At 1150px and below, the semantic photograph fills the hero and its heading, supporting paragraph and CTAs center over a dark gradient. Separate image cropping is set for phones. Experience is a three-part Discover/Personalize/Prepare sequence beside the styling photograph. Beauty Details combines a natural portrait with concise Tone/Texture/Finish notes. The four original appointment FAQ questions remain in a full-width panel with visible expanded states.

Home 2 uses aligned occasion articles, equal-ratio editorial photo containers with a deliberate phone reflow, a more proportionate inspiration image and a three-part appointment-planning sequence. Its dynamic Popular Treatment Choices retains catalogue-based values with larger metadata and clearer row spacing.

The shared dataset now contains three Hair, three Skin and three Makeup treatments. The added illustrative services are Calming Facial Ritual, approximately 45 minutes from INR 1,200, and Natural Day Makeup, approximately 45 minutes from INR 1,800. Existing seven IDs remain unchanged. Offerings and rates require salon approval.

Services and Pricing use separate render functions in catalog.js. Pricing has a category-navigation introduction beside dedicated price-menu panels, prominent INR amounts, approximate durations, service-description links and booking actions. The sidebar becomes horizontal category controls on smaller tablets and phones, and rows stack on phones. The existing price-factor explanation and appointment CTA remain.

The desktop appearance group explicitly uses flex alignment. Theme and direction buttons have equal 44px hit areas with centered contents. The compact hamburger has a 48px target and 24px icon. Utility nodes still relocate into the physical-left drawer at the existing compact breakpoint.

### Verification performed

- All six pages passed 264 combinations across 320, 360, 390, 430, 768, 820, 960, 1024, 1180, 1280 and 1440 pixels, light/dark and LTR/RTL. Tests checked horizontal overflow, compact header contents, desktop utility alignment and centered background-photo hero behavior throughout the compact range.
- Full-page screenshots were inspected at 390, 820 and 1440 pixels, including dark and RTL states. Separate 320px phone and 1024px tablet hero captures verified framing and centered text. The larger descriptor and open compact drawer were visually inspected.
- The functional suite verified all nine shared entries, balanced category counts and preservation of the original IDs. All 18 booking links from Services and Pricing were opened and checked for correct service/category selection.
- Both new treatments were exercised through Contact. Tests covered invalid fields and past dates, Natural Day Makeup review, editing to Calming Facial Ritual, preparing the request and opening the downloaded text to confirm the treatment and INR 1,200 amount.
- Services/Pricing category filters, Pricing-to-Services links, Gallery category filtering, lightbox next/keyboard/close behavior, all four homepage FAQ disclosures, desktop Home dropdown/Escape, compact drawer behavior, preference persistence across reload, sticky header and back-to-top passed.
- Additional controls checks passed at all 11 widths. They checked brand/hamburger separation, brand/close-control fit in both reading directions, equal desktop utility dimensions and vertical alignment before/after toggles, physical-left drawer placement and focus restoration.
- No browser JavaScript exceptions or unsuccessful asset responses were recorded during the matrix. The final release is verified on the existing GitHub Pages URL after publication.

Verification uses Brave/Chromium. Physical devices, Safari and Firefox were not independently tested. Appointment requests continue to require salon confirmation and an approved production delivery/scheduling integration.

## Beauty in the Details section — 20 November 2026

Home 1's section now uses an editorial text-led composition with a right-hand natural-ratio portrait and a three-column Tone/Texture/Finish strip. On tablets, the heading spans the section above the photograph and vertically arranged detail notes. Phones stack the heading, portrait and concise notes. The existing hair-services action remains. Forty width/theme/direction combinations passed, with section screenshots inspected at phone, tablet and desktop sizes. Natural image ratio and the Hair service-filter handoff were verified.

## Sitewide photography deduplication — 20 November 2026

The audit covered static HTML and dynamically generated Services and Gallery content on all six pages. Home 1 uses ten distinct photographs and Home 2 uses five. The three repeated Services photographs and all ten repeated Gallery photographs were replaced with thirteen distinct licensed Pexels photographs. Gallery thumbnails open their matching photograph in the existing detail viewer.

Every replacement was decoded and compared against the corresponding original file. All thirteen preserve the exact original pixel width and height. Rendered image-container dimensions remain the existing design. The Services makeup photograph uses a targeted vertical crop position to keep the eye-makeup work visible on phones. No original homepage photograph was changed.

Browser verification found 28 photo placements with 28 unique source URLs across the six pages. All 28 WebP files have unique SHA-256 hashes. Source IDs and photographer credits are recorded in asset-credits.md. No unused photograph files were added.

Services and Gallery were inspected at 320, 390, 768, 820, 1024 and 1440 pixels. The audit checked successful decoding, image proportions, captions, no horizontal overflow, Hair filtering and matching thumbnail-to-lightbox selection, next navigation and keyboard dismissal. No runtime errors or failed asset responses were recorded. The replacement makeup crop was separately inspected at 320 pixels. The release is checked on the existing live Pages URL after publication.

## About page — 20 November 2026

Added pages/about.html with an introduction, a three-part studio approach, hair/skin/makeup discovery links and first-visit guidance with pricing and appointment actions. Copy describes the brand's approach and preparation process. Two new licensed reference photographs are exclusive to this page.

The page uses the existing serif/sans-serif pairing, cloud-and-sky tokens, shared header, physical-left drawer, footer, theme/direction preferences and back-to-top control. About is linked after Home in the desktop menu, in the compact drawer and in the footer Explore group. Shared footer destinations now resolve by page key to preserve their intended links as the navigation expands.

Browser checks passed 44 About width/theme/direction combinations at 320, 360, 390, 430, 768, 820, 960, 1024, 1180, 1280 and 1440 pixels. Checks covered successful image decoding, no horizontal overflow, one page heading, active About links, compact navigation, physical-left drawer placement, utility interaction, desktop navigation spacing and non-wrapping links. All About content links returned successful responses and the Hair action opened the filtered Services page.

About links were verified in the header and footer of each of the existing six pages. Full-page screenshots were inspected at mobile, tablet and desktop sizes in light/dark and LTR/RTL. The tablet care section was recomposed to avoid a small photograph beside an overly tall text column. All 30 photographic placements across the seven pages have distinct source URLs and unique files. The existing 13 dimension-matched replacements still retain their exact pixel sizes.

## Wordmark and Home 1 banner — 20 November 2026

Removed the descriptor beneath the shared CIELVANE wordmark in the header, compact drawer and footer, together with the unused configuration field and descriptor styling.

Home 1's banner now uses the headline “Your beauty. In a new light.” with a pale-sky italic accent and concise supporting copy. A lower navigation strip links directly to Hair, Skin and Makeup filters. The existing consultation photograph and two main appointment/service CTAs remain in use. Compact layouts retain centered text over the photograph and simplify the category strip to comfortable category labels.

Forty-four width/theme/direction combinations passed across the eleven standard QA widths. The checks covered no horizontal overflow, all hero actions staying inside the banner, centered compact headings, and the three filtered Services destinations. Descriptor removal was verified in all three brand placements across all seven pages. Desktop, tablet, phone and dark RTL screenshots were inspected. Drawer appearance controls and Escape dismissal were also checked. The existing photographs retain their unique placements.

## Home 2 tablet appointment planning — 20 November 2026

At 641–1180px, Your Appointment, Your Way now places its heading above three aligned planning steps, followed by the existing actions. This removes the unused area beneath the former short left-hand heading column. Sixteen viewport/theme/direction checks passed across phone, tablet and desktop widths. Tablet screenshots were inspected in light LTR and dark RTL, the heading-to-steps gap was checked, and both actions returned successful responses.

## Contact location section — 20 November 2026

Replaced the final visit-preparation section with an interactive Google Maps embed centered on Palermo, Sicily, an external Google Maps action, a sample Italian address and two illustrative contact numbers beneath the map. Sample details are stored in site-config.js under sampleLocation and identified on the page as illustrative. The city map does not represent a verified street-level salon pin.

The General Consultation enquiry link now targets the existing booking form. Obsolete visit-preparation styles were removed. The location grid adapts from three desktop columns to stacked contact details on phones.

Twelve responsive/theme/direction combinations were checked at 320, 390, 768, 820, 1024 and 1440 pixels in light LTR and dark RTL. The Google Maps frame loaded and rendered Palermo. Section screenshots were inspected on phone, tablet and desktop. Tests confirmed sample details render, the new section is last, and the page has no horizontal overflow. The enquiry anchor and existing service preselection, request review and edit workflow passed separate checks.

## Dropdown placement, sizing and arrows — 20 November 2026

A source audit found two form selects, both on Contact. Their browser-native popups have been enhanced with a shared in-page combobox/listbox component so options are anchored to the rendered field in compact viewport emulation and on touch layouts. The native selects remain the source of form values and constraint validation.

Both option lists match their field width, use 16px text and at least 44px option rows, and choose an above/below placement based on available viewport space beneath the sticky header. The arrow sits 18px inside the logical field end, with dedicated text padding. Controls keep a consistent height, and long selected values have an accessible full label and tooltip.

The component supports pointer/touch selection, Up/Down, Home/End, type-ahead, Enter/Space, Escape, Tab dismissal, outside dismissal, selected/active states, required-field feedback and focus on invalid fields. Category changes refresh the dependent services. Initial service query selection, enquiry shortcuts, native form values, review/edit and text downloads remain connected to the original booking implementation.

Chromium and WebKit each passed 20 width/theme/direction cases at 320, 360, 390, 430, 768, 820, 960, 1024, 1280 and 1440 pixels in light LTR and dark RTL. Checks covered exact menu/trigger alignment, menu width, viewport containment, above-field placement, arrow inset, readable option text, touch targets and dynamic service choices. Both engines passed keyboard selection, required-select validation, preselection, review/edit/download and dismissal checks.

Additional real touch-event emulation checks passed in both engines for category/service selection, open-menu relocation on resize and form reset display synchronization. Mobile and tablet screenshots were inspected in both engines. The desktop Home dropdown and compact drawer retain their existing implementations. Testing used browser engines and emulated viewports rather than physical phones.

## Home 1 banner composition redesign — 20 November 2026

Replaced the desktop full-background text overlay with a twelve-column editorial composition. The large photograph occupies the leading side and an opaque text panel overlaps its lower trailing edge. Typography and actions now sit on a light neutral surface, with a charcoal counterpart in dark mode. The added category navigation strip and its styles were removed.

The compact banner retains the previously requested centered photographic treatment. Twenty width/theme/direction cases passed, with desktop screenshots inspected at 1280 and 1440 pixels and compact screenshots inspected at phone/tablet widths. Both main actions returned successful responses. No horizontal overflow or runtime errors were recorded.

## Home 1 paired-photo banner — 20 November 2026

Replaced the rejected overlapping-panel composition with a new three-column editorial layout. Two matched portrait photographs frame the centered headline and actions on desktop. Phones and tablets place the headline and buttons above a centered photo pair in normal document flow. The banner no longer uses overlapping panels or absolutely positioned background photographs.

The two new licensed photographs show a stylist finishing a dark low bun and a bridal beauty reference with swept-back hair. Both are delivered at 1000 × 1400 pixels and displayed in their natural ratio. The first replaces the prior banner file, and the second is new. An audit confirmed 31 distinct photographs across all seven pages, with the earlier dimension-matched Services and Gallery replacements still intact. Credits are in asset-credits.md.

Chromium and WebKit each passed 22 width/theme/direction combinations across 320, 360, 390, 430, 768, 820, 960, 1024, 1180, 1280 and 1440 pixels, in light LTR and dark RTL. Tests verified no horizontal overflow, no text/photo overlap, equal photo dimensions, natural image proportions, centered headings and both action links. Actual desktop, tablet and mobile screenshots were inspected. Chromium was rechecked after tightening the final section spacing.

Home 1's stylesheet and primary image URLs carry a new version query to prevent an older cached banner stylesheet or landscape image from being combined with the new layout.

## Tablet hero arrangement and hairstylist portrait — 20 November 2026

Tablets from 641–1150px now use the desktop photo–headline–photo arrangement. Heading sizes, paragraph widths and vertically grouped actions are adjusted for the narrower middle column. Phones retain the normal-flow text-above-photo-pair composition.

The left photograph now shows a woman hairdresser facing the camera behind a salon chair with scissors and a comb. The replacement remains 1000 × 1400 pixels, preserves her full hairstyle and both tools, and has a distinct source and file hash. Its source is documented in asset-credits.md.

Chromium and WebKit each passed 26 responsive/theme/direction cases across 320, 390, 430, 641, 700, 768, 820, 960, 1024, 1150, 1151, 1280 and 1440px in light LTR and dark RTL. Tests verified the three-column tablet arrangement, phone stacking, equal natural-ratio images, no text/photo overlap, no horizontal overflow and both main actions. Tablet screenshots at 768, 820 and 1024px and the desktop composition were inspected. Versioned stylesheet and image URLs ensure the revised tablet styles and portrait load together.

## Left hero portrait replacement — 20 November 2026

Replaced the left Home 1 banner photograph with a smiling woman hairstylist beside a salon chair in a bright salon. The image retains its 1000 × 1400 dimensions and has an updated descriptive alt and cache version. The source credit is recorded in asset-credits.md. All 31 photographs retain distinct sources and file hashes.

Chromium passed 26 responsive/theme/direction cases at 320–1440px with matching image proportions, no overlaps or horizontal overflow and working hero actions. Phone and tablet screenshots were visually inspected.
