import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly',
    standalone: true,
})

export class canFlyPipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'Puede volar' : 'No puede volar';
    }
}