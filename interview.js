//  1 write a javascript function that prints the letter a to z in th console. you should use a loop to iterate through the letters and print eachone on new line .
// 2. write a function to count the number of vowels in a strings 
// 3 .write a function to check if a all the vowel presents in a string or not  

//  1 solution

for( let char = 97 ; char <= 122 ; char++){
    console.log(String.fromCharCode(char));
}
//  2 solution 

const countVowel = (str) => {
    const vowel = "aeiou";
    let count = 0 ;
    for (let  item of str) {
        // console.log(item);
        // console.log(str.includes(item));
        if(vowel.includes(item)){
            count ++ ;
        
        }
        
    }
    return count ;
};
console.log(countVowel("hello !"));

// 3 .


const checkAllVowelPresentOrNot = (str) => {
    const vowels = "aeiou";
    for (let char of vowels) {
        // console.log(char);
        // console.log(str.includes(char));
        if(!str.includes(char)){
            return false;
        }
    }
    return true ;
};

console.log(checkAllVowelPresentOrNot("hey , i am khushbu  "));