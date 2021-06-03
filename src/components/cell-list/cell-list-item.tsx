import React from 'react';
import {Cell} from "../../Interfaces/cell";
import {CellType} from "../../constants/cell-types";
import Code from "../../views/Code";
import TextToMdEditor from "../../views/Markdown";
import ActionBar from "../action-bar";
import './cell-list-item.css'

interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({cell}) => {
    let child: JSX.Element;
    if (cell.type === CellType.CODE) child = <>
        <div className="action-bar-wrapper">
            <ActionBar id={cell.id}/>
        </div>
        <Code cell={cell}/>
    </>
    else child = <>
        <TextToMdEditor cell={cell}/>
        <ActionBar id={cell.id}/>
    </>

    return (
        <div className="cell-list-item">
            {child}
        </div>
    );
};

export default CellListItem;