import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isScrolled: boolean = false;
  isHidden: boolean = false;
  private lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;
    this.isScrolled = currentScroll > 50;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      // Scrolling down
      this.isHidden = true;
    } else if (currentScroll < this.lastScrollTop) {
      // Scrolling up
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
  }
}
