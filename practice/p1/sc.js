// let f = ()=>{
//     let ob1 = {
//         name: "ob11",
//         age: 6,
//         m: this
//       };
//       console.log(ob1);
//       console.log(ob1.m);
      
//     }
//     f()


// class Ob2 {
//   constructor(nam, ag) {
//     this.name = nam;
//     this.age = ag;
//   }
// }

// let c = new Ob2("raj", 65);
// console.log(c);

// function Ob3(nam, ag) {
//   this.name = nam;
//   this.age = ag;
// }

// let c1 = new Ob3(this, 6);
// console.log(c1);


// let x = new Object();
// console.log(x)

async function fetchData() {
    try {
      const response = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/story/25/', {
        method: 'GET'
      });
      const data = await response.json();
      console.log(data);
      let b = document.getElementById('div1')
      b.innerHTML = data[5 ]
  
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  
  async function fetchData2(){
    try{
      const response = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/25/',{
        method : 'GET'
      });
      const data = await response.json();
      console.log(data)
      return data
    } catch(err){
      console.error("Errorr fetching data:",err)
    }
  }
  
  
  fetchData2()