import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../app.config.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  file: any;
  configText: any;

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  submitForm(form: NgForm){
    var formData = new FormData();
    formData.append("email", form.value.email);
    formData.append("file", this.file);
    var response = this.httpClient.post(this.configService.apiBaseUrl, formData).subscribe();
    alert("Docx file has been saved");
    form.reset();
  }
}
