import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconClass: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {

skills: Skill[] = [
  { name: 'ASP.NET Core',   iconClass: 'fa-solid fa-server',        level: 'Intermediate' },
  { name: 'C#',             iconClass: 'fa-solid fa-code',          level: 'Intermediate' },
  { name: 'Web API',        iconClass: 'fa-solid fa-cloud',         level: 'Intermediate' },

  { name: 'Angular',        iconClass: 'fa-brands fa-angular',      level: 'Intermediate' },
  { name: 'TypeScript',     iconClass: 'fa-brands fa-js',           level: 'Intermediate' },
  { name: 'HTML & CSS',     iconClass: 'fa-solid fa-laptop-code',   level: 'Advanced' },

  { name: 'SQL Server',     iconClass: 'fa-solid fa-database',      level: 'Intermediate' },
  { name: 'MySQL',          iconClass: 'fa-solid fa-database',      level: 'Intermediate' },
{ name: 'MongoDB',          iconClass: 'fa-solid fa-database',      level: 'Beginner' },
  { name: 'Git & GitHub',   iconClass: 'fa-brands fa-git-alt',      level: 'Intermediate' },
  { name: 'AWS S3',         iconClass: 'fa-solid fa-cloud-arrow-up',level: 'Beginner' }
];

}
