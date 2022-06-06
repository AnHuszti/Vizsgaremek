import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialClassesComponent } from './special-classes.component';

describe('SpecialClassesComponent', () => {
  let component: SpecialClassesComponent;
  let fixture: ComponentFixture<SpecialClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
