import { Component, OnInit } from '@angular/core';
import { signOut } from 'aws-amplify/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [
    // {
    //   label: 'Geocache',
    //   route: '',
    //   showOnMobile: false,
    //   showOnTablet: true,
    //   showOnDesktop: true
    // },
    {
      label: 'Ranking',
      route: '',
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

  async logout() {
    await signOut();
    window.location.reload();
  }
}
