import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { CustomersTableTitles } from "./CustomersTable";
import { Status } from "./Status";

export const CustomersData = ({ value }) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 8;

  useEffect(() => {
    fetch(`https://random-data-api.com/api/v2/users?size=100&is_xml=true`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [value]);

  const filteredData = data.filter(({ first_name, last_name }) =>
    `${first_name} ${last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUsers = filteredData
    .slice(pageNumber * usersPerPage, (pageNumber + 1) * usersPerPage)
    .map(
      ({ password, email, first_name, last_name, phone_number, address }) => (
        <tr key={password} className="customer">
          <td>
            {first_name} {last_name}
          </td>
          <td>Facebook</td>
          <td>{phone_number}</td>
          <td>{email}</td>
          <td>{address.country}</td>
          <td>
            <Status />
          </td>
        </tr>
      )
    );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(0);
  };

  return (
    <>
      <form className="customers__form">
        <button className="btn-members">Active Members</button>
        <input
          placeholder="Search"
          className="customers__search"
          type="search"
          name=""
          id=""
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      <table className="customer-table">
        <CustomersTableTitles />
        <tbody>{displayUsers}</tbody>
      </table>
      <div className="customers__results">
        <p className="grey-text">
          Showing data 1 to 8 of {filteredData.length} entries
        </p>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          containerClassName={"pagination"}
          pageLinkClassName={"pagination__link"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};
