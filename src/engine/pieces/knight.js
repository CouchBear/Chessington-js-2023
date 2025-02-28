import Piece from './piece';
import Player from '../player';
import Square from '../square';


export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const moves = [];

        const row = location.row;
        const col = location.col;

        if ((row + 2) < 8) {
            if ((col - 1) >= 0) moves.push(Square.at(row + 2, col - 1));
            if ((col + 1) < 8) moves.push(Square.at(row + 2, col + 1));
        }

        if ((row + 1) < 8) {
            if ((col - 2) >= 0) moves.push(Square.at(row + 1, col - 2));
            if ((col + 2) < 8) moves.push(Square.at(row + 1, col + 2))
        }

        if ((row - 1) >= 0) {
            if ((col - 2) >= 0) moves.push(Square.at(row - 1, col - 2));
            if ((col + 2) < 8) moves.push(Square.at(row - 1, col + 2));
        }

        if ((row - 2) >= 0) {
            if ((col - 1) >= 0) moves.push(Square.at(row - 2, col - 1));
            if ((col + 1) < 8) moves.push(Square.at(row - 2, col + 1));
        }

        return moves;
    }
}
