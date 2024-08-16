import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../interfaces/housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  // housingLocation: HousingLocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };

  housingLocationList: HousingLocation[] = [];

  filteredLocationList: HousingLocation[] = [];
  //Holds the values that match the search criteria entered by the user

  //Inyectamos el nuevo servicio:
  housingService: HousingService = inject(HousingService);

  //El constructor es lo primero que se va a inicializar
  constructor() {
    this.housingService.getAllHousingLocations().subscribe(housingLocationList => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;
    });
  };

  filterResults( text: string ) {

    console.log(this.housingLocationList);

    if( !text ) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter( (housingLocation) =>
      housingLocation?.city.toLowerCase().includes( text.toLowerCase() ),
    )
  };
  //La segunda parte del método de filterResults indica lo siguiente: 
  //El .filter es un método que funciona por el estilo de un for loop. El argumento es el 
  //housingLocation. 
  //Si el housingLocation existe, accede a la propiedad de ciudad, y cambialas a minúsculas. 
  //Después, incluye (.includes() método) el texto escrito en la barra de búsqueda (text 
  //es el argumento de filterResults), que también será cambiado a minúscula para que 
  //el housingLocation.city.toLowerCase coincida con el text.toLowerCase. 

}

