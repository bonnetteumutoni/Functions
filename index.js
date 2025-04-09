
//Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
function strings(words){
    let wordLengths=words.map(item=>item.length);
    return wordLengths;
}
console.log(strings(["fruits","Banana","egg","time"]));

//Given an array of numbers, write a function that filters out and returns only the even numbers.
 function evenNums(numbers){
    let even=numbers.filter((item,index)=>item%2==0);
    return even;
 }
 console.log(evenNums([12,13,7,24]))
 
 //Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
 function score(name1,score,name2,score2){
    let nameScores=[[name1,score],[name2,score2]]
    for(let i=0;i<nameScores.length;i++){
     for(let j=0;j<nameScores[i].length;j++){
        if(nameScores[i][j]>75==true && nameScores[i+1][j]>75==true){
            let answer=[nameScores[i],nameScores[i+1]];
            return answer;
          } 
          else{
            for(let i=0;i<nameScores.length;i++){
           let answer=[nameScores[i]>75 || nameScores[i+1]>75];
           return answer
          }}
            
        }
     }
    }
 
 console.log(score("hdg",78,"ellen",57));

 //Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.
 function square(squared){
    const numSquares= squared.map(item => item*item);
    return numSquares;
 }
 console.log(square([2,34,2,5]));

 //Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
 function elements(elementsArray){
    let stringArray=elementsArray.filter((item)=>typeof(item)==="string");
    let stringUpper=stringArray.map(item=>item.toUpperCase());
    return stringUpper
 }
 console.log(elements([12,"time",43,"allen",34,"win"]));