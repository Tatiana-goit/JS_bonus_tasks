const users = [
  { name: "Игорь", sex: "male", age: 29 },
  { name: "Михаил", sex: "male", age: 21 },
  { name: "Ирина", sex: "female", age: 25 },
  { name: "Олег", sex: "male", age: 14 },
  { name: "Марина", sex: "female", age: 23 },
  { name: "Оксана", sex: "female", age: 17 },
  { name: "Алексей", sex: "male", age: 8 },
  { name: "Антон", sex: "male", age: 47 },
  { name: "Валерия", sex: "female", age: 50 },
  { name: "Екатерина", sex: "female", age: 12 }
];



/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/

const filterOfAge = (users) => {
  const newUser = [...users]
    .filter(user => user.age >= 18)
    .sort((a, b) => a.age - b.age);
  
  const junior = newUser[0];
  
  if (junior.sex === "male") {
    return `${junior.name} самый молодой и ему ${junior.age} лет`
  } else
    return `${junior.name} самая молодая и ей ${junior.age} лет`
}

console.log(filterOfAge(users));






// const filterOfAge = users.filter(user => user.age >= 18)

// console.log(filterOfAge);




/* 
  2. В массиве users отфильтровать всех по полу, сначала female потом male 
*/
const filterOfSex = (users,sex) =>
    users.filter(user => user.sex === sex);

console.log(filterOfSex(users,'female'));
console.log(filterOfSex(users,'male'));


// or

const SortedOfSex = [...users].sort((a, b) => a.sex.localeCompare(b.sex));
console.log(SortedOfSex);




/* 
  3. В массиве users найти пользователя по имени Марина
*/

const findName = (users,name) =>
    users.find(user => user.name === name)

console.log(findName(users,'Марина'));




/* 
  4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
  если женщина снять 5 лет
  !!! Важно проверять что возраст не отрицательное число :)
*/

const changeAge = (users) => {
   users.map(user => {

    if (user.sex === 'male' && user.age > 0) {
      user.age += 10;
    } else { user.age -= 5 && user.age > 0 }
    return user.age
  })
    
  return users;
}

console.log(changeAge(users));