create database ceshi;
use ceshi

-- 创建测试表
CREATE TABLE `ceshi1`  (
  `id` int(10) NOT NULL AUTO_INCREMENT Primary Key ,
   `username` varchar(32) NOT NULL,
   `password` varchar(32)  NOT NULL
   
)ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

INSERT INTO ceshi1 ( username,password )
                       VALUES
                       (' zhangsan','ls526666 ');
 INSERT INTO `comment` VALUES (1, 1, 2, '非常棒，科技兴国', '2019-02-21 10:14:20');