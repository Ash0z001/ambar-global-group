import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-column-icons',
  templateUrl: './two-column-icons.component.html',
  styleUrls: ['./two-column-icons.component.scss']
})
export class TwoColumnIconsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() iconCards: { icon: string; title: string; description: string }[] = [];
}
