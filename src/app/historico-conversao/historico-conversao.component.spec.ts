import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoConversaoComponent } from './historico-conversao.component';

describe('HistoricoConversaoComponent', () => {
  let component: HistoricoConversaoComponent;
  let fixture: ComponentFixture<HistoricoConversaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoConversaoComponent]
    });
    fixture = TestBed.createComponent(HistoricoConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
