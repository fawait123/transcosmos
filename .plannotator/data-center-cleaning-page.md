# Plan: Data Centre Cleaning Detail Page

## Context

Add new sub-page for "Data Centre Cleaning" — detail page when user clicks "View Services" on the Data Centre Cleaning card from the main Data Center Solution page.

Figma node: `2206-6288`
File: `INDODATA-DEV-By-GeekGarden`

## Approach

- New route: `src/app/cleaning-data-center/page.tsx`
- Reuse existing `Navbar` and `Footer` components
- New component `BenefitCard` for the 5 key benefit items
- Download 4 new assets (icon, sparkle, 2 divider lines)
- Link "View Services" on Data Centre Cleaning card to `/cleaning-data-center`

## Reuse

| Component | File | Usage |
|-----------|------|-------|
| `Navbar` | `src/components/Navbar.tsx` | Sticky top nav |
| `Footer` | `src/components/Footer.tsx` | CTA + links + copyright |
| Service icon | `public/assets/8abb9e86d4daa980e5dde5e244d12b930d582d0e.svg` | Replace with red-bg version from new node |

## New Assets

| Asset | URL | Purpose |
|-------|-----|---------|
| `d94a86ef8820e49da609879597020f1937f3a360.svg` | localhost:3845 | Cleaning icon (red bg) |
| `d74b1a93598c377b4bdd6934d5e37d2251890308.svg` | localhost:3845 | Sparkle icon for benefits |
| `05c915e1399cac0f67d078b082d318e1477a00b3.svg` | localhost:3845 | Divider line (Group7) |
| `b3d5d5e1aeccc7c17860362e632508d24f8cee86.svg` | localhost:3845 | Divider line (Group8) |

## Page Structure

```
┌─ Navbar (sticky) ─────────────────────────┐
│                                            │
│  Breadcrumb: Home > Data Center Solution   │
│              > DATA CENTRE CLEANING        │
│                                            │
│  ┌─ Header ─────────────────────────────┐  │
│  │ [red icon]  DATA CENTRE CLEANING     │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  Description (3 paragraphs)                │
│                                            │
│  "Our Data Centre Cleaning service covers  │
│   key operational areas, including:"       │
│  • Server rooms and data halls             │
│  • Raised floor and sub-floor areas        │
│  • Cable trays and cable pathways          │
│  • Rack and cabinet exterior surfaces      │
│  • Cooling equipment surrounding areas     │
│  • UPS rooms, battery rooms, electrical    │
│  • Staging areas and support rooms         │
│  • Access corridors and technical spaces   │
│                                            │
│  Key Benefits                              │
│  ┌──────────────┐  ┌──────────────┐       │
│  │ ✦ Improved   │  │ ✦ Protection │       │
│  │   Reliability│  │   for HW     │       │
│  ├──────────────┤  ├──────────────┤       │
│  │ ✦ Optimized  │  │ ✦ Reduced    │       │
│  │   Airflow    │  │   Downtime   │       │
│  ├──────────────┤  └──────────────┘       │
│  │ ✦ Compliance │                          │
│  │   Standards  │                          │
│  └──────────────┘                          │
│                                            │
└─ Footer (CTA + links + copyright) ────────┘
```

## Steps

- [x] Get design context from Figma node 2206-6288
- [ ] Download 4 new assets from Figma MCP to `public/assets/`
- [ ] Create `src/components/BenefitCard.tsx` (sparkle icon + title + description + divider)
- [ ] Create `src/app/cleaning-data-center/page.tsx` (full detail page)
- [ ] Update `src/components/ServiceCard.tsx` — add Link to `/cleaning-data-center` for Data Centre Cleaning card
- [ ] Verify lint: `npm run lint`

## Verification

- `npm run dev` → navigate to `/cleaning-data-center`
- Check breadcrumb shows 3 levels → Home > Data Center Solution > DATA CENTRE CLEANING
- Verify 8 list items rendered
- Verify 5 benefit cards rendered with sparkle icons
- Click "View Services" from main page Data Centre Cleaning card → navigates to this page
