const container = document.querySelector(".container");
const alert = document.querySelector(".alert");
let user = true;

let matrix = [
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "A", "A"],
]
let count = 0;
let gameOver = false;
function choose(row, column, index) {
    if (!gameOver) {
        //USER
        if (user) {
            const button = document.querySelectorAll('.btn')[index];
            if (button.innerHTML == "") {
                button.innerHTML = "X";
                user = false;
                matrix[row][column] = "X";
                choose(10, 10, 10);

            }
            //HATA
            else {

                alert.innerHTML = 'Seçim yanlış...';
                alert.style.visibility = 'visible';
                setTimeout(() => {
                    alert.style.visibility = 'hidden';
                }, 2000);
            }
        }
        // COMPUTER
        else {
            setTimeout(() => {
                let chooseComputer = Math.floor(Math.random() * 9);
                var computerButton = document.querySelectorAll(".btn")[chooseComputer];
                if (computerButton.innerHTML == "") {
                    computerButton.innerHTML = "O";
                    let className = computerButton.className;
                    // className = className.split(" ");
                    // className = className[1].split("-");
                    // className = className[1];
                    className = className[className.length - 1];



                    if (className == 1) {
                        matrix[0][0] = "O";
                    } else if (className == 2) {
                        matrix[0][1] = "O";
                    } else if (className == 3) {
                        matrix[0][2] = "O";
                    } else if (className == 4) {
                        matrix[1][0] = "O";
                    } else if (className == 5) {
                        matrix[1][1] = "O";
                    } else if (className == 6) {
                        matrix[1][2] = "O";
                    } else if (className == 7) {
                        matrix[2][0] = "O";
                    } else if (className == 8) {
                        matrix[2][1] = "O";
                    }
                    else if (className == 9) {
                        matrix[2][2] = "O";
                    }



                    user = true;
                } else {

                    choose(10, 10, 10);
                }
            }, 1000);
        }
        count++;
        if (count == 3) {
            control();
        }
    }
}
function greenAlert() {
    alert.innerHTML = 'Tebrikler Kazandınız';
    alert.style.visibility = 'visible';
    alert.style.backgroundColor = '#036313';

}
function redAlert() {
    alert.innerHTML = 'Bilgisayar Kazandı';
    alert.style.visibility = 'visible';
    alert.style.backgroundColor = '#b11616';


}
function control() {
    let win = false;

    let counter = 0;
    setInterval(() => {
        if (matrix[0][0] == "X") {
            if (matrix[0][1] == "X") {
                if (matrix[0][2] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();
                }
            }
        }
        if (matrix[0][0] == "O") {
            if (matrix[0][1] == "O") {
                if (matrix[0][2] == "X") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();
                }
            }
        }
        if (matrix[0][0] == "X") {
            if (matrix[1][0] == "X") {
                if (matrix[2][0] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();

                }
            }
        }
        if (matrix[0][0] == "O") {
            if (matrix[1][0] == "O") {
                if (matrix[2][0] == "O") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();
                }
            }
        }
        if (matrix[0][1] == "X") {
            if (matrix[1][1] == "X") {
                if (matrix[2][1] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();

                }
            }
        }
        if (matrix[0][1] == "O") {
            if (matrix[1][1] == "O") {
                if (matrix[2][1] == "O") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();

                }
            }
        }
        if (matrix[0][2] == "X") {
            if (matrix[1][2] == "X") {
                if (matrix[2][2] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();

                }
            }
        }
        if (matrix[0][2] == "O") {
            if (matrix[1][2] == "O") {
                if (matrix[2][2] == "O") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();

                }
            }
        }
        if (matrix[1][0] == "X") {
            if (matrix[1][1] == "X") {
                if (matrix[1][2] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();

                }
            }
        }
        if (matrix[1][0] == "O") {
            if (matrix[1][1] == "O") {
                if (matrix[1][2] == "O") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();

                }
            }
        }
        if (matrix[2][0] == "X") {
            if (matrix[2][1] == "X") {
                if (matrix[2][2] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();

                }
            }
        }
        if (matrix[2][0] == "O") {
            if (matrix[2][1] == "O") {
                if (matrix[2][2] == "O") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();

                }
            }
        }
        if (matrix[0][0] == "X") {
            if (matrix[1][1] == "X") {
                if (matrix[2][2] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();

                }
            }
        }
        if (matrix[0][0] == "O") {
            if (matrix[1][1] == "O") {
                if (matrix[2][2] == "O") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();

                }
            }
        }
        if (matrix[0][2] == "X") {
            if (matrix[1][1] == "X") {
                if (matrix[2][0] == "X") {
                    console.log("Kazandın");
                    win = true;
                    gameOver = true;
                    greenAlert();

                }
            }
        }
        if (matrix[0][2] == "O") {
            if (matrix[1][1] == "O") {
                if (matrix[2][0] == "O") {
                    console.log("Bilgisayar Kazandı");
                    win = true;
                    gameOver = true;
                    redAlert();

                }
            }
        }

        else if (win == false) {

            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {

                    if (matrix[i][j] != "") {

                        if (document.querySelector(".btn-1").innerHTML != "" &&
                            document.querySelector(".btn-2").innerHTML != "" &&
                            document.querySelector(".btn-3").innerHTML != "" &&
                            document.querySelector(".btn-4").innerHTML != "" &&
                            document.querySelector(".btn-5").innerHTML != "" &&
                            document.querySelector(".btn-6").innerHTML != "" &&
                            document.querySelector(".btn-7").innerHTML != "" &&
                            document.querySelector(".btn-8").innerHTML != "" &&
                            document.querySelector(".btn-9").innerHTML != "") {
                            gameOver == true;
                            console.log("berabere bitti");
                            alert.innerHTML = 'Berabere';
                            alert.style.visibility = 'visible';
                            alert.style.backgroundColor = 'rgb(228, 228, 15)';
                        }
                    }

                }

            }

        }



    }, 1000);


}



