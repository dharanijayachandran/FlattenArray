let nestedArray = [1,2,[3,1,[6,9]],[3,1],8,9,[6,1]];
var newArr = [];
let result = flattenArray(nestedArray);
console.log("Result: ",result)
function flattenArray(array){
    array.forEach(arr=>{
        if(Array.isArray(arr)){
             flattenArray(arr);
        }else{
            newArr.push(arr);
        }
    })
    return newArr;
}

