import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlocationComponent } from './setlocation.component';

describe('SetlocationComponent', () => {
  let component: SetlocationComponent;
  let fixture: ComponentFixture<SetlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
