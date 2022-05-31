export{};

// interfaceの新機能について

// 魔法使いクラス
class Mahoutukai {}
// 僧侶クラス
class Souryo {}
//継承 魔法使い⇨太郎
//  *注意 継承は一つしかできない(単一継承)。
class Taro extends Mahoutukai{

}

// しかし、複数箇所に分散する機能を集めて、一つに統合することは可能(多重継承)。（interface）

interface Kenjya {//シグネチャー
	ionazun(): void;
}
interface Senshi{//シグネチャー
	kougeki(): void;
}

// imprements = 実装する
class Ryota implements Kenjya, Senshi{
	ionazun(): void {
		console.log("イオナズン");
	} 
	kougeki(): void {
		console.log("攻撃");
	}
}

// インスタンス（実体化）
const ryota = new Ryota();
// 確認
console.log(ryota.ionazun(),ryota.kougeki());