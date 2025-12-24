import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthDirective } from '../directives';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordStrengthDirective ,],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log(this.user);
      // alert(JSON.stringify(this.user, null, 2));
      Swal.fire({
        title: "successfully Registered <3",
        text: "welcome "+ this.user.name + "!",
        icon: "success",
      });
    }
  }
}
