// setTimeout(function(){
//    console.log("this is work")
// },2000)

// let persons=[
//    {fristName:"kanok",lastName: "reza"},
//    {fristName:"Ripa",lastName: "Rahat"},
// ]

// function createPersons(person){
//    setTimeout(function (){

//       persons.push(person);
//    },4000)
// }

// function getPerson(){
//    setTimeout(function (){
//       let output="";
//       persons.forEach(function(person){
//          output +=`<li>${person.fristName} ${person.lastName}</li>`
//       });
//       document.getElementById("output").innerHTML=output;
//    },1000);
// }

// createPersons({fristName:"Rony",lastName:"reza"})
// getPerson();


// 


// let persons=[
//    {fristName:"kanok",lastName: "reza"},
//    {fristName:"Ripa",lastName: "Rahat"},
// ]

// function createPersons(person,y){
//    setTimeout(function (){

//       persons.push(person);
//       y();
//    },1000)
// }

// function getPerson(){
//    setTimeout(function (){
//       let output="";
//       persons.forEach(function(person){
//          output +=`<li>${person.fristName} ${person.lastName}</li>`
//       });
//       document.getElementById("output").innerHTML=output;
//    },500);
// }

// createPersons({fristName:"Rony",lastName:"reza"},getPerson);





// let persons=[
//    {fristName:"kanok",lastName: "reza"},
//    {fristName:"Ripa",lastName: "Rahat"},
// ]

// function createPersons(person){
//   let prom= new Promise(function(resolve,reject){
//    persons.push(person);
//    let err=true ;
//    if(!err){
//       resolve();
//    }
//    else{
//       reject("error something worng")
//    }
//    resolve();
//   });
//   return prom;

// }

// function getPerson(){
//    setTimeout(function (){
//       let output="";
//       persons.forEach(function(person){
//          output +=`<li>${person.fristName} ${person.lastName}</li>`
//       });
//       document.getElementById("output").innerHTML=output;
//    },500);
// }

// createPersons({fristName:"Rony",lastName:"reza"})

// .then(getPerson)

// .catch(function(err){
//    console.log(err);
// })

//Fetch ApI
//Fetch Api uses javaScript promise








document.getElementById("getData").
addEventListener("click",getData);

// arrow function
function getData(){
   fetch('http://api.icndb.com/jokes/random')
   .then(res=>res.json() )
      // console.log(res.json());
      
 
   .then(data=> {console.log(data);})
   
   .catch(err => { console.log(err);})
    
 

}
