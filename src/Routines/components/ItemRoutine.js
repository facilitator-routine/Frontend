import React from "react";
import Handsontable from "handsontable";
import {HotTable} from "@handsontable/react";
import "handsontable/dist/handsontable.min.css";
import {Container} from "react-bulma-components";

/*The avaiable renderer-related props are:
    // - row (row index)
    // - col (column index)
    // - prop (column property name)
    // - TD (the HTML cell element)
    // - cellProperties (the cellProperties object for the edited cell)*/
const columndurationIndex = 1;
const columnDeleteIndex = 2;
class ItemRoutine extends React.Component {
    constructor(props) {
        super(props);
        const initialData = [
            {
                 type: "", duration: ""
            }
        ]
        this.hotTableRef = React.createRef()
        this.state = {
            hotSettings: {
                data: props.items.length !== 0 ? props.items : initialData,
                licenseKey: "non-commercial-and-evaluation",
                colHeaders: ["* Tipo", "Duración",""],
                columns: [
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
                        readOnly: true,
                        allowInvalid: false,
                        placeholder: 'mm:ss',
                    },
                    {}
                ],
                rowHeaders: true,
                colWidths: [ 200, 200, 80],
                dataSchema: {
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
                        props.setItems(this.getData())
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
                    if(col === columndurationIndex){
                        const cond = data[row] && data[row][col-1] !== 'Cuenta Regresiva'
                        cellPrp.readOnly = cond;
                        //cellPrp.allowEmpty = cond;
                    }
                    return cellPrp;
                },
            }
        };

    }
    addRow(event){
        event.preventDefault()
        const actualRows = this.hotTableRef.current.hotInstance.countRows()
        this.hotTableRef.current.hotInstance.alter("insert_row", actualRows + 1);
    }
    render() {

        return (
            /* <Container style={{ overflow: "hidden", height: "20vh"}}> */
            <Container>
                <button className={"button is-primary is-light"} onClick={this.addRow.bind(this)}>
                   Agregar Item
                </button>
                <HotTable settings={this.state.hotSettings} ref={this.hotTableRef}/>
            </Container>
        );
    }
}
export default ItemRoutine
