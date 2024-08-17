import { AfterViewInit, Component } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { LanguageSkill, TechnicalSkill } from '../../models/skills.model';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  techSkills: TechnicalSkill[] = [
    { name: 'Angular', progress: 80 },
    { name: 'React JS', progress: 70 },
    { name: 'Python', progress: 75 },
    { name: 'C', progress: 70 },
    { name: 'Java', progress: 40 },
    { name: '.NET', progress: 50 },
    { name: 'SQL', progress: 70 },
    { name: 'Jasmine', progress: 50 },
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 85 },
    { name: 'Javascript', progress: 80 },
    { name: 'Jira', progress: 70 },
    { name: 'Github', progress: 70 },
    { name: 'Postman', progress: 60 },
    { name: 'Bootstrap', progress: 75 },
  ];

  languages: LanguageSkill[] = [
    { name: 'English', level: 5 },
    { name: 'German', level: 2 },
    { name: 'Malayalam', level: 6 },
  ];

  interpersonalSkills: string[] = [
    'Teamwork',
    'Responsibility',
    'Adaptability',
    'Problem Solving',
    'Empathy',
    'Communicational skills',
    'Trustworthiness',
  ];
  circumference = 2 * Math.PI * 60;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.applyAnimations();
  }

  getStrokeDashoffset(percentage: number): number {
    return this.circumference - (percentage / 100) * this.circumference;
  }

  private applyAnimations(): void {
    const radialBars = this.el.nativeElement.querySelectorAll('.radial-bar');
    radialBars.forEach((bar: HTMLElement) => {
      const path = bar.querySelector('.path-1') as HTMLElement;
      const percentageText =
        bar.querySelector('.percentage')?.textContent || '0';
      const percentage = parseFloat(percentageText);

      if (path) {
        const offset = this.getStrokeDashoffset(percentage);
        this.renderer.setStyle(path, 'stroke-dashoffset', offset);
      }
    });
  }
}
