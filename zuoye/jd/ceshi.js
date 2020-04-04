// 字符串反转，
// let str = '123456';
// let str1 = str.split("").reverse().join('');
// console.log(str1);
// 数组去重
// let arr = [1,2,3,3,4]
// for(var i = 0 ;i<5 ;i++){
//    setTimeout(function(){
// console.log(new Date,i);

//    },1000)
// }
// console.log(new Date,i);


var arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5]; 
function rep(arr) {      
var ret = []; 
for (var i = 0; i < arr.length; i++) {     
   // console.log(arr[i]);
   
   console.log(  arr.indexOf(arr[i]));
   
 
   
if (arr.indexOf(arr[i]) == i){ 

// ret.push(arr[i]);        
 }     
}     
return ret;
}
console.log(rep(arr));

