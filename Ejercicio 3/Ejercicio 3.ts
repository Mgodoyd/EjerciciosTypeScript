class CuentaBancaria {
    // Atributos
    private _noDeCuenta: string;
    private _tipoCuenta: string;
    private _dpi: string;
    private _saldoCuenta: number;
    private _interesCuenta: number;

    // Constructor por defecto
    constructor() {
        this._noDeCuenta = "";
        this._tipoCuenta = "";
        this._dpi = "";
        this._saldoCuenta = 0;
        this._interesCuenta = 0;
    }

    // Constructor con DPI, SaldoCuenta e InteresCuenta
    constructorConDatos(dpi: string, saldoCuenta: number, interesCuenta: number) {
        this._noDeCuenta = this.generarNumeroCuenta();
        this._tipoCuenta = "Ahorros"; // Puedes ajustar esto según tus necesidades
        this._dpi = dpi;
        this._saldoCuenta = saldoCuenta;
        this._interesCuenta = interesCuenta;
    }

    // Métodos
    montoGuardar(monto: number): void {
        this._saldoCuenta += monto;
    }

    montoRetirar(monto: number): void {
        if (monto <= this._saldoCuenta) {
            this._saldoCuenta -= monto;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    montoDisponible(): number {
        return this._saldoCuenta;
    }

    // Método privado para generar un número de cuenta aleatorio
    private generarNumeroCuenta(): string {
        // Lógica para generar el número de cuenta (puede variar)
        const numeroCuenta = Math.floor(Math.random() * 1000000000).toString().padStart(10, "0");
        return numeroCuenta;
    }
}

// Ejemplo de uso
const cuenta1 = new CuentaBancaria();
console.log(cuenta1.montoDisponible()); 

const cuenta2 = new CuentaBancaria();
cuenta2.montoGuardar(500);
console.log(cuenta2.montoDisponible()); 

cuenta2.montoRetirar(700);
console.log(cuenta2.montoDisponible()); 
