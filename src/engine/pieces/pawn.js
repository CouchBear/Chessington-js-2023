import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        if (this.player === Player.WHITE) {

            if (location.row === 1 && !board.getPiece(Square.at(location.row + 2, location.col)) && !board.getPiece(Square.at(location.row + 1, location.col))) {
                moves.push(Square.at(location.row + 2, location.col));
                moves.push(Square.at(location.row + 1, location.col));

            } else if (location.row !== 1 && location.row + 1 < 8 && !board.getPiece(Square.at(location.row + 1, location.col))) {
                moves.push(Square.at(location.row + 1, location.col))
            }
        } else {

            if (location.row === 6 && !board.getPiece(Square.at(location.row - 2, location.col)) && !board.getPiece(Square.at(location.row - 1, location.col))) {
                moves.push(Square.at(location.row - 2, location.col))
                moves.push(Square.at(location.row - 1, location.col))

            } else if (location.row !== 6 && location.row - 1 >= 0 && !board.getPiece(Square.at(location.row - 1, location.col))) {
                moves.push(Square.at(location.row - 1, location.col))

            }

        }
        return moves
    }
}
