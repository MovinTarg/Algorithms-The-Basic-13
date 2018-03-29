$(document).ready(function() {
    new_arr = 0
    function array(arr) {
        for (var i = 0; i < arr.length+1; i++) {
            if (arr[i] > new_arr) {
                new_arr = arr[i];
            }
        }
        console.log(new_arr);
    }
    array([1,2,3,4,9,5])
    
});