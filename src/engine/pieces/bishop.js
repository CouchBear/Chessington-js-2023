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


        for (let i = 1; i < 8; i++) {
            // checK available squares while south-west , can take opposing non-king piece
            if ((location.col - i) >= 0 && (location.row - i) >= 0) {

                if (board.getPiece(Square.at(location.row - i, location.col - i)) === undefined) {
                    moves.push(Square.at(location.row - i, location.col - i));
                } else if (board.getPiece(Square.at(location.row - i, location.col - i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row - i, location.col - i)) instanceof King)) {

                    moves.push(Square.at(location.row, location.col - i));
                    break;

                } else break;

            } else break;
        }


        //checK available squares while moving north-east,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((location.col + i) < 8 && (location.row + i) < 8) {

                if (board.getPiece(Square.at(location.row + i, location.col + i)) === undefined) {
                    moves.push(Square.at(location.row + i, location.col + i));
                } else if (board.getPiece(Square.at(location.row + i, location.col + i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row + i, location.col + i)) instanceof King)) {

                    moves.push(Square.at(location.row + i, location.col + i));
                    break;
                } else break;

            } else break;
        }

        //checK available squares while moving north-west,can take opposing non-king piece
        for (let i = 1; i < 8; i++) {
            if ((location.row + i) < 8 && (location.col - i) >= 0) {

                if (board.getPiece(Square.at(location.row + i, location.col - i)) === undefined) {
                    moves.push(Square.at(location.row + i, location.col - i));
                } else if (board.getPiece(Square.at(location.row + i, location.col - i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row + i, location.col - i)) instanceof King)) {

                    moves.push(Square.at(location.row + i, location.col - i));
                    break;
                } else break;

            } else break;
        }


        //checK available squares while south-east, can take opposing non-king piece
        for (let i = 1; i < 8; i++) {

            if ((location.row - i) >= 0 && (location.col + i) < 8) {

                if (board.getPiece(Square.at(location.row - i, location.col + i)) === undefined) {
                    moves.push(Square.at(location.row - i, location.col + i));
                } else if (board.getPiece(Square.at(location.row - i, location.col + i)).player !== board.currentPlayer
                    && !(board.getPiece(Square.at(location.row - i, location.col + i)) instanceof King)) {

                    moves.push(Square.at(location.row - i, location.col + i));
                    break;

                } else break;
            } else break;
        }

        return moves;
    }
}
