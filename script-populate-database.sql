
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
 
	
	--  Auto-generated SQL script #202205241926
INSERT INTO gym.alimentacion_diaria_dieta (id,dia_semana,alimentacion_diaria_id,dieta_id)
	VALUES (1,1,1,1),
			(2,2,2,1);
			
INSERT INTO gym.ejercicio (equipamiento,grupo_muscular,nombre,parte_cuerpo,url_imagen)
	VALUES  ('peso corporal', 'abdominales','3/4 sit-up','waist','http://d205bpvrqc9yn1.cloudfront.net/0001.gif'),
('peso corporal', 'abdominales','45° side bend','waist','http://d205bpvrqc9yn1.cloudfront.net/0002.gif'),
('peso corporal', 'abdominales','air bike','waist','http://d205bpvrqc9yn1.cloudfront.net/0003.gif'),
('peso corporal', 'quads','all fours squad stretch','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1512.gif'),
('peso corporal', 'abdominales','alternate heel touchers','waist','http://d205bpvrqc9yn1.cloudfront.net/0006.gif'),
('cable', 'lats','alternate lateral pulldown','back','http://d205bpvrqc9yn1.cloudfront.net/0007.gif'),
('peso corporal', 'calves','ankle circles','lower legs','http://d205bpvrqc9yn1.cloudfront.net/1368.gif'),
('peso corporal', 'lats','archer pull up','back','http://d205bpvrqc9yn1.cloudfront.net/3293.gif'),
('peso corporal', 'pectorals','archer push up','pecho','http://d205bpvrqc9yn1.cloudfront.net/3294.gif'),
('peso corporal', 'abdominales','arm slingers hanging bent knee legs','waist','http://d205bpvrqc9yn1.cloudfront.net/2355.gif'),
('peso corporal', 'abdominales','arm slingers hanging straight legs','waist','http://d205bpvrqc9yn1.cloudfront.net/2333.gif'),
('peso corporal', 'glutes','arms apart circular toe touch (male)','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/3214.gif'),
('peso corporal', 'abdominales','arms overhead full sit-up (male)','waist','http://d205bpvrqc9yn1.cloudfront.net/3204.gif'),
('leverage machine', 'pectorals','asistido pecho dip (kneeling)','pecho','http://d205bpvrqc9yn1.cloudfront.net/0009.gif'),
('asistido', 'abdominales','asistido hanging knee raise','waist','http://d205bpvrqc9yn1.cloudfront.net/0011.gif'),
('asistido', 'abdominales','asistido hanging knee raise with throw down','waist','http://d205bpvrqc9yn1.cloudfront.net/0010.gif'),
('asistido', 'calves','asistido lying calves stretch','lower legs','http://d205bpvrqc9yn1.cloudfront.net/1708.gif'),
('asistido', 'glutes','asistido lying glutes stretch','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1709.gif'),
('asistido', 'glutes','asistido lying gluteus and piriformis stretch','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1710.gif'),
('asistido', 'abdominales','asistido lying leg raise with lateral throw down','waist','http://d205bpvrqc9yn1.cloudfront.net/0012.gif'),
('asistido', 'abdominales','asistido lying leg raise with throw down','waist','http://d205bpvrqc9yn1.cloudfront.net/0013.gif'),
('balon medicinal', 'abdominales','asistido motion russian twist','waist','http://d205bpvrqc9yn1.cloudfront.net/0014.gif'),
('leverage machine', 'lats','asistido parallel close grip pull-up','back','http://d205bpvrqc9yn1.cloudfront.net/0015.gif'),
('asistido', 'hamstrings','asistido prone hamstring','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0016.gif'),
('asistido', 'quads','asistido prone lying quads stretch','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1713.gif'),
('asistido', 'abdominales','asistido prone rectus femoris stretch','waist','http://d205bpvrqc9yn1.cloudfront.net/1714.gif'),
('leverage machine', 'lats','asistido pull-up','back','http://d205bpvrqc9yn1.cloudfront.net/0017.gif'),
('asistido', 'pectorals','asistido seated pectoralis major stretch with stability ball','pecho','http://d205bpvrqc9yn1.cloudfront.net/1716.gif'),
('asistido', 'adductors','asistido side lying adductor stretch','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1712.gif'),
('asistido', 'abdominales','asistido sit-up','waist','http://d205bpvrqc9yn1.cloudfront.net/1758.gif'),
('leverage machine', 'lats','asistido standing chin-up','back','http://d205bpvrqc9yn1.cloudfront.net/1431.gif'),
('leverage machine', 'lats','asistido standing pull-up','back','http://d205bpvrqc9yn1.cloudfront.net/1432.gif'),
('asistido', 'triceps','asistido standing triceps extension (with towel)','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0018.gif'),
('leverage machine', 'triceps','asistido triceps dip (kneeling)','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0019.gif'),
('leverage machine', 'pectorals','asistido wide-grip pecho dip (kneeling)','pecho','http://d205bpvrqc9yn1.cloudfront.net/2364.gif'),
('peso corporal', 'cardiovascular system','astride jumps (male)','cardio','http://d205bpvrqc9yn1.cloudfront.net/3220.gif'),
('peso corporal', 'cardiovascular system','back and forth step','cardio','http://d205bpvrqc9yn1.cloudfront.net/3672.gif'),
('stability ball', 'spine','back extension on exercise ball','back','http://d205bpvrqc9yn1.cloudfront.net/1314.gif'),
('peso corporal', 'upper back','back lever','back','http://d205bpvrqc9yn1.cloudfront.net/3297.gif'),
('peso corporal', 'lats','back pec stretch','back','http://d205bpvrqc9yn1.cloudfront.net/1405.gif'),
('peso corporal', 'quads','backward jump','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1473.gif'),
('peso corporal', 'quads','balance board','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0020.gif'),
('band', 'biceps','band alternating biceps curl','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0968.gif'),
('band', 'abdominales','band alternating v-up','waist','http://d205bpvrqc9yn1.cloudfront.net/0969.gif'),
('band', 'lats','band asistido pull-up','back','http://d205bpvrqc9yn1.cloudfront.net/0970.gif'),
('band', 'abdominales','band asistido wheel rollerout','waist','http://d205bpvrqc9yn1.cloudfront.net/0971.gif'),
('band', 'pectorals','band bench press','pecho','http://d205bpvrqc9yn1.cloudfront.net/1254.gif'),
('band', 'glutes','band bent-over hip extension','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0980.gif'),
('band', 'abdominales','band bicycle crunch','waist','http://d205bpvrqc9yn1.cloudfront.net/0972.gif'),
('band', 'lats','band close-grip pulldown','back','http://d205bpvrqc9yn1.cloudfront.net/0974.gif'),
('band', 'triceps','band close-grip push-up','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0975.gif'),
('band', 'biceps','band concentration curl','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0976.gif'),
('band', 'lats','band fixed back close grip pulldown','back','http://d205bpvrqc9yn1.cloudfront.net/3117.gif'),
('band', 'lats','band fixed back underhand pulldown','back','http://d205bpvrqc9yn1.cloudfront.net/3116.gif'),
('band', 'delts','band front lateral raise','shoulders','http://d205bpvrqc9yn1.cloudfront.net/0977.gif'),
('band', 'delts','band front raise','shoulders','http://d205bpvrqc9yn1.cloudfront.net/0978.gif'),
('band', 'glutes','band hip lift','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1408.gif'),
('band', 'abdominales','band horizontal pallof press','waist','http://d205bpvrqc9yn1.cloudfront.net/0979.gif'),
('band', 'abdominales','band jack knife sit-up','waist','http://d205bpvrqc9yn1.cloudfront.net/0981.gif'),
('band', 'lats','band kneeling one arm pulldown','back','http://d205bpvrqc9yn1.cloudfront.net/0983.gif'),
('band', 'abdominales','band kneeling twisting crunch','waist','http://d205bpvrqc9yn1.cloudfront.net/0985.gif'),
('band', 'glutes','band lying hip internal rotation','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0984.gif'),
('band', 'abdominales','band lying straight leg raise','waist','http://d205bpvrqc9yn1.cloudfront.net/1002.gif'),
('band', 'biceps','band one arm overhead biceps curl','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0986.gif'),
('band', 'quads','band one arm single leg split squat','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0987.gif'),
('band', 'upper back','band one arm standing low row','back','http://d205bpvrqc9yn1.cloudfront.net/0988.gif'),
('band', 'pectorals','band one arm twisting pecho press','pecho','http://d205bpvrqc9yn1.cloudfront.net/0989.gif'),
('band', 'upper back','band one arm twisting seated row','back','http://d205bpvrqc9yn1.cloudfront.net/0990.gif'),
('band', 'glutes','band pull through','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0991.gif'),
('band', 'abdominales','band push sit-up','waist','http://d205bpvrqc9yn1.cloudfront.net/0992.gif'),
('band', 'delts','band reverse fly','shoulders','http://d205bpvrqc9yn1.cloudfront.net/0993.gif'),
('band', 'forearms','band reverse wrist curl','lower arms','http://d205bpvrqc9yn1.cloudfront.net/0994.gif'),
('band', 'glutes','band seated hip internal rotation','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0996.gif'),
('band', 'abdominales','band seated twist','waist','http://d205bpvrqc9yn1.cloudfront.net/1011.gif'),
('band', 'delts','band shoulder press','shoulders','http://d205bpvrqc9yn1.cloudfront.net/0997.gif'),
('band', 'traps','band shrug','back','http://d205bpvrqc9yn1.cloudfront.net/1018.gif'),
('band', 'triceps','band side triceps extension','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0998.gif'),
('band', 'calves','band single leg calf raise','lower legs','http://d205bpvrqc9yn1.cloudfront.net/0999.gif'),
('band', 'calves','band single leg reverse calf raise','lower legs','http://d205bpvrqc9yn1.cloudfront.net/1000.gif'),
('band', 'quads','band single leg split squat','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1001.gif'),
('band', 'glutes','band squat','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1004.gif'),
('band', 'glutes','band squat row','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1003.gif'),
('band', 'abdominales','band standing crunch','waist','http://d205bpvrqc9yn1.cloudfront.net/1005.gif'),
('band', 'delts','band standing rear delt row','shoulders','http://d205bpvrqc9yn1.cloudfront.net/1022.gif'),
('band', 'abdominales','band standing twisting crunch','waist','http://d205bpvrqc9yn1.cloudfront.net/1007.gif'),
('band', 'glutes','band step-up','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1008.gif'),
('band', 'glutes','band stiff leg deadlift','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1009.gif'),
('band', 'glutes','band straight back stiff leg deadlift','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/1023.gif'),
('band', 'spine','band straight leg deadlift','back','http://d205bpvrqc9yn1.cloudfront.net/1010.gif'),
('band', 'delts','band twisting overhead press','shoulders','http://d205bpvrqc9yn1.cloudfront.net/1012.gif'),
('band', 'calves','band two legs calf raise - (band under both legs) v. 2','lower legs','http://d205bpvrqc9yn1.cloudfront.net/1369.gif'),
('band', 'lats','band underhand pulldown','back','http://d205bpvrqc9yn1.cloudfront.net/1013.gif'),
('band', 'abdominales','band v-up','waist','http://d205bpvrqc9yn1.cloudfront.net/1014.gif'),
('band', 'abdominales','band vertical pallof press','waist','http://d205bpvrqc9yn1.cloudfront.net/1015.gif'),
('band', 'forearms','band wrist curl','lower arms','http://d205bpvrqc9yn1.cloudfront.net/1016.gif'),
('band', 'delts','band y-raise','shoulders','http://d205bpvrqc9yn1.cloudfront.net/1017.gif'),
('barbell', 'biceps','barbell alternate biceps curl','upper arms','http://d205bpvrqc9yn1.cloudfront.net/0023.gif'),
('barbell', 'quads','barbell bench front squat','pierna superior','http://d205bpvrqc9yn1.cloudfront.net/0024.gif'),
('barbell', 'pectorals','barbell bench press','pecho','http://d205bpvrqc9yn1.cloudfront.net/0025.gif');



	





