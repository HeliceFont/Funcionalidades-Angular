import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../services/peticiones.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.sass'],
  providers: [ PeticionService]
})
export class ExternoComponent implements OnInit {
  public user: any; //cualquiera
  public userId: any; //cualquiera
  public fecha: any;
  public usuario_guardado: any;

  public new_user: any; 

  constructor(
    private _peticionesService: PeticionService
  ){
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }
  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date();
  }
  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
  onSubmit(form: NgForm){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        console.log(response);
        this.usuario_guardado = response;

        form.reset();
      },
      error=> {
        console.log(<any>error);
      }
    );
  }

}
