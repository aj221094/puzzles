import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegerSpiralViaMatrixComponent } from './integer-spiral-via-matrix.component';
import { FormsModule } from '@angular/forms';

describe('IntegerSpiralViaMatrixComponent', () => {
  let component: IntegerSpiralViaMatrixComponent;
  let fixture: ComponentFixture<IntegerSpiralViaMatrixComponent>;
  var arr_odd_left, arr_even_left, arr_even_right, arr_odd_right;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegerSpiralViaMatrixComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegerSpiralViaMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('odd matrix size and left spin 1',()=>{
    component.spiralLimit=8;
    component.spin='left';
    component.handleClick();
    expect(component.result).toEqual([[8, 7, 6],[1, 0, 5],[2, 3, 4]]);
  });


  it('odd matrix size and left spin 2',()=>{
    component.spiralLimit=44;
    component.spin='left';
    component.handleClick();
    expect(component.result).toEqual([[undefined,undefined,undefined,undefined, 44, 43, 42],
      [25, 24, 23, 22, 21, 20, 41],
      [26, 9, 8, 7, 6, 19, 40],
      [27, 10, 1, 0, 5, 18, 39],
      [28, 11, 2, 3, 4, 17, 38],
      [29, 12, 13, 14, 15, 16, 37],
      [30, 31, 32, 33, 34, 35, 36]]);
  });

  it('even matrix size and left spin 1',()=>{
    component.spiralLimit=15;
    component.spin='left';
    component.handleClick();
    expect(component.result).toEqual([[9, 8, 7, 6],[10, 1, 0, 5],[11, 2, 3, 4],[12, 13, 14, 15]]);
  });

  it('even matrix size and left spin 2',()=>{
    component.spiralLimit=30;
    component.spin='left';
    component.handleClick();
    expect(component.result).toEqual([[25, 24, 23, 22, 21, 20],
      [26, 9, 8, 7, 6, 19],
      [27, 10, 1, 0, 5, 18],
      [28, 11, 2, 3, 4, 17],
      [29, 12, 13, 14, 15, 16],
      [30, undefined, undefined, undefined, undefined, undefined]]);
  });

  it('even matrix size and left spin 3',()=>{
    component.spiralLimit=5;
    component.spin='left';
    component.handleClick();
    expect(component.result).toEqual([[undefined, undefined, undefined], [1, 0, 5], [2, 3, 4]]);
  });

  it('odd matrix size and right spin 1',()=>{
    component.spiralLimit=8;
    component.spin='right';
    component.handleClick();
    expect(component.result).toEqual([[6, 7, 8],[5, 0, 1],[4, 3, 2]]);
  });

  it('odd matrix size and right spin 2',()=>{
    component.spiralLimit=44;
    component.spin='right';
    component.handleClick();
    expect(component.result).toEqual([[42, 43, 44, undefined, undefined, undefined, undefined],
      [41, 20, 21, 22, 23, 24, 25],
      [40, 19, 6, 7, 8, 9, 26],
      [39, 18, 5, 0, 1, 10, 27],
      [38, 17, 4, 3, 2, 11, 28],
      [37, 16, 15, 14, 13, 12, 29],
      [36, 35, 34, 33, 32, 31, 30]]);
  });

  it('even matrix size and right spin 1',()=>{
    component.spiralLimit=15;
    component.spin='right';
    component.handleClick();
    expect(component.result).toEqual([[6, 7, 8, 9],[5, 0, 1, 10],[4, 3, 2, 11],[15, 14, 13, 12]]);
  });

  it('even matrix size and right spin 2',()=>{
    component.spiralLimit=30;
    component.spin='right';
    component.handleClick();
    expect(component.result).toEqual([[20, 21, 22, 23, 24, 25],
      [19, 6, 7, 8, 9, 26],
      [18, 5, 0, 1, 10, 27],
      [17, 4, 3, 2, 11, 28],
      [16, 15, 14, 13, 12, 29],
      [ undefined, undefined, undefined, undefined, undefined, 30]]);
  });

  it('even matrix size and right spin 3',()=>{
    component.spiralLimit=5;
    component.spin='right';
    component.handleClick();
    expect(component.result).toEqual([[undefined, undefined, undefined], [5, 0, 1], [4, 3, 2]]);
  });

});
