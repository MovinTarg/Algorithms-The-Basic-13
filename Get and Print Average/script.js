$(document).ready(function() {
    sum = 0
    function ave(arr) {
        for (var i = 0; i < arr.length+1; i++) {
            sum += i;
        }
        sum = sum/arr.length
        console.log(sum);
    }
    ave([1,2,3,4,5])
    
});