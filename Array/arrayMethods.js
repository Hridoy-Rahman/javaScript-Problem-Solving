let arr=[1,2,3,4,5,'Hridoy',{name:'hridoy', age:25},[9,8,7]]
console.log(arr)
deleteElemet = arr.pop()
console.log(arr)
addElement = arr.push(10)
console.log(arr)

arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)

arr.forEach((x,i)=>{
    console.log(x)
})

for(let x of arr){
    console.log(x)
}