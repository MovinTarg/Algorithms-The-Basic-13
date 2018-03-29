$(document).ready(function() {
    num = 0;
    for (var i = 0; i < 256; i++){
        if (i % 2 == 0) {
            console.log('Number: ' + i)
            num += i
            console.log('Sum: ' + num)
        }
    }
    
});