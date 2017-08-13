export class Upload {
  $key: string;
  file: File;
  url: string;
  progress: number;
  createdOn: Date = new Date();
  name: string;

  constructor(file: File) {
    this.file = file;
  }
}
