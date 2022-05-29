export {};

// クラスとは、設計図みたいなもの(先頭を大文字にする)
// class Person{}

// コンストラクタメソッドとは、new演算子を使ってクラスを作成する時に、自動で呼び出されるメソッドのこと
// つまり、インスタンス生成時の初期化処理を行う働きがある。
// （）内の引数が、コンストラクタメソッドの引数に渡る　　　
class Person{
	// 型の定義（アノテーション）を行う

	public name:string;	// 参照可能
  // private age:number;	// インスタンスからの参照禁止
	protected age:number;
	protected nationality: string; // 兄弟クラスからの参照可能 + インスタンスからの参照禁止


	// 下記、コンストラクタメソッド(第一引数,第二引数)
	// コンストラクタの戻り値に対するアノテーションは書かない（ルール：言語使用）
	// 理由：そもそもrutrueがない為
	constructor(name:string, age:number, nationality: string) {
		// 初期化処理の内容
			// 引数で渡ってくるnameとageをPersonのnameとageに設定する処理
			this.name = name;
			this.age = age;
			this.nationality = nationality;
	}

	// 下記、プロファイルメソッドを作って、文字列を返す
	profile():string {
		// return 'name: ' + ${this.name} + ',' +  'age: ' + ${this.age};
		return `name: ${this.name}, age: ${this.age}`;

	}
}
// Personのサブクラス（継承）をする為には、extendsを使ってサブクラス名と親クラス名を繋げる。
class Android extends Person{
	// Personクラスを継承
	// コンストラクターメソッドを使って、初期化させる
	constructor (name:string, age:number, nationality:string) {
		// superメソッドを使って、親クラスと同じ処理にする
		// 引数には、親クラスで指定したメンバーを記述する
		super(name, age, nationality);
	}
	// こちらでもprofileメソッドを作成する
	prifile():string{
		return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
	}

}

// インスタンスとは、オブジェクト指向で出てくる概念の一つで、クラス（設計図）を実体化したもの
// 方法
// インスタンス（実体化）を作成するには、「new演算子」を使う！
let taro = new Person('chiaki', 31 , 'Japan');



// アクセス修飾子とは、インスタンスに対し、アクセスできないようにする
// public
// private
// protect



// 方法
// class内のメンバー変数の直後に記述することができる
// アクセス可能
// 　　public(書かなくてもいい) 変数名 = 型；
// アクセス一部拒否(Personクラスのインスタンスからの呼び出しのみ：クラス内からはアクセス可能)
// 　　private 変数名 = 型;

// name、ageは、アクセス可能なメンバー
console.log(taro.name);
// console.log(taro.age);
// nationalityは、protectされているため、Personクラスもしくはサブクラス内でのみアクセス可能
// console.log(taro.nationality);

// クラス内からはアクセス可能
console.log(taro.profile());
