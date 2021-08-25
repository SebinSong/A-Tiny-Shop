# TODO items in development

1. Loadable-components
- create an error boundary for lazy-loaded page components (https://loadable-components.com/docs/error-boundaries/)
- Implment minimum delay for the lazy-loaded page components (https://loadable-components.com/docs/delay/)
- Considering pre-fetching the chunks https://loadable-components.com/docs/prefetching/)

2. Memoization
- Memoized components are a component that doesn't re-render if the props don't change. Use React.memo() HOC wherever it gives a performance benefit. In some cases, a component gets re-rendered even when the props are the same, because its ancestor re-renders.
That is one of the common cases where it's useful.
- consider using useCallback() hook whenever passing a callback down as a prop if it's likely to trigger an unecessary re-render.