import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
}
