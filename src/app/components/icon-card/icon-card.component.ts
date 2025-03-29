import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent {
  @Input() icon: string = 'https://dummyimage.com/100x100/000/fff';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';
}
