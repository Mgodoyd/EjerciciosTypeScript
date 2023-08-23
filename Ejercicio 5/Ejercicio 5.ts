class Serie {
    private titulo: string;
    private numeroTemporadas: number = 0;
    private entregado: boolean = false;
    private genero: string = "";
    private autor: string;

    constructor(titulo: string, autor: string, numeroTemporadas?: number, genero?: string) {
        this.titulo = titulo;
        this.autor = autor;

        if (numeroTemporadas !== undefined) {
            this.numeroTemporadas = numeroTemporadas;
        }

        if (genero !== undefined) {
            this.genero = genero;
        }
    }

    // Getter y setter para el atributo 'entregado'
    getEntregado(): boolean {
        return this.entregado;
    }

    setEntregado(entregado: boolean): void {
        this.entregado = entregado;
    }
}

// Ejemplo de uso
const serie1 = new Serie("Serie 1", "Autor 1");
const serie2 = new Serie("Serie 2", "Autor 2", 5, "Drama");

serie1.setEntregado(true);

console.log(serie1.getEntregado()); // true
console.log(serie2.getEntregado()); // false
