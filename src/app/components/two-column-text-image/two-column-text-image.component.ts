import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-column-text-image',
  templateUrl: './two-column-text-image.component.html',
  styleUrls: ['./two-column-text-image.component.scss']
})
export class TwoColumnTextImageComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
