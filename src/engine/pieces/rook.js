import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './King';
import Pawn from './pawn';




export default class RooK extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []



        for (let i = 1; i < 8; i++) {
            // checK available squares while moving left, can take opposing non-king piece
            if ((location.col - i) >= 0) {

                if (board.getPiece(Square.at(location.row, location.col - i)) === undefined) {
                    moves.push(Square.at(location.row, location.col - i));
                } else if (board.getPiece(Square.at(location.row, location.col - i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row, location.col - i)) instanceof King)) {

                    moves.push(Square.at(location.row, location.col - i));
                    break;

                } else break;

            } else break;
        }


        //checK available squares while moving right,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((location.col + i) < 8) {

                if (board.getPiece(Square.at(location.row, location.col + i)) === undefined) {
                    moves.push(Square.at(location.row, location.col + i));
                } else if (board.getPiece(Square.at(location.row, location.col + i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row, location.col + i)) instanceof King)) {
                    console.log("");
                    moves.push(Square.at(location.row, location.col + i));
                    break;
                } else break;

            } else break;
        }

        //checK available squares while moving up,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((location.row + i) < 8) {

                if (board.getPiece(Square.at(location.row + i, location.col)) === undefined) {
                    moves.push(Square.at(location.row + i, location.col));
                } else if (board.getPiece(Square.at(location.row + i, location.col)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row + i, location.col)) instanceof King)) {

                    moves.push(Square.at(location.row + i, location.col));
                    break;
                } else break;

            } else break;
        }


        //checK available squares while moving down, can take opposing non-king piece
        for (let i = 1; i < 8; i++) {

            if ((location.row - i) >= 0) {

                if (board.getPiece(Square.at(location.row - i, location.col)) === undefined) {
                    moves.push(Square.at(location.row - i, location.col));
                } else if (board.getPiece(Square.at(location.row - i, location.col)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row - i, location.col)) instanceof King)) {

                    moves.push(Square.at(location.row - i, location.col));
                    break;

                } else break;
            } else break;
        }
        return moves

    }
}

