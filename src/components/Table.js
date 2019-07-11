import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items
    });
  }

  onDelete(id) {
    const index = this.state.items.findIndex(item => {
      return item.id === id;
    });
    let items = this.state.items;
    items.splice(index, 1);

    this.setState({
      items: items
    });
    this.props.onDelete(this.state.items);
  }

  onSave = e => {
    console.log("Data successfully saved");
    this.props.onSave(this.state.items);
  };

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
            <button onClick={() => this.onDelete(props.original.id)}>
              Delete
            </button>
          );
        },
        minWidth: 200
      }
    ];

    return (
      <div className="row">
        <div>
          <ReactTable
            columns={columns}
            data={this.props.items}
            noDataText={"No data found"}
            filterable
            defaultPageSize={10}
            showPagination={false}
          />
          <button type="submit" name="save" onClick={this.onSave}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Table;
