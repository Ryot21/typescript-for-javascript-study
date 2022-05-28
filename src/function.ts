export {};

// functionキーワード（functionの後ろに名前がある）
// 注意点：引数と戻り値


// heightとweightは数字が入るのでnumber型
// 戻り値つまり、bmiも数字で戻るのでnumber型でさる。
// 下記のようにテキストを加える場合は、string型となる
function bmi (height:number, weight:number):string {
	// return weight / (height * height) +;
	return "BMIは" + weight / (height * height) + "です";
}

console.log(bmi(1.69, 73));
