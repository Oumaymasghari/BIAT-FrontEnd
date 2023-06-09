import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmicaleComponent } from './amicale.component';

describe('AmicaleComponent', () => {
  let component: AmicaleComponent;
  let fixture: ComponentFixture<AmicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmicaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
