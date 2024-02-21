import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktHeaderComponent } from './akt-header.component';

describe('AktHeaderComponent', () => {
  let component: AktHeaderComponent;
  let fixture: ComponentFixture<AktHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AktHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AktHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
