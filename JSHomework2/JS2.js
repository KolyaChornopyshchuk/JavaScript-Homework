//1.Створити масив та вивести його в консоль:
//    - з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    //const arr1 = [11, 6, 88, 999, 3.14];
    //    console.log(arr1);
    //const arr2 = ['Vasya', 'Petya', 'Dima', 'true', '56840'];
    //    console.log(arr2);
    //const arr3 = [11, 'USA', true, false, 'lol'];
    //    console.log(arr3);
    //const arr4 = [];
    //arr4[0] = 15;
    //arr4[1] = 'hello';
    //arr4[5] = true;
    //arr4[600] = 'what';
    //console.log(arr4);

//2. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//for (let i = 0; i <= 9; i++) {
//document.write('<div>Lorem ipsum dolor sit amet.</div>');
//}

//3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//for (let i = 0; i <= 9; i++) {
//document.write('<div>Lorem ipsum dolor sit amet, consectetur. - ' +i+ '</div>');
//}

//4.За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//let i = 0;
//while (i < 20) {
//    document.write('<h1> Lorem ipsum dolor sit.</h1>');
//    i++
//}

//5. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//let i = 0;
//while (i < 20) {
//    document.write(`<h1> Lorem ipsum dolor sit. : ${i} </h1>`);
//    i++
//}

//6.Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//const arrNumber = [64, 56, 91, 31, 61, 91, 42, 54, 25, 72];
//for ( i=0; i < arrNumber.length; i++) {
//    console.log(arrNumber[i]);
//}

//7. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//const arrString = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Illum', 'quod'];
//let i = 0;
//while ( i < arrString.length) {
//    i++
//    console.log(arrString[i]);
//}
//

//8. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//const arrMix = [1, 'sherman', true, null, undefined, {name: `Andy`, age: 10, gender: 'male'}, 56, 'patton', true, false];
//for ( let i=0; i<arrMix.length; i++) {
//    console.log(arrMix[i]);
//}

//9.Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//const arrMix = [1, 'one', true, 2, 'two', false, 3, 'three', true, 4, 'four', false, 5, 'five', true, 6, 'six', false, 7, 'seven', true, 8, 'eight', false, 9, 'nine', true, 10, 'ten', false];
//for ( let i = 0; i < arrMix.length; i++) {
////typeof arrMix[i] === 'string'
////? console.log(arrMix[i])
////: ""
//if (typeof arrMix[i] === 'boolean') {
//    console.log(arrMix[i])
//}
//else {
//}
//}

//10.Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//const arrMix = [1, 'one', true, 2, 'two', false, 3, 'three', true, 4, 'four', false, 5, 'five', true, 6, 'six', false, 7, 'seven', true, 8, 'eight', false, 9, 'nine', true, 10, 'ten', false];
//for (let i = 0; i < arrMix.length; i++) {
//    if (typeof arrMix[i] === 'number') {
//        console.log(arrMix[i]);
//    }else {
//    }
//}

// 11.Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//const arrMix = [1, 'one', true, 2, 'two', false, 3, 'three', true, 4, 'four', false, 5, 'five', true, 6, 'six', false, 7, 'seven', true, 8, 'eight', false, 9, 'nine', true, 10, 'ten', false];
//for (let i = 0; i < arrMix.length; i++) {
//    if (typeof arrMix[i] === 'string') {
//        console.log(arrMix[i]);
//    }else {
//    }
//}

// 12.Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//const arrEmpty = [];
//arrEmpty[0] = 5;
//arrEmpty[1] = 'hello';
//arrEmpty[2] = true;
//arrEmpty[3] = 10;
//arrEmpty[4] = 'world';
//arrEmpty[5] = false;
//arrEmpty[6] = 15;
//arrEmpty[7] = 'bye';
//arrEmpty[8] = true;
//arrEmpty[9] = undefined;
//for (let i=0; i<arrEmpty.length; i++) {
//    console.log(arrEmpty[i]);
//}
//

//13. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i=0; i<10; i++) {
//    console.log('step:', i);
//    document.write(`step : ${i}`);
//}

//14. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i=0; i<100; i++) {
//    console.log('step:', i);
//    document.write(`step : ${i} <br>`);
//}

//15. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 200; i = i + 2) {
//    console.log('step :', i);
//    document.write(`step : ${i} <br>`);
//}

//16. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//for (let i = 0; i < 200; i++) {
//    if (i%2 === 0) {
//        console.log('step',i);
//        document.write(`step ${i} <br>`);
//    }
//}

//17. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//for (let i = 0; i < 200; i++) {
//    if (i%2 === 1) {
//        console.log('step',i);
//        document.write(`step ${i} <br>`);
//    }
//}

//18. Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//19. Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

//20.Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//let arrLetters = ['a', 'b', 'c'];
//let str = "";
//for (let i = 0; i < arrLetters.length; i++) {
//   str = str + arrLetters[i];
//}
//console.log(str);

//21. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//let arrLetters = ['a', 'b', 'c'];
//let i = 0;
//let str = "";
//while (i < arrLetters.length) {
//    str = str + arrLetters[i];
//    i++;
//}
//console.log(str);

//22. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//const arrLetters = ['a', 'b', 'c'];
//let str = "";
//for (const value of arrLetters) {
//    str = str + value;
//}
//console.log(str);

//23. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
//const arrLetters = ['a', 'b', 'c'];
//let str = "";
//for (let value in arrLetters) {
//    str = str + arrLetters[value];
//}
//console.log(str);

//24. Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//let arrLetters = ['a', 'b', 'c'];
//for (let i = 1; i <= 3; i++) {
//    arrLetters[arrLetters.length] = i;
//}
//console.log(arrLetters);

//25. Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//let arr = [1, 2, 3];
//let newArray = arr.reverse();
//console.log(newArray);

// 26. Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//let arr = [1, 2, 3];
//arr.push(4, 5, 6);
//console.log(arr);

// 27. Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//let arr = [1, 2, 3];
//arr.unshift(4, 5, 6);
//console.log(arr);

//28. Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//let language = ['js', 'css', 'jq'];
//let deletedItem =  language.shift();
//console.log(deletedItem);

// 29. Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//let strings =  ['js', 'css', 'jq'];
//let last =  strings.pop();
//console.log(last);

//30. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]
//const numbers = [1, 2, 3, 4, 5];
//console.log(numbers.slice(3));

//31. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//const numbers = [1, 2, 3, 4, 5];
//console.log(numbers.slice(0, 2));

// 32. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//const numbers = [1, 2, 3, 4, 5];
//numbers.splice(1, 2);
//console.log(numbers);

// 33. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//const numbers = [1, 2, 3, 4, 5];
//numbers.splice(3, 0, 'a', 'b', 'c');
//console.log(numbers);

//34. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//const numbers = [1, 2, 3, 4, 5];
//numbers.splice(1, 0, 'a', 'b');
//numbers.splice(6, 0, 'c');
//numbers.splice(8, 0, 'e');
//console.log(numbers);

//35. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//   }
//}

//36. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let newArray = [];
//for (i = 0; i < arr.length; i++) {
//    newArray.push(arr[i]);
//}
//console.log(arr);
//console.log(newArray);

// 37. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let newArray = [];
//for (let i = 0; i < arr.length; i++) {
//   newArray[i] = (arr[i]);
//}
//console.log(newArray);

//38. зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: 1. перебрати його циклом while
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//let i = 0;
//while (i < arr.length) {
//console.log(arr[i]);
//i++
//}

//2. перебрати його циклом for
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//let i = 0;
//while (i < arr.length) {
//i++
//    if (i % 2 === 1) {
//        console.log(arr[i]);
//    }
//}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (i = 0; i < arr.length; i++) {
//    if (i % 2 === 0) {
//        console.log(arr[i]);
//    }
//}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//let i = -1;
//while (i < arr.length) {
//i++
//    if (arr[i] % 2 == 0) {
//        console.log(arr[i]);
//    }
//}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//for (i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//        console.log(arr[i]);
//    }
//}

//7. замінити кожне число кратне 3 на слово "okten"
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//console.log(arr);
//for (i = 0; i < arr.length; i++) {
//    if (arr[i] % 3  === 0) {
//        arr.splice(i, 1, 'okten')
//    }
//}
//console.log(arr);

// 8. вивести масив в зворотньому порядку.
//let arr = [2,17,13,6,22,31,45,66,100,-18];
//arr.reverse();
//console.log(arr);

// 9. 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
