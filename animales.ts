import { Animal } from "./animal";

export class Perro implements Animal {
    hacerSonido(): void {
        console.log("¡Guau! Guau!");
    }

    moverse(): void {
        console.log("El perro corre muy contentoS.");
    }
}

export class Gato implements Animal {
    hacerSonido(): void {
        console.log("Miau, miau");
    }

    moverse(): void {
        console.log("El gato camina pausadamente.");
    }
}

export class Pájaro implements Animal {
    hacerSonido(): void {
        console.log("¡Pío, pío!");
    }

    moverse(): void {
        console.log("El pájaro vuela muy alto.");
    }
}
