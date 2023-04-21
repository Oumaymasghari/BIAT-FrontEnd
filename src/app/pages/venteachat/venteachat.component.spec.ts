import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteachatComponent } from './venteachat.component';

describe('VenteachatComponent', () => {
  let component: VenteachatComponent;
  let fixture: ComponentFixture<VenteachatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteachatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenteachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
