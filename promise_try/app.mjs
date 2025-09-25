function doSync(ok = true) {
  if (ok) return 'j4Guanatos';
  throw new Error('fallo');
}

function doAsync(x) {
  return new Promise(r => setTimeout(() => r(x), 50));
}

const ok = process.argv[2] !== 'fail';
Promise.try(() => doSync(ok))
  .then(doAsync)
  .then(v => console.log('resultado', v))
  .catch(e => console.error('capturado', e.message));
