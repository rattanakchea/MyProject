# Plan: Build Component Dropdown Showcase

Create a new page with a dropdown menu to select and render different components dynamically. This lets you quickly preview and test individual components without navigating through routes.

## Steps

1. Create a new `ComponentShowcase.tsx` page component with state for selected component.
2. Build a dropdown/select element listing available components: `UserSearch`, `UserList`, `ItemList`.
3. Render the selected component dynamically below the dropdown based on the state.
4. Add a new route in `Router.tsx` to access the showcase page (e.g., `/showcase`).
5. Update `Navigation.tsx` to include a link to the showcase page.
6. Handle any required props (like data) for components that need them—fetch data with React Query or pass mock data as needed.

## Further Considerations

1. **Component Data Requirements** — UserList and ItemList need data passed as props. Should we fetch this data in ComponentShowcase using React Query, or pass mock/empty data for preview purposes?
   Use Mock data for initial implementation; we can enhance it later with real data fetching if needed.
2. **Navigation Integration** — Should the showcase link be prominently placed in the nav, or would you prefer it as a secondary/hidden link?
   Place it prominently in the navigation for easy access during development and testing.
