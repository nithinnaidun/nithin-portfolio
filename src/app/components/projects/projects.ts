import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  // image: string;
  codeUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Student Management System',
      description: 'Full-stack web app with ASP.NET Core, Angular, and SQL Server for managing student records and documents.',
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'AWS S3'],
      // image: 'assets/student-app.png',
      codeUrl: 'https://github.com/nithinnaidun/StudentApp1',
      liveUrl: '' // optional (can leave empty or remove)
    },
    {
      title: 'Movie Analytics Dashboard',
      description: 'Data analytics dashboard using Python and Flask with interactive charts for movie insights.',
      technologies: ['Python', 'Flask', 'Matplotlib'],
      // image: 'assets/movie-dashboard.png',
      // codeUrl: '#'
      // no liveUrl → OK
    },
    {
      title: 'YOLOv3 Object Detection',
      description: 'Real-time object detection system using deep learning and YOLOv3 model.',
      technologies: ['Python', 'YOLOv3', 'OpenCV'],
      // image: 'assets/yolo.png'
      // no codeUrl, no liveUrl → OK
    },

    {
  title: 'Personal Portfolio Website',
  description: 'Responsive personal portfolio built with Angular featuring projects, skills, contact form, and smooth animations.',
  technologies: ['Angular', 'TypeScript', 'SCSS', 'AOS'],
  codeUrl: 'https://github.com/nithinnaidun/nithin-portfolio',
  liveUrl: 'https://nithin-naidu-portfolio.netlify.app/'
}
  ];

}