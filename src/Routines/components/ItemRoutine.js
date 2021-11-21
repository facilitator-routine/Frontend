import React from "react";
import Handsontable from "handsontable";
import {HotTable} from "@handsontable/react";
import "handsontable/dist/handsontable.min.css";
import {Container} from "react-bulma-components";

/* // this.alter("insert_row", coords.row);
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
}*/
const columnOrderIndex = 0;
const columndurationIndex = 2;
const columnDeleteIndex = 3;

class ItemRoutine extends React.Component {
    constructor(props) {
        super(props);
        const initialData = [
            {
                order: 1, type: "", duration: ""
            },
            {
                order: 2,type: "", duration: ""
            }
        ]
        console.log("items de routine: " + JSON.stringify(props.items))
        this.state = {
            hotSettings: {
                data: props.items.length !== 0 ? props.items : initialData,
                licenseKey: "non-commercial-and-evaluation",
                colHeaders: ["Posición","Tipo", "Duración","",""],
                columns: [
                    {
                        data: 'order',
                        type: 'numeric',
                        readOnly: true,
                        allowEmpty: false,
                    },
                    {
                        data: "type",
                        editor: 'select',
                        selectOptions: ['Cronómetro', 'Cuenta Regresiva'],
                        placeholder: "Seleccione tipo",
                    },
                    {
                        data: "duration",
                        type: 'time',
                        timeFormat: 'mm:ss',
                        correctFormat: true,
                        allowEmpty: true,
                        readOnly: true
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
                afterChange: function (change, source) {
                    if (source === 'loadData') {
                        return; //don't save this change
                    }
                    props.setItems(this.getData())
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
                            instance, td, row, col, prop, value, cellProperties
                        ) {
                            Handsontable.renderers.TextRenderer.apply(this, arguments);
                            td.innerHTML = '<button class="button is-small is-danger is-outlined">\n' +
                                '                <span>Borrar</span>\n' +
                                '                <span class="icon is-small">\n' +
                                '                </span>\n' +
                                '            </button>';
                        };
                    }
                    if (col === columnOrderIndex) {
                        cellPrp.readOnly = true;
                    }
                    if(col == columndurationIndex){
                        const cond = col === 2 && data[row] && data[row][col-1] !== 'Cuenta Regresiva'
                        cellPrp.readOnly = cond;
                    }
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
