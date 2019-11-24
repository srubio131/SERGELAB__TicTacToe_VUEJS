export const TicTacToe = (() => {

    let _maxRows = 3
    let _dashboard = [['', '', ''], ['', '', ''], ['', '', '']]
    let _players = ['X', 'O']

    const initialize = function (maxRows, players) {
        _maxRows = (maxRows) ? maxRows : _maxRows
        _players = (players && players.lenght > 0) ? players : _players
        _dashboard = []
        for(let row = 0; row < _maxRows; row++) {
            _dashboard.push(new Array(_maxRows).fill(''))
        }
    }

    const _isPlayerWinner = function (player) {
        // Check rows
        for(let row = 0; row < _maxRows; row++) {
            if (_dashboard[row].every((col) => col === player)) {
                return true
            }
        }
        // Check columns
        for(let col = 0; col < _maxRows; col++) {
            const column = _dashboard.map((row)=>{ return row[col] })
            if (column.every((c) => c === player)) {
                return true
            }
        }
        // Check diagonals
        const diagonalDown = []
        for(let i = 0; i < _maxRows; i++) {
            diagonalDown.push(_dashboard[i][i])
        }
        const diagonalUp = []
        for(let i = 0; i < _maxRows; i++) {
            diagonalUp.push(_dashboard[_maxRows - 1 - i][i])
        }
        if (diagonalDown.every((c) => c === player) || diagonalUp.every((c) => c === player)) {
            return true
        }

        return false;
    }

    const isGameFinished = function (player) {
        const isDashboardComplete = !_dashboard.join().split(',').includes('')
        const isPlayerWinner = _isPlayerWinner(player)
        if (isPlayerWinner) {
            return player
        } else if (isDashboardComplete && !isPlayerWinner) {
            return 'empate'
        }
        return false
    }

    const makeMove = function (x, y, player) {
        if (_dashboard[x][y] === '') {
            _dashboard[x][y] = player
        }
    }

    const getState = function () {
        return [..._dashboard] 
    }

    const makeMoveIAEasy = function(player) {
        const spaceFinded = false;
        while (!spaceFinded) {
            var frandom = Math.floor((Math.random() * _maxRows))
            var crandom = Math.floor((Math.random() * _maxRows))
            if (_dashboard[frandom][crandom] === '') {
                _dashboard[frandom][crandom] = player;
                spaceFinded = true;
            }
        }
    }

    return {
        initialize: (maxRows, players) => { initialize(maxRows, players) },
        makeMove: (x, y, player) => { makeMove(x, y, player) },
        makeMoveIAEasy: (player) => { makeMoveIAEasy(player) },
        getState,
        isGameFinished: (player) => { return isGameFinished(player) }
    }
})();
