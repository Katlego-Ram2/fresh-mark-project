import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRejectComponent } from './footer-reject.component';

describe('FooterRejectComponent', () => {
  let component: FooterRejectComponent;
  let fixture: ComponentFixture<FooterRejectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterRejectComponent]
    });
    fixture = TestBed.createComponent(FooterRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
