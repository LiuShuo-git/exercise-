CREATE TABLE tbl_score (

  id int(10) NOT NULL,

  username varchar(20) DEFAULT NULL,

  course varchar(20) DEFAULT NULL,

  score int(10) DEFAULT NULL,

  PRIMARY KEY (id)

);

insert into tbl_score (id, username, course, score) values('1','张三','语文','50');

insert into tbl_score (id, username, course, score) values('2','张三','数学','80');

insert into tbl_score (id, username, course, score) values('3','张三','英语','90');

insert into tbl_score (id, username, course, score) values('4','李四','语文','70');

insert into tbl_score (id, username, course, score) values('5','李四','数学','80');

insert into tbl_score (id, username, course, score) values('6','李四','英语','80');

insert into tbl_score (id, username, course, score) values('7','王五','语文','50');

insert into tbl_score (id, username, course, score) values('8','王五','英语','70');

insert into tbl_score (id, username, course, score) values('9','赵六','数学','90');

-- 查询各科成绩都及格的学生姓名。

-- SELECT distinct a.username FROM tbl_score a WHERE a.username NOT IN (SELECT distinct b.username FROM tbl_score b WHERE b.score < 60);

-- SELECT a.username FROM tbl_score a WHERE a.course = '语文' and a.score > 60;
-- SELECT b.username FROM tbl_score b WHERE b.course = '数学' and b.score > 60;
-- SELECT c.username FROM tbl_score c WHERE c.course = '英语' and c.score > 60;

SELECT username FROM tbl_score WHERE username IN (SELECT username FROM tbl_score WHERE username IN(SELECT username FROM tbl_score WHERE course = '语文' and score > 60) AND course = '数学' AND score > 60) AND course = '英语' and score > 60;