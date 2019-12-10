// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
var subtractProductAndSum = function (n) {
   let num = n.toString().split('')
   let sum  = 0;
   let mul = 1;
   for(let i = 0; i<num.length ; i++){
      console.log(num[i]);
 
      sum += Number(num[i])
      mul *= Number(num[i])
 
   }
   return mul-sum  

};
subtractProductAndSum(234)