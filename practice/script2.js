let arr = [150,40,500,80]

let r4 = arr.forEach(ele => {
    console.log(arr)
    console.log(ele)
    let b = ele + 5
    return b
});
console.log(r4)
console.log(arr)