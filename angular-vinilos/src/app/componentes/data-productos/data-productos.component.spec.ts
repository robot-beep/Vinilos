import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProductosComponent } from './data-productos.component';

describe('DataProductosComponent', () => {
  let component: DataProductosComponent;
  let fixture: ComponentFixture<DataProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
