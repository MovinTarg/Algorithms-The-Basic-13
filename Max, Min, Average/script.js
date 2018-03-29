$(document).ready(function() {
    function mma(arr){
        min = arr[0]
        max = arr[0]
        sum = arr[0]
        for (var i = 1; i < arr.length; i++){
            if (arr[i] < min) {
                min = arr[i]
            }
            if (arr[i] > max) {
                max = arr[i]
            }
            sum = sum + arr[i]
        }
        ave = sum/arr.length
        console.log('Min: ' + min)
        console.log('Max: ' + max)
        console.log('Ave: ' + ave)
    }
    mma([1,2,3,4,5])
});