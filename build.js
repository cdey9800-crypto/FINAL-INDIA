import * as esbuild from 'esbuild';

// Build the Speed Insights bundle
await esbuild.build({
  entryPoints: ['src/speed-insights.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  outfile: 'public/speed-insights.bundle.js',
  platform: 'browser',
});

console.log('Speed Insights bundle created successfully!');
