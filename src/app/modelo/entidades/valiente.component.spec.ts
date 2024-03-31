import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValienteComponent } from './valiente.component';

describe('ValienteComponent', () => {
  let component: ValienteComponent;
  let fixture: ComponentFixture<ValienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
