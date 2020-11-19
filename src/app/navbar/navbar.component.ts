import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [
    {
      label: 'Geocache',
      route: '',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Ranking',
      route: 'ranking',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Tastings',
      route: 'tastings',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
