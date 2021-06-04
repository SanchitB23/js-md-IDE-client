import {CellType} from "../constants/cell-types";
import {useTypedSelector} from "./use-typed-selector";

export const useCumulativeCode = (cellId: string) => {
    return useTypedSelector((state) => {
        const {data, order} = state.cells!;
        const orderedCells = order.map((id) => data[id])

        const showFunc =
            `
                import _ReactDOM from "react-dom";
                import _React from "react";
                var show = (value) => {
                  const root = document.querySelector('#root')
                  if (typeof value == 'object') {
                    if (value.$$typeof && value.props) {
                      _ReactDOM.render(value,root)
                    } else {
                      root.innerHTML = JSON.stringify(value)
                    }
                  } else {
                    root.innerHTML = value
                  }
                }
            `
        const showFuncNoop = 'var show = ()=>{}'

        const cumulativeCode = []

        for (let c of orderedCells) {
            if (c.type === CellType.CODE) {
                if (c.id === cellId)
                    cumulativeCode.push(showFunc)
                else
                    cumulativeCode.push(showFuncNoop)
                cumulativeCode.push(c.content)
            }
            if (c.id === cellId)
                break
        }
        return cumulativeCode
    }).join('\n')
}
