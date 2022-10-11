

var grid = [
    [1, 2, 3, 4, 5, 6, 7],
  
    [8, 9, 10, 11, 12, 13, 14],
  
    [15, 16, 17, 18, 19, 20, 21],

    [22, 23, 24, 25, 26, 27, 28],
  
    [29, 30, 31, 32, 33, 34, 35],
  
    [36, 37, 38, 39, 40, 41, 42],
  ];
  
  var markers = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ];
  
  
  var userWin = 0;
  var computerWin = 0;
  var tieWin = 0;
  
  console.log(grid);
  
  let spot = document.getElementsByClassName("spot");
  let background = document.getElementById("background");
  let title = document.getElementById("title");
  let winner = document.getElementById("winner");
  let resetButton = document.getElementById("resetButton");
  let user = document.getElementById("user");
  let computer = document.getElementById("computer");
  let tie = document.getElementById("tie");
  let goameovercover = document.getElementById("gameovercover");
  
  // resetButton.style.display = "none";
  
  for (i = 0; i < spot.length; i++) {
    spot[i].addEventListener("click", spotClicked);
  }


  
  count = 0;
  function spotClicked(event) {
    let answer = event.target.getAttribute("data-spot");
  
    if (event.target.style.color == "##FF0000" || event.target.innerHTML == "0") {
      console.log("nope stop taken");
    } else if (count % 2 == 0) {
      event.target.innerHTML = "O";
      event.target.style.color = "#FFFF00";
      event.target.style.fontSize = "100px";
      event.target.style.justifyContent = "center";
      count = count + 1;
    } else {
      event.target.innerHTML = "O";
      event.target.style.color = "#FF0000";
      count = count + 1;
      // event.target.innerHTML = "O";
      event.target.style.fontSize = "100px";
      event.target.style.justifyContent = "center";
    }

    markCount = 0; 
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length; j++) {
            console.log(grid[i][j]);
            console.log(event.target.style.color) // red
            if (event.target.style.color == "#FFFF00" && answer == grid[i][j]) {
                markers[markCount++] = "O";
            }
            else if (event.target.target.style.color == "#FF0000" && answer == grid[i][j]) {
                markers[markCount++] = "X";
            }
    }
}
    // if (event.target.innerHTML.style.color == "#633191" && answer == grid[0][0]) {
    //   marker1 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[0][1]) {
    //   marker2 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[0][2]) {
    //   marker3 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[0][3]) {
    //     marker4 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[0][4]) {
    //     marker5 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[0][5]) {
    //     marker6 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[0][6]) {
    //     marker7 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[1][0]) {
    //   marker8 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[1][1]) {
    //   marker9 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[1][2]) {
    //   marker10 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[1][3]) {
    //     marker11 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[1][4]) {
    //     marker12 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[1][5]) {
    //     marker13 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[1][6]) {
    //     marker14 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[2][0]) {
    //   marker15 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[2][1]) {
    //   marker17 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[2][2]) {
    //   marker18 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[2][3]) {
    //     marker7 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[2][4]) {
    //     marker8 = "o";
    // } else if (event.target.innerHTML.style.color == "#633191" && answer == grid[2][5]) {
    //     marker9 = "o";
    // } 
      
    
    
    /*if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[0][0]) {
      marker1 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[0][1]) {
      marker2 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[0][2]) {
      marker3 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[1][0]) {
      marker4 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[1][1]) {
      marker5 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[1][2]) {
      marker6 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[2][0]) {
      marker7 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[2][1]) {
      marker8 = "x";
    } else if (event.target.innerHTML.style.color == "#FF0000" && answer == grid[2][2]) {
      marker9 = "x";
    }*/
  
    // //left to right YELLOW
    // if (marker1 == "x" && marker2 == "x" && marker3 == "x") {
    //   player1();
    // } else if (marker4 == "x" && marker5 == "x" && marker6 == "x") {
    //   player1();
    // } else if (marker7 == "x" && marker8 == "x" && marker9 == "x") {
    //   player1();
    // }
  
    // //left to right BLUE
    // else if (marker1 == "o" && marker2 == "o" && marker3 == "o") {
    //   player2();
    // } else if (marker4 == "o" && marker5 == "o" && marker6 == "o") {
    //   player2();
    // } else if (marker7 == "o" && marker8 == "o" && marker9 == "o") {
    //   player2();
    // }
  
    // //up and down YELLOW
    // else if (marker1 == "x" && marker4 == "x" && marker7 == "x") {
    //   player1();
    // } else if (marker2 == "x" && marker5 == "x" && marker8 == "x") {
    //   player1();
    // } else if (marker3 == "x" && marker6 == "x" && marker9 == "x") {
    //   player1();
    // }
  
    // //up and down BLUE
    // else if (marker1 == "o" && marker4 == "o" && marker7 == "o") {
    //   player2();
    // } else if (marker2 == "o" && marker5 == "o" && marker8 == "o") {
    //   player2();
    // } else if (marker3 == "o" && marker6 == "o" && marker9 == "o") {
    //   player2();
    // }
    // //diagonal YELLOW
    // else if (marker1 == "x" && marker5 == "x" && marker9 == "x") {
    //   player1();
    // } else if (marker3 == "x" && marker5 == "x" && marker7 == "x") {
    //   player1();
    // }
    // //diagonal BLUE
    // else if (marker1 == "o" && marker5 == "o" && marker9 == "o") {
    //   player2();
    // } else if (marker3 == "o" && marker5 == "o" && marker7 == "o") {
    //   player2();
    // }
  
    //if all spots are filled
    // else if (count == 9) {
    //   resetButton.style.display = "block";
    //   tieWin = tieWin + 1;
    //   console.log("tie");
    // }
    // user.innerHTML = "Red: " + userWin;
    // computer.innerHTML = "Yellow: " + computerWin;
    // tie.innerHTML = "Tie: " + tieWin;
    }

//   function resetGame() {
//     console.log("reset game");
//     count = 0;
  
//     let markers = [
//         marker1 = " ",
//       marker2 = " ",
//       marker3 = " ",
//       marker4 = " ",
//       marker5 = " ",
//       marker6 = " ",
//       marker7 = " ",
//       marker8 = " ",
//       marker9 = " ",
//       marker10 = " ",
//       marker11 = " ",
//       marker12 = " ",
//       marker13 = " ",
//       marker14 = " ",
//       marker15 = " ",
//       marker16 = " ",
//       marker17 = " ",
//       marker18 = " ",
//       marker19 = " ",
//       marker20 = " ",
//       marker21 = " ",
//       marker22 = " ",
//       marker23 = " ",
//       marker24 = " ",
//       marker25 = " ",
//       marker26 = " ",
//       marker27 = " ",
//       marker28 = " ",
//       marker29 = " ",
//       marker30 = " ",
//       marker31 = " ",
//       marker32 = " ",
//       marker33 = " ",
//       marker34 = " ",
//       marker35 = " ",
//       marker36 = " ",
//       marker37 = " ",
//       marker38 = " ",
//       marker39 = " ",
//       marker40 = " ",
//       marker41 = " ",
//       marker42 = " "
//       ];
  
//     for (i = 0; i < spot.length; i++) {
//       spot[i].addEventListener("click", spotClicked);
//       spot[i].style.background = "#fff";
//       spot[i].innerHTML = " ";
//     }
//     winner.innerHTML = " ";
//     resetButton.style.display = "none";
//     goameovercover.style.display = "none";
//   }
  
//   function player1(event) {
//     resetButton.style.display = "block";
//     userWin = userWin + 1;
//     goameovercover.style.display = "flex";
//     console.log("PLayer 1 win");
//   }
  
//   function player2() {
//     resetButton.style.display = "block";
//     computerWin = computerWin + 1;
//     console.log("Player 2 win");
//     goameovercover.style.display = "flex";
//     for (i = 0; i >= 9; i++) {
//       markers[i] = "y";
//     }
//   }
  
