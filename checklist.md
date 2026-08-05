# HorizonPath Education — Checklist

## Contact page — application form
- [x] Read start-application-form.html fields/flow
- [x] Map to existing contact form + design system
- [x] Update form UI to match HTML structure (keep Horizon theme)
- [x] Wire submit/validation as needed
- [ ] Review on contact page

## Programmes page cleanup
- [x] Remove "Full spectrum" section

## Add About, Blogs & Schools tabs
- [x] Download hero images (About, Blogs, Schools)
- [x] Add nav links in `brand.ts`
- [x] Create content files for each page
- [x] Create hero section components
- [x] Create `/about`, `/blogs`, `/schools` pages + metadata layouts
- [ ] Review heroes in browser

## Rename Services → Programmes
- [x] Change nav tab label to Programmes
- [x] Footer updates via shared navLinks
- [x] Services page hero copy: "Our Programmes"
- [x] Page metadata title: Programmes
- [x] Home teaser CTA: "View all programmes"

## Move Success Stories to home page
- [x] Create Success Stories section component (testimonials + case studies)
- [x] Add section to home page at the bottom (above CTA)
- [x] Remove Success Stories from navigation
- [x] Delete `/success-stories` page and unused hero
- [x] Redirect old URL to `/#success-stories`

## Logo update
- [x] Rebuild logo: teal H mark + HORIZONPATH + Education lockup
- [x] Match fonts: Instrument Sans wordmark + Newsreader italic Education
- [x] Tighten spacing / crop mark padding to match brand image
- [x] Smaller text inside a fixed-height wrapper centered on the H
- [x] Mobile: H mark only (wordmark hidden)
- [ ] Review in header

## Global Reach animation upgrade
- [x] Pull UX + 21st inspiration for the section
- [x] Replace restless scroll-slide with intentional motion
- [x] Add entrance stagger, 3D hover depth, soft float, reduced-motion

## Theme flip (done)
- [x] White / Blue / Teal atmospheres + header toggle
- [x] Default theme set to blue

## Hero images
- [x] Services page — campus photo hero (`/stock/services-hero.jpg`)
- [x] Process page — updated hero (`Process page img.JPG` → `process-hero.jpg`)
- [x] Success Stories — new graduation hero (Pexels, `/stock/success-stories-hero.jpg`)

## Use normal cursor
- [x] Remove custom cursor component from layout
- [x] Restore default system cursor (remove `cursor: none`)
- [x] Delete unused cursor files

## Home page cleanup
- [x] Remove Case studies section
- [x] Remove "4 Continents Served" from trust bar stats
- [x] Adjust trust bar grid for 3 remaining stats

## Programmes page — equal cards
- [x] Remove bento sizing (undergraduate large, study-abroad wide)
- [x] Make all programme cards the same size

## Destinations page updates
- [x] Remove partner institutions lists from destination cards
- [x] Rename last destination to "Rest of Europe and Beyond"
- [x] Update related copy (tagline, description, meta, home global reach)
- [x] Remove "Ready to take the next step?" CTA band

## Home — remove destinations preview
- [x] Remove "Where will you study?" section from home
- [x] Delete unused DestinationsPreview component + content

## Home — section backgrounds
- [x] What we offer: muted + mesh (was navy, same as Global Reach)
- [x] Success Stories: secondary + soft mesh
- [x] What we offer cards: equal size (no wide first card)
- [x] Case studies: separate band on page background
- [x] Global Reach: enlarge "Global Reach" title; subtitle one step larger

## Process page — MOE layout adapted
- [x] Mirror Morgan Oxford 5-step numbered timeline layout
- [x] Rewrite steps for university admissions (not K-12 schools)
- [x] Update hero + meta: "From first conversation to enrolment"
- [x] Add Programmes note + consultation CTA
- [x] Remove "Ready to take the next step?" CTA band

## Remove EduVoyage mentions
- [x] Rewrite Programmes page band copy (no EduVoyage references)
