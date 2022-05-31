export {};

// void型は、何もデータが存在しないときに使用する(関数にアノテーションを指定する)

// ①空の関数（undefinedの戻り値が必要な処理の場合）
function returnNothing(): undefined {

	console.log("I dont't return anything!");
	// 空の関数の場合でも、空（undefined）を返さなければならないため、
	// 下記のいずれか一つを記述する必要がある
	//  return;
	 return undefined;
}
console.log(returnNothing());



// ②空の関数（戻り値を必要としていない場合）
function returnNothing2(): void {

	console.log("I don't return anything");

}

console.log(returnNothing2());
