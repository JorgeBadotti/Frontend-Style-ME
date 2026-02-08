## 2024-05-22 - Icon-Only Button Accessibility Pattern
**Learning:** The application heavily relies on icon-only buttons (e.g., password toggle, close buttons) which consistently lack accessible names, making critical interactions inaccessible to screen reader users.
**Action:** Systematically audit all `Icon` usages within `button` elements and ensure they have `aria-label` or `aria-labelledby`. Consider creating an `IconButton` component that enforces `aria-label` prop.

## 2024-05-22 - Verified Accessibility of Navigation Buttons
**Learning:** Adding `aria-label` to icon-only navigation buttons (e.g., Back, More Options) immediately makes them accessible to screen readers, verified by `getByRole('button', { name: ... })` tests.
**Action:** When creating icon-only buttons, always include `aria-label` and verify with a test case checking the accessible name.
