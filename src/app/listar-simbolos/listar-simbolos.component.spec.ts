import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSimbolosComponent } from './listar-simbolos.component';

describe('ListarSimbolosComponent', () => {
  let component: ListarSimbolosComponent;
  let fixture: ComponentFixture<ListarSimbolosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSimbolosComponent]
    });
    fixture = TestBed.createComponent(ListarSimbolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
