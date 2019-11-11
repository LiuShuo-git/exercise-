-- 表：

CREATE TABLE tbl_score (

  id int NOT NULL,

  username varchar(20) DEFAULT NULL,

  course varchar(20) DEFAULT NULL,

  score int DEFAULT NULL,

  PRIMARY KEY (id)

)

-- 数据：

insert into tbl_score (id, username, course, score) values('1','张三','语文','50');

insert into tbl_score (id, username, course, score) values('2','张三','数学','80');

insert into tbl_score (id, username, course, score) values('3','张三','英语','90');

insert into tbl_score (id, username, course, score) values('4','李四','语文','70');

insert into tbl_score (id, username, course, score) values('5','李四','数学','80');

insert into tbl_score (id, username, course, score) values('6','李四','英语','80');

insert into tbl_score (id, username, course, score) values('7','王五','语文','50');

insert into tbl_score (id, username, course, score) values('8','王五','英语','70');

insert into tbl_score (id, username, course, score) values('9','赵六','数学','90');

create database shangkai

-- 查询各科成绩都及格的学生姓名
  select distinct username from tbl_score where username  not in(select username from tbl_score    where score <60)  ;
