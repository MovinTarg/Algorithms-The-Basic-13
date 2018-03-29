$(document).ready(function() {
    function square(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i]
        }
        console.log(arr)
    }
    square([1,2,3,4])
    
});