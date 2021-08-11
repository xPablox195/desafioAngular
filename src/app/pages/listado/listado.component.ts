import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Packagedate } from 'src/app/interfaces/interfacePackagedate';
import { PackagedateService } from 'src/app/services/packagedate.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



//const ELEMENT_DATA: Packagedate[] = [
//  {userId: 1, id: 1, title: 'uno', body: 'UNOOOO'},
//  {userId: 2, id: 2, title: 'dos', body: 'DOOOOS'},
//  {userId: 3, id: 3, title: 'tres', body: 'TREEES'},
//];

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})



export class ListadoComponent implements OnInit {

  packagesdate: Packagedate[] = [];

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource();

  
  
  
  constructor(private servicePackagedate: PackagedateService) { }

  ngOnInit(): void {
    this.servicePackagedate.cargarPackagedate()
    .subscribe(data => (this.packagesdate = (data)));
    console.log(this.packagesdate);

    this.servicePackagedate.cargarPackagedate()
    .subscribe(res => (this.dataSource.data = (res)));

    this.dataSource.paginator = this.paginator;
    
  }

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
 



}


