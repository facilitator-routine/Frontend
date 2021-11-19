import React from "react";
import Handsontable from "handsontable";
import {HotTable} from "@handsontable/react";
import "handsontable/dist/handsontable.min.css";
import {Container} from "react-bulma-components";


function RendererComboBoxComponent(props) {
    return (
        <>
            <select  className="select is-normal select-handsontable" >
                <option>Seleccione Tipo</option>
                <option>Cronometro</option>
                <option>Cuenta Regresiva</option>
            </select>
        </>
    );
}
function RendererOrderComponent(props) {
    return (
        <>
            <>
                { props.value || props.row + 1}
            </>
        </>
    );
}

function RendererComponent(props) {
    // The avaiable renderer-related props are:
    // - row (row index)
    // - col (column index)
    // - prop (column property name)
    // - TD (the HTML cell element)
    // - cellProperties (the cellProperties object for the edited cell)
    return (
        <>
            <i style={{ color: "#a9a9a9" }}>
               minutos:segundos,
            </i>{" "}
            {props.value}
        </>
    );
}

const columnDeleteIndex = 3;

class ItemRoutine extends React.Component {
    constructor(props, items) {
        super(props);
        const initialData = [
            {
                order: 1,
                type: "",
                duration: ""
            },
            {
                order: 2,
                type: "",
                duration: ""
            }
        ]
        this.state = {
            hotSettings: {
                //data: Handsontable.helper.createSpreadsheetData(10, 5),
                data: initialData,
                licenseKey: "non-commercial-and-evaluation",
                colHeaders: ["Posición","Tipo", "Duración","",""],
                observeChanges: true,
                columns: [
                    {
                        data: 'order',
                        type: 'numeric',
                        readOnly: true
                    },
                    {
                        data: "type",
                        editor: 'select',
                        selectOptions: ['Cronómetro', 'Cuenta Regresiva']
                    },
                    {
                        data: "duration",
                        type: 'time',
                        timeFormat: 'mm:ss',
                        correctFormat: true,
                        allowEmpty: true,
                        readOnly: true,
                        placeholder: "00:00",
                    },
                    {}
                ],
                rowHeaders: false,
                colWidths: [100, 200, 200, 80],
                dataSchema: {
                    order: null,
                    type: null,
                    duration: null,
                },
                afterOnCellMouseDown: function(e, coords, TD) {

                    if (coords.col === columnDeleteIndex) {
                        this.alter("remove_row", coords.row);
                    }
                },
                cells: function(row, col) {
                    const cellPrp = {};
                    const data = this.instance.getData();
                    if (col === columnDeleteIndex) {
                        cellPrp.readOnly = true;
                        cellPrp.renderer = function(
                            instance,
                            td,
                            row,
                            col,
                            prop,
                            value,
                            cellProperties
                        ) {
                            Handsontable.renderers.TextRenderer.apply(this, arguments);
                            td.innerHTML = '<button class="button is-small is-danger is-outlined">\n' +
                                '                <span>Borrar</span>\n' +
                                '                <span class="icon is-small">\n' +
                                '                </span>\n' +
                                '            </button>';
                        };
                    }
                    console.log("data: " + JSON.stringify(data))
                    const cond = col === 2 && data[row] && data[row][col-1] !== 'Cuenta Regresiva'
                    cellPrp.readOnly = cond; // make cell read-only if it is first row or the text reads 'readOnly'
                    return cellPrp;
                },
            }
        };
    }
    render() {
        return (
            <Container>
                    <HotTable settings={this.state.hotSettings}/>
            </Container>
        );
    }
}
export default ItemRoutine
