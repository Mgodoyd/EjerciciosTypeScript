class c_Persona {
    // Atributos
    private _nombres: string;
    private _apellidos: string;
    private _edad: number;
    private _fecha_nacimiento: string;
    private _genero: string;
    private _nacionalidad: string;

    // Constructor
    constructor(nombres: string, apellidos: string, edad: number, fecha_nacimiento: string, genero: string, nacionalidad: string) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._edad = edad;
        this._fecha_nacimiento = fecha_nacimiento;
        this._genero = genero;
        this._nacionalidad = nacionalidad;
    }

    // Getters
    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get edad(): number {
        return this._edad;
    }

    get fecha_nacimiento(): string {
        return this._fecha_nacimiento;
    }

    get genero(): string {
        return this._genero;
    }

    get nacionalidad(): string {
        return this._nacionalidad;
    }

    // Setters
    set nombres(value: string) {
        this._nombres = value;
    }

    set apellidos(value: string) {
        this._apellidos = value;
    }

    set edad(value: number) {
        this._edad = value;
    }

    set fecha_nacimiento(value: string) {
        this._fecha_nacimiento = value;
    }

    set genero(value: string) {
        this._genero = value;
    }

    set nacionalidad(value: string) {
        this._nacionalidad = value;
    }

    // Acciones...
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
const persona_1 = new c_Persona("Juan", "Perez", 30, "1993-05-15", "Masculino", "Mexicana");
console.log(persona_1.nombres); // Juan
console.log(persona_1.edad); // 30

persona_1.nombres = "Carlos";
persona_1.edad = 32;
console.log(persona_1.nombres); // Carlos
console.log(persona_1.edad); // 32
