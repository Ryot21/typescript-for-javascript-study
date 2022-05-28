export {};

// literal型
// 3つの形が存在する。（文字列、数字、boolean）

// 文字列のliteral型
// let dayOfTheWeek: string = "日";
// dayOfTheWeek = "月";
// このままでは、本来期待していた”曜日”のみではなく"31"のような文字列も入り込んでしまう。狙いとしては"曜日"以外は弾きたい。
// dayOfTheWeek = "31";

let dayOfTheWeekSeikai: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';
// "日"以外の文字列は弾けるようになる
dayOfTheWeekSeikai = '月';


// 数字のliteral型
// 1~12までの数字だけにしたい
let manth: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
manth = 12;
// manth = 13;

// booleanのliteral型(使う機会がすくな)
let TRUE: true = true;
// こうすることでfalseが入らなくなる
// TRUE = false;
