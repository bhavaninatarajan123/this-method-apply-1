let arr = [1, 2, 3];
let numbers = [4, 5, 6];
function add(){
    for(i=0;i<numbers.length;i++){
       // console.log(numbers[i]);
        arr.push(numbers[i])

}
        return arr
}

console.log(add.apply(arr,numbers));


//Output:[ 1, 2, 3, 4, 5, 6 ] Use apply method"