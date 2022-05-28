export {};

// unknown型

// kansu（関数：Function)を定義
const kansu = ():number => 31;
// const kansu = ():string => "31";

// 普通の実行（呼び出し）はこのような形だが、、、このままでは中身を見ることができないので
// kansu();

// 設定した関数の中身を知らないものとして、
// 実行結果をany型とunknown型の2パターンで格納する変数を宣言してその結果を確認してみる。

let numberAny:any = kansu();//中身が不明な場合は、とりあえずany型のアノテーションをつける
let sumAny = numberAny + 10;
// any型の場合、エラーが出ない
// console.log({sumAny});


let numberUnknown:unknown = kansu();
// let sumUnknown = numberUnknown + 10;
// unknown（不明：数字では無いかもしれませんよ？）なので、足し算ができないエラーが発生する
// それでも足し算をしたい場合....


// typeof(= 型を取得する)を使用し、格納されている物の型を確かめてみる
// console.log(typeof numberUnknown); //number型が取得される

// 次にif文で、「numberUnknown」の型がnumberだった時の処理を記述する
if(typeof numberUnknown === 'number') {
	let sumUnknown = numberUnknown + 10;
	console.log({sumUnknown});
} else {
	let sumUnknown = "数字では無いので、計算できません"
	console.log({sumUnknown});
}


// このようにtypeofを使って安全に実行される事を「type guard（タイプガード）」という。