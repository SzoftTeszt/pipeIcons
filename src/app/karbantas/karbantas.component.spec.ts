import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarbantasComponent } from './karbantas.component';

describe('KarbantasComponent', () => {
  let component: KarbantasComponent;
  let fixture: ComponentFixture<KarbantasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarbantasComponent]
    });
    fixture = TestBed.createComponent(KarbantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
