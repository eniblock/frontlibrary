import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[eniDragDrop]'
})
export class DragDropDirective {

    @Output() fileDropped = new EventEmitter<FileList>();

    constructor() {
    }

    @HostListener('dragover', ['$event']) onDragOver(evt): void {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(evt): void {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('drop', ['$event'])
    public ondrop(evt): void {
        evt.preventDefault();
        evt.stopPropagation();
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }

}
