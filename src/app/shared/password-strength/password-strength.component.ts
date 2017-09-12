import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector:    'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls:  ['./password-strength.component.css', '../login/login.component.scss'],

})
export class PasswordStrenghComponent implements OnInit {

   @Input()
  password;

  constructor( ) {

  }

  ngOnInit() {

  }

ifValidStrengh() {
  console.log(this.password.value);
 return this.password.value.length > 6 ? false : true;
}


ifValidnumCarecters() {
 return this.password.value.length > 4 ? false : true;
}

ifValidnumNumbers() {
 return this.password.value.length > 2 ? false : true;
}

}
