import React from "react";

const CategoryListCard = (props) => {
  return (
    <tr className="categorylistcard">
      <td>
        <div className="td-content td-id">
          <button className="link-button">
            #{props.id}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-categoryname">
          <button className="link-button">
            {props.name}
          </button>
        </div>
      </td>
    </tr>
  )
}

export default CategoryListCard;