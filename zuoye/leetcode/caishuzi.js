// 小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？
var game = (guess, answer)=>guess.filter((item,index)=>item===answer[index]).length

game([1,2,3], [3,2,1])

