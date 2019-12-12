// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。
var longestCommonPrefix = function (strs) {
   let t = strs[0] || '';
   console.log(t);
   let i = 1;
   while (t && i < strs.length) {
      console.log();
      
      if (strs[i].indexOf(t) != 0) {
         t = t.slice(0, t.length - 1);
         console.log(t);
      }
      //  else {
      //    i++;
      // }
   }
   return console.log(t);

};



longestCommonPrefix(["flower", "flow", "flight"])