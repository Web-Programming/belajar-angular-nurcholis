import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https'
  protected housingLocationList: HousingLocation[] = [
        {
      id: 0,
      name: "name 1",
      city: "city 1",
      state: "state 1",
      photo: "https://tjh.com/wp-content/uploads/2023/06/TJH_HERO_TJH-HOME@2x-1-1536x1021.webp",
      availableUnits: 10,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: "name 2",
      city: "city 2",
      state: "state 2",
      photo: "https://images.squarespace-cdn.com/content/v1/65a8583b3f2bb32732bff587/63ff3986-3c95-4422-bdaa-6a373b71140d/Custom-Luxury-Home-Dallas.jpg",
      availableUnits: 12,
      wifi: true,
      laundry: true
    }

  ]
  constructor() { }
  getAllHousingLocations() : HousingLocation[]{
    return this.housingLocationList;
  }
  getHousingLocationById(id:number) : HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation =>housingLocation.id == id);
  }
}
