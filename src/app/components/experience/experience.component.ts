import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'portfolio-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  timeline: HTMLElement | undefined;
  @ViewChild('timeline', { read: ElementRef, static: false }) set timelineRef(
    ref: ElementRef<HTMLElement>
  ) {
    if (ref) {
      this.timeline = ref.nativeElement;
      this.animateTimeline();
    }
  }

  experiences: Experience[] = [
    {
      title: 'Software Developer',
      company: 'SOTI Inc. Company',
      date: 'August 2022 - September 2024',
      description: [
        `Successfully collaborated as a key member of three projects: <strong>Design Studio</strong>, <strong>SOTI XSight</strong>, and <strong>Mobicontrol</strong> using <strong>Angular framework</strong> and <strong>.NET</strong>.`,
        `Promoted from <strong>Associate Software Developer</strong> to <strong>Software Developer I</strong>, recognizing my contributions and growth in the company.`,
        `Worked directly under the <strong>CEO of the company</strong> on one of the projects, participating in meetings with various team members across the globe and gaining insights into collaborative project efforts.`,
        `Utilized <strong>Agile</strong> and <strong>Scrum</strong> methodologies to ensure effective project management, timely delivery, and continuous improvement.`,
        `Demonstrated exceptional <strong>teamwork</strong> and <strong>communication skills</strong>, actively participating in <strong>code reviews</strong>, resolving software bugs, and contributing to the overall success of the projects.`,
        `Played a crucial role in enhancing project functionality and <strong>user experience</strong> by bringing new features and implementing <strong>user-friendly designs</strong>.`,
        `Received recognition as the <strong>Star of the Month</strong> for outstanding contributions and achievements in delivering high-quality code and consistently meeting project objectives.`,
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
