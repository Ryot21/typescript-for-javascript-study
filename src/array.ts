export {};

// 書き方①
let numbers: number[] = [1,2,3];
console.log({numbers});
// 書き方②
let numbers2: Array<number> = [4,5,6];
console.log({ numbers2});

// ex)
let strings: string[] = ['Tokyo','Saitama','Gunma'];
console.log({strings});
let strings2: Array<string> = ['Kyoto','Hiroshima'];
console.log({strings2});

// 練習（共用型）
let strings3: (string | number)[] = ['TypeScript', 2];
console.log({strings3});

let hairetsu: (string | number | boolean)[] = [1, false , "Japan"];
console.log({hairetsu});

let hairetsu2: any[] = [1, false , "Japan", 1];
console.log({hairetsu2});

// 二次元配列
let nijigenHairetsu: number[][] = [
	[50,300],
	[400,1000]
]
