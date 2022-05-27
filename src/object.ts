export{};

// object型
let profile1: object = { name: "Ryota"};
profile1 = { brithyear: 1991};
// このままでは制約が緩い（デメリット）
console.log({profile1});

// :objectと同じ意味...だが、プロパティについても型指定ができる！！！
// let profile2: {} = {name : "Ryota"};


// 現場では下記の記述方法で実装しよう！
let profile2: { name: string; } = {name : "Ryota"};
// profile2 = { brithyear: 1991};
// profile2 = { name: 1991};
// profile2 = { name: true};
// 制約を厳しくできる（メリット）
console.log({profile2});