//1. - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
//let a = 'hello';
////document.write(a);
////console.log(a);
////alert(a);
//
//let b = 'owu';
////document.write(b);
////console.log(b);
////alert(b);
//
//let c = 'com';
////document.write(c);
////console.log(c);
////alert(c);
//
//let d = 'ua';
////document.write(d);
////console.log(d);
////alert(d);
//
//let e = 1;
////document.write(e);
////console.log(e);
////alert(e);
//
//let f = 10;
////document.write(f);
////console.log(f);
////alert(f);
//
//let g = -999;
////document.write(g);
////console.log(g);
////alert(g);
//
//let h = 123;
////document.write(h);
////console.log(h);
////alert(h);
//
//let i = 3.14;
////document.write(i);
////console.log(i);
////alert(i);
//
//let j = 2.7;
////document.write(j);
////console.log(j);
////alert(j);
//
//let k = 16;
////document.write(k);
////console.log(k);
////alert(k);
//
//let l = true;
////document.write(l);
////console.log(l);
////alert(l);
//
//let m = false;
//document.write(m);
//console.log(m);
//alert(m);

//2. Переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
//a = 'bye';
//b = 'lol';
//c = 'net';
//d = 'us';
//e = 2;
//f = -100;
//g = 999;
//h = 321;
//i = 'punani';
//j = false;
//k = 1;
//l = false;
//m = 148;
//
//document.write(a,b,c,d,e,f,g,h,i,j,k,l,m);
//console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);
//alert(a);
//alert(b);
//alert(c);
//alert(d);
//alert(e);
//alert(f);
//alert(g);
//alert(h);
//alert(i);
//alert(j);
//alert(k);
//alert(l);
//alert(m);

//3. Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
//const x = 5;
//const y = 10;
//const z = 15;
//
//document.write(x);
//console.log(x);
//alert(x);
//document.write(y);
//console.log(y);
//alert(y);
//document.write(z);
//console.log(z);
//alert(z);
//
//const alfa = 'Zdarova';
//const bravo = 'Uhadi';
//const delta = 'Paka';
//
//document.write(alfa);
//console.log(alfa);
//alert(alfa);
//document.write(bravo);
//console.log(bravo);
//alert(bravo);
//document.write(delta);
//console.log(delta);
//alert(delta);
//

//  4. при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
//let name = prompt('What is your name?');
//console.log(name);
//document.write(name);
//alert(name);
//
//let surname = prompt('What is your surname?');
//console.log(surname);
//document.write(surname);
//alert(surname);
//
//let fathersname = prompt('What is your Fathersname?')
//console.log(fathersname);
//document.write(fathersname);
//alert(fathersname);
//

//5. Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
//
//let person = (name + surname + fathersname);
//console.log(person);

//6. Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
//let myname = prompt('Bro, what is your name?');
//let mysurname = prompt('Bro, what is your surname?');
//let myfathersname = prompt('Bro, what is your Fathersname?');
//let me = (myname+mysurname+myfathersname);
//console.log(me);
//
//let wifesname = prompt('Wife, what is your name?');
//let wifessurname = prompt('Wife, what is your surname?');
//let wifesfathersname = prompt('Wife ,what is your Fathersname?');
//let wife = (wifesname+wifessurname+wifesfathersname);
//console.log(wife);
//
//let sistername = prompt('Sister, what is your name?');
//let sistersurname = prompt('Sister, what is your surname?');
//let sisterfathersname = prompt('Sister, what is your Fathersname?');
//let sister = (sistername+sistersurname+sisterfathersname);
//console.log(sister);
//
//let momname= prompt('Mom, what is your name?');
//let momsurname = prompt('Mom, what is your surname?');
//let momfathersname = prompt('Mom, what is your Fathersname?');
//let mother = (momname+momsurname+momfathersname);
//console.log(mother);

//7. - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
//let number1 = + prompt('Enter your number1');
//let number2 = + prompt('Enter your number2');
//let number3 = + prompt('Enter your number3');
//console.log(number1);
//console.log(number2);
//console.log(number3);

//8.  При помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
//let number1 = + prompt('Enter your number1');
//let number2 = + prompt('Enter your number2');
//let number3 = + prompt('Enter your number3');
//let number4 = + prompt('Enter your number4');
//
//const pars1 = parseInt(number1);
//const pars2 = parseInt(number2);
//const pars3 = parseInt(number3);
//const pars4 = parseInt(number4);
//
//let result = (pars1+pars2+pars3+pars4);
//console.log(result);

//9.  при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
//let number1 = prompt('Enter your number1');
//let number2 = prompt('Enter your number2');
//let number3 = prompt('Enter your number3');
//
//const fl1 = parseFloat(number1);
//const fl2 = parseFloat(number2);
//const fl3 = parseFloat(number3);
//
//let result = (fl1 + fl2 +fl3);
//console.log(result);

// 10. При помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
//let number1 = prompt('Enter your number1');
//let number2 = prompt('Enter your number2');
//let number3 = prompt('Enter your number1');
//
//let math1 = Math.round(number1);
//let math2 = Math.round(number2);
//let math3 = Math.round(number3);
//
//let result = (math1 + math2 + math3);
//console.log(result);

// 11.  При помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
//let number1 = prompt('Enter your number1');
//let number2 = prompt('Enter your number2');
//
//let pars1 = parseInt(number1);
//let pars2 = parseInt(number2);
//
//console.log(Math.pow(pars1, pars2));

// 12. При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
//let a = 100;
//let b = '100';
//let c = true;
//let d = undefined;
//
//console.log(typeof a);
//console.log(typeof b);
//console.log(typeof c);
//console.log(typeof d);

// 13. Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
 //  5 < 6 -> true
 //  5 > 6 -> false
 //  5 == 6 -> false
 //  5 === 6 -> false
 //  10 === 10 -> true
 //  10 >= 10 -> true
 //  10 < 10 -> false
 //  10 > 10 -> false
 //  10 !== 10 -> false
 //  123 < '123' -> false
 //  123 === '123' -> true
//let example1 = (5 < 6);
//let example2 = (5 > 6);
//let example3 = (5 >= 6);
//let example4 = (5 === 6);
//let example5 = (10 === 10);
//let example6 = (10 >= 10);
//let example7 = (10 < 10);
//let example8 = (10 > 10);
//let example9 = (10 !== 10);
//let example10 = (123 < 123);
//let example11 = (123 === 123);
//
//console.log(example1,example2,example3,example4,example5,example6,example7,example8,example9,example10,example11);


//14. Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );---> false
// console.log(34 > 33 && 23 < 90 );---> true
// console.log(99 > 100 && 45 > 12 );---> false
// console.log(132 > 100 || 45 < 12 );---> true
// console.log(111 > 11 || 45 < 111 );---> true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );---> true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );---> true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );---> false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));---> true
// console.log(!!'-1');--->true---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
// console.log(!!-1);--->true---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
// console.log(!!'0');--->true---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
// console.log(!!'null');--->true---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
// console.log(!!'undefined');--->true---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
// console.log(!!(3/'owu'));--->false---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
// console.log((111 > 11 || 45 < 111) ||  !!'0');--->true---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));--->false---->стосовно цього насправді важко зрозуміти, але я вроді поняв що !! це Не НЕ- тобто воно насправді одне одного взаємовиключає
//console.log(!!'-1');
//console.log(!!-1);
//console.log(!!'0');
//console.log(!!'null');
//console.log(!!'undefined');
//console.log(!!(3/'owu'));
//console.log((111 > 11 || 45 < 111) ||  !!'0');
//console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

//CLASS

//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//let str = 'Привет';
//let num = 123;
//let flag = true;
//let txt = 'true';
//
//console.log(typeof str);
//console.log(typeof num);
//console.log(typeof flag);
//console.log(typeof txt);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
//let a1 = (5 + 3);
//let a2 = (5 - 3);
//let a3 = (5 * 3);
//let a4 = (5 / 3);
//let a5 = (5 % 3);
//console.log(a1);
//console.log(a2);
//console.log(a3);
//console.log(a4);
//

//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//let a6 =  (5 % 3);
//let a7 =  (3 % 5);
//let a8 =  (5 + '3');
//let a9 =  ('5' - 3);
//let a10 =  (75 + 'кг');
//console.log(a6);
//console.log(a7);
//console.log(a8);
//console.log(a9);
//console.log(a10);

//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
//let height = '23cm';
//let width = '10cm';
//let pars1 = parseInt(height);
//let pars2 = parseInt(width);
//let s = (pars1 * pars2);
//console.log(s);

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//    результат поместите в переменную v.
//let heightC = '10m';
//let dC = '4m';
//let pars3 = parseInt(heightC);
//let pars4 = parseInt(dC);
//let v = (pars3 * pars4);
//console.log(v);

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//let n = 3;
//let m = 4;
//let k =  (Math.sqrt((n * n) + (m * m)));
//console.log(k);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//let str = 'Hello world';
//alert(str);
//document.write(str);
//console.log(str);

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//alert('MykolaChornopyshchukVolodymyrovych\nage:25\nCybersport');

//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//    Вывести в документ содержимое переменной concatenation спомощью document.write
//let str1 = 'Кто';
//let str2 = 'ты';
//let str3 = 'такой?';
//let concatenation = (str1 + str2 + str3);
//document.write(concatenation);

//10. Какие значения выведет в окно браузера следующий фрагмент кода? И почему?
    //let str = "20";
    //let a = 5;
    //document.write(str + a + "<br/>");---->205----розумію
    //document.write(str - a + "<br/>");---->15-----????????? хз чому так
    //document.write(str * "2" + "<br/>");---->40----це розумію
    //document.write(str / 2 + "<br/>");---->10-----????????? хз чому так

//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//console.log(parseInt("3.14"));---3
//console.log(parseInt("-7.875"));    -7
//console.log(parseInt("435")); 435
//console.log(parseInt("Вася")); none, Nan

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//let str = prompt("Enter something", "ho-ho")
//console.log(str);
//let srt = prompt('Get off man!', 'Lol,man');
//console.log(srt);

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//let a = +prompt('enter your number');
//let b = +prompt('enter other number');
//let c = alert(a+b);

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//let a = prompt('enter your first name');
//let b = prompt('enter your last name');
//let c = prompt(' enter your age');
//let d =alert('Доброго вечера,'+a+b+',мои поздравления что вам'+c);

