import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';

describe('ProductAlertsComponent', () => {
  let component: ProductAlertsComponent;
  let fixture: ComponentFixture<ProductAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
