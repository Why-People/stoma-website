import watchMedia from 'svelte-media';

const queries = {
  isMobile: '(max-width: 768px)'
};

export const mediaQuery = watchMedia(queries);
