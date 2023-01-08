document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid');
    const scoreDisplay = document.querySelector('#score');
    const resultDisplay = document.querySelector('#result');
    const width = 4;
    const squares = [];
    let score = 0;
    let usableGenerate = true;
    let rows = []
    let newRows = []
    let columns = []
    let newColumns = []


    // create a playing board 
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            let square = document.createElement('div');
            square.innerHTML = '0';
            gridDisplay.appendChild(square);
            squares.push(square);
        }
        generate()
        generate()
    }
    createBoard()

    // generate a number randomly 
    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length)

        if (squares[randomNumber].innerHTML == '0') {
            squares[randomNumber].innerHTML = 2
            squares[randomNumber].classList.add("come")
            checkForLose()
            styleSquares()


        } else {
            generate()

        }




    }
    //styling squares
    function styleSquares() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == '0') {

                squares[i].style.boxShadow = 'none'
                squares[i].style.color = 'white'
                squares[i].style.opacity = '0'



            } else if (squares[i].innerHTML == 2) {
                squares[i].style.opacity = '1'

                squares[i].style.boxShadow = ' 0 0  3px rgba(0, 192, 192, 0.5)'
                squares[i].style.color = 'rgb(0, 192, 192)'

            } else if (squares[i].innerHTML == 4) {
                squares[i].style.boxShadow = '0 0 3px rgba(54, 206, 92, 0.5)'
                squares[i].style.color = 'rgb(54, 206, 92)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 8) {
                squares[i].style.boxShadow = '0 0 3px rgba(211, 152, 42,0.5)'
                squares[i].style.color = 'rgb(211, 152, 42)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 16) {
                squares[i].style.boxShadow = '0 0 3px rgba(192, 216, 31,0.5)'
                squares[i].style.color = 'rgb(192, 216, 31)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 32) {
                squares[i].style.boxShadow = '0 0 3px rgba(211, 67, 42, 0.5)'
                squares[i].style.color = 'rgb(211, 67, 42)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 64) {
                squares[i].style.boxShadow = '0 0 3px rgba(211, 16, 42, 0.5)'
                squares[i].style.color = 'rgb(211, 16, 42)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 128) {
                squares[i].style.boxShadow = '0 0 3px rgba(208, 30, 97, 0.5)'
                squares[i].style.color = 'rgb(208, 30, 97)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 256) {
                squares[i].style.boxShadow = '0 0 3px rgba(188, 25, 208, 0.5)'
                squares[i].style.color = 'rgb(188, 25, 208)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 512) {
                squares[i].style.boxShadow = '0 0 3px rgba(122, 29, 229, 0.5)'
                squares[i].style.color = 'rgb(122, 29, 229)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 1024) {
                squares[i].style.boxShadow = '0 0 3px rgba(38, 64, 209, 0.5)'
                squares[i].style.color = 'rgb(38, 64, 209)'
                squares[i].style.opacity = '1'

            } else if (squares[i].innerHTML == 2048) {
                squares[i].style.boxShadow = '0 0 3px rgba(200, 199, 226, 0.5)'
                squares[i].style.color = 'rgb(200, 199, 226)'
                squares[i].style.opacity = '1'

            }
        }

    }

    // swipe right 
    function moveRight() {
        for (let i = 0; i < width * width; i++) {
            if (i % 4 == 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i + 1].innerHTML
                let totalThree = squares[i + 2].innerHTML
                let totalFour = squares[i + 3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]


                let filterRedRow = row.filter(num => num);
                let missing = 4 - filterRedRow.length;
                let zeros = Array(missing).fill('0');
                let newRow = zeros.concat(filterRedRow)

                squares[i].innerHTML = newRow[0]
                squares[i + 1].innerHTML = newRow[1]
                squares[i + 2].innerHTML = newRow[2]
                squares[i + 3].innerHTML = newRow[3]

                rows.push(row);
                newRows.push(newRow);

                squares.forEach((e) => {
                    e.classList.remove('come')
                })



            }

        }

    }
    // swipe left 
    function moveLeft() {
        for (let i = 0; i < width * width; i++) {
            if (i % 4 == 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i + 1].innerHTML
                let totalThree = squares[i + 2].innerHTML
                let totalFour = squares[i + 3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]


                let filterRedRow = row.filter(num => num);
                let missing = 4 - filterRedRow.length;
                let zeros = Array(missing).fill('0');
                let newRow = filterRedRow.concat(zeros)

                squares[i].innerHTML = newRow[0]
                squares[i + 1].innerHTML = newRow[1]
                squares[i + 2].innerHTML = newRow[2]
                squares[i + 3].innerHTML = newRow[3]

                rows.push(row);
                newRows.push(newRow);
                squares.forEach((e) => {
                    e.classList.remove('come')
                })

            }

        }
    }
    // swipe down
    function moveDown() {
        for (let i = 0; i < 4; i++) {

            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i + width].innerHTML
            let totalThree = squares[i + (width * 2)].innerHTML
            let totalFour = squares[i + (width * 3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]


            let filterRedColumn = column.filter(num => num);
            let missing = 4 - filterRedColumn.length;
            let zeros = Array(missing).fill('0');
            let newColumn = zeros.concat(filterRedColumn)

            squares[i].innerHTML = newColumn[0]
            squares[i + width].innerHTML = newColumn[1]
            squares[i + (width * 2)].innerHTML = newColumn[2]
            squares[i + (width * 3)].innerHTML = newColumn[3]

            columns.push(column)
            newColumns.push(newColumn)

            squares.forEach((e) => {
                e.classList.remove('come')
            })

        }
    }
    // swipe up 
    function moveUp() {
        for (let i = 0; i < 4; i++) {

            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i + width].innerHTML
            let totalThree = squares[i + (width * 2)].innerHTML
            let totalFour = squares[i + (width * 3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]


            let filterRedColumn = column.filter(num => num);
            let missing = 4 - filterRedColumn.length;
            let zeros = Array(missing).fill('0');
            let newColumn = filterRedColumn.concat(zeros)

            squares[i].innerHTML = newColumn[0]
            squares[i + width].innerHTML = newColumn[1]
            squares[i + (width * 2)].innerHTML = newColumn[2]
            squares[i + (width * 3)].innerHTML = newColumn[3]

            columns.push(column)
            newColumns.push(newColumn)
            squares.forEach((e) => {
                e.classList.remove('come')
            })



        }
    }

    function combineRow() {
        for (let i = 0; i < 15; i++) {
            if (squares[i].innerHTML === squares[i + 1].innerHTML) {
                let combinedTotal = Number(squares[i].innerHTML) + Number(squares[i + 1].innerHTML);
                squares[i].innerHTML = combinedTotal;
                squares[i + 1].innerHTML = '0';
                score += combinedTotal
                scoreDisplay.innerHTML = 'score : ' + score

            }


        }
        checkForWin()


    }

    function combineColumn() {
        for (let i = 0; i < 12; i++) {
            if (squares[i].innerHTML === squares[i + width].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
                squares[i].innerHTML = combinedTotal;
                squares[i + width].innerHTML = '0';
                score += combinedTotal
                scoreDisplay.innerHTML = 'score : ' + score
            }

        }

        checkForWin()


    }

    // assign keycodes 
    document.addEventListener('keyup', controls);

    function controls(e) {
        if (e.keyCode == 39) {

            keyRight()

        } else if (e.keyCode == 37) {

            keyLeft()
        } else if (e.keyCode == 40) {
            keyDown()
        } else if (e.keyCode == 38) {
            keyUp()
        }
    }

    function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        useGenerate()

    }

    function keyLeft() {
        moveLeft()
        combineRow()
        moveLeft()
        useGenerate()
    }

    function keyDown() {
        moveDown()
        combineColumn()
        moveDown()
        useGenerate()
    }

    function keyUp() {
        moveUp()
        combineColumn()
        moveUp()
        useGenerate()
    }
    // check for win
    function checkForWin() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 2048) {
                resultDisplay.innerHTML = 'You Win!';
                document.removeEventListener('keyup', controls);
                let btn = document.createElement('button');
                btn.classList.add('fas')
                btn.classList.add('fa-redo')
                btn.classList.add('refresh')
                resultDisplay.appendChild(btn)
                btn.addEventListener('click', () => {
                    location.reload()
                })

            }

        }
    }
    //check for lose
    function checkForLose() {
        let zeros = 0;
        let available = true;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 0) {
                zeros++
            }

        }
        for (let i = 0; i < 12; i++) {
            if (squares[i].innerHTML == squares[i + width].innerHTML) {
                available = false;
                break;
            }
        }
        for (let i = 0; i < squares.length; i++) {
            if ((i == 3) || (i == 7) || (i == 11) || (i == 15)) {

                continue;
            } else {
                if (squares[i].innerHTML == squares[i + 1].innerHTML) {
                    available = false;
                    break;
                }
            }
        }
        if ((zeros == 0) && available) {
            resultDisplay.innerHTML = 'You Lose!'
            document.removeEventListener('keyup', controls);
            let btn = document.createElement('button');
            btn.classList.add('fas')
            btn.classList.add('fa-redo')
            btn.classList.add('refresh')
            resultDisplay.appendChild(btn)
            btn.addEventListener('click', () => {
                location.reload()
            })


        }
    }
    // checking for using generate after click
    function useGenerate() {
        let randomNumber = Math.floor(Math.random() * squares.length)

        if (newRows.join(newRows.slice(5, 8)) != rows.join(rows.slice(5, 8))) {
            usableGenerate = true;
            rows = []
            newRows = []

        } else if (newColumns.join(newColumns.slice(5, 8)) != columns.join(columns.slice(5, 8))) {
            usableGenerate = true;
            columns = [];
            newColumns = [];
        } else {
            usableGenerate = false;
            rows = []
            newRows = []
            columns = [];
            newColumns = [];
        }

        if (usableGenerate) {
            if (squares[randomNumber].innerHTML == '0') {

                squares[randomNumber].innerHTML = 2
                squares[randomNumber].classList.add("come")
                checkForLose()
                styleSquares()


            } else {
                generate()

            }
        } else {
            checkForLose()
            styleSquares()
        }

    }
})