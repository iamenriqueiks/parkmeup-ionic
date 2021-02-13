import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/remote'
import {AuthenticationService} from '../../services/authentication.service';
import {ParkingService} from '../../services/parking.service';
  

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.page.html',
  styleUrls: ['./lista-empresas.page.scss'],
})
export class ListaEmpresasPage implements OnInit {
  currentUser;

  companyList: Company[] = [];

  constructor(private authenticationService: AuthenticationService,
    private parkingService: ParkingService,) {}

  ngOnInit() {
    this.authenticationService.getCurrentUser().then(user => {
      this.currentUser = user;
  });

  this.parkingService.getCompaniesIBelongTo().then(comp =>{
    console.log(comp);
    this.companyList = comp;
  })
  }

  loginIntoCompany(){
    console.log("Hola");
    
  }



}
