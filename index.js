// Write your solution here!


const cats = ['Milo', 'Otis', 'Garfield'];


/*
cats.length; 
/*
cats;

const destructivelyAppendCat = ["Milo", "Otis", "Garfield"];

destructivelyAppendCat.push("Ralph");

destructivelyAppendCat;
*/

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
 }

 function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
 }
  
  function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
  }
  
  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }

  function appendCat(name){
    const name_1= [...cats,name];
    return name_1;
  }


  function prependCat(name){
    const name_2=[name, ...cats];
    return name_2
  }
  
  function removeLastCat(){
    const caats= cats.slice(0,cats.length-1);
    return caats;
  }
  
  function removeFirstCat(){
    const catts= cats.slice(1)
    return catts
  }


 /*
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
    


/*
cats;

cats.unshift("Bob");

cats;

/*
function catNames(name) {
    console.log("Cat Names:", name);
  }
  */
