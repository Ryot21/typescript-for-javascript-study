export{};


// 静的メンバーについて

// 今までは、
// ①クラスを作成して、
// ②クラスからインスタンスを作成し、
// ③インスタンスからアクセスできるメンバープロパティを使って属性を参照してきた。

// new演算子（引数に値を持たせて）を使って具体的なオブジェクトを作成し、オブジェクトごとのメンバーを作ることが出来た
// これを「動的メンバー」という。

// これに対して、常に変化しないメンバーの事を「静的メンバー」という。

// 方法１
class Me {
	//直接入れることも可能。(ハードコーディング：おすすめできない数字などの場合、何の数字なのか確認できないため)
	static isProgrammer: boolean = true;
	static fristName: string = "Ryota";
	static lastName: string = "Maeda";

	static work() {
		return `Hi guys! this is ${this.fristName}! Are you interrested in TypeScript? Let's dive into Typescript!`
	}
}

// 宣言(Me class（設計書）を使ってmeを作成します)
let me = new Me();
// 通常のアクセスができなくなった
// console.log(me.isProgrammer);

// 静的メンバーへのアクセス方法：インスタンス（事例）名ではなくて、クラス名を使って参照できる
console.log(Me.isProgrammer);
// メソッド（方法）にもアクセスできる
console.log(Me.work());



// 方法２
class Me2 {
	isProgrammer: boolean;
	fristName: "Ryota";
	lastName: "Maeda";
	age: number;
	nationality: string;

	constructor(isProgrammer: boolean, fristName: "Ryota", lastName: "Maeda", age: number, nationality: string) {
		this.isProgrammer = isProgrammer;
		this.fristName = fristName;
		this.lastName = lastName;
		this.age = age;
		this.nationality = nationality;
	}
	work() {
		return "Hi guys! Are you interrested in TypeScript? Let's dive into Typescript!"
	}
}
let me2 = new Me2(true,"Ryota","Maeda",31,"Japan");
// console.log(me2.nationality)
// console.log(me2.work());


// 方法３
class Me3 {
	constructor(public isProgrammer: boolean,public fristName:string,public lastName:string){}
	work() {
		return "Hi guys! Are you interrested in TypeScript? Let's dive into Typescript!"
	}
}

let me3 = new Me3(true,"Ryota","Maeda");
// console.log(me3.isProgrammer);