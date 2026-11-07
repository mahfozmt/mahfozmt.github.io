# Palette's Journal

## 2026-11-07 - Skip Link and Programmatic Focus Targets in Single-Page Portfolios
**Learning:** In sticky-header single-page portfolio layouts with interactive sticky navigations, keyboard users face repetitive tab burdens before accessing primary content. Simply linking `#main-content` is insufficient for assistive technology if the destination landmark lacks programmatic focusability; assigning `tabindex="-1"` to `<main>` allows smooth programmatic focus without inserting it into natural tab order. Additionally, matching `:focus-visible` ring colors directly to the editorial `--border-focus` token maintains brand harmony while satisfying WCAG 2.4.7.
**Action:** When creating skip links on pages with sticky navigation bars, ensure `<main id="main-content" tabindex="-1">` is styled to suppress intrusive mouse focus outlines (`main:focus { outline: none; }`) while keyboard `:focus-visible` remains crisp and visible.
