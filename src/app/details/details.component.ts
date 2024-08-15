//This page provides more information on a given housing location.

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../interfaces/housing-location';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
//FormControl: interfaz, FormGroup: class

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  //Estamos creando una nueva instancia de la clase de FormGroup
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  //`FormGroup` and `FormControl` are types that enable you to build 
  //forms. The `FormControl` type can provide a default value and shape the form 
  //data. In this example `firstName` is a `string` and the default value is empty 
  //string.

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  //This code gives the `DetailsComponent` access to the `ActivatedRoute` router 
  //feature that enables you to have access to the data about the current route. 
  //In the `constructor`, the code converts the `id` parameter acquired from the 
  //route from a string to a number.

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
  //The nullish coalescing (??) operator is a logical operator that 
  //returns its right-hand side operand when its left-hand side operand 
  //is null or undefined, and otherwise returns its left-hand side operand.

}
