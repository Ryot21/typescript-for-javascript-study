export {};

// overloadとは
// 関数定義の際に、同じ名前の関数でも異なる引数の型もしくは戻り値だったり違う関数を定義すること

// // 数字を2倍にして返す関数を定義する
// function double(value:number):number {
// 	return value * 2;
// }
// console.log(double(100));

// // テキストを2倍にして返す関数を定義する
// function double(value:string):string {
// 	return value + value;
// }

// console.log(double(100));
// console.log(double("Go"));




// 同じ関数名で定義が重複しているので、エラーが発生
// エラー回避の為に、「シグネチャー（関数の説明の宣言）」を記述する（必ず関数の前に記述すること）
function double(value: number): number;
function double(value: string): string;
// 全ての型を受け取れるようにany型にする。（正確な型の制約は、上記のシグネチャーの役割である）
function double(value: any): any {
	// まずtypeofでvalueに渡ってくる引数の型を調査する
	// console.log(typeof value);
	if(typeof value === 'number') {
		return value * 2;
	} else if(typeof value === 'string') {
		return value + value;
	}
	// elseは、シグネチャーで宣言しているので不要

}

console.log(double(100));
console.log(double("Go"));
// console.log(double(true));