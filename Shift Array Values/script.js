$(document).ready(function() {
    function shift(arr) {
        new_arr = [0]
        for (var i = 0; i < arr.length-1; i++) {
            new_arr.push(arr[i])
        }
        console.log(new_arr)
    }
    shift([1,2,3,4,5])
    
});