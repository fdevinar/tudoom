Quick wins (5–20 min)

Enter/Escape polish for edit
Done when: Enter saves, Esc cancels; both play the right SFX.

Disable Save on empty
Done when: Save button is visually disabled or ignored when trim() === ''.

Focus ring & buttons → real button
Done when: Action icons are button with aria-label; keyboard tab/space/enter work.

~~ Task count badge ~~
~~ Done when: “X of Y done” updates live; badge turns green at 100%. ~~

~~ Random tagline on render ~~
~~ Done when: Each render shows one from the list; no crashes if list changes length. ~~

Small features (20–60 min)

~~ Clear completed ~~
~~ Done when: Button appears only if there’s at least 1 done; removes all done; plays SFX.~~ 

Filters: All / Active / Done
Done when: Simple three-button toggle filters the rendered list; URL/state not required.

Priority toggle (🔥)
Done when: Per-task boolean renders a badge; optional sort puts 🔥 on top.

Visual feedback on actions
Done when: Mark-done pulse; delete fade/shrink; create slide-in (you’ve started this).

Persistence & data (30–90 min)

~~ localStorage (MVP) ~~
~~ Done when: On load, tasks hydrate from localStorage; on any change, list is saved debounced (e.g., 150ms). ~~
Edge cases: Corrupted JSON → fall back to defaults gracefully.

Reset to defaults
Done when: “RTB / Reset to Base” restores the original 3 tasks and clears storage; confirmation optional.

Reordering (45–120 min)

Move ↑ / ↓ buttons (interim)
Done when: Items can move one slot up/down; sound + mini animation.

Drag-to-reorder (dnd-kit)
Done when: Drag handle reorders; IDs stay stable; order persists (if localStorage is in).

Polish: Keyboard reordering works; placeholder gap prevents jitter.

UX / Style polish (15–60 min)

Hover & active states
Done when: Buttons/rows have hover + active feedback; reduced-motion respected.

Calm-down message refine
Done when: Message retriggers cleanly (boolean → animate class with timeout or CSS only).

Theme toggle (Marine / Demon)
Done when: Two color sets, one toggle; persists in localStorage.

Quality & structure (30–120 min)

~~ Extract TaskItem (you did this) → tidy ~~
~~ Done when: Props are minimal (task, onToggle, onSave, onDelete); no DOM mutation; small component. ~~

Prop drilling cleanup (optional)
Done when: If callbacks get noisy, wrap in a tiny context; otherwise keep as is.

Memoization (only if needed)
Done when: TaskItem wrapped in React.memo and avoids re-render when unrelated state changes.

Accessibility (15–60 min)

Labels & roles
Done when: All icon buttons have aria-label; list announced as list; counts announced via aria-live="polite" (optional).

Keyboard complete loop
Done when: Tab order makes sense; Enter/Space activate buttons; Esc cancels edit.

Testing & safety nets (20–60 min)

Tiny utility tests (optional)
Done when: Reorder function, filter function, and localStorage read/write have a test each (even just manual console tests).

Error handling
Done when: Try/catch around storage load; fallback message if sounds fail to load.

**Nice-to-haves (later)**

Search box (client-side)

Per-task timestamps

Bulk select (shift-click)

Undo last delete (5–10s window)

Minimal “definition of done”

Works on desktop + mobile.

Keyboard accessible (Tab/Enter/Esc).

No console errors/warnings.

No obvious layout jank.

SFX volume balanced (edit < save < delete all).

Tiny checklist you can paste into your README

 Enter/Esc in edit

 Clear completed

 Filters (All/Active/Done)

 localStorage hydrate/save

 Reset to defaults

 ↑/↓ reorder (then drag)

 Button a11y (aria-label, real button)

 Hover/active states

 Memoize TaskItem (if needed)