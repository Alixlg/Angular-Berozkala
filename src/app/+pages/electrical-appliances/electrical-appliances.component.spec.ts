import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalAppliancesComponent } from './electrical-appliances.component';

describe('ElectricalAppliancesComponent', () => {
  let component: ElectricalAppliancesComponent;
  let fixture: ComponentFixture<ElectricalAppliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricalAppliancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricalAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
