export {};
let name = 'TyprScript';
// export {}の意味
// Jsの関係でモジュールシステムを使用していない場合、変数を定義するとグローバル空間に定義されてしまう。
// 「モジュールにする」とは、inportやexportによって、ファイルをモジュールにする仕組みのこと
// モジュール化されていないファイルの場合、グローバる空間にすでに定義済みの変数を探しに行ってしまう為、エラーが発生してしまう。
// エラー回避のために、export {}（モジュールシステム）を導入する。

console.log({name});

// boolean = これ以上分解できないくらい一番小さい形の型
let isFinished: boolean = true;
// isFinished = false;
// isFinished = 1; error
// isFinished = "1";　error

console.log({isFinished});
