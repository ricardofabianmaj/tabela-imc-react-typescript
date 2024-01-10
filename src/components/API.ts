
class Paciente {
    nome: string;
    peso: number;
    altura: number;
    gordCorporal: number;
    imc: number;
    status: string
    gordCorp: any;
    
    constructor(nome: string, peso: number, altura: number, gordCorporal: number) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.gordCorporal = gordCorporal;
        this.imc = this.calcularIMC();
        this.status = this.calcularStatus(this.imc)
    }
    
    private calcularIMC(): number {
        return Number((this.peso / (this.altura * this.altura)).toFixed(2));
    }
    private calcularStatus(imc: number): string {
        if (imc <= 18.5) {
            return 'Magreza'
        } else if ( imc > 18.5 && imc <= 24.9 ){
            return 'Peso normal'
        } else if ( imc > 24.8 && imc <= 29.9) {
            return 'Excesso de peso'
        } else if ( imc > 29.9 && imc <= 34.9) {
            return 'Obesidade Grau I'
        } else if (imc > 34.9 && imc <= 39.9) {
            return 'Obesidade Grau II'
        } else {
            return 'Obesidade Mórbida'
        }
    }
}

const Pacientes = {
    clientes: [
        new Paciente('Ricardo', 60, 1.60, 10),
        new Paciente('Paulo', 100, 2, 10),
        new Paciente('João', 80, 1.72, 40),
        new Paciente('Erica', 54, 1.64, 14),
        new Paciente('Douglas', 85, 1.73, 24),
        new Paciente('Tatiana', 46, 1.55, 19)
    ]
};

export {Pacientes, Paciente}

