import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const moves = [];
        const row = location.row;
        const col = location.col;

        if (this.player === Player.WHITE) {




            if (row === 1) {
                //can move forward one step or two
                if (!board.getPiece(Square.at(row + 2, col)) && !board.getPiece(Square.at(row + 1, col))) {
                    moves.push(Square.at(row + 2, col));
                    moves.push(Square.at(row + 1, col));
                } else if (!board.getPiece(Square.at(row + 1, col))) {
                    moves.push(Square.at(row + 1, col));
                }



            }


            else {
                if (row + 1 < 8 && !board.getPiece(Square.at(row + 1, col))) {
                    moves.push(Square.at(row + 1, col))
                }
                //can take diagonal opposing piece

                if ((row + 1) < 8 && (col - 1 >= 0)
                    && board.getPiece(Square.at(row + 1, col - 1)) !== undefined
                    && board.getPiece(Square.at(row + 1, col - 1)).player === Player.BLACK
                    && !(board.getPiece(Square.at(row + 1, col - 1)) instanceof King)) {
                    moves.push(Square.at(row + 1, col - 1));
                }

                if ((row + 1) < 8 && (col + 1 < 8)
                    && board.getPiece(Square.at(row + 1, col + 1)) !== undefined
                    && board.getPiece(Square.at(row + 1, col + 1)).player === Player.BLACK
                    && !(board.getPiece(Square.at(row + 1, col + 1)) instanceof King)) {
                    moves.push(Square.at(row + 1, col + 1));
                }
            }


        } else {



            if (row === 6) {
                if (!board.getPiece(Square.at(row - 2, col)) && !board.getPiece(Square.at(row - 1, col))) {
                    moves.push(Square.at(row - 2, col));
                    moves.push(Square.at(row - 1, col));

                } else if (!board.getPiece(Square.at(row - 1, col))) {
                    moves.push(Square.at(row - 1, col));
                }


            } else {

                if (row - 1 >= 0 && !board.getPiece(Square.at(row - 1, col))) {
                    moves.push(Square.at(row - 1, col))
                }

                //can take diagonal opposing piece
                if ((row - 1) >= 0 && (col - 1 >= 0)
                    && board.getPiece(Square.at(row - 1, col - 1)) !== undefined
                    && board.getPiece(Square.at(row - 1, col - 1)).player === Player.WHITE
                    && !(board.getPiece(Square.at(row - 1, col - 1)) instanceof King)) {
                    moves.push(Square.at(row - 1, col - 1));
                }

                if ((row - 1) >= 0 && (col - 1 >= 0)
                    && board.getPiece(Square.at(row - 1, col + 1)) !== undefined
                    && board.getPiece(Square.at(row - 1, col + 1)).player === Player.WHITE
                    && !(board.getPiece(Square.at(row - 1, col - 1)) instanceof King)) {
                    moves.push(Square.at(row - 1, col + 1));
                }
            }




        }
        return moves
    }
}
