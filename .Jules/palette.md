## 2024-05-22 - Icon-Only Button Accessibility Pattern
**Learning:** The application heavily relies on icon-only buttons (e.g., password toggle, close buttons) which consistently lack accessible names, making critical interactions inaccessible to screen reader users.
**Action:** Systematically audit all `Icon` usages within `button` elements and ensure they have `aria-label` or `aria-labelledby`. Consider creating an `IconButton` component that enforces `aria-label` prop.
