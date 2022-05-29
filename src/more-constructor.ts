export{};

// constructorを使いこなそう
class Person {
	// public name: string;
	// protected age: number;
	
	// メンバーの宣言 + 初期化設定が一度にまとめられる！！(Typescript独自の機能)	
	constructor(public name:string, protected age:number){}
}

const me = new Person("龍汰" ,31);
const Okusan = new Person("千明", 31);
console.log(me);
console.log(Okusan);
