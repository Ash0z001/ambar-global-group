import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-column-text',
  templateUrl: './two-column-text.component.html',
  styleUrls: ['./two-column-text.component.scss']
})
export class TwoColumnTextComponent {
  @Input() leftColumnTitle: string = '';
  @Input() rightColumnTitle: string = '';
  @Input() leftColumn: string = '';
  @Input() rightColumn: string = '';
}
