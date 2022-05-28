export {};

// enum型（（列挙型）
// 数字や文字列を列挙する際に便利

// 数字の列挙型
// 英語の１月、2月...12月にそれぞれ数字を振り分けたい
enum Months {
		January,
		Fabruary,
		March,
		April,
		May,
		Jun,
		July,
		August,
		October,
		November,
		December
}
// アクセス方法
let Jun = Months.Jun + "月";
// このままだと1つ少ない月になってしまう。
console.log(Jun);


enum MonthsSeikai {
	January = 1,
	Fabruary,
	March,
	April,
	May,
	Jun,
	July,
	August,
	October,
	November,
	December
}

// アクセス方法
let JunSeikai = MonthsSeikai.Jun + "月";
// このままだと1つ少ない月になってしまう。
console.log(JunSeikai);


// 文字列の列挙型
enum COLOR {
	RED = '#FF0000',
	WHITE = '#FFFFFF',
	GREEN = '#0000FF',
	BLUE = '#0000FF',
	BLACK = '#000000'
}

// アクセス方法
let green = COLOR.GREEN;
console.log({green})
// エラー対処
// COLOR.YELLOW;//YELLOWは未設定なのでエラー発生
// いちいち48行目に戻らなくてもconsoleで読み出す直前で書き加えることができる！

enum COLOR {
	YELLOW = '#FFFF00'
}
COLOR.YELLOW;