import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnIconsComponent } from './two-column-icons.component';

describe('TwoColumnIconsComponent', () => {
  let component: TwoColumnIconsComponent;
  let fixture: ComponentFixture<TwoColumnIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
