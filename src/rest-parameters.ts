export {};

// Restパラメーターとは
// 不特定多数の引数を配列として受け取る構文(...values)です。


// reducerとは、総和を求めるもの
const reducer = (accumulator:number, currentValue:number) => {
	console.log({accumulator, currentValue})
	return accumulator + currentValue;
};

// Restパラメーターのアノテーションは、配列と同じ認識
const sum: (...values: number[]) => number = (...values: number[]):number => {
	// console.log(values);
		// return 100;
	return values.reduce(reducer);
}

console.log(sum(1,2,3,4,5));

// [1,2,3,4].reduce(reducer);