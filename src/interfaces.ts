export {};



type ObjectType = {name:string, age:number};
let object: ObjectType = {
	name: 'Ryota-san',
	age: 31
}
// 上記、alias型の復習。

// interface型
interface ObjectInterface {
	name: string,
	age: number
};