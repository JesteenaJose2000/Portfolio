import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Education } from '../../models/education.model';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  timeline: HTMLElement | undefined;
  @ViewChild('timeline', { read: ElementRef, static: false }) set timelineRef(
    ref: ElementRef<HTMLElement>
  ) {
    if (ref) {
      this.timeline = ref.nativeElement;
      this.animateTimeline();
    }
  }

  educations: Education[] = [
    {
      course: 'Bachelor of Technology(Hons) Computer Science and Engineering',
      college: 'Saintgits College of Engineering, Kottayam',
      date: 'August 2018 - June 2022',
      description: [
        `Graduated with an <strong>Honors Degree</strong>, achieving a <strong>final grade of 9.7</strong>, reflecting a strong academic performance and commitment to excellence.
`,
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  animateTimeline() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (this.timeline) {
            if (entry.isIntersecting) {
              this.timeline.classList.add('animate-line');
            } else {
              this.timeline.classList.remove('animate-line');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    if (this.timeline) observer.observe(this.timeline);
  }
}
