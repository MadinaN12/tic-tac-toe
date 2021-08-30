class TicTacToe {
    constructor() {
        this.curPlayer = 'x';
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.curPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.curPlayer;

            if (this.curPlayer === 'x') { this.curPlayer = 'o'; } 
            else { 
                if (this.curPlayer === 'o') { this.curPlayer = 'x'; }
            }
        }
    }

    isFinished() {
        if (this.getWinner() != null || this.isDraw()) { return true; } 
        else { return false; }
    }

    getWinner() {
        let a = '', b = '', c = '', d = '', e = '', f = '', ans; 
        for (let i = 0; i < this.matrix.length; i++) {
            b += this.matrix[i][0];
            c += this.matrix[i][1];
            d += this.matrix[i][2];
            for (let j = 0; j < this.matrix[i].length; j++) {
                a += this.matrix[i][j];
            }
            if (a === 'xxx') { ans = 'xxx'; break; }
            if (a === 'ooo') { ans = 'ooo'; break; }
            a = '';
        }
        
        e = this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2];
        f = this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0];

        if (ans === 'xxx' || b === 'xxx' || c === 'xxx' || d === 'xxx' || e === 'xxx' || f === 'xxx') return 'x';
        else {
            if (ans === 'ooo' || b === 'ooo' || c === 'ooo' || d === 'ooo' || e === 'ooo' || f === 'ooo') return 'o';
            else {
                return null;
            } 
        }
    }

    noMoreTurns() {
        this.isNoMoreTruns = true;

        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i].includes(null)) this.isNoMoreTruns = false;
        }
        return this.isNoMoreTruns;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) { return true; } 
        else { return false; }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
