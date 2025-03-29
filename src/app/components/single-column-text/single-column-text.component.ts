import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-column-text',
  templateUrl: './single-column-text.component.html',
  styleUrls: ['./single-column-text.component.scss']
})
export class SingleColumnTextComponent {
  @Input() heading: string = '';
  @Input() descriptions: string[] = [];
}
