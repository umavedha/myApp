import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainareacomponentComponent } from './mainareacomponent.component';

describe('MainareacomponentComponent', () => {
  let component: MainareacomponentComponent;
  let fixture: ComponentFixture<MainareacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainareacomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainareacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
