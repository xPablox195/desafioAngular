import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcommentsComponent } from './modalcomments.component';

describe('ModalcommentsComponent', () => {
  let component: ModalcommentsComponent;
  let fixture: ComponentFixture<ModalcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
