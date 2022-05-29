export {};

// クラスとは、設計図みたいなもの(先頭を大文字にする)
// class Person{}

// コンストラクタメソッドとは、new演算子を使ってクラスを作成する時に、自動で呼び出されるメソッドのこと
// つまり、インスタンス生成時の初期化処理を行う働きがある。
// （）内の引数が、コンストラクタメソッドの引数に渡る　　　
class Person{
	// 型の定義（アノテーション）を行う
	name:string;
	age:number;

	// 下記、コンストラクタメソッド(第一引数,第二引数)
	// コンストラクタの戻り値に対するアノテーションは書かない（ルール：言語使用）
	// 理由：そもそもrutrueがない為
	constructor(name:string, age:number) {
		// 初期化処理の内容
			// 引数で渡ってくるnameとageをPersonのnameとageに設定する処理
			this.name = name;
			this.age = age;
	}

	// 下記、プロファイルメソッドを作って、文字列を返す
	profile():string {
		// return 'name: ' + ${this.name} + ',' +  'age: ' + ${this.age};
		return `name: ${this.name}, age: ${this.age}`;

	}
}

// インスタンスとは、オブジェクト指向で出てくる概念の一つで、クラス（設計図）を実体化したもの
// 方法
// インスタンス（実体化）を作成するには、「new演算子」を使う！
let taro = new Person('chiaki', 31);

// 確認を行う
console.log(taro.profile());