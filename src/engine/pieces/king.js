import Piece from './piece';
import Player from '../player';
import Square from '../square';




export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const moves = [];

        const row = location.row;
        const col = location.col;

        //check north
        if (row + 1 < 8) moves.push(Square.at(row + 1, col));

        //check south
        if (row - 1 >= 0) moves.push(Square.at(row - 1, col));

        //check east
        if (col + 1 < 8) moves.push(Square.at(row, col + 1));

        //check west
        if (col - 1 >= 0) moves.push(Square.at(row, col - 1));

        //check north west
        if (row + 1 < 8 && col - 1 >= 0) moves.push(Square.at(row + 1, col - 1));

        //check north east
        if (row + 1 < 8 && col + 1 < 8) moves.push(Square.at(row + 1, col + 1));

        //check south west
        if (row - 1 >= 0 && col - 1 >= 0) moves.push(Square.at(row - 1, col - 1));

        //check south east
        if (row - 1 >= 0 && col + 1 < 8) moves.push(Square.at(row - 1, col + 1));

        return moves;
    }

}
