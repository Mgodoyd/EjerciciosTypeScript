interface Figura {
    CalcularArea(): number;
    CalcularPerimetro(): number;
  }
  
  class Circunferencia implements Figura {
    radio: number;
  
    constructor(radio: number) {
      this.radio = radio;
    }
  
    Radio(): number {
      return this.radio;
    }
  
    CalcularArea(): number {
      return Math.PI * this.radio * this.radio;
    }
  
    CalcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  class TrianguloEquilatero implements Figura {
    lado: number;
  
    constructor(lado: number) {
      this.lado = lado;
    }
  
    Lado(): number {
      return this.lado;
    }
  
    CalcularArea(): number {
      return (Math.sqrt(3) / 4) * this.lado * this.lado;
    }
  
    CalcularPerimetro(): number {
      return 3 * this.lado;
    }
  }
  
  class Rectangulo implements Figura {
    largo: number;
    ancho: number;
  
    constructor(largo: number, ancho: number) {
      this.largo = largo;
      this.ancho = ancho;
    }
  
    Largo(): number {
      return this.largo;
    }
  
    Ancho(): number {
      return this.ancho;
    }
  
    CalcularArea(): number {
      return this.largo * this.ancho;
    }
  
    CalcularPerimetro(): number {
      return (2 * this.largo) + (2 * this.ancho);
    }
  }
  
  const circunferencia = new Circunferencia(5);
        console.log(`Área de la circunferencia: ${circunferencia.CalcularArea()}`);
        console.log(`Perímetro de la circunferencia: ${circunferencia.CalcularPerimetro()}`);

  const trianguloEquilatero = new TrianguloEquilatero(3);
        console.log(`Área del triángulo equilátero: ${trianguloEquilatero.CalcularArea()}`);
        console.log(`Perímetro del triángulo equilátero: ${trianguloEquilatero.CalcularPerimetro()}`);

  const rectangulo = new Rectangulo(4, 6);
        console.log(`Área del rectángulo: ${rectangulo.CalcularArea()}`);
        console.log(`Perímetro del rectángulo: ${rectangulo.CalcularPerimetro()}`);
