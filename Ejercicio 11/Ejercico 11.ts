const esBisiesto = (anio: number): boolean => {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
};

// Ejemplo de uso
const anio = 2024;
const resultado = esBisiesto(anio);

if (resultado) {
    console.log(`${anio} es un año bisiesto.`);
} else {
    console.log(`${anio} no es un año bisiesto.`);
}
