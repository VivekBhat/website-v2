import {NgModule} from '@angular/core';
import {CommonModule, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {IntroComponent} from './intro/intro.component';
import {SkillsComponent} from './skills/skills.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {ContactComponent} from './contact/contact.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ProjectsModule} from './projects/projects.module';
import {AboutModule} from './about/about.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsModule,
    FormsModule,
    AboutModule,
    NgxSpinnerModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  providers: [
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class ProfileModule {
}
