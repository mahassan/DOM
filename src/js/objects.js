// create a object
// const Books = {
//     "name": "How to stop worrying and start living",
//     "author": "Dale Carnegie",
//     "year_pub": 1930
// }
function Book(name, author, year_pub){
    this.name = name;
    this.author = author;
    this.year_pub = year_pub;
}
const opt1 = new Book('How to stop worrying and start living','Dale Carnegie', 1930);
const opt2 = new Book("The copywriter's handbook",'Robert W. Bly', 'NA');

console.log(opt1);
console.log(opt2);