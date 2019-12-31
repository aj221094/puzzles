import { Component } from '@angular/core';

@Component({
  selector: 'app-integer-spiral-via-matrix',
  templateUrl: './integer-spiral-via-matrix.component.html',
  styleUrls: ['./integer-spiral-via-matrix.component.css']
})
export class IntegerSpiralViaMatrixComponent  {

  constructor() { }
  spiralLimit : any;               
  spin : string;
  result : any;
  
  handleClick(){
    //matrixSize here denotes the dimension of square matrix we will need
    var matrixSize=Math.sqrt(this.spiralLimit);
    matrixSize=Math.floor(matrixSize)+1;
    //startPoint denotes the point where 0 will be placed
    var startPoint=Math.ceil(matrixSize/2);     
  
    this.result=this.spin==='right' ? 
    this.fillMatrixRight(matrixSize,startPoint) :
    this.fillMatrixLeft(matrixSize,startPoint);  
    
  }

  fillMatrixRight(matrixSize,startPoint){
    var arr;
    arr=new Array(matrixSize);
    for(let i=0;i<matrixSize;i++){
      arr[i]=new Array(matrixSize)
    }
    //vector length manages the number of moves in a single direction in the spiral
    var vectorLength=1;
    arr[startPoint-1][startPoint-1]=0; 
    var x,y;
    //startPoint, x, y follow indexing system starting from 1 and not from 0
    x=y=startPoint;

    for(let i=1;i<=this.spiralLimit;){
      //move right
      for(let j=1;j<=vectorLength;j++){
        arr[x-1][y+1-1]=i;
        y=y+1;
        i++;
      
        if(i>this.spiralLimit)
          return arr;
      }

      //move down
      for(let j=1;j<=vectorLength;j++){
        arr[x+1-1][y-1]=i;
        x=x+1
        i++;
        if(i>this.spiralLimit)
          return arr;
      }
      vectorLength++;
     
      //move left
      for(let j=1;j<=vectorLength;j++){
        arr[x-1][y-1-1]=i;
        y=y-1;
        i++;

        if(i>this.spiralLimit)
          return arr;
      }
    
      //move up
      for(let j=1;j<=vectorLength;j++){
        arr[x-1-1][y-1]=i;
        x=x-1
        i++;
        
      if(i>this.spiralLimit)
        return arr;
      }
      vectorLength++
    }
  }

  fillMatrixLeft(matrixSize,startPoint){
    var arr;
    arr=new Array(matrixSize);
    for(let i=0;i<matrixSize;i++){
      arr[i]=new Array(matrixSize)
    }

    var x,y;
    //startPoint, x, y follow indexing system starting from 1 and not from 0
    if(matrixSize%2==0){
      x=startPoint
      y=startPoint+1
    }else
     x=y=startPoint;

    //vector length manages the number of moves in a single direction in the spiral
    var vectorLength=1;
    arr[x-1][y-1]=0; 
    
   

    for(let i=1;i<=this.spiralLimit;){
      //move left
      for(let j=1;j<=vectorLength;j++){
        arr[x-1][y-1-1]=i;
        y=y-1;
        i++;

        if(i>this.spiralLimit)
          return arr;
      }

      //move down
      for(let j=1;j<=vectorLength;j++){
        arr[x+1-1][y-1]=i;
        x=x+1
        i++;
        if(i>this.spiralLimit)
          return arr;
      }

      vectorLength++;
      
      //move right
      for(let j=1;j<=vectorLength;j++){
        arr[x-1][y+1-1]=i;
        y=y+1;
        i++;
      
        if(i>this.spiralLimit)
          return arr;
      }

      //move up
      for(let j=1;j<=vectorLength;j++){
        arr[x-1-1][y-1]=i;
        x=x-1
        i++;
        
      if(i>this.spiralLimit)
        return arr;
      }
      vectorLength++;
    }
  }

}

