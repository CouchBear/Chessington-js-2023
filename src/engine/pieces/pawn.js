import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        if (this.player === Player.WHITE) {




            if (location.row === 1) {
                //can move forward one step or two
                if (!board.getPiece(Square.at(location.row + 2, location.col)) && !board.getPiece(Square.at(location.row + 1, location.col))) {
                    moves.push(Square.at(location.row + 2, location.col));
                    moves.push(Square.at(location.row + 1, location.col));
                } else if (!board.getPiece(Square.at(location.row + 1, location.col))) {
                    moves.push(Square.at(location.row + 1, location.col));
                }



            }


            else {
                if (location.row + 1 < 8 && !board.getPiece(Square.at(location.row + 1, location.col))) {
                    moves.push(Square.at(location.row + 1, location.col))
                }
                //can take diagonal opposing piece

                if ((location.row + 1) < 8 && (location.col - 1 >= 0)
                    && board.getPiece(Square.at(location.row + 1, location.col - 1)) !== undefined
                    && board.getPiece(Square.at(location.row + 1, location.col - 1)).player === Player.BLACK
                    && !(board.getPiece(Square.at(location.row + 1, location.col - 1)) instanceof King)) {
                    moves.push(Square.at(location.row + 1, location.col - 1));
                }

                if ((location.row + 1) < 8 && (location.col + 1 < 8)
                    && board.getPiece(Square.at(location.row + 1, location.col + 1)) !== undefined
                    && board.getPiece(Square.at(location.row + 1, location.col + 1)).player === Player.BLACK
                    && !(board.getPiece(Square.at(location.row + 1, location.col + 1)) instanceof King)) {
                    moves.push(Square.at(location.row + 1, location.col + 1));
                }
            }


        } else {



            if (location.row === 6) {
                if (!board.getPiece(Square.at(location.row - 2, location.col)) && !board.getPiece(Square.at(location.row - 1, location.col))) {
                    moves.push(Square.at(location.row - 2, location.col));
                    moves.push(Square.at(location.row - 1, location.col));

                } else if (!board.getPiece(Square.at(location.row - 1, location.col))) {
                    moves.push(Square.at(location.row - 1, location.col));
                }


            } else {

                if (location.row - 1 >= 0 && !board.getPiece(Square.at(location.row - 1, location.col))) {
                    moves.push(Square.at(location.row - 1, location.col))
                }

                //can take diagonal opposing piece
                if ((location.row - 1) >= 0 && (location.col - 1 >= 0)
                    && board.getPiece(Square.at(location.row - 1, location.col - 1)) !== undefined
                    && board.getPiece(Square.at(location.row - 1, location.col - 1)).player === Player.WHITE
                    && !(board.getPiece(Square.at(location.row - 1, location.col - 1)) instanceof King)) {
                    moves.push(Square.at(location.row - 1, location.col - 1));
                }

                if ((location.row - 1) >= 0 && (location.col - 1 >= 0)
                    && board.getPiece(Square.at(location.row - 1, location.col + 1)) !== undefined
                    && board.getPiece(Square.at(location.row - 1, location.col + 1)).player === Player.WHITE
                    && !(board.getPiece(Square.at(location.row - 1, location.col - 1)) instanceof King)) {
                    moves.push(Square.at(location.row - 1, location.col + 1));
                }
            }




        }
        return moves
    }
}
