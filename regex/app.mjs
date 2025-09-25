const text = 'producto.(premium)? y otros productos premium';
const user = process.argv[2] ?? 'producto.(premium)?';
const pattern = new RegExp(RegExp.escape(user), 'gi');

console.log(text.replace(pattern, 'X'));
