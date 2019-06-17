import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altitude'
})
export class AltitudePipe implements PipeTransform {

  transform(jumps: any, args?: any): any {
    let count = jumps.length;
    while (count > 0){
      for(let i = 1; i < jumps.length; i++){
          if(jumps[i -1].altitude > jumps[i].altitude){
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
