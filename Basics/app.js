let a=7;
var b=9.7;
var c=-9.7;
var d=97000000000000000;

let ab="sdhfdhf";
let cb="19";
let isgreen=true;
console.log(typeof(isgreen))




let name= "mark"
// const pi=3.142;

let basics=document.createElement("h1");
basics.innerHTML="Basics of JavaScript";
document.body.appendChild(basics);


// alert("the sum of 7 and 9 is = "+ (a+b));

// Events
// function
function changeimg()
{
  let img= document.getElementById("img");
  img.src="./images/2.jpg" ;
  img.style.border="12px solid purple"
}

function reverseimg()
{
    let img= document.getElementById("img");
    img.src="./images/1.jpg" ;
    img.style.border="none";
}

// Arrays And Objects
let movies=[
  "the meg 2",
  "mission impossible",
  "spiderman",
  "avengers",
  "dr. strange",
  "batman" 
]
console.log(movies.length)
console.log(movies);
console.log(movies[3]);

// document.write(movies);



// loops
// forEach
// movies.forEach(element => {

//   document.write(element+"<br>");

// });

//for
// for(let i=0;i<movies.length; i++){
//   document.write(movies[i]+"<br>");

// }

//while

// works on last index of array
movies.push("superman");
movies.push("aquaman");
movies.pop();
movies.pop();
movies.pop();
// movies.push("aquaman");

// works on first index of array
// movies.unshift("superman");
// movies.unshift("batman");
// movies.unshift("antman");

// movies.shift();
// movies.shift();
// movies.shift();
// movies.shift();

//Works on any index of array
movies.splice(2,0,"aquaman","journey 2","harry potter")

let i=0;
let list=document.getElementById("movieList");
while(i<movies.length){
 list.innerHTML+=
`<li>${movies[i]}</li>`
  i++;
}

// funtion
function findMovie(){
let query=document.getElementById("search").value;
let lowerCaseQuery=query.toLowerCase();

// alert(lowerCaseQuery)

let match=0;
 for (let i = 0; i < movies.length; i++) {

  if (lowerCaseQuery==movies[i]) {
match++;
var indexFound=i;

} 
 }
if(match>0){
  list.innerHTML=`
  ${movies[indexFound]}
  `

}
else{
  list.innerHTML=`Movie not found`
}

}
// arrow function
// let findMovie= ()=>{

// }