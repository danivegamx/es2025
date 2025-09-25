// f16-rounding.mjs
// Efecto de Math.f16round sobre distintos valores

const nums = [1.337, 0.1, 1/10, 1/3, 0.00000003, 0.00000008, 70000];
for (const x of nums) {
  const r = Math.f16round(x);
  console.log(`${x} -> f16round = ${r}`);
}

// Demostración directa via DataView (almacenar y leer)
function f16(x) {
  const buf = new ArrayBuffer(2);
  const dv = new DataView(buf);
  dv.setFloat16(0, x, true);
  return dv.getFloat16(0, true);
}
console.log('via DataView 1.337 ->', f16(1.337));
console.log('via DataView 1e-9  ->', f16(1e-9));  // subnormal/0
console.log('via DataView 1e6   ->', f16(1e6));   // Inf
