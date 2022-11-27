-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema stfgames
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema stfgames
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stfgames` DEFAULT CHARACTER SET utf8 ;
USE `stfgames` ;

-- -----------------------------------------------------
-- Table `stfgames`.`Pregunta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stfgames`.`Pregunta` (
  `idPregunta` INT NOT NULL AUTO_INCREMENT,
  `contenido` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPregunta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stfgames`.`Aternativa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stfgames`.`Aternativa` (
  `idAternativa` INT NOT NULL AUTO_INCREMENT,
  `contenido` VARCHAR(45) NOT NULL,
  `opcion` VARCHAR(45) NOT NULL,
  `idPregunta` INT NOT NULL,
  PRIMARY KEY (`idAternativa`),
  INDEX `fk_Aternativa_Pregunta_idx` (`idPregunta` ASC) VISIBLE,
  CONSTRAINT `fk_Aternativa_Pregunta`
    FOREIGN KEY (`idPregunta`)
    REFERENCES `stfgames`.`Pregunta` (`idPregunta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
