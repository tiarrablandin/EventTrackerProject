-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rockcyclesdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `rockcyclesdb` ;

-- -----------------------------------------------------
-- Schema rockcyclesdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rockcyclesdb` DEFAULT CHARACTER SET utf8 ;
USE `rockcyclesdb` ;

-- -----------------------------------------------------
-- Table `rock`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `rock` ;

CREATE TABLE IF NOT EXISTS `rock` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `element` VARCHAR(45) NOT NULL,
  `planet` VARCHAR(45) NOT NULL,
  `properties` TEXT NOT NULL,
  `tips` VARCHAR(45) NULL,
  `charged` DATETIME NULL,
  `cleansed` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS rockuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'rockuser'@'localhost' IDENTIFIED BY 'rockuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'rockuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `rock`
-- -----------------------------------------------------
START TRANSACTION;
USE `rockcyclesdb`;
INSERT INTO `rock` (`id`, `name`, `element`, `planet`, `properties`, `tips`, `charged`, `cleansed`) VALUES (1, 'clear quartz', 'All', 'Moon, Sun', 'mental clarity, enhances and balances energy flow, dispells surrounding energies, protection, healing.', 'sensitive to sunlight', '2022-08-11', '2022-09-01');
INSERT INTO `rock` (`id`, `name`, `element`, `planet`, `properties`, `tips`, `charged`, `cleansed`) VALUES (2, 'rainbow fluorite', 'Water', 'Neptune', 'Calms an active mind, harmonizes spiritual energies, taps into subconscious mind, absorbs negative energy and stress, brings inner guidance and protection, increases concentration and self-confidence, encourages positivity and balances energy, helps clear mind from distractions.', 'sensitive to sunlight', '2022-08-11', '2022-09-01');
INSERT INTO `rock` (`id`, `name`, `element`, `planet`, `properties`, `tips`, `charged`, `cleansed`) VALUES (3, ' black obsidian', 'Earth, Fire', 'Saturn', 'Protection, Purification, Transformation, Metamorphoses, Manifestation, Psychic ability', 'brittle', '2022-08-11', '2022-09-01');

COMMIT;

