SELECT * 
FROM student a ,score b, course c 
WHERE a.s_id = b.s_id AND b.c_id = c.c_id;


SELECT * 
FROM student a 
LEFT JOIN 
score b ON  a.s_id = b.s_id
LEFT JOIN 
coures c
ON b.c_id = c.c_id
ORDER BY a.s_id;


SELECT s_name 
FROM student a,score b 
WHERE  a.s_id = b.s_id AND 
b.c_id = (SELECT c_id FROM coures WHERE c_name = '语文')



