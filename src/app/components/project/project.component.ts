import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Book Store',
      video: 'assets/image/Bookstore.mp4',
      description: `This project is an e-commerce application designed for purchasing books. It features both
admin and user modules, allowing administrators to input book details and manage the application's
content, while users can browse, select, and purchase books seamlessly. The application is developed using
Angular for the frontend and .NET for robust backend functionality.`,
      skills: ['Angular', '.Net'],
      link: '',
    },
    {
      title: 'GFS Trace Farmer Asset Management System',
      images: ['assets/image/GFSTrace/farms.png',
        'assets/image/GFSTrace/grainInventory.png',
        'assets/image/GFSTrace/jobs.png',
        'assets/image/GFSTrace/spraylogs.png',
        'assets/image/GFSTrace/users.png'
      ],
      description: `The objective of this system is to effectively manage
farmers' assets, ensuring proper allocation of tools and tasks for farm workers. We use React.js and
collaborate as a team to develop this project, aiming to deliver an efficient and user-friendly solution.`,
      skills: ['React JS', 'MySQL'],
    },
    {
      title: 'Railway Reservation System',
      description: `A web-based application designed to streamline the process of booking and
managing railway tickets. Developed using HTML, CSS, JavaScript, PHP, and SQL technologies, this system
provides users with a user-friendly interface to reserve seats, view train schedules, and manage bookings
efficiently.`,
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
