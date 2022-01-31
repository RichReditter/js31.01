//Создайте структуру с именем student, 
//содержащую поля: фамилия и инициалы, номер группы,
// успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа,
// упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов,
// имеющих оценки, равные только 4 или 5.
// function Student(firstName, lastName, groupNumber, rating){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.groupNumber = groupNumber;
//     this.rating = rating;
 
//     this.print = function (){
//         console.log( this.lastName + ' -  ' + this.groupNumber);
//     };
//     this.middleRating = function (){
//         return this.rating.reduce((r1, r2) => r1 + r2)/this.rating.length;
//     };
//     this.isPerfect = function (){
//         return this.rating.every( r => r >=4);
//     }
// }
 
// const student1 = new Student('Vasya1', 'Pupkin1', 12, [20,4,4,5,6]);
// const student2 = new Student('Vasya2', 'Pupkin2', 22, [4,30,4,5,6]);
// const student3 = new Student('Vasya3', 'Pupkin3', 32, [2,3,4,5,6]);
// const student4 = new Student('Vasya4', 'Pupkin4', 52, [2,3,40,5,6])
// const student5 = new Student('Vasya5', 'Pupkin5', 22, [2,3,4,5,6])
// const student6 = new Student('Vasya6', 'Pupkin6', 132, [2,3,4,5,6])
// const student7 = new Student('Vasya7', 'Pupkin7', 1112, [2,3,4,5,6])
 
// const students = [student1, student2, student3, student4,  student5, student6, student7];
// const best = students.filter( s => s.isPerfect())
// best.forEach(s => s.print())
// const sortedStudents = students.sort( (s1, s2) => s1.middleRating() - s2.middleRating());
// console.log(sortedStudents);




// Задача 1
// Описать объект, представляющий треугольник. Предусмотреть методы для создания объектов, вычисления площади и периметра

function Triangle( firstSide, secondSide, thirdSide){
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;

    this.perimeter = function(){
        return firstSide + secondSide + thirdSide;
    }
    this.area = function(){
        return 0.5*(firstSide + secondSide)
    }
}


const triangle = new Triangle( 3, 4, 5 )
const perimeter = triangle.perimeter()
const area = triangle.area()
console.log(perimeter)
console.log(area)



// Задача 2
// Создайте структуру с именем train, содержащую поля: название пункта назначения, номер поезда, время отправления.

// Ввести данные в массив из пяти элементов типа train
// Упорядочить элементы по номерам поездов.
// Добавить возможность вывода информации о поезде, номер которого введен пользователем.
// Добавить возможность сортировки массивa по пункту назначения, (* причем поезда с одинаковыми пунктами назначения должны быть упорядочены по времени отправления)

function Train(town, number, departure){
    this.town =town;    
    this.number = number;
    this.departure = departure;
    
    this.print = function(n){
        for (let number in trains){
            if (Train[number] === n){
                neededNumber = Train[number];
            }
            
        }
    }

    this.print = function (r){
        return this.number.every( r => number = r);
    }
}


const train1 = new Train( 'Novosibirsk', 17, 1500)
const train2 = new Train( 'Saratov', 7, 1530)
const train3 = new Train( 'Moscow', 35, 1900)
const train4 = new Train( 'Yakutsk', 98, 100)
const train5 = new Train( 'Brest', 7, 1500)
const train6 = new Train( 'Minsk', 178, 2200)
const train7 = new Train( 'Minsk', 178, 1000)
const train8 = new Train( 'Kobrin', 1, 2300)

const trains = [train1, train2, train3, train4, train5, train6, train7, train8]

const sortedNumbers = trains.sort((a,b) => {
    if( a.number > b.number ){
        return 1
    }
    else if( a.number < b.number ){
        return -1
    }
    else ( a.number = b.number);{
        return 0
    }
});


const enteredNumber = +prompt('Введите номер поезда')

const filteredTrains = trains.filter( train => enteredNumber === train['number'] )
console.log('Вот ваши поезда по запросу: \n',enteredNumber,filteredTrains)

const sortedTowns = trains.sort( (a,b)=>{
    if( a.town > b.town){
        return 1
    }
    else if( a.town < b.town ){
        return -1
    }
    else ( a.town = b.town);{
        return 0
    }
})

console.log(sortedTowns)

const sortedTowns2 = sortedTowns.sort( ( a,b ) => {
    if ( a['town'] === b['town']){
        if( a['departure'] > b['departure'] ){
            return 1
        }
        else if( a['departure'] < b['departure'] ){
            return -1
        }
        else ( a['departure'] === b['departure'] );{
            return 0
        }
    }
    else{
        console.log('Совпадающих по месту прибытия поездов нет...\n',sortedTowns)
    }
});
console.log(sortedTowns2)

