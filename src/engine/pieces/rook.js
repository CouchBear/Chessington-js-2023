import Piece from './piece';
import Square from '../square';
import Player from '../player';
//import freeSpace from '../freeSpace';



export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []


        // for (let i = 0; i < 8; i++) {

        //     console.log(!board.getPiece(Square.at(location.row, i)));
        //     //horizontal free squares
        //     if (i != location.col && !(board.getPiece(Square.at(location.row, i)))) {

        //         moves.push(Square.at(location.row, i));
        //     }
        //     //vertical free squares
        //     if (i != location.row && !(board.getPiece(Square.at(i, location.col)))) {
        //         moves.push(Square.at(i, location.col));
        //     }
        // }
        for (let i = 1; i < 8; i++) {
            // check available squares while moving left
            if ((location.col - i) >= 0 && !(board.getPiece(Square.at(location.row, location.col - i)))) {
                moves.push(Square.at(location.row, location.col - i));
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

