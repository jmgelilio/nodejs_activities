function isPalindrome(str){
    var reverstr = str.split('').reverse().join('');

    return str === reverstr
}

console.log(isPalindrome("racecasr"));