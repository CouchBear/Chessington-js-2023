import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';





export default class RooK extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        const row = location.row;
        const col = location.col;


        for (let i = 1; i < 8; i++) {
            // checK available squares while moving left, can take opposing non-king piece
            if ((col - i) >= 0) {

                if (board.getPiece(Square.at(row, col - i)) === undefined) {
                    moves.push(Square.at(row, col - i));
                } else if (board.getPiece(Square.at(row, col - i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row, col - i)) instanceof King)) {

                    moves.push(Square.at(row, col - i));
                    break;

                } else break;

            } else break;
        }


        //checK available squares while moving right,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((col + i) < 8) {

                if (board.getPiece(Square.at(row, col + i)) === undefined) {
                    moves.push(Square.at(row, col + i));
                } else if (board.getPiece(Square.at(row, col + i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row, col + i)) instanceof King)) {
                    console.log("");
                    moves.push(Square.at(row, col + i));
                    break;
                } else break;

            } else break;
        }

        //checK available squares while moving up,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((row + i) < 8) {

                if (board.getPiece(Square.at(row + i, col)) === undefined) {
                    moves.push(Square.at(row + i, col));
                } else if (board.getPiece(Square.at(row + i, col)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row + i, col)) instanceof King)) {

                    moves.push(Square.at(row + i, col));
                    break;
                } else break;

            } else break;
        }


        //checK available squares while moving down, can take opposing non-king piece
        for (let i = 1; i < 8; i++) {

            if ((row - i) >= 0) {

                if (board.getPiece(Square.at(row - i, col)) === undefined) {
                    moves.push(Square.at(row - i, col));
                } else if (board.getPiece(Square.at(row - i, col)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row - i, col)) instanceof King)) {

                    moves.push(Square.at(row - i, col));
                    break;

                } else break;
            } else break;
        }
        return moves

    }
}

