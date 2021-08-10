import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Packagedate } from 'src/app/interfaces/interfacePackagedate';
import { PackagedateService } from 'src/app/services/packagedate.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

    // dataSource: Observable<Packagedate[]>;

  constructor(private servicePackagedate: PackagedateService) { 
    this.servicePackagedate.cargarPackagedate().subscribe(data => console.log(data));
  }

  ngOnInit(): void {
   
  }

}
