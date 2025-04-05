import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private lastScrollTop = 0;
  public isNavbarHidden = false;
  public isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed

    if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      this.isNavbarHidden = true;
    } else {
      // Scrolling up
      this.isNavbarHidden = false;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For mobile or negative scrolling
  }
}
