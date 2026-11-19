# Browser QA — Fleur & Form

Tested on 19 November 2026 in headless Brave (Chromium) using Playwright. The browser runner, screenshots and sample booking download were kept outside the deployable project.

## Responsive and visual review

All six physical pages were loaded at 320, 360, 390, 425, 430, 768, 820, 960, 1024, 1180, 1280, 1440 and 1920 CSS pixels. The suite used 768 × 1024 and 1024 × 768 for the specified tablet orientations. Other test heights were 900 pixels. No page exceeded the viewport width.

Full-page screenshots were reviewed for all six pages at 320, 768 and 1440 pixels, for the gallery at every listed width, and for each page in dark RTL at 1440 pixels. The review covered image framing, column balance, heading scale, form controls, navigation and footer layout.

The final tablet pass widened the hero photograph's crop and kept the gallery at two columns through 1050 pixels. On small phones, form fields and service groups stack. At 365 pixels and below, the gallery uses one column. Supplied gallery image dimensions reserve space before lazy-loaded photographs arrive.

## Interaction checks

- Desktop Home dropdown opens and closes with Escape. Sticky headers stay pinned after scrolling. Back-to-top returns the page to its start.
- Theme and reading direction persist during navigation across all six pages. The mobile drawer opens on the physical left in both directions, locks background scrolling, closes with Escape or its close control, and supports navigation.
- Service and pricing filters narrow results to the selected category. Pricing item links open the corresponding service description. Booking links preserve the chosen service and category.
- Gallery filtering changes the photograph set. Opening a thumbnail displays the matching image. Next and keyboard navigation update its caption and position within the filtered set. Escape dismisses the lightbox.
- Appointment validation rejects missing fields, malformed email/phone inputs and past dates. Changing category repopulates services. A completed request supports review, editing and preparation. The downloaded text was opened and checked for the edited treatment. The review showed the matching indicative INR amount. The confirmation FAQ expands.
- Browser images decoded successfully. The automated run monitored runtime exceptions and unsuccessful HTTP responses.

## Hosting and integration

The static site was served over local HTTP and tested with direct page entry under a repository-style subdirectory. The delivery is ready for GitHub Pages publication. A public domain and live Pages deployment are outside this handoff.

The booking workflow prepares a local request. Live operation requires verified salon contact details, approved services and rates, and a delivery or scheduling integration. Availability and confirmation must come from the salon.

## Reference review and scope

The local checkouts of the named travel, yoga, courier, music and school transport projects were available. Their page/module structure and responsive QA material informed the navigation, booking handoff and test matrix. No separate 15-project lessons document was located in the searched project and document locations.

Browser results apply to Chromium at the tested viewport sizes. Physical devices, Safari and Firefox were not independently tested.
