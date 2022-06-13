import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpecialClassComponent } from './edit-special-class.component';

describe('EditSpecialClassComponent', () => {
  let component: EditSpecialClassComponent;
  let fixture: ComponentFixture<EditSpecialClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpecialClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpecialClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
