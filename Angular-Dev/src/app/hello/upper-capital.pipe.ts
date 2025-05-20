import { Pipe,  PipeTransform} from "@angular/core";

@Pipe({
    name: 'upperCapital'
})

export class UpperCapitalPipe implements PipeTransform {

    // ! Transform Es el metedo que se llama cuando usas el Pipe en un template
    // ! Es de
    transform(value: string) {
        return value[0].toUpperCase() + value.substring(1).toLowerCase();
    }
}