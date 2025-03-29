import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public emailApi(e: Event) {
    e.preventDefault();

    emailjs.sendForm(environment.YOUR_SERVICE_ID, environment.YOUR_TEMPLATE_ID, e.target as HTMLFormElement, environment.YOUR_PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        setTimeout(() => {
          window.location.pathname = '/';
        }, 700);
      }, (error: any) => {
        console.log(error.text);
      });
  }
}
