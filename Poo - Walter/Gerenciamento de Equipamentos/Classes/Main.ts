import { Televisao } from "./Televisão";
import { Computador } from "./Computador";

export class Principal {
    static main(): void {
        const tv = new Televisao("Smart TV", 55);
        const pc = new Computador("PC Gamer", 16);

        console.log(tv.informarStatus()); 
        tv.ligar();
        console.log(tv.informarStatus());

        console.log(pc.informarStatus()); 
        pc.ligar();
        console.log(pc.informarStatus());
    }
}
