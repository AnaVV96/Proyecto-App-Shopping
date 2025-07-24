import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ckecout } from './ckecout';

describe('Ckecout', () => {
  let component: Ckecout;
  let fixture: ComponentFixture<Ckecout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ckecout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ckecout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
