// Ejecuta: node permisos.mjs read write
const required = new Set(['read', 'write']);
const user = new Set(process.argv.slice(2));

console.log('Usuario:', user);

if (!required.isSubsetOf(user)) {
  console.error('403 - faltan permisos requeridos');
  process.exit(1);
}
console.log('OK - permisos suficientes');
