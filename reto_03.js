'use strict'

class Adivina {
    constructor(numeroMagico, numero) {
        this.numeroMagico = numeroMagico;
        this.numero = numero
    }

    comprobarAcierto(numeroMagico) {
        if (this.numero < numeroMagico) {
            return `El número ${this.numero} es menor al número mágico, intenta de nuevo`;
        } else if (this.numero > numeroMagico) {
            return `El número ${this.numero} es mayor al número mágico, intenta de nuevo`;
        } else {
            return `ACERTASTE, el juego ha finalizado`;
        }
    }
}

alert('¡Bienvenido a GaminSoft!');
let opcion = 0;
do {
    let numero = 0, numeroMagico = 0;
    
    
    
    opcion = Number(prompt('¿Qué desea hacer?: \n0.Salir \n1.Jugar'));
    if (Number.isInteger(opcion)) {
        switch (opcion) {
            case 0:
                break;
            case 1:
                numeroMagico = Math.floor(Math.random() * 51);
                do {
                    
                    numero = Number(prompt('Ingrese un número: '));
                    let adivinar = new Adivina(numeroMagico, numero);

                    alert(adivinar.comprobarAcierto(numeroMagico));
                } while (numero != numeroMagico)
        }
    }
} while (opcion != 0)

// class Adivina {
//     constructor(numeroMagico, numero) {
//         this.numeroMagico = numeroMagico;
//         this.numero = numero
//     }

//     comprobarAcierto(numeroMagico, numero) {
//         if (numero < numeroMagico) {
//             return `El número ${this.numero} es menor al número mágico, intenta de nuevo`;
//         } else if (numero > numeroMagico) {
//             return `El número ${this.numero} es mayor al número mágico, intenta de nuevo`;
//         } else {
//             return `ACERTASTE, el juego ha finalizado`;
//         }
//     }
// }
// alert('¡Bienvenido a GaminSoft!');
// let opcion = 0;
// do {
//     let numero = 0;
//     let numeroMagico = 0;
    
//     opcion = Number(prompt('¿Qué desea hacer?: \n0.Salir \n1.Jugar'));
//     if (Number.isInteger(opcion)) {
//         switch (opcion) {
//             case 0:
//                 break;
//             case 1:
//                 do {
//                     numero = Number(prompt('Ingrese un número: '));
//                 for (let i = 0; i < 2; i++) {
//                     numeroMagico[i] = Math.floor
//                     (Math.random() * 51);
//                 }
//                 comprobarAcierto(numeroMagico, numero);
//                 } while (numero != numeroMagico)
//         }
//     }
// } while (opcion != 0)