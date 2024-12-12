
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
deposit: function (sum){
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