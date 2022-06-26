import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialClassComponent } from './special-class.component';

describe('SpecialClassComponent', () => {
  let component: SpecialClassComponent;
  let fixture: ComponentFixture<SpecialClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
