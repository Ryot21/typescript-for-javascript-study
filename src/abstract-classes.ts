export{};

// 抽象メソッド（処理の実態が記述されていないメソッド）について
// 　　必ずオーバーライド（継承）を行わなければならないメソッドのこと。
// 　＊抽象メソッドの宣言を「シグネチャー」と呼ぶ。

// 親クラス
abstract class Animal{
	// 抽象メソッドにする場合、クラス名の前に「abstract」を記述する
	// また、実態を持たないため、{}は不要。
	abstract cry(): string;
}

class Lion extends Animal{
	// 抽象メソッドは、継承先で処理を記述する
	cry(){
		return "ガオーーー(roar)";
	}
}
class Tigar extends Animal{
	cry(){
		return "ぐるるる(grrrr)";
	}
}


// 抽象クラスについて
// 　 抽象クラスとは、抽象メソッドを有するクラスのこと。
//  ＊クラス名の前に「abstract」を記述する。