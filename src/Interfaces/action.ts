import {ActionType} from "../constants/action-type";
import {CellTypes, CellDirections} from "../constants/cell-types";

export interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string,
        direction: CellDirections
    }
}

export interface DeleteCellAction {
    type: ActionType.DELETE_CELL
    payload: string
}

export interface InsertCellBeforeAction {
    type: ActionType.INSERT_CELL_BEFORE
    payload: {
        id: string | null,
        type: CellTypes
    }
}

export interface UpdateCellAction {
    type: ActionType.UPDATE_CELL
    payload: {
        id: string,
        content: string
    }
}

export type Action =
    MoveCellAction |
    DeleteCellAction |
    InsertCellBeforeAction |
    UpdateCellAction
