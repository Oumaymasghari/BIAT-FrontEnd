import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleventeComponent } from './nouvellevente.component';

describe('NouvelleventeComponent', () => {
  let component: NouvelleventeComponent;
  let fixture: ComponentFixture<NouvelleventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleventeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
