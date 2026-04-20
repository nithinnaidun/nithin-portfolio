import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      title: 'Healthcare Schedule Management System',
      description: 'Full-stack app for managing appointments.',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      codeUrl: '#'
    }
  ];

  getProjects() {
    return of(this.projects);
  }
}
