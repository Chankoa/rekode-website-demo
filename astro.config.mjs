import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const removeToolbarAuditPrebundle = () => ({
  name: 'remove-toolbar-audit-prebundle',
  enforce: 'post',
  configResolved(config) {
    if (!config.optimizeDeps?.include) return;
    config.optimizeDeps.include = config.optimizeDeps.include.filter(
      (dependency) =>
        !dependency.includes('aria-query') &&
        !dependency.includes('axobject-query')
    );
  }
});

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind()],
  srcDir: 'src',
  vite: {
    plugins: [removeToolbarAuditPrebundle()],
    optimizeDeps: {
      exclude: [
        'aria-query',
        'axobject-query',
        'astro > aria-query',
        'astro > axobject-query'
      ]
    }
  },
  server: {
    port: 4321
  }
});
