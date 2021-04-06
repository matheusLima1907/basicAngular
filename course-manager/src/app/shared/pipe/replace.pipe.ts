import { Pipe, PipeTransform } from "@angular/core";

//decorator para indicar o nome que será usado no template
@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace);
    }

}