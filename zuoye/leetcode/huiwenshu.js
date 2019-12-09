var isPalindrome = function (x) {
  
   if(x<0){
      return  false;
   }
   let arr = x.toString().split('')
   if(arr.length===1){
      return true
      // console.log(arr.length);
      
   }
   let num = arr.length / 2
 
   if (arr.length % 2 == 0) {
  
      let num1 = arr.join('').slice(0, num)
      let num2 = arr.join('').slice(num, arr.length).split("").reverse().join('')
      console.log(num1,num2);
      
      if (num1 === num2) {
         return true;
      } else {
         return false;
      }
   } else {
      let num = arr.length + 1 / 2
      let num1 = arr.join('').slice(0, num - 1)
      let num2 = arr.join('').slice(num - arr.length,arr.length).split("").reverse().join('')
    
      
      if (num1 === num2) {
         return true;
      } else {
         return false;
      }

   }
};
isPalindrome(0)

// console.log(isPalindrome(1221));
