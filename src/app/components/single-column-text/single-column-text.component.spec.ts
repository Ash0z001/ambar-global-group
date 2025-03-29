import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnTextComponent } from './single-column-text.component';

describe('SingleColumnTextComponent', () => {
  let component: SingleColumnTextComponent;
  let fixture: ComponentFixture<SingleColumnTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleColumnTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleColumnTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
