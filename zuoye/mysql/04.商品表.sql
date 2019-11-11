
-- .
-- #商品表
-- #id
-- # 商品的名称
-- #商品的品牌id
-- #商品的售价
-- #商品的原价
-- #商品的分类
-- #是否推荐商品 1推荐  0 不推荐

CREATE TABLE IF NOT EXISTS sk_goods(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT '商品id',
  goods_name VARCHAR(255) NOT NULL COMMENT '商品的名称',
  brand_id int  NOT NULL COMMENT '品牌id',
  price DECIMAL(10,2) not NULL DEFAULT 999 COMMENT '商品的售价',
  shop_price DECIMAL(10,2) NOT NULL  COMMENT '本店售价',
  cat_id int NOT NULL COMMENT '分类id',
  is_recommended TINYINT NOT NULL DEFAULT 0 COMMENT '是否是推荐商品1推荐0不推荐'
)ENGINE =Innodb DEFAULT CHARSET utf8;
/*插入数据*/
INSERT  into sk_goods VALUES (4,'米6',1,1999,1888,5,1),(5,'华为10',2,2999,2666,5,1),(6,'热水器',6,1900,1500,10,1);


-- #分类表
-- #id
-- #分类的名称
CREATE TABLE IF NOT EXISTS sk_cat(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '分类id',
  cat_name VARCHAR(32) NOT NULL COMMENT '分类名称'
)ENGINE =innodb DEFAULT CHARSET utf8;


/*插入数据*/
INSERT into sk_cat VALUES (5,'手机'),(6,'家电'),(3,'厨具'),(4,'家居'),(1,'数码');

-- #品牌表

-- #品牌的id
-- #品牌的名称
-- #品牌的图像
-- #品牌的介绍
-- #是否推荐品牌


CREATE TABLE IF NOT EXISTS sk_brand(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '品牌id',
  brand_name VARCHAR(255) NOT NULL COMMENT '品牌名称',
  brand_img VARCHAR(255) not NULL COMMENT '品牌图形',
  brand_desc TEXT NOT NULL COMMENT '品牌介绍',
  is_recommended TINYINT NOT NULL COMMENT '是否是推荐品牌1推荐0不推荐'
)ENGINE =innodb DEFAULT CHARSET utf8;


-- #插入数据
INSERT INTO sk_brand VALUES (1,'小米','c/a/1.img','为感冒而生',1),
  (2,'华为','http://www-file.huawei.com/-/media/CORPORATE/Images/home/head-pic/phone_nav_p10.png','不仅仅是世界五百强',0),
  (3,'海尔','123.jpg','海尔兄弟',1);

#


/*①找出华为手机所对应的分类*/
select a.goods_name,b.cat_name from sk_goods as a ,sk_cat as b  where a.cat_id = b.id and a.goods_name like '%华为%';
-- #②查找推荐品牌
SELECT  * 
 FROM sk_brand 
 WHERE is_recommended = 1;


-- #③查找推荐的商品
SELECT  * 
 FROM sk_goods 
 WHERE is_recommended = 1;

-- #④斯查询推荐品牌的所有商品  on using
SELECT *
 FROM sk_goods 
 WHERE brand_id 
 IN (
 SELECT id
 FROM sk_brand 
 WHERE is_recommended = 1
)

-- #⑤查询品牌名为小米的所有商品
   SELECT * 
   FROM sk_goods
   WHERE brand_id 
   IN (
      SELECT id 
      FROM sk_brand
      WHERE brand_name ='小米'
   )
-- #⑥根据商品来查看所有的品牌
SELECT * 
FROM sk_goods  a
LEFT JOIN   sk_brand b
ON a.brand_id = b.id;


-- #⑦查看商品价格大于300的品牌
SELECT brand_name 
FROM  sk_brand
WHERE  id
IN (
   SELECT brand_id
   FROM sk_goods
   WHERE price >300
);
-- #where
-- #having
-- #⑧某个品牌下下商品大于1万的
SELECT * 
FROM sk_brand 
WHERE id 
IN(
   SELECT brand_id 
   FROM sk_goods
   WHERE price >10000
)

-- #where子查询
-- #⑨查看华为10这件商品的品牌
   SELECT  brand_name 
   FROM sk_brand 
   WHERE id 
   IN(
      SELECT brand_id 
      FROM sk_goods 
      WHERE goods_name = '华为10'
   ) 

