import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/clases/package.model';
import { PackagedateService } from 'src/app/services/packagedate.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo: string = "Nuevo Post"
  tituloInput: string = "";
  bodyInput: string = "";

  verCard: boolean = false;
  packageCard: Package = {userId: 0, id: 0, title:"", body:""};


  constructor(private packageDateService: PackagedateService) { }

  ngOnInit(): void {
  }

  agregarPost(){
    if(this.titulo != "" && this.bodyInput != ""){
      let nuevoPostPackageId = new Package(this.tituloInput, this.bodyInput);
      this.packageDateService.postPackageIdPost(nuevoPostPackageId).subscribe(respuesta => this.packageCard=(respuesta));
      this.verCard = true;
  
      this.tituloInput = "";
      this.bodyInput= "";
    }
  }
}
