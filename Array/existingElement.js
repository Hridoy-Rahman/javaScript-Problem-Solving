let arr=[1,2,3,4,5,'Hridoy',{name:'hridoy', age:25},[9,8,7]]
const findElement =(arr, num)=>{
    for(let x of arr){
        if(x===num)
        return true
    }
    return false;
}

console.log(findElement(arr,'Hridoy'))


const findIndex = (arr, num) =>{
    for(let i=0; i<arr.length; i++){
        if(num === arr[i]){
            return i
        }
    }
    return -1
}

console.log(findIndex(arr,'Hridoy'))