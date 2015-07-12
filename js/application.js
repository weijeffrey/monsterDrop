// set up (frame, pig, monster, branch)
var frame = [[0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0]];

var colNum = 5;

var monster = 9;
var monsterPos = [];
var monsterCol;
var monsterRow = 0;

var pig = 8;
var pigPos=[];
var pigCol;
var pigRow = frame.length-1;

var branch = 1;
var branchPos =[];

var timeLeft = 20;



$(document).ready(function(){

// player put the pig (must be last row)
    setPig = function(col){
    frame[pigRow][col] = pig;
    console.log([pigRow,col]);
    pigPos = [pigRow,col]; 
    pigCol = col;
};

// where player put the monster (must be first row)
  setMonster = function(col){
    frame[monsterRow][col] = monster;
    console.log([monsterRow,col]);
    monsterPos = [monsterRow,col];
    monsterCol = col;
    
};

// set branch head (head --> end)
    setBranch = function(row, col){
    if((row > 0) && (row<frame.length-1)){
    frame[row][col] = branch;
    frame[row][col+1] = branch;
    }
    console.log([row,col]);
    branchPos = [row,col]; 
};

//clear position and clear screen
    clearPosition = function(row, col){
    if(row<frame.length-1){
    frame[row][col] = 0;
    }
};

    clearScreen = function(row, col){
    for(row=0; row < frame.length; row++){
        for(col =0; col < colNum; col++){
            frame[row][col] = 0;
        }
    }
};

// movement
  checkRightSpot = function(){
    if((monsterCol+1<colNum)&&(frame[monsterRow][monsterCol+1] !== 0)&&(frame[monsterRow][monsterCol+1] !== 9)){
    frame[monsterRow][monsterCol+1] = monster;
    monsterCol++;
    console.log(frame)
    console.log('right');
    return true
} 
 return false   
};

  checkLeftSpot = function(){  
    if((monsterCol-1>=0)&&(frame[monsterRow][monsterCol-1] !== 0)&&(frame[monsterRow][monsterCol-1] !== 9)){
    frame[monsterRow][monsterCol-1] = monster;
    monsterCol--;
    console.log(frame)
    console.log('left')
    return true
} 
    return false
};
    
  checkDownSpot = function(){
    if(monsterRow<frame.length){
    frame[monsterRow+1][monsterCol] = monster;
    monsterRow++;
    console.log(frame)
    console.log('down')
    return true
} 
    return false
}   ; 

  move = function(){
    if(checkRightSpot() === true){
        checkRightSpot();
    } else if (checkLeftSpot() === true){
        checkLeftSpot();
    } else {
        checkDownSpot();
    }
};


// determine winner
  isPigAlive = function(x){
    return x === 8;
};

  winner = function(){
    if(frame[frame.length-1].some(result) === true){
        console.log ("Pig is still alive! Monster is dumb dumb")
    } else {
        console.log ("Bloody pig is gone")
    }
}
       
    






});