import { Component } from '@angular/core';
import { academicData, careerData, certificationData, languageData, resumeData,skillData, workshopData } from './dataSet';
import {Resume,Skill,Language,Career, Academic, Workshop, Certification} from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularApp';
  skills: Skill[]=skillData;    
  contact: Resume[] = resumeData; 
  languages: Language[]=languageData; 
  career: Career[]=careerData;
  academic: Academic[]=academicData;
  workshop: Workshop[]=workshopData;
  certification: Certification[]=certificationData;

}
