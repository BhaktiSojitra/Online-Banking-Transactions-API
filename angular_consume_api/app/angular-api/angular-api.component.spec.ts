import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAPIComponent } from './angular-api.component';

describe('AngularAPIComponent', () => {
  let component: AngularAPIComponent;
  let fixture: ComponentFixture<AngularAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
