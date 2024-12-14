import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeMachinesComponent } from './office-machines.component';

describe('OfficeMachinesComponent', () => {
  let component: OfficeMachinesComponent;
  let fixture: ComponentFixture<OfficeMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeMachinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
