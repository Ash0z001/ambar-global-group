import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTextImageComponent } from './two-column-text-image.component';

describe('TwoColumnTextImageComponent', () => {
  let component: TwoColumnTextImageComponent;
  let fixture: ComponentFixture<TwoColumnTextImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnTextImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
