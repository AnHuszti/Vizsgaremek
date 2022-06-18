import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  fileName: string = 'no file'

  // @Output uploaded: EventEmitter<{path}>

  constructor(
    private http: HttpClient
  ) { }

  /* onFileSelected(event: Event): void {
    const file: File | undefined = (event.target as HTMLInputElement)?.files?.[0]

    if (file) {
      this.fileName = file.name
      const formData = new FormData()
      formData.append('uploadFile', file)

      this.http.post<IFileUploadResponse>(
        `${environment.apiUrl}upload`, formData
        ).subscribe({
        next: response => {
          this
          console.log(response)},
        error: err => console.error(err),
      })
    }
  } */

  ngOnInit(): void {
  }

}
