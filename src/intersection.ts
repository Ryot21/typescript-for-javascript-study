export {};

// intersection型（交差型）

// 投手
type  Pitcher1 = {
	// 球速
	thorwingSpeed: number
};

// 打者
type Batter1 = {
	// 打率
	battingAverage: number;
}

// Pitcher1の型を流用して「DaimajinSasaki」という型を宣言
const DaimajinSasaki: Pitcher1 = {
	thorwingSpeed: 154
};
// Batter1の型を流用して「OchiaiHiromitsu」という型を宣言
const OchiaiHiromitsu: Batter1 = {
	// thorwingSpeed: 154,
	battingAverage: 0.367
};

// もし大谷選手のような投げて打てる型を宣言するなら,,,

// const TwoWayPlayer:(Batter1 | Pitcher1) = {
// 	battingAverage: 0.367,
// 	thorwingSpeed: 160
// }
// let Otani = TwoWayPlayer
// console.log(Otani)
// ↑なんか違うらしい...(検証した結果、このままだと打率と球速どちらかのステータスがあればエラーが発生しない...）

// 正解は、、、
// どちらかのステータスがかけてもエラーが見つかる！
type TwoWayPlayer = Batter1 & Pitcher1;
let OtaniSyouhei: TwoWayPlayer = {
	thorwingSpeed: 165,
	battingAverage: 0.286
};
console.log(OtaniSyouhei)