$(document).ready(function() {
    new_arr = []
    for (var i = 0; i < 256; i++) {
        if (i % 2 != 0) {
            new_arr.push(i)
        }
    }
    console.log(new_arr)
    
});