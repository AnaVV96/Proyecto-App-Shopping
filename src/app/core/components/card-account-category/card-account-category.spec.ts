import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountCategory } from './card-account-category';

describe('CardAccountCategory', () => {
  let component: CardAccountCategory;
  let fixture: ComponentFixture<CardAccountCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAccountCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAccountCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
