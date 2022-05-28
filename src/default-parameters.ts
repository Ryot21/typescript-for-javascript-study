export {};

// defalt-parameter(デフォルトパラメーター)とは
// 関数の引数に値を入れなかった（もしくはundefained）場合に、関数の方で初期値を入れること。
// lateに値が入らなかった場合、「1.1」が代入される

const nextYearSalary = (currentSaraly:number, late:number = 1.1):number => {
	return currentSaraly * late;
}

// console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));
