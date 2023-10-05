import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecipeEditComponent } from './myrecipe-edit.component';

describe('MyrecipeEditComponent', () => {
  let component: MyrecipeEditComponent;
  let fixture: ComponentFixture<MyrecipeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyrecipeEditComponent]
    });
    fixture = TestBed.createComponent(MyrecipeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
