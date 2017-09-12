import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Output() onSelectedFile: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


selectEvent(file: FileList | File): void {
  this.onSelectedFile.emit(file);
}

}
