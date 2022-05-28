export {};

// interfaceは、型定義するときに使用する
// 「実装する具象クラスのメンバー（コンストラクタ、メソッド、プロパティ等）を制限するもの」

// typeはTypeScript独特の構文で正式には型エイリアスと呼ばれます。（interfaceはJavaScriptでも使える）
// 文字通り型定義を扱うものであり、基本的な使い方はinterfaceと同じで、オブジェクトや配列の型を強制するものです。

type ObjectType = {name:string, age:number};
let object: ObjectType = {
	name: 'Ryota-san',
	age: 31
}
// 上記、alias型の復習。

// interface型
interface ObjectInterface {
	name: string,
	age: number
};