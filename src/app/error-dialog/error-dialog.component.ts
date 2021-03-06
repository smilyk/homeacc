import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Redirect} from '../model/Redirect';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  title = 'Angular-Interceptor';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToLogin() {
    console.log(this.data);
    if (this.data.message === 'Authorization is failed. Please confirm your email or check your email and password'
      || this.data.message === 'User with this email exists in DB. Email should be unique' || this.data.status === 303){
      this.router.navigate([Redirect.LOGIN]);
    } else {
      this.router.navigate([Redirect.HOME]);
    }
  }
}
