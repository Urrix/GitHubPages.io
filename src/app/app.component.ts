import { Component } from '@angular/core';
import { PasswordService } from './password.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub.io';
  generatedPassword: string=''; // Variable para almacenar la contraseña generada

  constructor(private passwordService: PasswordService) { }

  generateRandomPassword() {
    const password = this.passwordService.generatePassword(10); // Cambia el valor 10 por la longitud deseada de la contraseña
    console.log(password); // Haz lo que desees con la contraseña generada
    this.generatedPassword = this.passwordService.generatePassword(10); // Cambia el valor 10 por la longitud deseada de la contraseña
  }

}
