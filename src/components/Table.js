import React, { Component } from "react";
import ReactTable from "react-table";
import AddItem from "./AddItem";
import "react-table/react-table.css";

export default class Table extends Component {
  state = {
    items: []
  };

  componentWillReceiveProps(props) {
    this.setState({
      items: props.items
    });
  }

  onClick = newItem => {
    if (this.state.items.length === 15) {
      console.log("Cannot exceed 15 entries");
      return;
    } else {
      let items = this.state.items;
      items.push(newItem);
      this.setState({
        items: items
      });
    }
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

  onSave = e => {
    e.preventDefault();
    console.log("Data successfully saved");
    this.props.onSave(this.state.items);
  };

  render() {
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        sortable: false,
        filterable: false,
        style: {
          textAlign: "center"
        },
        minWidth: 70
      },
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
      <div>
        <AddItem onClick={this.onClick} />
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
