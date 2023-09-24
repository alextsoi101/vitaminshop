import React from "react";

const CategoryListCard = (props) => {
  return (
    <tr className="categorylistcard">
      <td>
        <div className="td-content td-id">
          <button className="link-button">
            #232
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-categoryname">
          <button className="link-button">
            For men
          </button>
        </div>
      </td>
    </tr>
  )
}

export default CategoryListCard;