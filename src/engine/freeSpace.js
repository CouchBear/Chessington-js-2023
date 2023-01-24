import Board from "./board";
import Square from "./square";



export default function freeSpace(place1, place2) {
    let board = new Board();
    console.log(place1, place2);
    return !(Board.getPiece(Square.at(place1, place2)));
}