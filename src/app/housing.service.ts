//Angular services provide a way for you to separate Angular app data and 
//functions that can be used by multiple components in your app. To be used 
//by multiple components, a service must be made injectable. Services that 
//are injectable and used by a component become dependencies of that component. 
//The component depends on those services and can't function without them.

import { inject, Injectable } from '@angular/core';
import { HousingLocation } from './interfaces/housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  http = inject(HttpClient);

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  url = 'http://localhost:3000/locations';

  // getAllHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // } //Devuelve la lista del housing location

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  // } //Devuelve un housing location en base al id

  getAllHousingLocations(): Observable<HousingLocation[]> {
    // const data = await fetch( this.url );
    // console.log(data);
    // return ( await data.json() ) ?? [];
    const getHousesLocations = this.http.get<HousingLocation[]>(this.url);
    // getHousesLocations.subscribe(console.log);
    return getHousesLocations;
  }
  //The code now uses asynchronous code to make a GET request over HTTP.

  getHousingLocationById( id: number ): Observable<HousingLocation | undefined> {
                                                                  //! EL json web server no puede especificar por
                                                                  //!id. Si pongo la url + /2 (supuesto id), resulta en un 
                                                                  //! Not found
    const houseLocation = this.http.get<HousingLocation | undefined>(`${this.url}/${id}`);
    return houseLocation;
  }


  submitApplication( firstName: string, lastName: string, email: string ): void {
    console.log(
      `Home application received: 
      firstName: ${ firstName }, 
      lastName: ${ lastName }, 
      email: ${ email }`
    );
  }


}
