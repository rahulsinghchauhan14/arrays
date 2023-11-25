const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

function spiralOrder(arr){

    let topRow = 0;
    let bottomRow = arr.length-1;
    let leftCol = 0;
    let rightCol = arr[0].length-1;

    while(topRow<=bottomRow && leftCol<=rightCol){
        // print top row from left to right
        for(let i=leftCol;i<=rightCol;i++){
            console.log(arr[topRow][i]);
        }
        topRow++;

        // print right column from top to bottom
        for(let i=topRow;i<=bottomRow;i++){
            console.log(arr[i][rightCol]);
        }
        rightCol--;

        // print bottom row from right to left
    
        for(let i=rightCol;i>=leftCol;i--){
            console.log(arr[bottomRow][i]);
        }
        bottomRow--;
    

        // print left column from bottom to top

        for(let i=bottomRow;i>=topRow;i--){
            console.log(arr[i][leftCol]);
        }
        leftCol++;


    } 
    
}


spiralOrder(arr)
