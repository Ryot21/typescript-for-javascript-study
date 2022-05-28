export{};

// alias型とinterfce : Objectに対してアノテーションができる。

// aliasで別名を付与する場合、先頭の文字は大文字にする！
type Mojiretsu = string;
const foostring: string = "Hello TypeScript";

const fooMojiretsu: Mojiretsu = "Hello Mojiretsu";

// 例：１
// const example1: {
// 	name: string;
// 	age: number;
// } = {
// 	name: "Tomoharu",
// 	age: 9
// };
// console.log({example1});


// 例；２
type Profile1 = {
	name: string,
	age: number
};

const example1: Profile1 = {
	name: "Azusa",
	age: 8
};

console.log({example1});

// 例3（他のObject（example1）のルールを反映する）
//   メリット = いちいち新しくルールを追加すると、その工程でヒューマンエラーが発生してしまう可能性を考えると間違いが発生しにくい。
type Profile2 =  typeof example1;