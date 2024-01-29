import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { STRING_TYPE } from "@angular/compiler";
import { ZapatillaService } from "../services/zapatilla.service";
@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ ZapatillaService ]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "componente de zapatillas";
    public marcas: String[];
    public color: string;
    public mi_marca: string;
    public zapatillas: Array<Zapatilla>;
    // Podemos definir arrays en los dos ejemplos anteriores
    constructor(//inyectar como dependencia dentro de una propiedad
        private _zapatillaservice: ZapatillaService
    ){ 
        this.mi_marca= 'string';
        this.color= 'yellow';//color por defecto
        this.marcas = new Array();
        this.zapatillas = [];
        };
        ngOnInit() {
            this.zapatillas = this._zapatillaservice.getZapatillas();
            this.getmarcas();
            alert(this._zapatillaservice.getTexto())
    }
    getmarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            //Para que no haya dos elementos con el mismo nombre vamos a hacer el el if
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarMarca(index: number){
        // delete this.marcas[index];
        this.marcas.splice(index, 1);// splice elimina propiedades o valores
    }
    // onBlur(){
    //     console.log("has salido del input");
    // }
    mostrarPalabra(){
        alert(this.mi_marca);
    }
}