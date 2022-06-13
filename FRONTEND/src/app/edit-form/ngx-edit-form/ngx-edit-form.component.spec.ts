import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditFormComponent } from './ngx-edit-form.component';

describe('NgxEditFormComponent', () => {
  let component: NgxEditFormComponent;
  let fixture: ComponentFixture<NgxEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
