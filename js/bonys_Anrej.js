// #1.
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.


const Calculator = function () {
  this.calculate = function (str) {
        const [a, znak , b] = str.split(' ');
        switch (znak) {
        case "+": return Number(a) + Number(b);
        case "-": return Number(a) - Number(b);
        default: return;
    }
  }

  this.addMethod = function (name, func) {
    return func(3,7)
    }
}

const calc = new Calculator();

// console.log(calc.calculate("3 - 7"));
// console.log(calc.calculate("3 + 7"));

// console.log(calc.addMethod("*", (a, b) => a * b));
// console.log(calc.addMethod("/", (a, b) => a / b));
// console.log(calc.addMethod("**", (a, b) => a ** b));

    



// #2.
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// ====

// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary); //выведет 310 - то есть 10*31
// ====

// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// worker.getRate; //выведет 10
// worker.getDays; //выведет 31
// worker.getSalary; //выведет 310 - то есть 10*31
// //Теперь используем сеттер:
// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

class Worker {
  #name;
  #surname;
  #rate;
  #days;
  constructor ( name, surname, rate, days ) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }
  
  get getName() {
    return this.#name; 
  };

  get getSurname() {
    return this.#surname; 
  };

  get getRate () {
    return console.log(this.#rate); 
  };

  set setRate(newRate) {
    this.#rate = newRate;
  }

  get getDays () {
    return console.log(this.#days); 
  };

  set setDays(newDays) {
    this.#days = newDays;
  }

  get getSalary() {
    return console.log(this.#rate * this.#days);
  }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'

// worker.getRate; 
// worker.getDays; 
// worker.getSalary; 

// worker.setRate = 20; 
// worker.setDays = 10; 
// console.log(worker.getSalary()); 




// #3.
// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:
// var str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

class MyString {

  reverse(oldstring) {
    return oldstring.split('').reverse().join('')
  }

  ucFirst(oldstring) {
    return oldstring[0].toUpperCase() + oldstring.slice(1)
  }

  ucWords(oldstring) {
    let newstring = oldstring[0].toUpperCase();
 
    for (let i = 1; i < oldstring.length; i++) {
      if (oldstring[i-1] === " ") {
        newstring = newstring + oldstring[i].toUpperCase();
       } else newstring = newstring + oldstring[i];
    }
    return newstring;
  }
}

// const str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'





// 4.
// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:
// var validator = new Validator();
// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));#
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

class Validator {

  isEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  isDomain(domain) {
    const re = /\S+\.\S+/;
    return re.test(domain);
  }

  isDate(date) {
    const [day, month, year] = date.split('.');

    if (Number(day) < 1 || Number(day) > 31) return false;
    if (Number(month) < 1 || Number(month) > 12) return false;
    if (Number(year) < 1900) return false;

    return true;
    
  }
}

const validator = new Validator();

// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isEmail('phphtmlmail.ru'));

// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDomain('phphtml/net'));

console.log(validator.isDate('12.05.2020'));
console.log(validator.isDate('32.05.2020'));

// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны



// $teaser
// var string = 'credit card number: 1234-2521-2315 credit card number2: 1234-2521-5897 ',
//   regV = /\b[0-9]{4}-[0-9]{4}-[0-9]{4}\b/g;

// console.log(string.match(regV));

// let exp = new RegExp('title');
// let exp = /sit/ig;
// let str = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, obcaecati? Molestiae est neque magni? Laborum ullam facere consequatur perferendis quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit Sit. Eveniet, obcaecati? Molestiae est neque magni? Laborum ullam facere consequatur perferendis quasi.';
// console.log(str.match(exp));
// console.log(exp.test(str));

// let exp = /\d/g;
// let str = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 2500 USD.';
// console.log(exp.test(str));
// console.log(str.match(exp));

// let exp = /\W/g;
// let str = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 2500 USD.';
// console.log(exp.test(str));
// console.log(str.match(exp));

// let exp = /2500/g;
// let str = 'Lorem ipsum dolor a sit, amet consectetur adipisicing elit 2500 USD.';
// console.log(exp.test(str));
// console.log(str.match(exp));

// let exp = /\b\d{4,}\b/g;
// let str = '789 52 65 4558 123 657 5 788 964441 1';
// console.log(str.match(exp));

// let exp = /\b[a-z]{3}\b/g;
// // let str = 'фцвфв фыв жфывждфл ыждвлждылждвлфы ждлафжалфывлфыждвлфыжд влфыжлвж';
// let str = 'Lorem ipsum dolor a sit, amet consectetur adipisicing elit 2500 USD.';
// console.log(str.match(exp));

// let exp = /^[a-z]+\.js$/g;
// let str = 'dgds index.js';
// console.log(str.match(exp));




// #5.
// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений

class Accumulator {
  constructor(startingValue) {
    this.value =startingValue;
  }

  read() {
    this.value += +prompt("Введите число");
  }
}

const accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений