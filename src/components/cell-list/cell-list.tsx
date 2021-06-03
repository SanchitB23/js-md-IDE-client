import React, {Fragment} from 'react';
import {useTypedSelector} from "../../hooks/use-typed-selector"
import CellListItem from "./cell-list-item";
import AddCell from "../add-cell";

const CellList: React.FC = () => {
    const cells = useTypedSelector(({cells}) => cells?.order.map((id) => cells?.data[id]))

    const renderedCells = cells?.map((cell) => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell}/>
            <AddCell previousCellID={cell.id}/>
        </Fragment>
    ))

    return (
        <div>
            <AddCell forceVisible={cells?.length === 0} previousCellID={null}/>
            {renderedCells}
        </div>
    );
};

export default CellList;