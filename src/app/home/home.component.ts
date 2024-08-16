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
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  };

//!PREGUNTAR A STEFAN LA SEGUNDA PARTE
  filterResults( text: string ) {

    if( !text ) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter( (housingLocation) =>
      housingLocation?.city.toLowerCase().includes( text.toLowerCase() ),
    )
  };

}

