import Piece from './piece';
import Square from '../square';
import Player from '../player';




export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []



        for (let i = 1; i < 8; i++) {
            // check available squares while moving left, can take opposing piece
            if ((location.col - i) >= 0) {
                if (!(board.getPiece(Square.at(location.row, location.col - i)))) {
                    moves.push(Square.at(location.row, location.col - i));
                }
                else if (board.getPiece(Square.at(location.row, location.col - i)).player === Player.BLACK) {
                    moves.push(Square.at(location.row, location.col - i));
                    break;
                }
            } else break;
        }
        //check available squares while moving right
        for (let i = 1; i < 8; i++) {
            if ((location.col + i) < 8 && !(board.getPiece(Square.at(location.row, location.col + i)))) {
                moves.push(Square.at(location.row, location.col + i));
            } else break;
        }
        //check available squares while moving up
        for (let i = 1; i < 8; i++) {
            if ((location.row + i) < 8 && !(board.getPiece(Square.at(location.row + i, location.col)))) {
                moves.push(Square.at(location.row + i, location.col));
            } else break;
        }
        //check available squares while moving down
        for (let i = 1; i < 8; i++) {

            if ((location.row - i) >= 0 && !(board.getPiece(Square.at(location.row - i, location.col)))) {
                moves.push(Square.at(location.row - i, location.col));
            } else break;
        }
        return moves

    }
}

