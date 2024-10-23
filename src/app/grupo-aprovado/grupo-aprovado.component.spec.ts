import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAprovadoComponent } from './grupo-aprovado.component';

describe('GrupoAprovadoComponent', () => {
  let component: GrupoAprovadoComponent;
  let fixture: ComponentFixture<GrupoAprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoAprovadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoAprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
