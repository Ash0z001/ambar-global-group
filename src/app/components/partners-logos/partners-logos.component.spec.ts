import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersLogosComponent } from './partners-logos.component';

describe('PartnersLogosComponent', () => {
  let component: PartnersLogosComponent;
  let fixture: ComponentFixture<PartnersLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersLogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
