import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  
  @Input() housingLocation!: HousingLocation;
  // '!': non-null assertion operator. Indicamos que el valor de la propiedad
  // no será null o underfined

}
