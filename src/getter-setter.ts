export {};

// アクセサー機能について（オブジェクト指向プログラミングの鉄板の機能！！）
// * getterとは、参照が出来るようにするためのメソッドを作る機能(作成したメソッドの頭に「get」をつける)
// * setterとは、書き換えが出来るようにするメソッドを作る機能(作成したメソッドの頭に「set」をつける)


class MyNumberCard {
	// オーナー（使用者）とシークレットナンバー（個人番号）をメンバーとして設定
	// リネイムする時は、頭に「_」をつけるだけでもいい
	constructor(private _owner: string, private _secretNumber: number){}
	// オーナーメソッドを作成する
	get owner() {
		return this._owner;
	}
	// シークレットナンバーメソッドを作る
	set secretNumber(secretNumber: number){
		// 新しく入ってきたデータを設定（.this）する
		this._secretNumber = secretNumber;
	}
	// 値が変更出来ているかを確認するようなメソッドを作る
	debugPrint(){
		return `secretNumber: ${this._secretNumber}`;
	}
}
// 
let card1 = new MyNumberCard("龍汰", 1234567890);

// 機能の要件定義
// ＊ owner
//  	 * 所有者 ok
//  	 * 初期化時に設定できる(member変数) ok
//  	 * 途中で変更できないようにする (private：読み込み専用のプロパティ) 
//  	 * 参照できるようにする(getter：ownerメソッドを作る) ok

//  * secretNumber
//  	 * 個人番号 ok
//  	 * 初期化時に設定できる(member変数) ok
//  	 * 途中で設定できる (setter + debugPrint) ok
//  	 * 参照できないようにする (private) ok

// 確認
console.log(card1.owner)
// card1.owner = "千明"; //private(アクセス修飾子)のおかげで変更できない
// card1._secretNumber;
console.log(card1.debugPrint());
card1.secretNumber = 111111111;//private(アクセス修飾子)のせいで変更できない
console.log(card1.debugPrint());

console.log(card1.secretNumber);//参照できない(undefined)