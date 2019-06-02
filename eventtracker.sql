-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventtracker` ;

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventtracker` DEFAULT CHARACTER SET utf8 ;
USE `eventtracker` ;

-- -----------------------------------------------------
-- Table `jump`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jump` ;

CREATE TABLE IF NOT EXISTS `jump` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `location` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `altitude` INT NULL,
  `delay` INT NULL,
  `description` VARCHAR(120) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO user@localhost;
 DROP USER user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'user'@'localhost';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `jump`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtracker`;
INSERT INTO `jump` (`id`, `date`, `location`, `type`, `altitude`, `delay`, `description`) VALUES (1, '2019-02-19', 'Denver', 'freefall', 13000, 55, 'freefall in rain, totally hit my target');
INSERT INTO `jump` (`id`, `date`, `location`, `type`, `altitude`, `delay`, `description`) VALUES (2, '2019-03-12', 'Denver', 'freefall', 12500, 50, 'sunny day, good maneuvers');

COMMIT;

