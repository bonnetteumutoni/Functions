//Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
function strings(a,b,c,d){
    let words=[a,b,c,d];
    let wordLengths=words.map(item=>item.length);
    return wordLengths;
}
console.log(strings("fruits","Banana","egg","time"));

//Given an array of numbers, write a function that filters out and returns only the even numbers.
 function evenNums(num1,num2,num3,num4){
    let numbers=[num1,num2,num3,num4];
    let even=numbers.filter((item,index)=>item%2==0);
    return even;
 }
 console.log(evenNums(12,13,7,24))
 
 //Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
 function score(name1,score,name2,score2){
    let nameScores=[[name1,score],[name2,score2]]
    
 }