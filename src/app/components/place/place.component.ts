import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  places = [
    {
      name: 'Sunny Beach',
      type: 'Beach',
      description: 'A beautiful sandy beach with crystal-clear waters.',
      imageUrl: 'https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with your image path
    },
    {
      name: 'Central Park',
      type: 'Park',
      description: 'A large urban park offering walking trails and green spaces.',
      imageUrl: 'assets/images/central-park.jpg' // Replace with your image path
    },
    // Add more places as needed
  ];
}
 
