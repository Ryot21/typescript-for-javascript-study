export {};

// never型（"This function will never return"）
// 例外が起きる関数でnever型のアノテーションを使用する(必ず受け取った文字列をエラーの文字列として発生させる)

function error(message: string):never {
	// throw = 例外を発生させる。つまり停止させる。
	throw new Error(message);
}

// 動作確認（エラーハンドリング）
// 　エラーハンドリングとは、プログラムの処理中に処理が妨げられる事象が発生した際、その処理をエラーとして対処する処理のことである。

try{
	let result = error('テスト');
	console.log({ result });
} catch (error) {
	console.log({ error });
}


//void型とnever型の違い
		// void型にはundefinedが含まれているのでエラーにならないが、
		let foo: void = undefined;
		// never型には、「値」という概念がない為、エラーが発生する。
		// let ber: never = undefined;

		// 基本的にnever型には「値」を代入できないが、唯一代入できるものがある。
		let ber: never = error('only me');