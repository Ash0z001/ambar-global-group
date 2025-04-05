import { Component, Input } from '@angular/core';
import * as AOS from "aos"; //AOS - 1

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

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
}
