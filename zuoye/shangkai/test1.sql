-- 创建一个名为test1的数据库
    CREATE DATABASE test1
    USE test1

CREATE TABLE user(
  userid int AUTO_INCREMENT COMMENT '用户id',
  username varchar(32) NOT NULL COMMENT '用户名',
  `password` varchar(32) NOT NULL COMMENT '密码',
   age int(2)   COMMENT '年龄',
   PRIMARY KEY (userid)
);