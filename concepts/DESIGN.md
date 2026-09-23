---
name: QChat alternative landing concepts
description: Two implemented preview systems, Fresh and Pulse, for user review.
colors:
  fresh-ink: "#143124"
  fresh-paper: "#fff"
  fresh-yellow: "#f7e96e"
  fresh-pink: "#f5bbda"
  fresh-blue: "#285be8"
  fresh-screen-surface: "#dbe5ff"
  fresh-quote-surface: "#f3f7ef"
  pulse-ink: "#173d47"
  pulse-paper: "#e9f7f7"
  pulse-coral: "#ffa287"
  pulse-blue: "#3661ec"
  pulse-lilac: "#d9c6f6"
  pulse-node-green: "#cbe79a"
  pulse-node-blue: "#a6c9ff"
  button-hover: "#2958d6"
  focus: "#b5356d"
typography:
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  fresh-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(45px, 5.2vw, 80px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-.04em"
  pulse-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(48px, 7.5vw, 96px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(34px, 4vw, 60px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-.04em"
rounded:
  screenshot: "8px"
  day-screen: "10px"
  equation: "12px"
  surface: "16px"
  scenario-tab: "30px"
  pill: "50px"
spacing:
  compact: "12px"
  control: "16px"
  gutter: "24px"
  generous: "48px"
components:
  button-fresh:
    backgroundColor: "{colors.fresh-ink}"
    textColor: "{colors.fresh-paper}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-pulse:
    backgroundColor: "{colors.pulse-ink}"
    textColor: "{colors.pulse-paper}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
  button-hover:
    backgroundColor: "{colors.button-hover}"
    textColor: "#fff"
---

# Design System: QChat concept previews

## Overview

Two proposed visual worlds are implemented for review; neither is recorded as a user-approved replacement. Scope is this `concepts/` directory. Existing main-site pages remain outside this design system.

Fresh uses an asymmetric food-editorial composition: yellow copy beside a photographic field, forest-green statement, interactive product story, pink energy equation, and an iPad section. Pulse uses the rhythm of a day: an open ice-colored hero, petrol scenario stage, an energy-orbit illustration, and lilac delivery section. These names describe the implemented alternatives, not approved brand commitments.

## Colors

Frontmatter records the shared and concept-specific colors observed in CSS. Each page sets its own `--ink`, `--paper`, and `--blue`; Fresh additionally sets yellow and pink, while Pulse sets coral and lilac. Keep those scopes separate. The blue custom property is declared in both concepts; Fresh uses it for its circular Q marker. Shared hover and focus treatments use their own colors.

## Typography

Local Manrope serves Cyrillic and Latin. Body copy is 16px/1.6; desktop lead copy is 19px/1.65. Headings use tight negative tracking and balanced wrapping. Fresh's desktop hero is capped at 80px; Pulse's at 96px. At narrow widths their hero clamps change to `clamp(46px,10.5vw,70px)` and `clamp(43px,10.5vw,68px)` respectively. Paragraphs have a 65ch maximum, with narrower component-specific limits.

## Layout

The shared wrapper is `min(1280px, calc(100% - 96px))`, changing to 48px total side space at 900px and 36px at 600px. Navigation is 100px tall, then 80px at 600px; section links hide at 900px, while language and download controls remain.

Fresh starts with a 1.04:1 hero grid and a minimum height of 720px. Its story uses a 1.15:1 grid. Most sections use 75–120px vertical spacing. At 1050px gaps tighten; at 700px major grids stack, the food image is 480px tall, and section spacing drops to 50–70px.

Pulse's three-column day selectors sit above three real screenshots. At desktop the active screen is 495px high and inactive screens are 425px. At 900px gaps tighten. At 650px content grids stack; only the active day screenshot displays, at 460px high inside a 500px stage. This final narrow-screen rule overrides earlier three-screen mobile styles. Energy and delivery sections stack beneath the stage.

Shared FAQ changes from two columns to one at 600px; footer links wrap before the footer stacks. These are code-derived responsive rules, not a claim of completed device verification.

## Elevation & Depth

Most surfaces use solid color and spacing. Fresh's floating food message uses `0 12px 36px #14312426`. Pulse's energy diagram uses an elliptical tonal field and a one-pixel orbit stroke rather than shadows. App screenshots retain their original content and use modest corner rounding without invented device frames.

## Shapes

Primary actions and energy nodes are pills. Scenario selectors use 30px rounding. Screenshot corners range from 8px to 12px; Fresh's story surface and quote use 16px. FAQ and day-stage separators are thin strokes. The energy diagram is the sole recurring orbital shape.

## Components

- **Download buttons:** ink background, paper text, 56px minimum height, 16px × 24px padding. Hover changes to blue and lifts 2px over .18s. Compact navigation buttons start at 46px minimum height.
- **Language switch:** RU is default; `?lang=en` starts English. Toggling updates the URL, document language, copy, FAQ, and localized screenshots while preserving the selected scenario.
- **Fresh scenario tabs:** three pill selectors replace title, copy, illustrative conversation, and app screenshot in place. The selected tab uses ink with white text.
- **Pulse day tabs:** three time-marked selectors use coral for the active border and label. Selection changes the highlighted screenshot and description. Desktop changes animate height, opacity, and translation over .4s.
- **Keyboard behavior:** both selectors implement roving tab stops and Left/Right/Home/End keys. Links, buttons, and FAQ summaries receive a 3px focus outline with 5px offset. A skip link appears on focus.
- **FAQ:** native details/summary disclosures with plus/minus indicators; changing language rebuilds them closed.
- **Reduced motion:** smooth scrolling becomes automatic and animation/transitions are disabled through the shared media query.

## Do's and Don'ts

- Do preserve the distinct structure and palette of each alternative.
- Do use local assets and the existing localized product screenshots intact.
- Do keep illustrative scenarios distinct from product outcome claims.
- Don't invent usage metrics, testimonials, pricing, or health outcomes.
- Don't treat this preview documentation as approval to replace main-site pages.
