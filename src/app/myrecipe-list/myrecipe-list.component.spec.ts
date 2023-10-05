import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecipeListComponent } from './myrecipe-list.component';

describe('MyrecipeListComponent', () => {
  let component: MyrecipeListComponent;
  let fixture: ComponentFixture<MyrecipeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyrecipeListComponent]
    });
    fixture = TestBed.createComponent(MyrecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
