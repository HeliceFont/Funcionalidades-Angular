import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    
    constructor(){
    this.zapatillas = [
        new Zapatilla( 'Reebok Classic', 'Reebok', 'Blanco', 80, true ),
        new Zapatilla( 'Nike Runner MD', 'Nike', 'negras', 90, false ),
        new Zapatilla( 'Adidas Yezzy', 'Adidas', 'Gris', 120, true ),
        new Zapatilla( 'Nike Air Max', 'Nike', 'Gris', 60, true )
    ];
    }
    getTexto(){
        return "Hola Mundo desde un servicio"
    }
    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }

}