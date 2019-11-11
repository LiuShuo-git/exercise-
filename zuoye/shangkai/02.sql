-- Student(S#,Sname,Sage,Ssex) 学生表

CREATE TABLE student (

  sid varchar(10) NOT NULL,

  sName varchar(20) DEFAULT NULL,

  sAge datetime DEFAULT '1980-10-12 23:12:36',

  sSex varchar(10) DEFAULT NULL,

  PRIMARY KEY (sid)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Course(C#,Cname,T#) 课程表

CREATE TABLE course (

  cid varchar(10) NOT NULL,

  cName varchar(10) DEFAULT NULL,

  tid int(20) DEFAULT NULL,

  PRIMARY KEY (cid)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- SC(S#,C#,score) 成绩表

CREATE TABLE sc (

  sid varchar(10) DEFAULT NULL,

  cid varchar(10) DEFAULT NULL,

  score int(10) DEFAULT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- Teacher(T#,Tname) 教师表

CREATE TABLE taacher (

  tid int(10) DEFAULT NULL,

  tName varchar(10) DEFAULT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 查询“001”课程比“002”课程成绩高的所有学生的学号;
	-- select a.sid
	-- from student a ,sc b 
	-- where a.sid=b.sid
	-- and b.cid='1'
	-- and b.cid='2'
	-- and a.score>b.score

  select sid from sc where cid = 1 and 

