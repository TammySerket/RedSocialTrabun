import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  ngOnInit() {
  }

<<<<<<< HEAD
constructor(public firebaseAuth: AngularFireAuth, public router: Router, public authService: AuthService) { }

 signInWithFacebook() {
=======
  constructor(public firebaseAuth: AngularFireAuth, public router: Router, public authService: AuthService) { }

  signInWithFacebook() {
>>>>>>> upstream/master
    this.authService.signInWithFacebook()
    .then((res) => {
        this.router.navigate(['wall']);
      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['wall']);
      })
    .catch((err) => console.log(err));
  }

}
