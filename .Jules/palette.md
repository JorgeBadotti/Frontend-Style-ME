# Style-Me App: Architectural & Design Guidelines

## 🛡️ Atomic Decomposition Protocol (Mandatory)

**Golden Rule:** If any `.tsx` or `.ts` file exceeds **300 lines**, implementation must stop immediately, and the file must be refactored following this protocol.

### 1. Refactoring Steps

**Step A: Logic Extraction (Hooks)**
- Move `useState`, `useEffect`, and event handlers to a separate `.hooks.ts` file.
- Aim to reduce the original component size by 30-50%.

**Step B: Identify Atoms & Molecules**
- **Atoms:** Indivisible UI elements (e.g., `Button`, `Icon`, `Badge`) with focused CSS.
- **Molecules:** Simple groups of atoms (e.g., `SearchField` = Input + Icon).

**Step C: Identify Organisms**
- Functional, independent sections (e.g., `LookCard`, `WardrobeGrid`, `FeedbackModal`).
- These contain business logic (Hooks) and organize molecules.

### 2. Folder Structure (Atomic Design + CSS Modules)

```plaintext
src/
└── components/
    ├── atoms/
    │   └── Button/
    │       ├── Button.tsx
    │       └── Button.module.css
    ├── molecules/
    │   └── FieldGroup/
    │       ├── FieldGroup.tsx
    │       └── FieldGroup.module.css
    ├── organisms/
    │   └── LookCard/
    │       ├── LookCard.tsx
    │       ├── LookCard.hooks.ts
    │       └── LookCard.module.css
    └── screens/
        └── LookDetail/
            ├── LookDetail.tsx
            ├── LookDetail.hooks.ts
            └── LookDetail.module.css
```

### 3. CSS Strategy
- Use **CSS Modules** (filename ending in `.module.css`) for scoping.
- **Vite** handles isolation automatically.
- Avoid global styles for components; specific styles belong to specific atoms/molecules.

---

## 🎨 Design System & Accessibility

*Use this section to record critical UX/UI patterns and accessibility decisions as they arise.*
