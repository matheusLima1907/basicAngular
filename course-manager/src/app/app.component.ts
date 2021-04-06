import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //diretiva que irá se tornar uma tag html no index - pensamento simplesta
  templateUrl: './app.component.html', //aponta para o componente html 
  styleUrls: ['./app.component.css'] //aponta para o componente de estilos
})
export class AppComponent {
  title = 'course-manager';


  name: string ="jhon";
}


