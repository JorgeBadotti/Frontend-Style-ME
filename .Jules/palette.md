## 2024-05-22 - Icon-Only Button Accessibility Pattern
**Learning:** The application heavily relies on icon-only buttons (e.g., password toggle, close buttons) which consistently lack accessible names, making critical interactions inaccessible to screen reader users.
**Action:** Systematically audit all `Icon` usages within `button` elements and ensure they have `aria-label` or `aria-labelledby`. Consider creating an `IconButton` component that enforces `aria-label` prop.

## 2025-05-27 - Simulated Controls & Dead Interactions
**Learning:** Some screens (like `ItemDetailSheet` and `ShoppingBagScreen` top bars) use visual simulations of underlying screens with "blurred" controls. These controls may be misinterpreted as interactive if implemented as buttons without logic, or if they lack semantic distinction from real controls.
**Action:** When auditing "buttons", verify they have `onClick` handlers. If a button is decorative (part of a simulated background), ensure it is hidden from AT (aria-hidden) or not interactive. If it IS interactive (like the back button in Shopping Bag), ensure it works!
