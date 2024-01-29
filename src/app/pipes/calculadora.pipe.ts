import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'Calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    // dato | calculadora: otroDato
    //param1               parametro2
    transform(value: any, value_two: any) {
        let operaciones = `
        Suma: ${value + value_two} -
        Resta:${value - value_two} -
        Multiplicación:${value * value_two} -
        División:${value / value_two} 
        `
        return operaciones;
    }

}