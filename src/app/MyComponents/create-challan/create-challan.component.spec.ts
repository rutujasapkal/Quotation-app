import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChallanComponent } from './create-challan.component';

describe('CreateChallanComponent', () => {
  let component: CreateChallanComponent;
  let fixture: ComponentFixture<CreateChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateChallanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
