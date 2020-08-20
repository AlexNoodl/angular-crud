import {Pipe, PipeTransform} from "@angular/core";
import {Mate} from "./interface";

@Pipe({
  name: 'matesFilter'
})
export class MatesFilterPipe implements PipeTransform{
  transform(mates: Mate[], search: string = ''): Mate[] {
    if (!search.trim()) {
      return mates
    }

    return mates.filter(mate =>  {
      return mate.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }
}
