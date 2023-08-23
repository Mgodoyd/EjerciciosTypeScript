class Vehiculo {
    marca: string;
    modelo: string;
    año: number;
    velocidad: number = 0;
    encendido: boolean = false;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    encender(): void {
        if (!this.encendido) {
            this.encendido = true;
            console.log("El vehículo ha sido encendido.");
        } else {
            console.log("El vehículo ya está encendido.");
        }
    }

    apagar(): void {
        if (this.encendido) {
            this.encendido = false;
            this.velocidad = 0;
            console.log("El vehículo ha sido apagado.");
        } else {
            console.log("El vehículo ya está apagado.");
        }
    }

    acelerar(velocidadIncremento: number): void {
        if (this.encendido) {
            this.velocidad += velocidadIncremento;
            console.log(`Acelerando. Velocidad actual: ${this.velocidad} km/h.`);
        } else {
            console.log("No se puede acelerar. El vehículo está apagado.");
        }
    }

    frenar(velocidadReducir: number): void {
        if (this.encendido) {
            this.velocidad -= velocidadReducir;
            console.log(`Frenando. Velocidad actual: ${this.velocidad} km/h.`);
        } else {
            console.log("No se puede frenar. El vehículo está apagado.");
        }
    }
}


const miAuto = new Vehiculo("Toyota", "Corolla", 2023);
miAuto.encender();
miAuto.acelerar(50);
miAuto.frenar(20);
miAuto.apagar();
