$(document).ready(function() {
    function swap(arr) {
        new_arr = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                new_arr.push('dojo')
            } else {
                new_arr.push(arr[i])
            }
        }
        console.log(new_arr)
    }
    swap([1,-1,2,-2,3,-3])
});