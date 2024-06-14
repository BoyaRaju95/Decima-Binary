
function getValue() {
    // Get the input element by its ID 
    let inputField = document.getElementById("myInput");

    // Get the value of the input field 
    let value = inputField.value;



    var f1 = myfunction2(value);
    function myfunction2(num) {
        var l = " ";
        while (num > 0) {
            var m = parseInt(num % 2);
            l += m;
            num = parseInt(num / 2);
        }


        return l.toString().split('').reverse().join('');

    }




    var getNewValue = document.getElementById('newValue');
    getNewValue.innerHTML = (value + " " + " Binary Number is " + f1);

}





