import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
    name: 'creator',
        standalone: true,
})

export class creatorPipe implements PipeTransform {
    transform(value: Creator): string {
        return Creator[value];
    }
}