import { Component } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';
import * as _ from 'lodash'; // to help loop over files more succinctly

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) { }

  handleFiles(event) {
    this.files =  event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, (idx) => {
      // console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      this.uploadService.uploadFile(this.upload);
    })
  }
}
