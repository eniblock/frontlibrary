import {
    Component,
    ComponentFactoryResolver,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {DataTableColumn} from '../../containers/data-table/data-table.model';

@Component({
    template: '',
})
export class CellDefault {
    @Input() column: DataTableColumn;
    @Input() element: any;
}

@Component({
    selector: 'app-custom-cell',
    templateUrl: './custom-cell.component.html',
    styleUrls: ['./custom-cell.component.css']
})
export class CustomCellComponent extends CellDefault implements OnChanges, OnDestroy {

    customComponent: any;
    @ViewChild('dynamicTarget', {read: ViewContainerRef, static: true}) dynamicTarget: any;

    constructor(private resolver: ComponentFactoryResolver) {
        super();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.column && this.column.component) {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);

            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.element = this.element;
        }
    }

    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }

}
