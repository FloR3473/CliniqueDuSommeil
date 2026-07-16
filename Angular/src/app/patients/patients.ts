import { Component, OnInit, signal } from '@angular/core';
import { PatientsService } from '../patients-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patients',
  imports: [DatePipe],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients implements OnInit {
  constructor(private patientsService : PatientsService) { };
  
  ngOnInit(): void {
    this.listerPatients();
  }

  patients = signal<any | null>(null);

  listerPatients() {
    this.patientsService.getPatients().subscribe({
      next: (res: {patients? : []}) => {
        this.patients.set(res["patients"]);
      },
      error: err => console.error(err)
    });
  }

}
