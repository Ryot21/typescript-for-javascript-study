export {};

// 無名関数(functionの後ろに名前がない)による関数定義

let bmi = function(height:number, weight: number):number{
	return weight / (height * height);
}

// 下記は、bmiにもアノケーションを施した完成形
// let bmi: (height: number, weight: number) => number = function(
// 	height:number,
// 	weight: number
// ):number{
// 	return weight / (height * height);
// }

console.log(bmi(1.69,73));