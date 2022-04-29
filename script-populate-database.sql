
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(1,'$2a$12$YZ49io/A2sZ2kDvAXZ4wMOke67occMwiqiELBuqTlYCYwGroBfye2', 2, 'Cliente1');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(2,'$2a$12$d6GwQDnGMkUwQKiVwH0xdeJEFj/05M9O7DvTFP23Jtp5JNE4PP7Ze', 2, 'Cliente2');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(3,'$2a$12$EdkcrYxSp.gg9TVqX/KEgedjT1UUyUc32zkmczJJYWoCV3rAVOnOC', 1, 'Nutricionista1');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(4,'$2a$12$gdafnJFGPUCfOFa4snEjQuwMwXT1KmwYaOBbgrrTlB7ioINC3j5hy', 1, 'Nutricionista2');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(5,'$2a$12$j8cbV6wMu9jMGVjFAVaXVevvSdlkxU4Xt/CmDkR58XCPPgFy39Xx6', 0, 'Entrenador1');
INSERT INTO gym.usuario(user_id,password, rol, username)VALUES(6,'$2a$12$RfSwJORn59fFSGHxE6gT5umDyLFrShLW8sYH.RFweJoUohMKizPEm', 0, 'Entrenador2'); 


INSERT INTO gym.cliente (apellidos,email,fecha_nacimiento,nombre,user_id,entrenador_id,nutricionista_id)VALUES("Ahedo García","danielAhedo@miemail.com","28-12-1998","Daniel",1,null,null);
INSERT INTO gym.cliente (apellidos,email,fecha_nacimiento,nombre,user_id,entrenador_id,nutricionista_id)VALUES("Gomez Perez","pepeperez@yahoo.es","14-02-1995","Pepe",2,NULL,NULL);