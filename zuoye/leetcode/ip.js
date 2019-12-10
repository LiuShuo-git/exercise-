// 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

// 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

var defangIPaddr = function (address) {
  let newAddress=  address.split('')
  newAddress.forEach((v,k) => {
     if(v=='.'){
        newAddress[k]='[.]'
     }
   })
   return newAddress.join('');
    

   
   // return console.log(address.replace(/1/g, '[.]'));
   // str.replace(new RegExp(old_str,'gm'),new_str
};

defangIPaddr("1.1.1.1")