CREATE DATABASE escola;

USE escola;

CREATE TABLE sala(
	id_sala INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomesala VARCHAR(45),
    capacidadesala INT
);

CREATE TABLE turma (
	id_turma INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nometurma VARCHAR(45),
    periodo VARCHAR(45),
    sala_id INT,
    FOREIGN KEY (sala_id)
	REFERENCES sala (id_sala)
);

CREATE TABLE professor (
	id_professor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_prof VARCHAR(45),
    formacao_prof VARCHAR(45),
    turma_id INT,
    FOREIGN KEY(turma_id)
    REFERENCES turma (id_turma)
);

CREATE TABLE aula(
	id_aula INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_aula VARCHAR(45),
    professor_id INT,
    FOREIGN KEY(professor_id)
    REFERENCES professor (id_professor)
)