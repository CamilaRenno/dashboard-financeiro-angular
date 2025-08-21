import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Alimentação', 'Transporte', 'Lazer'],
      datasets: [
        {
          data: [250, 40, 70],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF4364', '#2692DB', '#FFAE36']
        }
      ]
    };

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    };
  }
}
