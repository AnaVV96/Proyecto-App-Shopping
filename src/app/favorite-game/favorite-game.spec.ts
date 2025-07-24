import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteGame } from './favorite-game';

describe('FavoriteGame', () => {
  let component: FavoriteGame;
  let fixture: ComponentFixture<FavoriteGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
