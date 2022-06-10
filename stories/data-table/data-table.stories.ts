import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {DataTableComponent, DataTableModule} from '@eniblock/ui/data-table';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
    title: 'Eniblock/DataTable',
    component: DataTableComponent,
    decorators: [
        moduleMetadata({
            imports: [DataTableModule, MatTableModule, MatSortModule, BrowserAnimationsModule],
        }),
    ]
} as Meta;

const Template: Story<DataTableComponent> = (args: DataTableComponent) => ({
    props: args,
    template: `
    <eni-data-table matSort>
        <ng-container matColumnDef="id">
        <th *matHeaderCellDef mat-header-cell>ID</th>
        <td *matCellDef="let element" mat-cell>{{element.id}}</td>
      </ng-container>

      <ng-container matColumnDef="name">
        <th *matHeaderCellDef mat-header-cell>NAME</th>
        <td *matCellDef="let element" mat-cell> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="price">
        <th *matHeaderCellDef mat-header-cell>PRICE</th>
        <td *matCellDef="let element" mat-cell> {{element.price}} </td>
      </ng-container>
    </eni-data-table>`
});

export const Default = Template.bind({});
Default.args = {
    _data: [{
        id: 1,
        name: 'test 1',
        price: 30
    },
        {
            id: 2,
            name: 'test 2',
            price: 20
        },
        {
            id: 3,
            name: 'test 3',
            price: 10
        }],
    columns: ['id', 'name', 'price'],
    length: 3,
    pageSizeOptions: [10]
} as Partial<DataTableComponent>;
