import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPlatformComponent } from './sales-platform.component';

describe('SalesPlatformComponent', () => {
  let component: SalesPlatformComponent;
  let fixture: ComponentFixture<SalesPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
