-- 创建一个名为test1的数据库
CREATE DATABASE test1;
-- 连接test1数据库
USE test1;
-- 在test1数据库下创建一张user表
-- user表信息如下
CREATE TABLE user(
-- userid    主键    自增长
  userid INT unsigned auto_increment PRIMARY KEY NOT NULL,
-- username    字符串类型    长度32
  username VARCHAR(32) NOT NULL,
-- password    字符串类型    长度32
  password VARCHAR(32) NOT NULL,
-- age    整数类型    长度2
  age TINYINT(2) unsigned NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


