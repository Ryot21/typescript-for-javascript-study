export{};

// readonly修飾子(変則ルール：アクセス修飾子のpublicは記述しなくても良いが、他のメンバーと開発する場合、見辛くなってしまうのでなるべく書く事)
// クラスのプロパティを読み取り専用に変える修飾子
// メンバー記述時に対象のメンバーの先頭に「readonly」と記述


class visaCard{
// 通常（初期化処理）
	// readonly owner: string;
	// constructor(owner: string){
	// 	this.owner = owner;
	// }

// 簡略化
	constructor(public readonly owner:string) {}
}

// インスタンス生成（設計図）
let myVisaCard = new visaCard("龍汰");

// 確認
console.log(myVisaCard.owner);

// 昨日の確認
// myVisaCard.owner = "千明"; ok