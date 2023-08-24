import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasdosgamesComponent } from './noticiasdosgames.component';

describe('NoticiasdosgamesComponent', () => {
  let component: NoticiasdosgamesComponent;
  let fixture: ComponentFixture<NoticiasdosgamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasdosgamesComponent]
    });
    fixture = TestBed.createComponent(NoticiasdosgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
