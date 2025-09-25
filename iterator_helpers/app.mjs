// Genera 80 líneas de logs con algunos 'ERROR'
function* lines() {
  for (let i = 1; i <= 80; i++) {
    const type = i % 7 === 0 ? 'ERROR' : (i % 5 === 0 ? 'WARN' : 'INFO');
    yield `${new Date().toISOString()} [${type}] Línea ${i} — mensaje`;
  }
}

const recientes = Iterator.from(lines())
  .filter(l => l.includes('ERROR'))
  .drop(2) // salta las primeras 2 (ruido)
  .take(5) // toma 5 para la demo
  .map(l => l.slice(0, 100))
  .toArray();

console.log(recientes.join('\n'));
