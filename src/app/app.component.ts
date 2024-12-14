import { Component } from '@angular/core';
import { BannerComponent } from "./+components/banner/banner.component";
import { BannerButtomComponent } from './+components/banner-buttom/banner-buttom.component';
import { MenuComponent } from "./+components/menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./+components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, BannerButtomComponent, MenuComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
