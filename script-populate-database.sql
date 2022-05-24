
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(1,'$2a$12$YZ49io/A2sZ2kDvAXZ4wMOke67occMwiqiELBuqTlYCYwGroBfye2', 2, 'Cliente1');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(2,'$2a$12$d6GwQDnGMkUwQKiVwH0xdeJEFj/05M9O7DvTFP23Jtp5JNE4PP7Ze', 2, 'Cliente2');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(3,'$2a$12$NwTW1OD4ihIoPD7WmrvGHe0z.Mdj53DoRKvRkivkcpeEnaHjfKhwG', 2, 'Cliente3');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(4,'$2a$12$zkklTlKtUCvgCqhVo/IW5uL/j.LMNR0PkpZbaZ9Qp6GXofipH4QM2', 2, 'Cliente4');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(5,'$2a$12$meaN8Zmg49WQdiUdEG1/oupmnHNlhbDpMfcLPl7sFFw1rYzjm5e1O', 2, 'Cliente5');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(6,'$2a$12$x36h2lOi/gK02YyB4fPVpeqKPSKeROcqn118byueol24Ql98WMsGK', 2, 'Cliente6');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(7,'$2a$12$./Bz4moEBMIjoCdhJkrDN.eNYOcSYLZ6SrRVODRrkHIMtBlflz8b.', 2, 'Cliente7');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(8,'$2a$12$j.yqd/ezaWj51VCJOXEDKOqc7.y5I1xTKwpSaP.nrKSUfC3Og9jca', 2, 'Cliente8');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(9,'$2a$12$Ew0QAkS4Ra1jBC0ROq.XreqQ81WHo3k0VEMjM3Qu.cWajpMuioH1W', 2, 'Cliente9');


INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(10,'$2a$12$EdkcrYxSp.gg9TVqX/KEgedjT1UUyUc32zkmczJJYWoCV3rAVOnOC', 1, 'Nutricionista1');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(11,'$2a$12$gdafnJFGPUCfOFa4snEjQuwMwXT1KmwYaOBbgrrTlB7ioINC3j5hy', 1, 'Nutricionista2');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(12,'$2a$12$j8cbV6wMu9jMGVjFAVaXVevvSdlkxU4Xt/CmDkR58XCPPgFy39Xx6', 0, 'Entrenador1');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(13,'$2a$12$RfSwJORn59fFSGHxE6gT5umDyLFrShLW8sYH.RFweJoUohMKizPEm', 0, 'Entrenador2'); 


INSERT INTO gym.nutricionista (apellidos,nombre,user_id)VALUES ("Ortiz","Estefanía",10);
INSERT INTO gym.entrenador  (apellidos,nombre,user_id)VALUES ("San Felix","Borja",12);


INSERT INTO gym.cliente (apellidos,email,fecha_nacimiento,nombre,user_id,entrenador_id,nutricionista_id)
   VALUES("Ahedo García",  		"danielAhedo@miemail.com",	"28-12-1998",	"Daniel",	1,12	,null)
		,("Gomez Perez",		"pepeperez@yahoo.es",		"14-02-1995",	"Pepe",		2,12	,10)
		,("Acacio",				"acaciofran2@miemail.com",	"28-12-1998",	"Fran",		3,12	,10)
		,("FuenteVilla Perez",	"ramonfvperez@gmail.es",	"14-02-1995",	"Ramón",	4,NULL	,10)
		,("Alamo García",		"hugoalamo@miemail.com",	"28-12-1998",	"Hugo",		5,null	,null)
		,("Diaz Arosa",			"pepediazarosa@yahoo.es",	"14-02-1995",	"Pepe",		6,NULL	,NULL)
		,("De la Fuente Prieto","helanafuente@miemail.com",	"28-12-1998",	"Helena",	7,null	,null)
		,("Gomez de la Riva",	"raul_gomez@yahoo.es",		"14-02-1995",	"Raul",		8,NULL	,NULL);
		
		

		
--  Auto-generated SQL script #202205232344
INSERT INTO gym.alimentacion_diaria (id,cena,comida,desayuno,media_mañana,merienda,otros,post_entreno,pre_entreno)
	VALUES (1,"pescado","pollo","colacao",NULL,NULL,NULL,NULL,NULL),
			(2,"patata","brocoli","cafe","Manzana","platano",NULL,NULL,NULL);
	
INSERT INTO gym.dieta (id,nombre)
	VALUES (1,"Mi dieta");
	
	INSERT INTO gym.alimentacion_diaria_dieta (dieta_id,alim_diaria_id)
	VALUES (1,1), (1,2);
	
	--  Auto-generated SQL script #202205241926
INSERT INTO gym.alimentacion_diaria_dieta (id,dia_semana,alimentacion_diaria_id,dieta_id)
	VALUES (1,1,1,1),
			(2,2,2,1);





