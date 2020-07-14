class Food{
    constructor(name){ //name을 파라미터로 받아옴
        this.name = name;
        this.brands = [];
        }
        addBrand(brand){
            //class 내부에 구현하는 함수는 method라고 한다.
            //파라미터에 brand를 받아와서 brands 배열에 push해준다.
            this.brands.push(brand)
        }
        print(){
            console.log(`${this.name}을 파는 음식점들 : `)
            console.log(this.brands.join(', '));
            //join : 배열 안에 있는 것을 합침
        }
}


const pizza = new Food('피자');
pizza.addBrand('도미노'); //brand추가
pizza.addBrand('피자헛');

const chicken = new Food('치킨');
chicken.addBrand('네네치킨');
chicken.addBrand('BBQ');


chicken.print();
pizza.print();