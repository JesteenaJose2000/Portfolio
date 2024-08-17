import { Component, OnInit } from '@angular/core';
import { Internship } from '../../models/internship.model';

@Component({
  selector: 'portfolio-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss'],
})
export class InternshipComponent implements OnInit {
  internships: Internship[] = [
    {
      title: 'Intelligent Customer Help Desk with Smart Document Understanding',
      img: 'assets/image/smartbridge.png',
      date: '14 MAY 2020 – 13 JUN 2020',
      description:
        'This internship, led by Smartbridge, focused specifically on Artificial Intelligence.',
    },
    {
      title: 'Enfono Technologies',
      img: 'assets/image/enfono.png',
      date: '06 July 2019 - 10 July 2019',
      description:
        'During the internship with Enfono Technologies, I have done projects based on Machine Learning.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
