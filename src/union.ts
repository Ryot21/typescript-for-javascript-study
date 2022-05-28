export {};

// union型（共用体型）
// このデータはsting型の時もあればnumber型の時もあるよという使い方ができる

let value: number | string = 1; 
value = 'foo'
console.log(value);