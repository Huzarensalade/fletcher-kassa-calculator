/*create register object*/
const register = {
    value500: 0, 
    value200: 0,
    value100: 0,
    value50: 0,
    value20: 0,
    value10: 0,
    value5: 0,
    value2: 0,
    value1: 0,
    value050: 0,
    value020: 0,
    value010: 0,
    value005: 0,
};

/*function to calculate the value for each payment type*/
function calculateAmount(payment) {
    var amount = document.getElementById('amount' + payment).value;
    var value = amount * payment;
    document.getElementById('value' + payment).innerHTML = `€${round(value)}`;
    switch(payment) {
        case 500:
            register.value500 = value;
          break;
        case 200:
            register.value200 = value;
          break;
        case 100:
            register.value100 = value;
          break;
        case 50:
            register.value50 = value;
          break;
        case 20:
            register.value20 = value;
          break;
        case 10:
            register.value10 = value;
          break;
        case 5:
            register.value5 = value;
          break;
        case 2:
            register.value2 = value;
          break;
        case 1:
            register.value1 = value;
          break;
        case 0.5:
            register.value050 = value;
          break;
        case 0.2:
            register.value020 = value;
          break;
        case 0.1:
            register.value010 = value;
          break;
        case 0.05:
            register.value005 = value;
          break;
        default:
          console.log('switchcase error')
    }
    calculateTotal()
}

/*function to calculate the total value for the register*/
function calculateTotal() {
    var registerTotal = register.value500 + 
                        register.value200 + 
                        register.value100 + 
                        register.value50 + 
                        register.value20 + 
                        register.value10 + 
                        register.value5 + 
                        register.value2 + 
                        register.value1 + 
                        register.value050 + 
                        register.value020 + 
                        register.value010 + 
                        register.value005;
    document.getElementById('registerTotal').innerHTML = `€${round(registerTotal)}`;
    var registerStart = document.getElementById('registerStart').value;
    var registerBreak = registerTotal - registerStart;
    document.getElementById('registerBreakValue').innerHTML = `€${round(registerBreak)}`;
    if (registerBreak < 0) {
        document.getElementById('registerBreakTitle').innerHTML = 'Tekort';
    }
    else {
        document.getElementById('registerBreakTitle').innerHTML = 'Fooi';
    }
}

/*function to fix javscript rounding error*/
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}