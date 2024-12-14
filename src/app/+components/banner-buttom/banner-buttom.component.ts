import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SingUpComponent } from "../sing-up/sing-up.component";
import { SearchBoxComponent } from "../search-box/search-box.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-banner-buttom',
  imports: [LoginComponent, SingUpComponent, SearchBoxComponent, LogoComponent],
  templateUrl: './banner-buttom.component.html',
  styleUrl: './banner-buttom.component.css'
})
export class BannerButtomComponent {

}
