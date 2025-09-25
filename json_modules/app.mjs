import flags from './feature-flags.json' with { type: 'json' };

if (flags.env === 'production') {
  const { default: render } = await import('./ui-estable.mjs');
  render(flags);
} else {
  const { default: render } = await import('./ui-beta.mjs');
  render(flags);
}
