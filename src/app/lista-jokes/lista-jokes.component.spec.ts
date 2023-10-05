import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJokesComponent } from './lista-jokes.component';

describe('ListaJokesComponent', () => {
  let component: ListaJokesComponent;
  let fixture: ComponentFixture<ListaJokesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaJokesComponent]
    });
    fixture = TestBed.createComponent(ListaJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
