const calcularEdad = (fechaNacimiento: Date): number => {
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    if (
        fechaNacimiento.getMonth() > fechaActual.getMonth() ||
        (fechaNacimiento.getMonth() === fechaActual.getMonth() &&
            fechaNacimiento.getDate() > fechaActual.getDate())
    ) {
        return edad - 1;
    } else {
        return edad;
    }
};

const fechaNacimiento = new Date("1990-08-15");
const edad = calcularEdad(fechaNacimiento);

console.log(`Edad: ${edad}`);
