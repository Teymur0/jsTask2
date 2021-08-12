//TASK1
// let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
// function myAlphabetLength(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
//     console.log(arr.length)
//     if (arr.length < 4) {
//         console.log('Array less than 4')
//     }
//     else{
//         console.log('Array longer than 4 ')
//     }

// }

// myAlphabetLength(myAlphabet)
/////TASK2
// function checkFunc(a, b) {
//     console.log(a, b)
// }

// checkFunc('hello world', true)

////TASK3
// let planetsArr = ['planet1', 'planet3', 'planet3', 'planet4', 'planet5']
// for (let i=0;i<planetsArr.length;i++){
//     console.log(planetsArr[i], "index: " + i)
// }
// planetsArr.forEach(function(element, index)
// {
//     console.log(element, "index: " + index)
// })

/////TASK4
// let wowDatatypes = [1, 'hello', true]
// for (let i = 0; i < wowDatatypes.length; i++) {
//     console.log(('index of element'),i,('    '),('the element'),wowDatatypes[i],('    '),('type of element'),typeof(wowDatatypes[i]))
// }
////TASK5
// let myArr = [1, 2, 'One', true]
// myArr.forEach(function (element){
//     console.log(element)
// })


////TASK6
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];

// for (var i = 0; i < student1Courses.length; i++) {

// }
// for (var j = 0; j < student2Courses.length; j++) {
//     var answer = student1Courses.indexOf(student2Courses[j])
//     if (answer != -1) {
//         console.log(student2Courses[j])
//     }
// } 👍


/////TASK7
// let food1 = ['Noodle', 'Pasta', 'Ice-cream'];
// let food2 = ['Fries', 'Ice-cream', 'Pizza'];
// for (var i = 0; i < food1.length; i++) {

// }
// for (var j = 0; j < food2.length; j++) {
//     var answer = food1.indexOf(food2[j])
//     if(answer!=-1){
//         console.log(food2[j])
//     }
// }👍

////TASK8
// let values1 = ['Apple', 1, false];
// let values2 = ['Fries', 2, true];
// let values3 = ['Mars', 9, 'Apple'];
// for (var i = 0; i < values1.length; i++) {

// }
// for (var j = 0; j < values2.length; j++) {

// }
// for (var k = 0; k < values3.length; k++) {
//     var answer = values1.indexOf(values3[k]) && values2.indexOf(values3[k]) // It always take second result i.e: values2.indexOf(values3[k])
//.    var answer = values1.indexOf(values3[k]) !== -1 && values2.indexOf(values3[k]) !== -1 // proposed change
//     if (answer) {
//         console.log(values3[k])
//     }
// }

////TASK9
// let furniture = ['Table', 'Chairs','Couch'];
// let letters=furniture.join(' ')
// console.log(letters)
// for(let i =0; i < furniture.length; i++){
//.    let element = furniture[i] 
//     for (let j = 0; j < element.length; j++) {
//        console.log(element[j])
//   }
// }
