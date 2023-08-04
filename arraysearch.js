function findNumber(arr, target_num){
    var left = 0;
    var right = arr.length - 1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target_num){
            return 'Found';
        }else if(arr[mid] < target_num){
            left = mid + 1
        }else{
            right = mmid -1
        }

    }
    return "not found";
}


const arr = [ 1,2,3,4,5,6,7,8,9,10]
const target_num = 10;

console.log(findNumber(arr, target_num))