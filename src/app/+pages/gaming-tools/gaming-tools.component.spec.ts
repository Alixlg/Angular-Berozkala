import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingToolsComponent } from './gaming-tools.component';

describe('GamingToolsComponent', () => {
  let component: GamingToolsComponent;
  let fixture: ComponentFixture<GamingToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamingToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
