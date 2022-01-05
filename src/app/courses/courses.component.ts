import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  selectedCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

// hieronder een leeg object om de situatie op te vangen dat er nog geen courses geselecteerd zijn. Hierboven roepen we dan deze functie bij het Initializen van dit component.
  resetSelectedCourse() {

      const emptyCourse = {
        id: null,
        title: '',
        description: '',
        percentComplete: 0,
        favorite: false
      }

      this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    console.log('COURSE DELETED!', courseId);
  }

  saveCourse() {
      console.log("Course is saved");
  }

  cancel() {
      this.resetSelectedCourse();
  }
}
