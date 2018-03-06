import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from './pet';

@Pipe({
  name: 'petFilter'
})
export class PetFilterPipe implements PipeTransform {

  transform(value: Array<Pet>, filterBy: string): Array<Pet> {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((pet:Pet) => 
                                      pet.name.toLocaleLowerCase().indexOf(filterBy) != -1) : value;
  }

}
