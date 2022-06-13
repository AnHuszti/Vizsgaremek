import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKindergartenComponent } from './edit-kindergarten.component';

describe('EditKindergartenComponent', () => {
  let component: EditKindergartenComponent;
  let fixture: ComponentFixture<EditKindergartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKindergartenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
