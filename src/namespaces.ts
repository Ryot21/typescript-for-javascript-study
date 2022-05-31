export{};

// 名前空間について
// 同じクラス名だと重複してしまう。
// そういう時は、下記のような記述でエラー回避できる



// （Japanese/Personフォルダ）*イメージ
// exportで外からのアクセスを可能にする
namespace Japanese{
	export class Person {
		constructor(public name:string) {}
	}
}
// （English/Personフォルダ）
namespace English{
	export class Person {
		constructor(public fristName:string,public middleName:string,public lastName:string) {}
	}
}


// クラス名の前に「namespace名」を記述する
const me = new Japanese.Person("RYOTA");
console.log(me);

const she = new English.Person("Chiaki","Joseph", "Maeda");
console.log(she);


// 練習問題
// 同じJapanese namespaceに、同じクラス名を配置したい（ネスト）場合は？
namespace Japanese1{
	export namespace Tokyo {
		export class Person {
			constructor(public name:string) {}
		}
	}
	export namespace Hiroshima{
		export class Person {
			constructor(public name:string) {}
		}
	}
}
const he = new Japanese1.Hiroshima.Person("Yoshiki");
console.log(he);