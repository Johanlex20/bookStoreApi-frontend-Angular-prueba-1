import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apiImg'
})
export class ApiImgPipe implements PipeTransform {

  transform(value: string): string {
    return `http://localhost:8080/api/media/${value}`;
  }

}
