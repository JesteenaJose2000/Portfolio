import { Component, OnInit } from '@angular/core';
import { Award } from '../../models/award.model';

@Component({
  selector: 'portfolio-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
  awards: Award[] = [
    {
      title: 'Top 5 in Web-A-Thon',
      img: 'assets/image/webAThon.PNG',
      description:
        'My team secured a top 5 position in the Web-A-Thon conducted by Ganga Institute of Technology and Management.',
    },
    {
      title: 'Second in C-Debugging',
      img: 'assets/image/C-Debbuging.PNG',
      description:
        'Secured second place in the C Debugging program held by the College of Engineering Poonjar.',
    },
    {
      title: 'Second in Coding',
      img: 'assets/image/Coding.png',
      description:
        'Secured second place in the Coding program held by the College of Engineering Poonjar.',
    },
    {
      title: 'Star of the Month',
      img: 'assets/image/starOfMonth.png',
      description:
        'Received recognition as the "Star of the Month" at SOTI for outstanding contributions, delivering high-quality code, and consistently meeting project objectives.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
