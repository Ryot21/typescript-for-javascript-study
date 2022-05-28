export {};

// アロー関数（functionを使わず、=>(矢)を使った関数の記述方法）
// アロー関数の特徴：(*1)関数の処理が１行しかない場合のみ簡略化した記述方法が存在する

let bmi = (height:number, weight:number):number => {
	return weight / (height * height);
}


// 下記は、bmiにもアノケーションを施した完成形
// let bmi: (height: number, weight: number) => number = (
// 	height:number, 
// 	weight:number
// ):number => {
// 	return weight / (height * height);
// }

// (*1)
// let bmi: (height: number, weight: number) => number = (
// 	height:number, 
// 	weight:number
// ):number => weight / (height * height);

console.log(bmi(1.69,73));