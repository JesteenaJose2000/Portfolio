import { Component, OnInit } from '@angular/core';
import { Certifications } from '../../models/certifications.model';

@Component({
  selector: 'portfolio-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
})
export class CertificationComponent implements OnInit {
  certifications: Certifications[] = [
    {
      platformName: 'EDX',
      img: 'assets/image/edx.png',
      courses: ['Data Science: Visualization'],
    },
    {
      platformName: 'Coursera',
      img: 'assets/image/coursera.webp',
      courses: ['Web development', 'R programming', 'Blockchain Basics'],
    },
    {
      platformName: 'Udemy',
      img: 'assets/image/udemy.png',
      courses: ['Artificial Intelligence', 'Machine Learning'],
    },
    {
      platformName: 'Great Learning',
      img: 'assets/image/greatlearning.png',
      courses: ['Computer vision essentials'],
    },
    {
      platformName: 'Nptel',
      img: 'assets/image/nptel.png',
      courses: ['Programming, Data structures and algorithms using Python'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
