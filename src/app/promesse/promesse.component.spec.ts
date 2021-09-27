import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromesseComponent } from './promesse.component';

describe('PromesseComponent', () => {
  let component: PromesseComponent;
  let fixture: ComponentFixture<PromesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromesseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
