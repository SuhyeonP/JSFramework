import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiangComponent } from './hiang.component';

describe('HiangComponent', () => {
  let component: HiangComponent;
  let fixture: ComponentFixture<HiangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
