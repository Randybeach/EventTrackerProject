import { Pipe, PipeTransform } from '@angular/core';
import { Jump } from '../models/jump';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

transform(jumps: Array<Jump>, args?: any[]): any {
  let count = jumps.length;
  while (count > 0){
    for(let i = 1; i < jumps.length; i++){
        if(jumps[i -1].location > jumps[i].location){
            let jump1 = jumps[i-1];
            let jump2 = jumps[i];
            jumps[i-1] = jump2;
            jumps[i] = jump1;

        }
    }
    count --;
  }
  console.log('in pipe : ' + jumps);

  return jumps;
  }

}
