import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(list: T[] | null, phrase: string = '', key: string = ''): T[] | null {
    if ( !Array.isArray(list) || !phrase ){
      return list;
    }

    phrase = phrase.toLocaleLowerCase();

    if ( !key ) {
      return list.filter(
        item => Object.values( item ).join(' ').toLocaleLowerCase().includes( phrase )
      )
    }

    return list.filter( item => {
        const data = String( item[key] ).toLocaleLowerCase()
        return data.includes( phrase)
    })
  }

}
