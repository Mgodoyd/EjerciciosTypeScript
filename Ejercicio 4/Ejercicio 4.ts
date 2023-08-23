class Cancion {
    // Atributos
    private titulo: string;
    private autor: string;

    // Constructor
    constructor(titulo?: string, autor?: string) {
        this.titulo = titulo || "";
        this.autor = autor || "";
    }

    // Métodos
    DevuelveTitulo(): string {
        return this.titulo;
    }

    DevuelveAutor(): string {
        return this.autor;
    }

    ReproducirTitulo(nuevoTitulo: string): void {
        this.titulo = nuevoTitulo;
    }

    ReproducirAutor(nuevoAutor: string): void {
        this.autor = nuevoAutor;
    }
}

// Ejemplo de uso
const cancion1 = new Cancion("Canción A", "Autor X");
console.log(cancion1.DevuelveTitulo()); // Canción A
console.log(cancion1.DevuelveAutor()); // Autor X

cancion1.ReproducirTitulo("Nueva Canción");
cancion1.ReproducirAutor("Nuevo Autor");
console.log(cancion1.DevuelveTitulo()); // Nueva Canción
console.log(cancion1.DevuelveAutor()); // Nuevo Autor
