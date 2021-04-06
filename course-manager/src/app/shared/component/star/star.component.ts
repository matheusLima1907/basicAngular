import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

//assim que recebermos a req irá alterar e chamará a classe
export class StarComponent implements OnChanges{
    
    //torna variavel elegivel para alteração de componente externo
    @Input()
    rating: number = 0;
    starWidth: number;

    ngOnChanges(): void {

        this.starWidth = this.rating * 74 / 5;

    }

}