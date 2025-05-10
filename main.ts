import { FabricaDeAnimales } from "./fabricaDeAnimales";

const miPerro = FabricaDeAnimales.crearAnimal("perro");
miPerro?.hacerSonido();
miPerro?.moverse();

const miGato = FabricaDeAnimales.crearAnimal("gato");
miGato?.hacerSonido();
miGato?.moverse();

const miPájaro = FabricaDeAnimales.crearAnimal("pájaro");
miPájaro?.hacerSonido();
miPájaro?.moverse();
