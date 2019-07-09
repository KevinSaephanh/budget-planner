import React, { Component } from "react";
import ReactTable from "react-table";
import ItemForm from "./ItemForm";
import "react-table/react-table.css";

class Table extends Component {
  constructor(props) {
    super(props);

    if (props !== null) {
      this.state = {
        items: props.items
      };
    } else {
      this.state = {
        items: []
      };
    }
  }

  onClick = newItem => {
    let items = this.state.items;
    items.push(newItem);

    this.setState({
      items: items
    });
  };

  deleteRow(id) {
    const index = this.state.items.findIndex(item => {
      return item.id === id;
    });
    let items = this.state.items;
    items.splice(index, 1);

    this.setState({
      items: items
    });
  }

  onSave() {
    console.log("Data successfully saved");
    this.props.onSave(this.state.items);
  }

  render() {
    const columns = [
      {
        Header: "Item",
        accessor: "name",
        sortable: false,
        filterable: true,
        style: {
          textAlign: "center"
        },
        minWidth: 250
      },
      {
        Header: "Cost",
        accessor: "cost",
        sortable: true,
        filterable: true,
        style: {
          textAlign: "center"
        },
        minWidth: 200
      },
      {
        Header: "Actions",
        sortable: false,
        filterable: false,
        Cell: props => {
          return (
            <button onClick={() => this.deleteRow(props.original.id)}>
              Delete
            </button>
          );
        },
        minWidth: 200
      }
    ];

    return (
      <div className="row">
        <ItemForm onClick={this.onClick} />
        <div style={{ margin: 10 }}>
          <ReactTable
            columns={columns}
            data={this.state.items}
            noDataText={"No data found"}
            filterable
            defaultPageSize={10}
            showPagination={false}
          />
          <button
            type="submit"
            name="save"
            style={{ margin: 25 }}
            onClick={this.onSave}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Table;
