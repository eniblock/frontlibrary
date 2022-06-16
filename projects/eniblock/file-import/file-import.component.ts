import {Component, EventEmitter, HostBinding, Output} from '@angular/core';

@Component({
    selector: 'eni-file-import',
    templateUrl: './file-import.component.html',
    styleUrls: ['./file-import.component.scss']
})
export class FileImportComponent {

    @Output() fileChange = new EventEmitter<File>();
    preview: string | ArrayBuffer;
    @HostBinding('class') classes = 'eniblock-file-import';

    constructor() {
    }

    onFileChanged(event: Event): void {
        const files: FileList = (event.target as HTMLInputElement).files;
        this.setFile(files[0]);
    }

    onFileDropped(files: FileList): void {
        this.setFile(files[0]);
    }

    setFile(file: File): void {
        if (file) {
            this.fileChange.emit(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.preview = reader.result;
            };
        }
    }

    deleteFile(): void {
        this.fileChange.emit(null);
        this.preview = null;
    }

}
