import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePersonalInfoComponent } from './more-personal-info.component';

describe('MorePersonalInfoComponent', () => {
  let component: MorePersonalInfoComponent;
  let fixture: ComponentFixture<MorePersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
