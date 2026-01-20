# Frontend Client Note

## React

## how to pass items to ItemList component

Best approach: Create a separate page component that fetches items, then pass it to the route. This way ItemList receives real data:

Create an ItemsPage component:

Created ItemsPage.tsx

Update Router.tsx to use ItemsPage:
Done! Now the /items route will:

Fetch items from /api/items using useQuery
Show loading state while fetching
Pass real data to ItemList component
Handle errors gracefully
This is the proper pattern: page components handle data fetching, then pass data to UI components.

## TODO

## DONE

- Setup pico minimal styles
- Setup React Route
