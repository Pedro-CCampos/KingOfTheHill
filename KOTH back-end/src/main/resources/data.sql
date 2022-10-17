DELETE FROM user;
INSERT INTO user (ID, USERNAME, PHONE, RATING) VALUES
(1, 'Rui', '777888', 7.0),
(2, 'Ze', '777999', 4.0),
(3, 'Ana', '777111', 3.0),
(4, 'Joao', '777000', 9.0);

DELETE FROM challenge;
INSERT INTO challenge (CHALLENGE_ID, CHALLENGE_DESCRIPTION ,DIFFICULTY_LEVEL, WAS_EXECUTED) VALUES
(1,'Drink shot while doing a handstand', 5, false),
(2, 'Shout the song Sweet Caroline', 7, false),
(3, 'Shotgun a beer', 3, false ),
(4, 'Do a backflip and take a shot', 9, true);