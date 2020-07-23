import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@core/service/authentication.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'po-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  validateForm: FormGroup;
  title = 'B5无纸化办公平台';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private message: NzMessageService
  ) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }


  submitForm() {
    if (this.isLoading) {
      return;
    }
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.isLoading = true;
      this.authService.login(this.formVal.username, this.formVal.password)
        .subscribe(
          () => {
            this.message.success('登陆成功');
            this.router.navigate(['/']);
          },
          () => {
            this.message.error('登陆失败');
            this.isLoading = false;
          }
        );
    }

  }

  get formVal() {
    return this.validateForm.value;
  }

}
