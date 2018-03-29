$(document).ready(function() {
    function greater(arr, y) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > y) {
                console.log(arr[i]);
            }
        }
    }
    greater([1,2,3,4,5,6,7], 3)
    
});