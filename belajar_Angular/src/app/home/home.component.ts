import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
// import {}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingLocation= this.housingService.getHousingLocationById(this.housingLocationId);
    console.table(this.housingLocation)
  }
}
