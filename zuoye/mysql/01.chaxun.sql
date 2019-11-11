CREATE TABLE student (
   --  属性名 数据类型 [完整约束条件],
   --  属性名 数据类型 [完整约束条件],
   id int primary key  AUTO_INCREMENT,
   names varchar(5),
   age int ,
   gender int

);

-- 插入数据
INSERT INTO student ( names, age,gender) VALUES ( 'a', 12,0 );
INSERT INTO student ( names, age,gender) VALUES ( 'b', 32,1 );
INSERT INTO student ( names, age,gender) VALUES ( 'c', 32,0 );
INSERT INTO student ( names, age,gender) VALUES ( 'd', 22,0 );
INSERT INTO student ( names, age,gender) VALUES ( 'e', 20,1 );

-- 1.取出年龄最大的男同学
select * from student where gender = 1 and age = (select max(age) from student );
select * from student where gender = 1 order by age desc limit 1;

-- 2.取出女同学的平均年龄
select avg(age) from student  where  gender = 0;

-- 3.分别计算男女的平均年龄
select avg(age) from student  group by gender;

-- 4.取出男女同学中年龄最小的学生姓名
select * from (select * from student order by age asc) a group by gender;
select * from (select * from student order by age) as s;
having age = min(age);

select names from student  where age = (select min(age) from student where gender = 0 )and gender = 0  or age = (select min(age) from student where gender = 1 ) and gender = 1 ;
select names from student  where age in (select min(age) from student group by gender)
select * FROM (SELECT * FROM student order by age asc ) a group by gender;