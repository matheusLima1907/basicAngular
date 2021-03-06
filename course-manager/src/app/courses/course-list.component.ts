import { stringify } from '@angular/compiler/src/util';
import {Component, OnInit} from '@angular/core';
import { Subscriber } from 'rxjs';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    //atribuição de uma classe de obj à uma variável
    filteredCourses: Course [] = [];

    _courses: Course [] =  [];
    _filterBy: string;
 
    //referenciando um objeto através de construtor
    constructor(private courseService: CourseService){
    }

    //ngOnInit é um dos comandos que apontam o momento a ser executado
    //o bloco de comandos, neste caso ele executa na iniciação
    ngOnInit(): void{
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses =this._courses
            },
            error: err => console.log('Error',err)
        })
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with succes!');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
    
    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
   }
    get filter(){
        return this._filterBy;
    }    
}