class cPersona {
    // Atributos
    nombres: string;
    apellidos: string;
    edad: number;
    fecha_nacimiento: string;
    genero: string;
    nacionalidad: string;

    // Constructor
    constructor(nombres: string, apellidos: string, edad: number, fecha_nacimiento: string, genero: string, nacionalidad: string) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
    }

    // Acciones
    hablar(): void {
        console.log("Estoy hablando.");
    }

    caminar(): void {
        console.log("Estoy caminando.");
    }

    comer(): void {
        console.log("Estoy comiendo.");
    }

    correr(): void {
        console.log("Estoy corriendo.");
    }

    dormir(): void {
        console.log("Estoy durmiendo.");
    }
}

// Ejemplo de uso
const persona1 = new cPersona("Juan", "Perez", 30, "1993-05-15", "Masculino", "Mexicana");
persona1.hablar();
persona1.caminar();
persona1.comer();
persona1.correr();
persona1.dormir();
