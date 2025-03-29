import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parallax-banner',
  templateUrl: './parallax-banner.component.html',
  styleUrls: ['./parallax-banner.component.scss']
})
export class ParallaxBannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = 'https://dummyimage.com/1200x400/000/fff';
}
