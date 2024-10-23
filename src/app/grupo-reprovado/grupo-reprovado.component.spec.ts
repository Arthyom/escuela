import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoReprovadoComponent } from './grupo-reprovado.component';

describe('GrupoReprovadoComponent', () => {
  let component: GrupoReprovadoComponent;
  let fixture: ComponentFixture<GrupoReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoReprovadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
