export{};

// argument（アーキュメント）とは
// プログラム中で関数やメソッド、サブルーチンなどを呼び出すときに渡す値のこと。

// optional引数とは
// 必須ではない引数のこと。引数の最後に「?」を書き加えることで設定できる。

// let bmi: (height: number, weight: number) => number = (
// 	height:number, 
// 	weight:number
// ):number => weight / (height * height);

// console.log(bmi(1.69, 73));


// 関数の要件定義から始める
// 　関数名　bmi
// 　引数 (①身長、②体重、③テキスト出力するか否か：optional)

// 　パターン① bmi(1.69, 73, true);  出力する
// 　パターン② bmi(1.69, 73, false); 出力しない
// 　パターン③ bmi(1.69, 73 );　　　　出力しない

let bmi: (height: number, weight: number, printable?:boolean) => number = (
	height:number, 
	weight:number,
	printable?: boolean

):number => {

	const bmi: number = weight / (height * height);

	if(printable) {
		console.log({bmi});
	}
	return bmi;
};

bmi(1.69, 73, true);
// bmi(1.69, 73, false);
// bmi(1.69, 73,);
