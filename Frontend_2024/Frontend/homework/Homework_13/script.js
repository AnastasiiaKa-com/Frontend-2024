
console.log("hello, objects!");

// object
// сложный тип данных
// синтаксис объекта включает фигурные скобки

// Объекты - это структура данных, состоящие из пар "ключ: значение"

// пример объекта
let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

// 1. точечная нотация
console.log(user.name);

// 2. квадратные скобки
console.log(user["name"]);

console.log(user.salary);
// +'5000'    ->    5000
// 'пять тысяч'

user.salary = 5000;
console.log(user.salary);

user.age = 31;

delete user.isAdmin;
console.log(user);

// i - index (Array)
// key - ключ (Object)
// for (const key in object) {
    
// }

for (const key in user) {
    console.log(`Ключ: ${key}, Значение равно: ${user[key]}`);
    // console.log(`Ключ: ${key}, Значение равно: ${user.key}`);
}

user.greet = function() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age}`);
}

user.greet();

// HW

/*Задание 1
 Создать объект bankAccount (DEBIT CARD), который:

accountNumber: "123456789"
accountHolderName: "Alice"
balance: 0

deposit(sum) { TODO Пополнение счёта }
withdraw(sum) { TODO Списание счёта }
checkBalance() { ODO Просмотр баланса счёта } */

 const bankAccount = {
     accountNumber: "123456789",
     accountHolderName: "Alice",
     balance: 0,


/*
deposit(sum) { TODO Пополнение счёта }*/ 
deposit : function (sum){
    //проверка является ли сумма числом и находится лм она в допустимом диапазоне
    if(typeof sum === 'number'&& sum>=5 && sum <= 5000){
        this.balance += sum;
        console.log('Сумма ${sum}успешно зачислена. Новый баланс:${this balance}');
    }else{
        console.log("Некорректная сумма пополнения.Сумма должна быть от 5 до 5000 и числом.");
}
},


/*withdraw(sum) { TODO Списание счёта }*/

withdraw: function (sum){

   if(sum<= this.balance && sum > 0){
    this.balance -= sum;
    console.log(' Сумма ${sum} успешно списана.Остаток на счете : $ {this.balance}');
}else{
    console.log("Некорректная сумма списания.Проверьте баланс и сумму.")
}
   

},

/*checkBalance() { ODO Просмотр баланса счёта } */
checkBalance: function (){

    console.log("Баланс вашего аккаунта равен: ${this.balance}")

}
}