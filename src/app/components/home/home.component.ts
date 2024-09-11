import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToService() {
    this.router.navigate(['/localService']);
    }
    navigateToHotels(): void {
      this.router.navigate(['/hotels']);
    }
    navigateToPlaces(): void {
      this.router.navigate(['/places']);
    }
}
