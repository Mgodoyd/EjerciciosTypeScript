const calcularAreaRectangulo = (base: number, altura: number): number => {
    return base * altura;
};

const calcularPerimetroRectangulo = (base: number, altura: number): number => {
    return 2 * (base + altura);
};


const baseRectangulo = 5;
const alturaRectangulo = 8;

const area = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
const perimetro = calcularPerimetroRectangulo(baseRectangulo, alturaRectangulo);

console.log(`Área del rectángulo: ${area}`);
console.log(`Perímetro del rectángulo: ${perimetro}`);
