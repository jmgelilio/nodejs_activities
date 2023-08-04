global.x = 0
global.y = 1;
global.z;
function fibonnaci(n){
  if ( n === 0){
    return 0
  } else if (n === 1){
    return 1
  }else{
    

    for( i = 0; i < n; i++ ){
      this.z = this.x + this.y;
      console.log(this.x, "+", this.y,"=", this.z)
      this.x = this.y;
      this.y = this.z;
    }
    return ("The last number of fibonacci is",this.z)
  }
}

console.log(fibonnaci(8)); 