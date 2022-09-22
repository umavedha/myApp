import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurgoalComponent } from './ourgoal.component';

describe('OurgoalComponent', () => {
  let component: OurgoalComponent;
  let fixture: ComponentFixture<OurgoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurgoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
