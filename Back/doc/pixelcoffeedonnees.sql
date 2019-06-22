-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 20 mars 2019 à 15:12
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pixelcoffee`
--

--
-- Déchargement des données de la table `console`
--

INSERT INTO `console` (`id`, `name`, `description`, `nb_available`, `brand`, `image`, `release_date`) VALUES
(1, 'Xbox', 'La Xbox de Microsoft est une console de jeux vidéo sortie aux États-Unis le 15 novembre 2001. Microsoft fait avec ses premiers pas dans ce secteur, après avoir collaboré avec Sega pour porter Windows CE sur Dreamcast, et après avoir développé depuis plusieurs années des jeux Microsoft Game Studios et des accessoires de jeux vidéo SideWinder pour les PC sous Windows.\r\nLa différence avec un PC est qu\'une Xbox ne peut à l\'origine exécuter que des programmes Xbox provenant d\'un média au format propriétaire Microsoft sur DVD, format qui n\'est lisible que par le lecteur DVD de la Xbox.', 3, 'Microsoft', NULL, '2001-01-01 00:00:00'),
(2, 'Super Nintendo', 'La Super Nintendo Entertainment System (couramment abrégée SNES, Super NES ou encore Super Nintendo3), ou Super Famicom (スーパーファミコン?) au Japon, est une console de jeux vidéo du constructeur japonais Nintendo commercialisée à partir de novembre 1990. En Amérique du Nord, la console est sortie avec un look résolument différent. À noter qu\'en Corée du Sud, la Super Nintendo est distribuée par Hyundai Electronics sous le nom de Super Comboy (슈퍼 컴보이).\r\nEn 1997 et 1998, Nintendo décide de rafraîchir le design en sortant le modèle SNS-101, parfois appelé Super NES 2 aux États-Unis, et la Super Famicom Jr. au Japon.', 3, 'Nintendo', NULL, '1991-01-01 00:00:00'),
(3, 'PlayStation', 'La PlayStation (プレイステーション, Purei Sutēshon?) est une console de jeux vidéo de cinquième génération, produite par Sony Computer Entertainment à partir de 1994. La PlayStation originale fut la première machine de la gamme PlayStation, déclinée ensuite en PSone (une version plus petite et plus légère que l\'originale).\r\nLe 18 mai 2004, soit près de dix ans après son lancement, Sony annonce avoir distribué 100 millions de consoles dans le monde, et plus de 962 millions de jeux PlayStation.', 3, 'Sony Computer Entertainment ', NULL, '1995-01-01 00:00:00'),
(4, 'Nintendo Entertainment System', 'La Nintendo Entertainment System, couramment abrégée en NES, ou simplement appelée Nintendo3,4,5, est une console de jeux vidéo de génération 8 bits fabriquée par l\'entreprise japonaise Nintendo et distribuée à partir de 1985 (1987 en Europe). Son équivalent japonais est la Family Computer (ファミリーコンピュータ, Famirī Konpyūta?), ou Famicom (ファミコン, Famikon?), sortie quelques années avant, en 1983. En Corée du Sud, la NES porta le nom de Comboy (컴보이).\r\nLa console connut un succès mondial, ce qui aida à redynamiser l\'industrie du jeu vidéo après le krach du jeu vidéo de 1983, et ce qui fixa les normes pour les consoles suivantes, du game design aux procédures de gestion.', 3, 'Nintendo', NULL, '1985-01-01 00:00:00'),
(5, 'Neo Geo', 'La Neo-Geo, appelée aussi NeoGeo Advanced Entertainment System.\r\nConçue par la société japonaise SNK, elle a la particularité d\'être, d\'un point de vue technique, strictement identique au système d\'arcade Neo-Geo MVS, avec lequel elle partage une ludothèque commune.', 3, 'SNK', NULL, '1991-01-01 00:00:00'),
(6, 'Nintendo 64', 'La Nintendo 64 (ニンテンドウ64, Nintendō Rokujūyon?), également connue sous les noms de code Project Reality et Ultra 64 lors de sa phase de développement, est une console de jeux vidéo de salon, du constructeur japonais Nintendo en collaboration avec Silicon Graphics. Elle fut la dernière des consoles de cinquième génération à être sortie.\r\nLa Nintendo 64 a plusieurs particularités : c\'est une console « 64-bits » contrairement à ses principales concurrentes dites « 32-bits ».', 3, 'Nintendo', NULL, '1996-01-01 00:00:00'),
(7, 'Mega Drive', 'La Mega Drive (メガドライブ, Mega Doraibu?), ou Genesis en Amérique du Nord, est une console de jeux vidéo de quatrième génération.', 3, 'Sega', NULL, '1988-01-01 00:00:00'),
(8, 'Master System', 'La Master System (マスターシステム, Masutā Shisutemu?) ou Sega Master System (aussi abrégé SMS) est une console de jeux vidéo de troisième génération, conçue et commercialisée par le constructeur japonais Sega Enterprises, Ltd.', 3, 'Sega', NULL, '1985-01-01 00:00:00'),
(9, 'GameCube', 'La (ou le) Nintendo GameCube (ニンテンドーゲームキューブ, Nintendō Gēmukyūbu?, Nintendo Gamecube) est une console de jeux vidéo de salon du fabricant japonais Nintendo, développée en association avec IBM, NEC et ATI.', 3, 'Nintendo', '', '2001-01-01 00:00:00'),
(10, 'Dreamcast', 'La Dreamcast (ドリームキャスト, Dorīmukyasuto?) est une console de jeux vidéo développée par Sega, et le successeur de la Saturn.', 3, 'Sega', NULL, '1998-01-01 00:00:00');

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `name`, `description`, `date`, `nb_participants`, `available`, `selected`, `image`, `style_id`) VALUES
(1, 'Tournois Mario Kart', 'Une soirée pour décider qui est le meilleur pilote', '2019-04-13 20:00:00', 30, 1, 1, NULL, 1),
(2, 'Soirées Deadpool', 'Cuir, moustache et cancer', '2019-04-20 20:00:00', 50, 1, 1, NULL, 2),
(3, 'Ultra Vomit', 'Première partie : Didier SUper', '2019-04-27 20:00:00', 50, 1, 0, NULL, 3);

--
-- Déchargement des données de la table `game`
--

INSERT INTO `game` (`id`, `console_id`, `name`, `description`, `developer`, `editor`, `available`, `release_date`) VALUES
(1, 1, 'Halo: Combat evolved', 'L\'histoire se déroule au XXVIe siècle. Un vaisseau de guerre humain tombe sur une structure inconnue du nom de Halo en tentant d\'échapper à une armada covenant. Le joueur incarne un super-soldat, le Spartan John-117 (Master Chief pour son grade en VO et Adjudant dans la VF) et est accompagné par Cortana, une intelligence artificielle intégrée à l\'interface neurale du spartan. Son scénario, considéré comme « très prenant », a été adapté et développé dans des livres.', 'Bungie', 'Microsoft Game Studios', 1, '2001-01-01 00:00:00'),
(2, 1, 'Doom 3', 'L\'intrigue du jeu se déroule sur la planète Mars, à la différence de ses prédécesseurs Doom 1 et 2, qui prenaient place sur les deux lunes de cette planète (Phobos et Deimos). Le style de jeu est simple et linéaire : le joueur doit se frayer un chemin par les armes au sein d\'une base de recherche scientifique envahie par des créatures hostiles de provenance inconnue. Le personnage du joueur doit alors faire son chemin au sein de la base, un complexe de couloirs et de salles obscures dans un décor mécaniste et inquiétant.', 'Id Software', 'Activision', 1, '2004-01-01 00:00:00'),
(3, 2, 'Super Bomberman', 'Loin au nord de la ville de Bomberman, Peace Town, se trouve la métropole moderne de Diamond City. Là-bas, le diabolique Carat Diamond et son comparse, le scientifique appelé Docteur Mook, organisent un tournoi pour robots avec des robots spécialement conçus pour leurs capacités martiales et offensives. Espérant subtiliser les capacités de combat avancées de Bomberman, Diamond a créé un faux Bomberman pour aller à Peace Town et enlever le véritable Bomberman. Conscient du complot de Diamond, Bomberman noir part seul affronter le faux Bomberman ; mais Bomberman noir est vaincu et son château est capturé. D\'une manière ou d\'une autre, Bomberman noir s\'échappe et cherche refuge chez Bomberman blanc, et prévient ce dernier du plan diabolique de Diamond. Bientôt, des vagues et des vagues de robots ennemis entament leur avance vers Peace Town. Maintenant, les deux héros doivent unir leurs forces pour renverser le malfaisant Diamond II.', 'Produce!', 'Hudson Soft', 1, '1993-01-01 00:00:00'),
(4, 2, 'Mario Kart', 'L\'objectif principal de Mario Kart est simple : le joueur doit parcourir le plus rapidement possible des circuits dans l\'optique de franchir la ligne d\'arrivée en premier.', 'Nintendo', 'Nintendo', 1, '1992-01-01 00:00:00'),
(5, 2, 'DonkeyKong Country', 'Les pérégrinations de Donkey Kong le menant à King K. Rool et aux bananes qu\'il a dérobées, lui permettent d\'explorer l\'île Donkey Kong Island. C\'est une île tropicale luxuriante entourée de lagons riches en corail et poissons tropicaux, mais qui comporte également un relief et des lieux variés. Elle est composée de six régions possédant chacune leur propre écosystème : une jungle d\'inspiration africaine, une mine avec notamment de petits chariots à manœuvrer, des cimes d\'arbres, des montagnes enneigées avec des sols verglacés, une usine et des grottes. En outre, les protagonistes parcourent des décors situés dans des ruines et font également un passage dans la mer, et le combat final contre King K. Rool se déroule à bord de son bateau appelé Galion du Gang-Planche.', 'Rare', 'Nintendo', 1, '1994-01-01 00:00:00'),
(6, 2, 'Super Mario World', 'Après avoir sauvé le Royaume Champignon, les frères Mario et Luigi s\'accordent des vacances à Dinosaur Land. Alors qu\'ils se reposent sur la plage, la Princesse Peach disparaît. Après des heures de recherche, ils tombent sur un œuf géant dans la forêt. C\'est alors qu\'il éclot pour donner naissance à un petit dinosaure, Yoshi. Ce dernier prévient Mario et Luigi que ses amis dinosaures ont également été emprisonnés dans des œufs par des tortues maléfiques. Les deux frères s\'aperçoivent assez vite qu\'il doit certainement s\'agir de Bowser et de ses Koopalings.\r\nMario, Luigi et Yoshi décident alors de sauver à la fois Princesse Peach et les amis de Yoshi. Après avoir libéré tous les amis de Yoshi et battu les Koopalings, ils combattent Bowser dans son château. Celui-ci est défait et Princesse Peachest sauvée.', 'Nintendo EAD', 'Nintendo, Mattel', 1, '1990-01-01 00:00:00'),
(7, 3, 'Wipeout 3', 'Wipeout 3 se déroule en 2116 au cœur d\'une ville futuriste accueillant la ligue de course F7200, un championnat de vaisseaux anti-gravité futuristes. La ligue de course F7200 se dispute sur huit circuits situés dans les différents quartiers de la ville organisatrice du championnat. Le championnat est disputé par douze concurrents répartis dans huit écuries différentes.', 'Psygnosis', 'Psygnosis', 1, '1999-01-01 00:00:00'),
(8, 3, 'Tekken 3', 'Tekken 3 comporte trois modes de jeux différents. Le premier est le mode Arcade dans lesquels les combats se déroulent de manière classique en un contre un. Le second porte le nom de Tekken Force : il immerge les personnages principaux dans un jeu de beat them all se déroulant sur plusieurs niveaux différents. Le troisième, nommé Tekken Ball, permet aux combattants de mettre K.O. l\'adversaire sans avoir à se donner le moindre coup, étant donné qu\'ils le font par l\'intermédiaire d\'une balle, dans le style beach-volley.', 'Namco', 'Namco', 1, '1998-01-01 00:00:00'),
(9, 3, 'Crash Team Racing', 'Crash Team Racing est le quatrième jeu de la franchise Crash Bandicoot. Il est le premier titre de la série appartenant au genre course, et le dernier à être développé par Naughty Dog. Le scénario du jeu se focalise sur les efforts d\'une équipe composée de personnages issus de la série Crash Bandicoot qui doit concourir contre l\'égocentrique Nitros Oxide et ses sbires, afin de sauver leur planète de la destruction. Dans ce jeu, les joueurs peuvent contrôler l\'un des 14 personnages de la série, dont seuls huit sont disponibles au début du jeu. Durant les courses, les joueurs peuvent tirer avantage de plusieurs objets leur permettant de gagner de précieuses secondes.', 'Naughty Dog', 'Sony Computer Intertainement', 1, '1999-01-01 00:00:00'),
(10, 3, 'Crash Bash', 'Aku Aku et Uka Uka s\'opposent pour décider de qui est le plus fort. Pour cela, ils organisent un tournoi confrontant le bien et le mal. Aku Aku réunit Crash et Coco Bandicoot tandis qu\'Uka Uka réunit Cortex et ses acolytes. Seulement, Aku Aku accuse son frère jumeau de posséder trop de joueurs. Qu\'à cela ne tienne ! Aku Aku prend 2 des joueurs de Uka Uka pour égaliser le jeu. Que les jeux commencent !\r\nLe jeu est similaire à la série des Mario Party : il consiste en une succession de mini-jeux à quatre joueurs. Au sein d\'un mode Aventure, le joueur collecte des trophées, des cristaux, des gemmes, et des reliques suivant sa réussite aux mini-jeux, et débloque d\'autres groupes de mini-jeux.', 'Eurocom', 'Sony Computer Entertainement', 1, '2000-01-01 00:00:00'),
(11, 4, 'Metroid', 'Les jeux de la franchise Metroid prennent place dans un univers de science-fiction à l\'ambiance sombre et solitaire, détonnant des franchises classiques de Nintendo, telle que Mario2. Cet univers est influencé par la série de films Alien.', 'Nintendo', 'NST', 1, '1986-01-01 00:00:00'),
(12, 4, 'Super Mario Bros', 'L\'action se déroule dans un univers fictif nommé le Royaume Champignon où habitent la princesse Toadstool, Peach au Japon, et ses serviteurs, les Toads. Un jour, une horde de Koopas maléfiques envahit le Royaume Champignon et transforme tous ses habitants en briques. La seule personne qui peut briser le maléfice et restaurer la paix dans le royaume est la princesse Toadstool, mais malheureusement, elle se fait kidnapper par Bowser, le roi des Koopas. Mario, le héros Italien de l\'histoire, est mis au courant de la situation catastrophique du royaume et de ses habitants, et décide de partir à l\'aventure pour libérer la princesse Toadstool des griffes de Bowserm.', 'Nintendo R&D4', 'Nintendo', 1, '1985-01-01 00:00:00'),
(13, 4, 'Duck Hunt', 'Duck Hunt est un jeu de tir adoptant une vue subjective dans lequel l\'objectif est de toucher des cibles mouvantes en visant et tirant vers l\'écran du téléviseur avec le pistolet de la console, le NES Zapper. Chaque niveau consiste en un total de dix cibles à toucher. Tout dépendant du mode choisi avant le début de la partie, une ou deux cibles apparaissent à l\'écran à n\'importe quel moment et le joueur a trois balles, ou trois essais, pour les toucher avant qu\'ils ne disparaissent.', 'Nintendo R&D1', 'Nintendo', 1, '1984-01-01 00:00:00'),
(14, 5, 'Samurai Shodown', 'Samurai Shodown (サムライスピリッツ, Samurai Spirits) est un jeu vidéo de combat en 2D développé et édité par SNK en 1993 sur Neo-Geo MVS, Neo-Geo AES et en 1994 sur Neo-Geo CD.', 'SNK', 'SNK', 1, '1993-01-01 00:00:00'),
(15, 5, 'Metal Slug', 'Metal Slug (メタルスラッグ) est une série de jeux vidéo d\'arcade de type beat\'em all voire run and gun (sous-genre du shoot them up et du jeu de plates-formes) parue à l\'origine sur Neo-Geo MVS et Neo-Geo AES et qui connaît un succès grandissant grâce à l\'émulation.', 'SNK', 'SNK', 1, '1996-01-01 00:00:00'),
(16, 5, 'Garou: Mark of the Wolves', 'Mark of the Wolves,  est un jeu de combat en 2D développé par SNK et sorti sur Neo-Geo MVS et Neo-Geo AES . Huitième et dernier épisode de la série Fatal Fury et l\'un des derniers jeux de SNK avant son rachat, Garou: Mark of the Wolves est considéré comme l\'un des plus grands jeux du genre.', 'SNK', 'SNK', 1, '1999-01-01 00:00:00'),
(17, 5, 'The King of Fighters \'98: The Slugfest', 'KOF \'98, est un jeu vidéo de combat développé et édité par SNK sur borne d\'arcade Neo-Geo MVS et sur console Neo-Geo AES et Neo-Geo CD en 1998.', 'SNK', 'SNK', 1, '1998-01-01 00:00:00'),
(18, 5, 'Blazing Star', 'Blazing Star (ブレイジングスター?) est un jeu vidéo de type shoot them up développé par Yumekobo et édité par SNK en 1998 sur Neo-Geo MVS et Neo-Geo AES . Le jeu Pulstar est un préquelle de Blazing Star.', 'Pulsar', 'SNK', 1, '1998-01-01 00:00:00'),
(19, 6, 'Banjo-Kazooie', 'Banjo-Kazooie se déroule dans un univers composé de la montagne spirale d\'une part, et d\'autre part de la tanière de Gruntilda, qui donne accès à neuf mondes ; chacun d\'entre eux présente un thème particulier, comme l\'Égypte, une île avec un phare, un vieux cargo et son port, des décors inquiétants, un manoir hanté et son jardin labyrinthique, ou un passage d\'un univers chaud à un univers froid, du désert à la neige.\r\n', 'Rare', 'Nintendo', 1, '1968-01-01 00:00:00'),
(20, 6, 'Super Smash Bros', 'Super Smash Bros. (ニンテンドー•オール•スター! 大乱闘 スマッシュ•ブラザーズ, Nintendō Ōru Sutā! Dairantō Sumashu Burazāzu?, litt. Nintendo All-Star! Melee Smash Brothers) est un jeu vidéo de combat.', 'HAL Laboratory', 'Nintendo', 1, '1999-01-01 00:00:00'),
(21, 6, 'Super Mario 64', 'Super Mario 64 débute par une lettre de la princesse Peach qui a invité Mario à manger un gâteau qu\'elle a préparé dans son château', 'Nintendo EAD', 'Nintendo', 1, '1996-01-01 00:00:00'),
(22, 6, 'Mario Kart 64', 'Mario Kart 64 (マリオカート64, Mario Kāto Rokujūyon?) est un jeu vidéo de course de karting en 3D développé et édité par Nintendo en 1996 sur Nintendo 64.', 'Nintendo EAD', 'Nintendo', 1, '1996-01-01 00:00:00'),
(23, 7, 'Altered Beast', 'Altered Beast est un jeu vidéo d\'action de type beat them all développé et édité par Sega, sorti en 1988 sur borne d\'arcade.', 'Sega', 'Sega', 1, '1988-01-01 00:00:00'),
(24, 7, 'Mortal Kombat II', 'Mortal Kombat II, communément abrégé MKII, est un jeu vidéo de combat développé par la société américaine Midway Manufacturing Company et initialement sorti en novembre 1993 sur borne d\'arcade1,2. Il s\'agit du second titre de la série Mortal Kombat. ', 'Midway', 'Acclaim', 1, '1993-01-01 00:00:00'),
(25, 7, 'Nba Jam', 'NBA Jam est un jeu vidéo de basket-ball développé et édité par Midway Manufacturing Company et sorti sur borne d\'arcade en 1993, puis converti sur Mega Drive.\r\n', 'Midway', 'Midway', 1, '1993-01-01 00:00:00'),
(26, 7, 'Sonic The Hedgehog', 'Sonic the Hedgehog est un jeu vidéo de plates-formes développé par la Sonic Team et édité par Sega sorti en 1991 sur Mega Drive. Il s\'agit du tout premier jeu dans lequel figure Sonic, le hérisson bleu éponyme, et mascotte de Sega.', 'Sonic Team', 'Sega', 1, '1991-01-01 00:00:00'),
(27, 7, 'Streets of Rage 2', 'Streets of Rage 2 est un jeu vidéo d\'action de type beat them all développé par Sega AM7 et édité par Sega, sorti en 1992 sur Mega Drive.', 'Sega', 'Sega', 1, '1992-01-01 00:00:00'),
(28, 8, 'Sonic the Hedgehog 2', 'Sonic the Hedgehog 2 (ソニック・ザ・ヘッジホッグ2?), aussi appelé Sonic 2, est un jeu vidéo de plates-formes développé par Sega, sorti en 1992 sur Mega Drive. Il reprend le concept de son prédécesseur Sonic the Hedgehog en proposant quatre principaux changements : l\'ajout d\'un mode deux joueurs, la présence de Tails, l\'apparition du Spin Dash et la possibilité de devenir Super Sonic. Le jeu a été converti sur Master System et Game Gear (cf. Sonic the Hedgehog 2 (8 bit)).', 'Sonic Team', 'Sega', 1, '1992-01-01 00:00:00'),
(29, 8, 'Alex Kidd in Miracle World', 'Alex Kidd in Miracle World (アレックスキッドのミラクルワールド, Arekkusu Kiddo no Mirakuru Wārudo?) est un jeu de plates-formes édité par Sega pour sa console de jeux vidéo Master System.', 'Sega', 'Sega', 1, '1986-01-01 00:00:00'),
(30, 8, 'Shinobi', 'Shinobi est un jeu vidéo d\'action développé par Sega, sorti en 1987 sur borne d\'arcade. Le jeu a été porté sur Master System en 1988 puis sur diverses consoles et micro-ordinateurs.', 'Sega', 'Sega', 1, '1987-01-01 00:00:00'),
(31, 9, 'Sonic Heroes', 'L\'histoire et les personnages intervenants sont dans la lignée des précédents jeux de Sonic. Néanmoins, le système de jeu se démarque complètement des précédentes éditions. Dans Sonic Heroes, le joueur a le choix entre quatre histoires où, dans chacune d\'entre elles, intervient une \"team\" composée de trois membres avec lesquels le joueur joue simultanément et entre lesquels il peut alterner en cours de niveau en fonction des aptitudes dont il a besoin : la Team Sonic (Sonic, Tails et Knuckles), la Team Dark (Shadow, Rouge et E-123 Oméga), la Team Rose (Amy, Cream et Big) et la Team Chaotix (Vector, Espio et Charmy).', 'Sonic Team', 'Sega', 1, '2003-12-30 00:00:00'),
(32, 9, 'SoulCalibur 2', 'Soul Calibur II est un jeu de combat en 3D classique, comme Dead or Alive 3 ou encore Tekken 4. Il ajoute un élément particulier : chaque combattant est équipé d\'une arme blanche comme une épée, un couteau ou une hache. Les combats se déroulent dans des arènes qui possèdent chacune un thème particulier. Il est possible d\'incarner 19 personnages ayant chacun 12 armes.', 'Namco', 'Namco', 1, '2003-09-26 00:00:00'),
(33, 9, 'Super Smash Bros Mélée', 'Comme son prédécesseur, Super Smash Bros. Melee est différent des jeux de combat traditionnels dans lesquels le fait de donner beaucoup de dommages à l\'adversaire ne garantit pas la victoire. Ici, les joueurs doivent éliminer leurs adversaires en les faisant sortir des limites du terrain. La plupart des attaques infligent des dommages et peuvent, s\'il en a reçu suffisamment, envoyer l\'ennemi hors du terrain. Les dommages de chaque personnage sont mesurés par un compteur qui calcule la valeur de ceux-ci en pourcentage. Plus le pourcentage est grand, plus l\'ennemi est envoyé loin et il est plus facile de le sortir. Contrairement aux autres jeux du même genre, dans lesquels les mouvements sont exécutés par des combinaisons entre les différents boutons, la plupart des mouvements de Super Smash Bros. Melee peuvent être réalisés grâce à un seul bouton et le stick multidirectionnel.', 'HAL Laboratory', 'Nintendo', 1, '2002-05-24 00:00:00'),
(34, 9, 'TimeSplitters 2', 'Les TimeSplitters menacent de détruire l\'humanité à l\'aide de cristaux temporels et le sergent Cortez et son amie la caporale Hart sont envoyés les récupérer pour empêcher les TimeSplitters d\'accomplir leur plan. Lors de leur arrivée sur la station spatiale, où les TimeSplitters ont rassemblé les cristaux temporels, le sergent Cortez et la caporale Hart constatent qu\'il est trop tard : en les voyant, les TimeSplitters ont sauté dans le temps grâce aux cristaux temporels. C\'est au sergent Cortez d\'aller les récupérer en sautant lui aussi dans le tunnel temporel pour aller les récupérer, un par un, dans différents époques et contextes.', 'Free Radical Design', 'Eidos Interactive ', 1, '2002-10-09 00:00:00'),
(35, 10, 'Crazy Taxi', 'Crazy Taxi est un jeu vidéo développé par Hitmaker et édité par Sega, sorti en arcade sur Naomi en 1999 et sur Dreamcast le 24 janvier 2000, puis par la suite édité sur PC, PlayStation 2 et GameCube. Le jeu a reçu le label Sega All Stars sur Dreamcast. ', 'Hitmaker', 'Sega', 1, '1999-01-01 00:00:00'),
(36, 10, 'Marvel vs. Capcom 2: New Age of Heroes\r\n', 'Marvel vs. Capcom 2: New Age of Heroes (マーヴルVS.カプコン 2 ニューエイジ オブ ヒーローズ?) est un jeu vidéo de combat développé par Capcom Production Studio 1 et édité par Capcom en 2000 sur système d\'arcade Naomi. Il est porté sur console de jeux vidéo, la même année sur Dreamcast, en 2002 .\r\n', 'Capcom', 'Capcom', 1, '2000-01-01 00:00:00'),
(37, 10, 'Sonic Adventure 2\r\n', 'Sonic Adventure 2 est un jeu vidéo de plates-formes développé par Sonic Team et édité par Sega, sorti sur Dreamcast en juin 2001 à l\'occasion des 10 ans de la série Sonic.', 'Sonic Team', 'Sega', 1, '2001-06-01 00:00:00'),
(38, 10, 'Soul Calibur', 'SoulCalibur est un jeu de combat développé par Namco sorti sur arcade en 1998, puis sur Dreamcast en 1999 à la sortie de la console. La version Dreamcast de SoulCalibur est encore plus impressionnante que la mouture arcade.', 'Namco', 'Namco', 1, '1999-01-01 00:00:00'),
(39, 10, 'Virtua Tennis 2', 'Virtua Tennis (Power Smash au Japon) est un jeu vidéo de tennis développé par Hitmaker pour Sega et initialement sorti sur borne d\'arcade en 1999. À sa sortie, le jeu fut considéré comme l\'un des meilleurs titres du genre. Le jeu a reçu le label Sega All Stars sur Dreamcast.', 'Hitmaker', 'Sega', 1, '2001-01-01 00:00:00');

--
-- Déchargement des données de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20190320130100', '2019-03-20 13:30:04'),
('20190320130922', '2019-03-20 13:30:11'),
('20190320131347', '2019-03-20 13:30:12'),
('20190320131601', '2019-03-20 13:30:13'),
('20190320132158', '2019-03-20 13:30:15');

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `type_id`, `name`, `description`, `price`) VALUES
(1, 1, 'Expresso', 'Un concentré d\'énergie pour geeker toute la nuit', 2),
(2, 1, 'Double Expresso', 'Un double concentré d\'énergie pour double geeker toute la nuit', 2.5),
(3, 1, 'Café Latté', 'Café avec du lait', 2.5),
(4, 1, 'Café Mocha', 'Café avec du mocha', 2.5),
(5, 1, 'Cappuccino', 'Café et chocalat', 3),
(6, 1, 'Caramel Macchiato', 'Macchiato avec caramel', 3),
(7, 1, 'Frappucino', 'Un capuccino, mais froid', 3.5),
(8, 1, 'Aquarose', 'Thé à la rose avec de l\'eau', 1),
(9, 1, 'Anastasia', 'De l\'eau sale avec une princesse dedans', 1),
(10, 1, 'Thé vert à la menthe', 'De l\'eau sale avec de la menthe', 1),
(11, 1, 'Sweet Love', 'De l\'eau sale avec de l\'amour tout doux dedans', 1),
(12, 2, 'Coca-cola', 'Coca', 2),
(13, 2, 'Fanta', 'Un Coca nazi', 2),
(14, 2, 'Sprite', 'Limonade', 2),
(15, 2, 'Pepsi', 'Un Coca mais moins bon', 2),
(16, 2, 'Orangina', 'Un soda FRANCAIS n\'est-ce-pas', 2),
(17, 2, 'Leffe', 'De l\'orge et houblon', 3.5),
(18, 2, 'Leffe ruby', 'De l\'orge du houblon et un ruby', 3.5),
(19, 2, 'Desperados', 'De l\'orge et du houblon mexicain', 4.5),
(20, 2, 'Affligem', 'De l\'orge et du houblon', 3.5),
(21, 2, 'Affligem rouge', 'De l\'orge et houblon rouge', 3.5),
(22, 2, 'Tripel Karmeliet', 'De l\'orge et houblon mais meilleur', 4),
(23, 2, 'Guiness', 'De l\'orge et houblon noir', 4),
(24, 2, 'Levrette', 'De l\'orge et houblon plein d\'amour', 4.5),
(25, 3, 'Salade César', 'Verdure et poulet', 3),
(26, 3, 'Salade Norvégienne', 'Verdure et ikea', 3.5),
(27, 3, 'Salade Méditerranéenne', 'Verdure et olive', 3),
(28, 3, 'Salade Grecque', 'Verdure et backroom', 3),
(29, 3, 'Le Eggman', 'Steak, salade, oignons, sauce fromage', 10),
(30, 3, 'Le Nicky Lardson', 'Steack haché, bacon, salade, fromage, tomates', 12),
(31, NULL, 'Le Double Steak', 'Steak haché, fromage', 6),
(32, 3, 'Glace italienne', 'Vanille, fraise', 3),
(33, 3, 'Donuts', 'Chocolat, fraise', 1.5),
(34, 3, 'Crêpe', 'Nutella, Oreo, Kinder', 2),
(35, 3, 'Tiramisu', 'Nutella, speculos', 2.5),
(36, 3, 'Mousse au chocolat', 'Des oeufs, du chocolat', 1.5),
(37, 3, 'Cheesecake', 'Caramel', 2.5),
(38, 3, 'Milkshake', 'Fraise, chocolat', 2),
(39, 3, 'Skittle', 'Des boules de sucre', 1),
(40, 3, 'Regal\'ad', 'Vincent dit que c\'est bon', 1.5),
(41, 3, 'Tagada', 'Voilà les Dalton', 1),
(42, 3, 'Lion', 'Un félin au chocolat', 1),
(43, 3, 'Mars', 'Bon là, j\'ai plus d\'idée pour la description', 1);

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `code`, `name`) VALUES
(1, 'ROLE_ADMIN', 'Admin'),
(2, 'ROLE_USER', 'Utilisateur');

--
-- Déchargement des données de la table `style`
--

INSERT INTO `style` (`id`, `name`, `description`, `logo`) VALUES
(1, 'Tournois', 'Venez fracasser vos adversaires dans des tournois épiques.', NULL),
(2, 'Soirée a thème', 'Soirée avec concept précis, déguisement ou/et décoration sur un univers particulier.', NULL),
(3, 'Concert', 'Venez participer dans nos locaux a des concerts inoubliable.', NULL);

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `name`, `description`, `image`) VALUES
(1, 'Boissons chaudes', 'Nos cafés, issus d\'un excellent arabica tout droit venu des hauts plateaux de Cergy-Pontoise.\r\n\r\nNos thés, venus directement d\'un petit producteur du 13ème arrondissement de Paris.', NULL),
(2, 'Boissons Fraîches', 'Des bières au taux d\'alcool spécialement choisis pour des geeks fragiles.\r\n\r\nDes sodas pour recharger les batteries grâce à un pourcentage en sucre record.', NULL),
(3, 'Se sustenter', 'Des salades pour les filles, des burger pour les gros, des desserts pour les faibles et des friandises pour moi!!!', NULL);

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `role_id`, `username`, `password`, `email`) VALUES
(1, 1, 'admin', '$2y$10$rYnOFmlpVXTPDzCsfNWl2OTf4MUH.Jw/Atdu1b6C21HSNc/HPzLCK', 'admin@admin.fr'),
(2, 2, 'user', '$2y$10$DsmWfjOwq1KL48Vf5rwGd.a8o2tvWxiYFQGCMSDyh1ZmbBUHJP5Oy', 'user@user.fr');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
