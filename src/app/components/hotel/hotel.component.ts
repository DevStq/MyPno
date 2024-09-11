import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hotels = [
    {
      name: 'Grand Palace Hotel',
      rating: 4.5,
      address: '123 Main St, Springfield',
      description: 'Luxurious hotel with excellent amenities and service.',
      imageUrl: 'https://images.pexels.com/photos/24196140/pexels-photo-24196140/free-photo-of-men-at-a-street-food-stall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with actual image path
    },
    {
      name: 'Sea View Resort',
      rating: 4.0,
      address: '456 Ocean Dr, Miami',
      description: 'Beautiful beachside resort with breathtaking views.',
      imageUrl: 'assets/images/sea-view-resort.jpg' // Replace with actual image path
    },
    // Add more hotel objects as needed
  ];
}
