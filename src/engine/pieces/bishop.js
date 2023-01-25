import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        const row = location.row;
        const col = location.col;

        for (let i = 1; i < 8; i++) {
            // checK available squares while south-west , can take opposing non-king piece
            if ((col - i) >= 0 && (row - i) >= 0) {

                if (board.getPiece(Square.at(row - i, col - i)) === undefined) {
                    moves.push(Square.at(row - i, col - i));
                } else if (board.getPiece(Square.at(row - i, col - i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row - i, col - i)) instanceof King)) {

                    moves.push(Square.at(row, col - i));
                    break;

                } else break;

            } else break;
        }


        //checK available squares while moving north-east,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((col + i) < 8 && (row + i) < 8) {

                if (board.getPiece(Square.at(row + i, col + i)) === undefined) {
                    moves.push(Square.at(row + i, col + i));
                } else if (board.getPiece(Square.at(row + i, col + i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row + i, col + i)) instanceof King)) {

                    moves.push(Square.at(row + i, col + i));
                    break;
                } else break;

            } else break;
        }

        //checK available squares while moving north-west,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((row + i) < 8 && (col - i) >= 0) {

                if (board.getPiece(Square.at(row + i, col - i)) === undefined) {
                    moves.push(Square.at(row + i, col - i));
                } else if (board.getPiece(Square.at(row + i, col - i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row + i, col - i)) instanceof King)) {

                    moves.push(Square.at(row + i, col - i));
                    break;
                } else break;

            } else break;
        }


        //checK available squares while south-east, can take opposing non-king piece
        for (let i = 1; i < 8; i++) {

            if ((row - i) >= 0 && (col + i) < 8) {

                if (board.getPiece(Square.at(row - i, col + i)) === undefined) {
                    moves.push(Square.at(row - i, col + i));
                } else if (board.getPiece(Square.at(row - i, col + i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(row - i, col + i)) instanceof King)) {

                    moves.push(Square.at(row - i, col + i));
                    break;

                } else break;
            } else break;
        }

        return moves;
    }
}
