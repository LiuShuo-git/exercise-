-- Student(S#,Sname,Sage,Ssex) 学生表
CREATE TABLE student (
  sid int(10) NOT NULL,
  sName varchar(20) DEFAULT NULL,
  sAge datetime DEFAULT '1980-10-12 23:12:36',
  sSex varchar(10) DEFAULT NULL,
  PRIMARY KEY (sid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Course(C#,Cname,T#) 课程表
CREATE TABLE course (
  cid int(10) NOT NULL,
  cName varchar(10) DEFAULT NULL,
  tid int(20) DEFAULT NULL,
  PRIMARY KEY (cid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- SC(S#,C#,score) 成绩表
CREATE TABLE sc (
  sid int(10) DEFAULT NULL,
  cid int(10) DEFAULT NULL,
  score int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Teacher(T#,Tname) 教师表 
CREATE TABLE taacher (
  tid int(10) DEFAULT NULL,
  tName varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO course VALUE(1, '001', 1);
INSERT INTO course VALUE(2, '002', 2);
INSERT INTO course VALUE(3, '003', 1);
INSERT INTO course VALUE(4, '004', 3);

INSERT INTO sc VALUE(1, 1, 63);
INSERT INTO sc VALUE(1, 2, 52);
INSERT INTO sc VALUE(2, 1, 45);
INSERT INTO sc VALUE(2, 2, 77);
INSERT INTO sc VALUE(3, 1, 89);
INSERT INTO sc VALUE(3, 2, 42);
INSERT INTO sc VALUE(4, 2, 57);

-- 查询“001”课程比“002”课程成绩高的所有学生的学号;
SELECT DISTINCT a.sid FROM sc a, sc b WHERE a.sid = b.sid and a.score > b.score and a.cid = (SELECT cid FROM course where cName = '001') and b.cid = (SELECT cid FROM course where cName = '002');