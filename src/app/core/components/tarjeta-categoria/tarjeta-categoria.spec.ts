import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCategoria } from './tarjeta-categoria';

describe('TarjetaCategoria', () => {
  let component: TarjetaCategoria;
  let fixture: ComponentFixture<TarjetaCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
