import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from '../Model/product';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], filter: string): IProduct[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((app: IProduct) =>
            app.MaterialCode != null && app.MaterialCode.toLocaleLowerCase().indexOf(filter) != -1
            || app.Description != null && app.Description.toLocaleLowerCase().indexOf(filter) != -1
            //|| app.Price != null //&& app.Price.toLocaleLowerCase().indexOf(filter) != -1
            || app.UOM != null && app.UOM.toLocaleLowerCase().indexOf(filter) != -1
            || app.MaterialType != null && app.MaterialType.toLocaleLowerCase().indexOf(filter) != -1

        ) : value;

    }
}
