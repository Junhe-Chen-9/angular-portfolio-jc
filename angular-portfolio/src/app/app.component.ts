import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  hideNav = true;
  title = 'angular-portfolio';
  @HostListener('window:scroll',['$event'])
  public onViewportScroll() {
    const windowheight = window.pageYOffset;
    if(windowheight > 300){
      this.hideNav = false;
    }else{
      this.hideNav = true;
    }
  }
}
