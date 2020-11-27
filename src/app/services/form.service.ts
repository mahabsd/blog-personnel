import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  //profile = [];
  constructor() { 
  }

  addProfile(user) {
    const profile = JSON.parse(localStorage.getItem("profile")) || [];
    // profile.push(user)
    localStorage.setItem('profile',JSON.stringify(user));
   // this.profile = profile

  }
  getProfile() {

    return JSON.parse(localStorage.getItem("profile")) || [];
  }
  getProfileIntro() {

    return JSON.parse(localStorage.getItem("profileIntro")) || [];
  }
  // deleteUser(i){
  //   console.log(i);
  //   const profile = JSON.parse(localStorage.getItem("profile")) || [];
  //   profile.splice(i, 1);
  // //  this.profile = profile
  //   localStorage.setItem('profile',JSON.stringify(profile));
  // // console.log(this.profile);
  // window.location.reload();

  // };
  updateProfile( user) {
    const profile = JSON.parse(localStorage.getItem("profile")) || [];
    localStorage.setItem('profile',JSON.stringify(user));
  //  this.profile = profile
  const profileIntro = JSON.parse(localStorage.getItem("profileIntro")) || [];
    localStorage.setItem('profileIntro', JSON.stringify(user));
  
  }


}
