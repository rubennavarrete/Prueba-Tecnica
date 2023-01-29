import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesuperiorComponent } from './partesuperior.component';

describe('PartesuperiorComponent', () => {
  let component: PartesuperiorComponent;
  let fixture: ComponentFixture<PartesuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartesuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartesuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
