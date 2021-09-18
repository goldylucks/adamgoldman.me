// @flow

import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faTrash from "@fortawesome/free-solid-svg-icons/faTrash";
import ReactTable from "react-table";

import Link from "../../components/Link";

type Props = {
  path: string,
};

class AdminToolResponses extends React.Component<Props> {
  state = {
    toolResponses: [],
    isFetchingToolResponses: true,
  };
  componentDidMount() {
    this.fetchToolResponses();
  }
  render() {
    const { isFetchingToolResponses } = this.state;
    return (
      <div>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle">Tool Histories</h1>
          </div>
          {isFetchingToolResponses ? "Loading responses" : this.renderTable()}
          <hr />
        </div>
      </div>
    );
  }
  renderTable() {
    return (
      <ReactTable
        data={this.state.toolResponses}
        columns={[
          {
            Header: "Date",
            id: "date",
            accessor: this.renderDate,
          },
          {
            Header: "User",
            id: "user",
            accessor: (item) => this.renderUser(item),
          },
          {
            Header: "wpUserId",
            accessor: "wpUserId",
          },
          {
            Header: "Tool",
            accessor: "title",
          },
          {
            Header: "Rating",
            className: "text-center",
            accessor: "rating",
          },
          {
            Header: "actions",
            accessor: "_id",
            className: "text-center",
            Cell: ({ value: id }) => (
              <a
                onClick={() => {
                  this.deleteResponse(id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </a>
            ),
          },
        ]}
        className="-striped -highlight"
      />
    );
  }
  renderDate = ({ createdAt, _id }) => (
    <Link to={`${this.props.path}/${_id}`}>
      {createdAt.replace(/(-|T)/g, " ").split(".")[0]}
    </Link>
  );

  renderUser = (item) => {
    const { firstName, lastName } = item;
    console.log(item);
    if (firstName || lastName) {
      return `${firstName} ${lastName}`;
    }
    if (!item.user) {
      return "user not found";
    }
    if (!item.user.name) {
      return "user name not found";
    }
    return item.user.name;
  };
  fetchToolResponses() {
    axios
      .get("/api/toolResponses")
      .then(({ data }) =>
        this.setState({ toolResponses: data, isFetchingToolResponses: false })
      )
      .catch((err) => {
        global.console.log(err);
        this.setState({ isFetchingToolResponses: false });
      });
  }
  deleteResponse(id) {
    if (!global.confirm("delete?")) {
      return;
    }
    axios
      .delete(`/api/toolResponses/${id}`)
      .then(() => {
        this.setState({
          toolResponses: this.state.toolResponses.filter((tr) => tr._id !== id),
        });
      })
      .catch((err) => console.error(err));
  }
}

export default AdminToolResponses;

// (
//   <table className="table">
//     <thead>
//       <tr>
//         <th scope="col">Date</th>
//         <th scope="col">User</th>
//         <th scope="col">Tool</th>
//         <th scope="col">Current Step</th>
//         <th scope="col">Status</th>
//         <th scope="col">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {toolResponses.map(item => (
//         <tr key={item._id}>
//           <th scope="col">
//             <Link to={`${this.props.path}/${item._id}`}>
//               {`${new Date(item.createdAt)}`}
//             </Link>
//           </th>
//           <th scope="col">{this.renderUser(item.user)}</th>
//           <th scope="col">{item.title}</th>
//           <th scope="col">{item.currentStepNum}</th>
//           <th scope="col">{item.status}</th>
//           <th scope="col">
//             <a onClick={() => { this.deleteResponse(item._id) }}><FontAwesomeIcon icon={faTrash} /></a>
//           </th>
//         </tr>
//     ))}
//     </tbody>
//   </table>
// )
