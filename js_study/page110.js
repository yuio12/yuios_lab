class CBook{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    buy(){
        console.log(`${this.title} 책을 ${this.price}원에 구매했다`);
    }
}
const cbook1 = new CBook("JS프로토타입의 이해", 30000, "IT");
cbook1.buy();

class CTextbook extends CBook{
    constructor(title, price, major){
        super(title, price);
        this.major = major;
    }
    buyTextBook(){
        console.log(`${this.title} 전공 책을 ${this.price}원에 구매했다`);
    }
}
const cbook2 = new CTextbook("JS프로토타입의 이해", 30000, "IT");
cbook2.buyTextBook();
cbook2.buy();