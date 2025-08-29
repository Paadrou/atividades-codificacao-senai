-- CREATE DATABASE empresa_xpto;

USE empresa_xpto;

CREATE TABLE fornecedor(
	id_fornecedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(75),
    nacionalidade VARCHAR(75)
);


CREATE TABLE peca(
	id_peca INT PRIMARY KEY NOT NULL,
    nome VARCHAR(75) NOT NULL,
    peso DECIMAL(8,2) NOT NULL,
    ano_fabricacao DATE,
    fornecedor_id INT,
    FOREIGN KEY (fornecedor_id)
	REFERENCES fornecedor (id_fornecedor)
);


