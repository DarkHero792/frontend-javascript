/// <reference path="./Teacher.ts" />

import { Teacher } from './Teacher';

export interface Subject {
  teacher?: Teacher;
  setTeacher(teacher: Teacher): void;
}

export class Subject implements Subject {
  teacher?: Teacher;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
