# Learning React Note

## Debounced search

```
 const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);
```

## Large list (performance reality check)

## useMemo (when it matters)

```
 const filteredUsers = useMemo(() => {
    return USERS.filter((user) =>
      user.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [debouncedSearch]);
```

- Caches the result
- Recomputes only when dependency changes

## Highlight matched text
