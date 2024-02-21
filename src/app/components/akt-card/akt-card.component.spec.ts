import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktCardsComponent } from './akt-card.component';

describe('AktCardsComponent', () => {
  let component: AktCardsComponent;
  let fixture: ComponentFixture<AktCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AktCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AktCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
