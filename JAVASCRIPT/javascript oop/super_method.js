// kata kunci super juga bisa digunakan untuk mengakses method parent class
// caranya dengan menggunakan super titik nama functionnya
// dngan kata lain, super sebenarya adalah reference ke parent prototype, mitip seperti __proto_

class Shape{
    paint(){
        console.log('paint shape');
    }
}

class Circle extends Shape{
    paint(){
        super.paint();
        console.log('Chircle paint');
    }
}

const circle = new Circle();
circle.paint();