import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootombarRejectComponent } from './bootombar-reject.component';

describe('BootombarRejectComponent', () => {
  let component: BootombarRejectComponent;
  let fixture: ComponentFixture<BootombarRejectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootombarRejectComponent]
    });
    fixture = TestBed.createComponent(BootombarRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
