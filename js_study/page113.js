// Map 자료형 (이터터블o) 
// JS의 객체와 비슷 (이터러블x)
let bag = new Map();
bag.set("color","red"); // bag = { color: "red"}
console.log(bag);

let bag2 = {color: "red"}
console.log(bag2);

let cup = new Map([
    ["color","red"],
    ["hadle", true],
    ["material", "ceramic"],
    ["size", "500ml"]
]);
console.log(cup);
cup.set("owner","hj");
console.log(cup);
cup.set("brand","hj").set("price", 10000);
console.log(cup);

console.log("size : " + cup.size);
console.log("price : " + cup.get('price'));
console.log("material? : " + cup.has('material'));
console.log("material2? : " + cup.has('material2'));
console.log("material delete? : " + cup.delete('material'));
console.log("material delete? : " + cup.delete('material'));

for(let key of cup.keys()){
    console.log(key);
}
for(let values of cup.values()){
    console.log(values);
}
for(let entry of cup.entries()){
    console.log(entry);
}



cup.clear()
console.log(cup);


