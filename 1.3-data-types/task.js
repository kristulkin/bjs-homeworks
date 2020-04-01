'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let todayDay = new Date();
    let month = (date.getFullYear() - todayDay.getFullYear()) * 12 ;
   
    let loanCapital = amount - contribution;
    let monthPay = loanCapital * ((percent / 1200) + (percent / 1200) / (((1 + (percent / 1200)) ** month) - 1));
    let totalAmount = (monthPay * month).toFixed(2);
    
    return totalAmount;
}

function getGreeting(name) {
    let greeting;
    if (name == null || "" || undefined) {
        greeting = 'Привет, мир! Меня зовут Аноним'
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`
    };
     return greeting;
};
