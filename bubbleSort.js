function bubbleSort(arr){
    n = arr.length;
    
    for( i = 0; i < n - 1; i++ ){
        for(j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
}

// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// bubbleSort(unsortedArray);
// console.log("Sorted array:", unsortedArray);


function bubbleSortv2(arr){
    n = arr.length;
    var stopsort;
    
    do{
        stopsort = false
        for(i = 0 ; i < n - 1 ; i++){
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                stopsort = true
            }
        }

    } while (stopsort)

    return arr

}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortv2(unsortedArray));