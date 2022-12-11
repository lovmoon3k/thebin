
create table p_type(
p_type_id int not null,
p_type_name varchar(20)
);
alter table p_type add constraint type_PK Primary key(p_type_id);

create table company(
company_id int not null,
company_name varchar(30)
);
alter table company add constraint company_PK Primary key(company_id);

create table performer(
performer_id int not null,
performer_name varchar(30)
);
alter table performer add constraint performer_PK Primary key(performer_id);

create table genre(
genre_id int not null,
genre_name varchar(30)
);
alter table genre add constraint genre_PK Primary key(genre_id);

create table product(
product_id int not null,
year_published date,
product_name varchar(30),
price number(6,2),
genre_id int not null,
company_id int not null,
performer_id int not null,
p_type_id int not null
);
alter table product add constraint product_PK Primary key(product_id);
alter table product add constraint product_genre_FK Foreign key(genre_id) references genre(genre_id);
alter table product add constraint product_company_FK Foreign key(company_id) references company(company_id);
alter table product add constraint product_performer_FK Foreign key(performer_id) references performer(performer_id);
alter table product add constraint product_type_FK Foreign key(p_type_id) references p_type(p_type_id);

create table e_position(
e_position_id int not null,
position_name varchar(20)
);
alter table e_position add constraint e_position_PK Primary key(e_position_id);

create table employee(
employee_id int not null,
employee_name varchar(30),
phone_number varchar(10),
e_position_id int not null
);
alter table employee add constraint employee_PK Primary key(employee_id);
alter table employee add constraint employee_position_FK Foreign key(e_position_id) references e_position(e_position_id);

create table customer(
customer_id int not null,
customer_name varchar(30),
address varchar(30),
phone_number varchar(10)
);
alter table customer add constraint customer_PK Primary key(customer_id);

create table sale(
sale_id int not null,
sale_date date,
employee_id int not null,
customer_id int not null
);
alter table sale add constraint sale_PK Primary key(sale_id);
alter table sale add constraint sale_employee_FK Foreign key(employee_id) references employee(employee_id);
alter table sale add constraint sale_customer_FK Foreign key(customer_id) references customer(customer_id);

create table item(
quantity int,
product_id int not null,
sale_id int not null
);
alter table item add constraint item_product_FK Foreign key(product_id) references product(product_id);
alter table item add constraint item_sale_FK Foreign key(sale_id) references sale(sale_id);


insert into company values(1, 'Seven Eight');
insert into company values(2, 'Nuclear Blast');

insert into genre values(1, 'pop-folk');
insert into genre values(2, 'metal');
insert into genre values(3, 'rap');

insert into performer values(1, 'Slavi Trifonov');
insert into performer values(2, 'Joakim Broaden');
insert into performer values(3, 'Eminem');

insert into p_type values(1, 'CD');
insert into p_type values(2, 'Disk');
insert into p_type values(3, 'Blue-Ray');
--update p_type set p_type_name = 'DVD' where p_type_id = 2;

insert into product values(1, '15-AUG-2002', 'Nie Produlzhavame', 16.50, 1, 1, 1, 2);
insert into product values(2, '8-SEP-2000', 'Vaxpopuli', 12.60, 1, 1, 1, 1);
insert into product values(3, '2-FEB-2003', 'No Mercy', 16.50, 1, 1, 1, 3);
insert into product values(4, '27-AUG-2001', '40 to 1', 19.99, 2, 2, 2, 1);
insert into product values(5, '6-OCT-2004', 'Primo Victoria', 19.99, 2, 2, 2, 3);
insert into product values(6, '3-JAN-2005', 'Last Stand', 19.99, 2, 2, 2, 1);
insert into product values(7, '1-AUG-2001', 'Til I Collapse', 10.20, 3, 2, 3, 2);
insert into product values(8, '30-JUN-2009', 'Rap God', 10.20, 3, 2, 3, 1);
insert into product values(9, '19-MAR-2002', 'Without me', 23.99, 3, 2, 3, 3);
--update product set price = 17.99 where product_id = 8;

insert into e_position values(1, 'clerk');
insert into e_position values(2, 'manager');
insert into e_position values(3, 'advertiser');

insert into employee values(1, 'Hristo Ivanov', '0893140560', 1);
insert into employee values(2, 'Georgi Lazarov', '0893535187', 1);
insert into employee values(3, 'Boris Petkov', '0873037189', 2);
insert into employee values(4, 'Hristo Plamenov', '0863137123', 3);
update employee set employee_name = 'Petar Vasilev' where employee_id = 4;

insert into customer values(1, 'Bozhana Stancheva', 'Vasil Levski 15', '0817534480');
insert into customer values(2, 'Petar Stoilov', 'tsar Samuil 4', '0847339085');
insert into customer values(3, 'Martin Stoyanov', 'Trakia 6', '0893584581');
insert into customer values(4, 'Todor Petkov', 'Studetska 9', '0827572692');
insert into customer values(5, 'Kolyo Grigorov', 'Hristo Botev 12', '0893084083');
insert into customer values(6, 'Mustafa Cholakov', 'Saedinenie 8', '0823981029');
update customer set address = 'Trakia 3' where customer_id = 3;

insert into sale values(1, '22-AUG-2022', 1, 1);
insert into sale values(2, '19-SEP-2022', 2, 1);
insert into sale values(3, '20-SEP-2022', 1, 2);
insert into sale values(4, '20-SEP-2022', 3, 1);
insert into sale values(5, '22-SEP-2022', 1, 6);
insert into sale values(6, '25-SEP-2022', 2, 5);
insert into sale values(7, '26-SEP-2022', 1, 3);
insert into sale values(8, '28-SEP-2022', 4, 4);
insert into sale values(9, '28-SEP-2022', 1, 3);
insert into sale values(10, '2-OCT-2022', 2, 1);
insert into sale values(11, '5-OCT-2022', 1, 2);
insert into sale values(12, '6-OCT-2022', 2, 5);
insert into sale values(13, '8-OCT-2022', 1, 6);
insert into sale values(14, '8-OCT-2022', 2, 2);
insert into sale values(15, '10-OCT-2022', 1, 1);
insert into sale values(16, '11-OCT-2022', 2, 1);
insert into sale values(17, '15-OCT-2022', 1, 2);
insert into sale values(18, '19-OCT-2022', 2, 5);
insert into sale values(19, '20-OCT-2022', 4, 1);
insert into sale values(20, '20-OCT-2022', 2, 2);
insert into sale values(21, '21-OCT-2022', 2, 3);
--update sale set customer_id = 2 where sale_id = 4;
--delete from sale where sale_id = 21;

insert into item values(2, 9, 1);
insert into item values(1, 1, 1);
insert into item values(1, 5, 2);
insert into item values(3, 2, 3);
insert into item values(1, 3, 4);
insert into item values(1, 6, 4);
insert into item values(2, 7, 4);
insert into item values(1, 4, 5);
insert into item values(1, 8, 6);
insert into item values(1, 2, 7);
insert into item values(1, 9, 7);
insert into item values(4, 5, 8);
insert into item values(1, 3, 9);
insert into item values(1, 8, 10);
insert into item values(2, 1, 11);
insert into item values(2, 7, 11);
insert into item values(1, 1, 12);
insert into item values(1, 6, 13);
insert into item values(3, 8, 14);
insert into item values(1, 4, 15);
insert into item values(2, 7, 16);
insert into item values(1, 4, 17);
insert into item values(1, 8, 18);
insert into item values(2, 2, 19);
insert into item values(1, 5, 19);
insert into item values(4, 5, 19);
insert into item values(1, 3, 19);
insert into item values(1, 8, 20);
insert into item values(1, 2, 20);
insert into item values(2, 7, 20);
insert into item values(1, 3, 20);
insert into item values(4, 6, 21);
insert into item values(3, 8, 21);
insert into item values(4, 9, 21);
--update item set quantity=2 where sale_id = 15;
--delete from item where product_id = 9 and sale_id =21;


select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(t.p_type_name) like lower('&type');

select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(pe.performer_name) like lower('&performer');

select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(g.genre_name) like lower('&genre');

select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where extract(year from p.year_published) = &year_published;

select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(c.company_name) like lower('&company');

--1
select s.sale_date, c.customer_name, e.employee_name, p.year_published, p.product_name, p.price,g.genre_name, c.company_name, pe.performer_name,
t.p_type_name from sale s join customer c on c.customer_id = s.customer_id 
join employee e on s.employee_id = e.employee_id join item i on i.sale_id = s.sale_id join product p on p.product_id = i.product_id
join genre g on g.genre_id = p.genre_id join p_type t on p.p_type_id = t.p_type_id join performer pe on pe.performer_id = p.performer_id
join company c on c.company_id = p.company_id
where lower(e.employee_name) like lower('&name') order by s.sale_date;

--2
select * from (select s.sale_date, c.customer_name, e.employee_name, p.year_published, p.product_name, p.price,g.genre_name, c.company_name, pe.performer_name,
t.p_type_name from sale s join customer c on c.customer_id = s.customer_id 
join employee e on s.employee_id = e.employee_id join item i on i.sale_id = s.sale_id join product p on p.product_id = i.product_id
join genre g on g.genre_id = p.genre_id join p_type t on p.p_type_id = t.p_type_id join performer pe on pe.performer_id = p.performer_id
join company c on c.company_id = p.company_id where extract(year from s.sale_date) = 2022 order by s.sale_date desc) where rownum <=5 order by employee_name;

--3
select i.quantity, p.product_name, t.p_type_name, s.sale_date, pe.performer_name, c.company_name from item i
join product p on i.product_id = p.product_id join sale s on i.sale_id = s.sale_id join p_type t
on p.p_type_id = t.p_type_id join customer c on s.customer_id = c.customer_id join performer pe on p.performer_id = pe.performer_id 
join company c on p.company_id = c.company_id where lower(c.customer_name) like lower('&customer')
order by t.p_type_name, s.sale_date;

--4
select i.quantity, p.product_name, t.p_type_name, c.company_name, pe.performer_name, s.sale_date, c.customer_name from item i
join product p on i.product_id = p.product_id join sale s on i.sale_id = s.sale_id join p_type t
on p.p_type_id = t.p_type_id join customer c on s.customer_id = c.customer_id join performer pe on p.performer_id = pe.performer_id 
join company c on p.company_id = c.company_id where s.sale_date between '&start_date' and '&end_date'
order by c.customer_name, s.sale_date;



CREATE SEQUENCE company_seq START WITH 3;
CREATE OR REPLACE TRIGGER comapany_id_auto_trigger
BEFORE INSERT ON company FOR EACH ROW WHEN (NEW.company_id IS NULL)
BEGIN
    :NEW.company_id := company_seq.NEXTVAL;
END;

CREATE SEQUENCE customer_seq START WITH 7;
CREATE OR REPLACE TRIGGER customer_id_auto_trigger
BEFORE INSERT ON customer FOR EACH ROW WHEN (NEW.customer_id IS NULL)
BEGIN
    :NEW.customer_id := customer_seq.NEXTVAL;
END;

CREATE SEQUENCE e_position_seq START WITH 4;
CREATE OR REPLACE TRIGGER e_position_id_auto_trigger
BEFORE INSERT ON e_position FOR EACH ROW WHEN (NEW.e_position_id IS NULL)
BEGIN
    :NEW.e_position_id := e_position_seq.NEXTVAL;
END;

CREATE SEQUENCE employee_seq START WITH 5;
CREATE OR REPLACE TRIGGER employee_id_auto_trigger
BEFORE INSERT ON employee FOR EACH ROW WHEN (NEW.employee_id IS NULL)
BEGIN
    :NEW.employee_id := employee_seq.NEXTVAL;
END;

CREATE SEQUENCE genre_seq START WITH 4;
CREATE OR REPLACE TRIGGER genre_id_auto_trigger
BEFORE INSERT ON genre FOR EACH ROW WHEN (NEW.genre_id IS NULL)
BEGIN
    :NEW.genre_id := genre_seq.NEXTVAL;
END;

CREATE SEQUENCE p_type_seq START WITH 4;
CREATE OR REPLACE TRIGGER p_type_id_auto_trigger
BEFORE INSERT ON p_type FOR EACH ROW WHEN (NEW.p_type_id IS NULL)
BEGIN
    :NEW.p_type_id := p_type_seq.NEXTVAL;
END;

CREATE SEQUENCE performer_seq START WITH 4;
CREATE OR REPLACE TRIGGER performer_id_auto_trigger
BEFORE INSERT ON performer FOR EACH ROW WHEN (NEW.performer_id IS NULL)
BEGIN
    :NEW.performer_id := performer_seq.NEXTVAL;
END;

CREATE SEQUENCE product_seq START WITH 10;
CREATE OR REPLACE TRIGGER product_id_auto_trigger
BEFORE INSERT ON product FOR EACH ROW WHEN (NEW.product_id IS NULL)
BEGIN
    :NEW.product_id := product_seq.NEXTVAL;
END;

CREATE SEQUENCE sale_seq START WITH 22;
CREATE OR REPLACE TRIGGER sale_id_auto_trigger
BEFORE INSERT ON sale FOR EACH ROW WHEN (NEW.sale_id IS NULL)
BEGIN
    :NEW.sale_id := sale_seq.NEXTVAL;
END;

CREATE OR REPLACE PROCEDURE InsertCompany(
in_company_name IN company.company_name%TYPE 
) IS
BEGIN
    INSERT INTO company(company_name) values(in_company_name);
END;

CREATE OR REPLACE PROCEDURE InsertCustomer(
in_customer_name IN customer.customer_name%TYPE,
in_address IN customer.address%TYPE,
in_phone_number IN customer.phone_number%TYPE
) IS
BEGIN
    INSERT INTO customer(customer_name, address, phone_number) values(in_customer_name, in_address, in_phone_number);
END;

CREATE OR REPLACE PROCEDURE InsertE_position(
in_position_name IN e_position.position_name%TYPE
) IS
BEGIN
    INSERT INTO e_position(position_name) values(in_position_name);
END;

CREATE OR REPLACE PROCEDURE InsertEmployee(
in_employee_name IN employee.employee_name%TYPE,
in_phone_number IN employee.phone_number%TYPE,
in_e_position_id IN employee.e_position_id%TYPE
) IS
BEGIN
    INSERT INTO employee(employee_name, phone_number, employee.e_position_id) 
    VALUES(in_employee_name, in_phone_number, in_e_position_id);
END;

CREATE OR REPLACE PROCEDURE InsertGenre(
in_genre_name IN genre.genre_name%TYPE
) IS
BEGIN
    INSERT INTO genre(genre_name) VALUES(in_genre_name);
END;

CREATE OR REPLACE PROCEDURE InsertItem(
in_quantity IN item.quantity%TYPE,
in_product_id IN item.product_id%TYPE,
in_sale_id IN item.sale_id%TYPE
) IS
BEGIN
    INSERT INTO item(quantity, product_id, sale_id) VALUES(in_quantity, in_product_id, in_sale_id);
END;

CREATE OR REPLACE PROCEDURE InsertP_type(
in_p_type_name IN p_type.p_type_name%TYPE
) IS
BEGIN
    INSERT INTO p_type(p_type_name) VALUES(in_p_type_name);
END;

CREATE OR REPLACE PROCEDURE InsertPerformer(
in_performer_name IN performer.performer_name%TYPE
) IS
BEGIN
    INSERT INTO performer(performer_name) VALUES(in_performer_name);
END;

CREATE OR REPLACE PROCEDURE InsertProduct(
in_year_published IN product.year_published%TYPE,
in_product_name IN product.product_name%TYPE,
in_price IN product.price%TYPE,
in_genre_id IN product.genre_id%TYPE,
in_company_id IN product.company_id%TYPE,
in_performer_id IN product.performer_id%TYPE,
in_p_type_id IN product.p_type_id%TYPE
) IS
BEGIN
    INSERT INTO product(year_published, product_name, price, genre_id, company_id, performer_id, p_type_id) 
    VALUES(in_year_published, in_product_name, in_price, in_genre_id, in_company_id, in_performer_id, in_p_type_id);
END;

CREATE OR REPLACE PROCEDURE InsertSale(
in_sale_date IN sale.sale_date%TYPE,
in_employee_id IN sale.employee_id%TYPE,
in_customer_id IN sale.customer_id%TYPE
) IS
BEGIN
    INSERT INTO sale(sale_date, employee_id, customer_id) 
    VALUES(in_sale_date, in_employee_id, in_customer_id);
END;


CREATE OR REPLACE PROCEDURE UpdateCompany(
in_company_id IN company.company_id%TYPE,
in_company_name IN company.company_name%TYPE
) IS
BEGIN
    UPDATE company set company_name = in_company_name WHERE company_id = in_company_id;
END;

CREATE OR REPLACE PROCEDURE UpdateCustomer(
in_customer_id IN customer.customer_id%TYPE,
in_customer_name IN customer.customer_name%TYPE,
in_address IN customer.address%TYPE,
in_phone_number IN customer.phone_number%TYPE
) IS
BEGIN
    UPDATE customer SET customer_name = in_customer_name, address = in_address, phone_number = in_phone_number
    WHERE customer_id = in_customer_id;
END;

CREATE OR REPLACE PROCEDURE UpdateE_position(
in_e_position_id IN e_position.e_position_id%TYPE,
in_position_name IN e_position.position_name%TYPE
) IS
BEGIN
    UPDATE e_position SET position_name = in_position_name WHERE e_position_id = in_e_position_id;
END;

CREATE OR REPLACE PROCEDURE UpdateEmployee(
in_employee_id IN employee.employee_id%TYPE,
in_employee_name IN employee.employee_name%TYPE,
in_phone_number IN employee.phone_number%TYPE,
in_e_position_id IN employee.e_position_id%TYPE
) IS
BEGIN
    UPDATE employee SET employee_name = in_employee_name, phone_number = in_phone_number, e_position_id = in_e_position_id
    WHERE employee_id = in_employee_id;
END;

CREATE OR REPLACE PROCEDURE UpdateGenre(
in_genre_id IN genre.genre_id%TYPE,
in_genre_name IN genre.genre_name%TYPE
) IS
BEGIN
    UPDATE genre SET genre_name = in_genre_name WHERE genre_id = in_genre_id;
END;

CREATE OR REPLACE PROCEDURE UpdateItem(
in_quantity IN item.quantity%TYPE,
in_product_id IN item.product_id%TYPE,
in_sale_id IN item.sale_id%TYPE
)IS
BEGIN
    UPDATE item SET quantity = in_quantity WHERE product_id = in_product_id AND sale_id = in_sale_id;
END;

CREATE OR REPLACE PROCEDURE UpdateP_type(
in_p_type_id IN p_type.p_type_id%TYPE,
in_p_type_name IN p_type.p_type_name%TYPE
) IS
BEGIN
    UPDATE p_type SET p_type_name = in_p_type_name WHERE p_type_id = in_p_type_id;
END;

CREATE OR REPLACE PROCEDURE UpdatePerformer(
in_performer_id IN performer.performer_id%TYPE,
in_performer_name IN performer.performer_name%TYPE
) IS
BEGIN
    UPDATE performer SET performer_name = in_performer_name WHERE performer_id = in_performer_id;
END;

CREATE OR REPLACE PROCEDURE UpdateProduct(
in_product_id IN product.product_id%TYPE,
in_year_published IN product.year_published%TYPE,
in_product_name IN product.product_name%TYPE,
in_price IN product.price%TYPE,
in_genre_id IN product.genre_id%TYPE,
in_company_id IN product.company_id%TYPE,
in_performer_id IN product.performer_id%TYPE,
in_p_type_id IN product.p_type_id%TYPE
) IS
BEGIN
    UPDATE product SET year_published = in_year_published, product_name = in_product_name, price = in_price,
    genre_id = in_genre_id, company_id = in_company_id, performer_id = in_performer_id, p_type_id = in_p_type_id
    WHERE product_id = in_product_id;
END;

CREATE OR REPLACE PROCEDURE UpdateSale(
in_sale_id IN sale.sale_id%TYPE,
in_sale_date IN sale.sale_date%TYPE,
in_employee_id IN sale.employee_id%TYPE,
in_customer_id IN sale.customer_id%TYPE
) IS
BEGIN
    UPDATE sale SET sale_date = in_sale_date, employee_id = in_employee_id, customer_id = in_customer_id
    WHERE sale_id = in_sale_id;
END;

CREATE OR REPLACE PROCEDURE DeleteCompany(
in_company_id IN company.company_id%TYPE
) IS
BEGIN
    DELETE FROM company WHERE company_id = in_company_id;
END;

CREATE OR REPLACE PROCEDURE DeleteCustomer(
in_customer_id IN customer.customer_id%TYPE
) IS
BEGIN
    DELETE FROM customer WHERE customer_id = in_customer_id;
END;

CREATE OR REPLACE PROCEDURE DeleteE_position(
in_e_position_id IN e_position.e_position_id%TYPE
) IS
BEGIN
    DELETE FROM e_position WHERE e_position_id = in_e_position_id;
END;

CREATE OR REPLACE PROCEDURE DeleteEmployee(
in_employee_id IN employee.employee_id%TYPE
) IS
BEGIN
    DELETE FROM employee WHERE employee_id = in_employee_id;
END;

CREATE OR REPLACE PROCEDURE DeleteGenre(
in_genre_id IN genre.genre_id%TYPE
) IS
BEGIN
    DELETE FROM genre WHERE genre_id = in_genre_id;
END;

CREATE OR REPLACE PROCEDURE DeleteItem(
in_product_id IN item.product_id%TYPE,
in_sale_id IN item.sale_id%TYPE
) IS
BEGIN
    DELETE FROM item WHERE product_id = in_product_id AND sale_id = in_sale_id;
END;

CREATE OR REPLACE PROCEDURE DeleteP_type(
in_p_type_id IN p_type.p_type_id%TYPE
) IS
BEGIN
    DELETE FROM p_type WHERE p_type_id = in_p_type_id;
END;

CREATE OR REPLACE PROCEDURE DeletePerformer(
in_performer_id IN performer.performer_id%TYPE
) IS
BEGIN
    DELETE FROM performer WHERE performer_id = in_performer_id;
END;

CREATE OR REPLACE PROCEDURE DeleteProduct(
in_product_id IN product.product_id%TYPE
) IS
BEGIN
    DELETE FROM product WHERE product_id = in_product_id;
END;

CREATE OR REPLACE PROCEDURE DeleteSale(
in_sale_id IN sale.sale_id%TYPE
) IS
BEGIN
    DELETE FROM sale WHERE sale_id = in_sale_id;
END;


SET SERVEROUTPUT ON
CREATE OR REPLACE PROCEDURE SearchByType(
in_type IN p_type.p_type_name%TYPE
) IS
BEGIN
    FOR v_prod IN (select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
    from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
    on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(t.p_type_name) like lower(in_type))
    LOOP
        DBMS_OUTPUT.PUT_LINE('Id:'||v_prod.product_id||' Year published:'||v_prod.year_published||' Name:'||v_prod.product_name
        || ' Genre:' || v_prod.genre_name || ' Company:' || v_prod.company_name || ' Performer:' || v_prod.performer_name ||
        ' Type:' || v_prod.p_type_name);
    END LOOP;
END;


CREATE OR REPLACE PROCEDURE SearchByPerformer(
in_performer IN performer.performer_name%TYPE
) IS
BEGIN
    FOR v_prod IN (select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(pe.performer_name) like lower(in_performer))
    LOOP
        DBMS_OUTPUT.PUT_LINE('Id:'||v_prod.product_id||' Year published:'||v_prod.year_published||' Name:'||v_prod.product_name
        || ' Genre:' || v_prod.genre_name || ' Company:' || v_prod.company_name || ' Performer:' || v_prod.performer_name ||
        ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

CREATE OR REPLACE PROCEDURE SearchByGenre(
in_genre IN genre.genre_name%TYPE
) IS
BEGIN
    FOR v_prod IN (select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(g.genre_name) like lower(in_genre))
    LOOP
        DBMS_OUTPUT.PUT_LINE('Id:'||v_prod.product_id||' Year published:'||v_prod.year_published||' Name:'||v_prod.product_name
        || ' Genre:' || v_prod.genre_name || ' Company:' || v_prod.company_name || ' Performer:' || v_prod.performer_name ||
        ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

CREATE OR REPLACE PROCEDURE SearchByYear(
in_year IN NUMBER
) IS
BEGIN
    FOR v_prod IN (select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where extract(year from p.year_published) = in_year)
    LOOP
        DBMS_OUTPUT.PUT_LINE('Id:'||v_prod.product_id||' Year published:'||v_prod.year_published||' Name:'||v_prod.product_name
        || ' Genre:' || v_prod.genre_name || ' Company:' || v_prod.company_name || ' Performer:' || v_prod.performer_name ||
        ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

CREATE OR REPLACE PROCEDURE SearchByCompany(
in_company IN company.company_name%TYPE
) IS
BEGIN
    FOR v_prod IN (select p.product_id, p.year_published, p.product_name, p.price, g.genre_name, c.company_name, pe.performer_name, t.p_type_name
from product p join genre g on p.genre_id = g.genre_id join company c on p.company_id = c.company_id join performer pe
on p.performer_id = pe.performer_id join p_type t on p.p_type_id = t.p_type_id where lower(c.company_name) like lower(in_company))
    LOOP
        DBMS_OUTPUT.PUT_LINE('Id:'||v_prod.product_id||' Year published:'||v_prod.year_published||' Name:'||v_prod.product_name
        || ' Genre:' || v_prod.genre_name || ' Company:' || v_prod.company_name || ' Performer:' || v_prod.performer_name ||
        ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

CREATE OR REPLACE PROCEDURE QueryEmployee(
in_name IN employee.employee_name%TYPE
) IS
BEGIN
    FOR v_prod IN (select s.sale_date, c.customer_name, e.employee_name, p.year_published, p.product_name, p.price,g.genre_name, c.company_name, pe.performer_name,
    t.p_type_name from sale s join customer c on c.customer_id = s.customer_id 
    join employee e on s.employee_id = e.employee_id join item i on i.sale_id = s.sale_id join product p on p.product_id = i.product_id
    join genre g on g.genre_id = p.genre_id join p_type t on p.p_type_id = t.p_type_id join performer pe on pe.performer_id = p.performer_id
    join company c on c.company_id = p.company_id
    where lower(e.employee_name) like lower(in_name) order by s.sale_date)
    LOOP
        DBMS_OUTPUT.PUT_LINE('On date:'||v_prod.sale_date||' customer:'||v_prod.customer_name||' Name:'||v_prod.product_name
        || ' Published on:' || v_prod.year_published || ' price:' || v_prod.price || ' Genre:' || v_prod.genre_name ||
        ' Company:' || v_prod.company_name || ' Performed by:' || v_prod.performer_name || ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

CREATE OR REPLACE PROCEDURE QueryLastSales IS
BEGIN
    FOR v_prod IN (select * from (select s.sale_date, c.customer_name, e.employee_name, p.year_published, p.product_name, p.price,g.genre_name, c.company_name, pe.performer_name,
t.p_type_name from sale s join customer c on c.customer_id = s.customer_id 
join employee e on s.employee_id = e.employee_id join item i on i.sale_id = s.sale_id join product p on p.product_id = i.product_id
join genre g on g.genre_id = p.genre_id join p_type t on p.p_type_id = t.p_type_id join performer pe on pe.performer_id = p.performer_id
join company c on c.company_id = p.company_id where extract(year from s.sale_date) = extract(year from sysdate) order by s.sale_date desc) where rownum <=5 order by employee_name
)
    LOOP
        DBMS_OUTPUT.PUT_LINE('On date:'||v_prod.sale_date||' customer:'||v_prod.customer_name ||' employee:'||v_prod.employee_name 
        ||' Name:'||v_prod.product_name
        || ' Published on:' || v_prod.year_published || ' price:' || v_prod.price || ' Genre:' || v_prod.genre_name ||
        ' Company:' || v_prod.company_name || ' Performed by:' || v_prod.performer_name || ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

CREATE OR REPLACE PROCEDURE QueryCustomer(
in_name IN customer.customer_name%TYPE
) IS
BEGIN
    FOR v_prod IN (select i.quantity, p.product_name, t.p_type_name, s.sale_date, pe.performer_name, c.company_name from item i
join product p on i.product_id = p.product_id join sale s on i.sale_id = s.sale_id join p_type t
on p.p_type_id = t.p_type_id join customer c on s.customer_id = c.customer_id join performer pe on p.performer_id = pe.performer_id 
join company c on p.company_id = c.company_id where lower(c.customer_name) like lower(in_name)
order by t.p_type_name, s.sale_date)
    LOOP
        DBMS_OUTPUT.PUT_LINE('On date:'||v_prod.sale_date||' Quantity:'||v_prod.quantity||' Name:'||v_prod.product_name ||
        ' Company:' || v_prod.company_name || ' Performed by:' || v_prod.performer_name || ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

CREATE OR REPLACE PROCEDURE QuerySalesInRange(
in_start IN sale.sale_date%TYPE,
in_end IN sale.sale_date%TYPE
) IS
BEGIN
    FOR v_prod IN (select i.quantity, p.product_name, t.p_type_name, c.company_name, pe.performer_name, s.sale_date, c.customer_name from item i
join product p on i.product_id = p.product_id join sale s on i.sale_id = s.sale_id join p_type t
on p.p_type_id = t.p_type_id join customer c on s.customer_id = c.customer_id join performer pe on p.performer_id = pe.performer_id 
join company c on p.company_id = c.company_id where s.sale_date between in_start and in_end
order by c.customer_name, s.sale_date)
    LOOP
        DBMS_OUTPUT.PUT_LINE('On date:'||v_prod.sale_date||' customer:'||v_prod.customer_name||' Quantity:'|| v_prod.quantity 
        || ' Name:'||v_prod.product_name ||
        ' Company:' || v_prod.company_name || ' Performed by:' || v_prod.performer_name || ' Type:' || v_prod.p_type_name);
    END LOOP;
END;

Execute QuerySalesInRange('12-OCT-2022', '20-OCT-2022');