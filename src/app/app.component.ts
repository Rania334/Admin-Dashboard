import { Component, OnInit, computed, inject } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from "./components/ChartsAndSettings/header/header.component";
import { OrderService } from './services/charts-and-order.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  opened = true;

  private router = inject(Router); // Angular 15+ inject syntax

  // 👇 Dynamically hide sidebar/header on login page
  get showLayout(): boolean {
    return !this.router.url.includes('/login');
  }

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    // any other init logic
  }
}
