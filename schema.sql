CREATE TABLE IF NOT EXISTS "poke_data"(
	poke_ID INT NOT NULL,
	poke_name VARCHAR NOT NULL,
	poke_gen INT NOT NULL,
	poke_type1 VARCHAR NOT NULL,
	poke_type2 VARCHAR,
	poke_ability1 VARCHAR NOT NULL,
	poke_ability2 VARCHAR,
	base_total INT NOT NULL,
	hp INT NOT NULL,
	attack INT NOT NULL,
	defense INT NOT NULL,
	sp_attack INT NOT NULL,
	sp_defense INT NOT NULL,
	speed INT NOT NULL,
	normal FLOAT NOT NULL,
	fire FLOAT NOT NULL,
	water FLOAT NOT NULL,
	grass FLOAT NOT NULL,
	electric FLOAT NOT NULL,
	rock FLOAT NOT NULL,
	ground FLOAT NOT NULL,
	flying FLOAT NOT NULL,
	fighting FLOAT NOT NULL,
	ice FLOAT NOT NULL,
	bug FLOAT NOT NULL,
	steel FLOAT NOT NULL,
	poison FLOAT NOT NULL,
	psychic FLOAT NOT NULL,
	dark FLOAT NOT NULL,
	ghost FLOAT NOT NULL,
	fairy FLOAT NOT NULL,
	dragon FLOAT NOT NULL,
	image VARCHAR NOT NULL,
	weakness1 VARCHAR,
	weakness2 VARCHAR,
	weakness3 VARCHAR,
	weakness4 VARCHAR
);