import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRowComponent } from './dropdown-row.component';

describe('DropdownRowComponent', () => {
  let component: DropdownRowComponent;
  let fixture: ComponentFixture<DropdownRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
