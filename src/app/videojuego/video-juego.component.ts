import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
@Component({
    selector: 'videojuego',
    // Indica dónde está la plantilla
    templateUrl:'./video-juego.component.html'
})
export class VideojuegoComponent implements OnInit, OnDestroy{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de Juegos más populares";
        console.log("Se ha cargado el componente: videojuegos.component.ts");
    }
    ngOnInit() {
        console.log("OnInit ejecutado");
    }
    // ngDoCheck() {
    //     console.log("DoCheckejecutado");
    // }
    cambiarTitulo() {
        this.titulo= "Nuevo titulo del componente"
    }
    ngOnDestroy() {
        console.log("OnDestroy ejecutado");
    }
}