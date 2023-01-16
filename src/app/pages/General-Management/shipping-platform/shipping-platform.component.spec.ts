import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPlatformComponent } from './shipping-platform.component';

describe('ShippingPlatformComponent', () => {
  let component: ShippingPlatformComponent;
  let fixture: ComponentFixture<ShippingPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
