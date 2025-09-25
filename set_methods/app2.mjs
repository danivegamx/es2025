const a = new Set(['read', 'write']);
const b = new Set(['write', 'delete']);

console.log('Sets originales: ', a, b, '\n');

console.log('union', [...a.union(b)]);
console.log('intersection', [...a.intersection(b)]);
console.log('difference', [...a.difference(b)]);
console.log('symmetricDifference', [...a.symmetricDifference(b)]);
console.log('isSubsetOf', a.isSubsetOf(b));

console.log('isSupersetOf', a.isSupersetOf(new Set(['write'])));
console.log('isDisjointFrom', a.isDisjointFrom(new Set(['admin'])));
