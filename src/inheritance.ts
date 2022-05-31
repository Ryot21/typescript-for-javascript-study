export{};

// クラスの継承について

// ベースクラス
class Animal{

	// 初期化処理
	constructor(public name: string){}
	
	run(): string {
		return "I can run";
	}
}
// クラスを使うためにインスタンスを作成
// let animal = new Animal("Mickey");
// 確認
// console.log(animal.name);
// 確認＋インスタンス作成
// console.log(new Animal("Mickey").run());



// 継承クラスの作成
class Lion extends Animal{
	// Lionクラスのみのメンバー
	public speed: number;
	// 継承後、新たなメンバーの登録初期化をしたい場合は、「super();」を使う。
	constructor(name: string, speed: number){
		// superメソッドに親クラスのconstructorメソッドそのものなので、設定しているメンバーを()
		// 内に記述する
		super(name);
		this.speed = speed;
	}

	run(): string {
		// こちらもsuperメソッドが使える（変数に格納する）
		return `${super.run()} ${lion.speed}km/h.`;
	}
}
// インスタンス作成
let lion = new Lion("Simba",80);
// 確認
console.log(lion.run());