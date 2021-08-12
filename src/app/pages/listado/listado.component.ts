import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Packagedate, PackageIdPost } from 'src/app/interfaces/interfacePackagedate';
import { PackagedateService } from 'src/app/services/packagedate.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


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

  closeModal: string = "";

  packageIdPosts: PackageIdPost[] = [];
  idpostModalAct: number = 0;
  
  constructor(private servicePackagedate: PackagedateService, private modalService: NgbModal) { }

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

  triggerModal(content: any, id: number) {
    
    this.servicePackagedate.cargarPackageIdPosts(id)
    .subscribe(data => (this.packageIdPosts = (data)));
    console.log(this.packageIdPosts);
    this.idpostModalAct = id
    
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });

    console.log("nuevo print " + id)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
  nuevoPost(){
    
  }
}


