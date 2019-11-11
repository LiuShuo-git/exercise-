CREATE TABLE `st`(
    `s_id` VARCHAR(20),
    `s_name` VARCHAR(20) NOT NULL DEFAULT '',
    `s_birth` VARCHAR(20) NOT NULL DEFAULT '',
    `s_sex` VARCHAR(10) NOT NULL DEFAULT '',
    PRIMARY KEY(`s_id`)
);

-- 插入学生表 数据
insert into st values('01' , '赵雷' , '1990-01-01' , '男');
insert into st values('02' , '钱电' , '1990-12-21' , '男');
insert into st values('03' , '孙风' , '1990-05-20' , '男');
insert into st values('04' , '李云' , '1990-08-06' , '男');
insert into st values('05' , '周梅' , '1991-12-01' , '女');
insert into st values('06' , '吴兰' , '1992-03-01' , '女');
insert into st values('07' , '郑竹' , '1989-07-01' , '女');
insert into st values('08' , '王菊' , '1990-01-20' , '女');

-- 、
CREATE TABLE `course`(
    `c_id`  VARCHAR(20),
    `c_name` VARCHAR(20) NOT NULL DEFAULT '',
    `t_id` VARCHAR(20) NOT NULL,
    PRIMARY KEY(`c_id`)
);

CREATE TABLE `teacher`(
    `t_id` VARCHAR(20),
    `t_name` VARCHAR(20) NOT NULL DEFAULT '',
    PRIMARY KEY(`t_id`)
);

CREATE TABLE `score`(
    `s_id` VARCHAR(20),
    `c_id`  VARCHAR(20),
    `s_score` INT(3),
    PRIMARY KEY(`s_id`,`c_id`)
);



-- # 查询 1990 年出生的学生名单
SELECT 
* 
FROM st 
WHERE
year(s_birth)='1990'
-- # 查询出没有成绩的学生信息
SELECT *
 FROM 
st 
 WHERE s_id
 NOT IN (
 SELECT s_id
 FROM score
)
-- # 查询平均成绩大于等于 60 分的同学的学生编号和学生姓名和平均成绩
SELECT a.s_id ,a.s_name,avg(b.s_score) AS s_avg 
  FROM st AS a,score AS b 
  WHERE a.s_id = b.s_id 
  group by b.s_id 
  HAVING avg(b.s_score)>60;