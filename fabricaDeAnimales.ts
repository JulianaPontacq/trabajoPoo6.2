import { Perro, Gato, Pájaro } from "./animales";
import { Animal } from "./animal";

export class FabricaDeAnimales {
    static crearAnimal(tipo: string): Animal | null {
        switch (tipo.toLowerCase()) {
            case "perro":
                return new Perro();
            case "gato":
                return new Gato();
            case "pájaro":
                return new Pájaro();
            default:
                console.log("Tipo de animal no reconocido.");
                return null;
        }
    }
}
