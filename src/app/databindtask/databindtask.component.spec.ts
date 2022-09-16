import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindtaskComponent } from './databindtask.component';

describe('DatabindtaskComponent', () => {
  let component: DatabindtaskComponent;
  let fixture: ComponentFixture<DatabindtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
