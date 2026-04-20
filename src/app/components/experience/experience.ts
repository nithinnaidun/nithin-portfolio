import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface ExperienceItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experience: ExperienceItem[] = [
  {
    title: 'Software Developer Intern',
    subtitle: 'TechnoNova Private Ltd, Tumkur',
    period: 'Oct 2025 – Jan 2026',
    description: 'Worked on ASP.NET Core Web API and Angular applications, building responsive UI, optimizing SQL queries, and developing scalable backend services.'
  },
  {
    title: 'Master of Computer Applications (MCA)',
    subtitle: 'Atria Institute of Technology, Bengaluru',
    period: '2024 – 2025',
    description: 'Focused on full-stack development, database management, and software engineering concepts with hands-on project experience.'
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'Vivekananda Institute of Management, Bengaluru',
    period: '2021 – 2023',
    description: 'Built strong foundation in programming, web technologies, and problem solving.'
  }
];
}
