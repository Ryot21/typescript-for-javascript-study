import axios from 'axios';

export{};

// JsからTsに変える際に暫定的にany型を使用することが多い
let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
	// ①外部から読み込んだ「data」には、何が入っているかわからないので最初はany型で対応する。
	// 　let data: any = response.data;
	// ②any型でもエラーは発生しないが、TypeScriot的にあまり好ましい状態では無いので、object型に置き換える（anyだとなんでも入ってしまってエラーの元になり得るため）
	// 　let data: object[] = response.data;
	// ③この状態でもエラーは発生しないが、完璧ではない。（[]の中身が書かれていないのため）
	// 　interfaceで、先ほど確認した「response.data」の中身をArticleという変数の中にオリジナルの型データ(object)として格納する	
	interface Article {
		id: number;
		title: string;
		description: string;
	}
	// これで完璧！！
	let data: Article[] = response.data;

	// 下部には確認のためにオリジナルでdataオブジェクトを作成して、エラー検証を行った。
	// data = [
	// 	{
	// 		id: 1,
	// 		title: 'title',
	// 		description: 'description'
	// 	}
	// ]


	console.log(data);
});
