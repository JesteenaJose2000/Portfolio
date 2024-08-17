import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationComponent } from './components/certification/certification.component';
import { InternshipComponent } from './components/internship/internship.component';
import { ProjectComponent } from './components/project/project.component';
import { EducationComponent } from './components/education/education.component';
import { AwardsComponent } from './components/awards/awards.component';
import { PortfolioHeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PortfolioHeaderComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    AwardsComponent,
    CertificationComponent,
    InternshipComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
