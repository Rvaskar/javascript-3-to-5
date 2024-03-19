console.log('hello')

let obj = new Object()

obj.name='hey'
obj['name1'] = 'hi'

console.log(obj)

let obj2 = {
    name:'string',
    num:10,
    arr:[10,'hey',undefined,NaN,null,'hello'],
    un: undefined,
    nu: null,
    b: (2**54) -1

}
console.log('object')
console.log(typeof obj2.b)
console.log(obj2)
console.log(typeof (2**531 -1) )