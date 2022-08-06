import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiItemComponent } from './recepi-item.component';

describe('RecepiItemComponent', () => {
  let component: RecepiItemComponent;
  let fixture: ComponentFixture<RecepiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepiItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
