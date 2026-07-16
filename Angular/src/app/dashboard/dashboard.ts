import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../user-service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit{
  constructor(private router: Router,protected userService: UserService) {} // injection du service UserService

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
  ngAfterViewInit(): void {

new Chart('consultationsChart', {
  type: 'doughnut', // plus élégant qu'un pie
  data: {
    labels: [
      'Médecine Générale',
      'Cardiologie',
      'Radiologie',
      'Autres'
    ],
    datasets: [{
      data: [120, 80, 40, 10],
      backgroundColor: [
        '#7C9CF5', // bleu doux
        '#8ED6C4', // vert menthe
        '#F7C97F', // orange pastel
        '#D8DCE6'  // gris clair
      ],
      borderWidth: 0,
      hoverOffset: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '45%', // effet anneau
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20
        }
      }
    }
  }
});

  }

}