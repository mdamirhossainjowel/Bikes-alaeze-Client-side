import React from "react";
import { useNavigate } from "react-router-dom";

const TableRow = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`updateproducts/${id}`);
  };
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={product.image} alt="user" />
          </div>
        </div>
      </td>
      <td>{product.name}</td>
      <td>{product.available_quantity}</td>
      <td>{product.minimum_quantity}</td>
      <td>{product.price}</td>
      <td>
        {
          <button
            onClick={() => handleUpdate(product._id)}
            className="btn btn-xs"
          >
            Update Product
          </button>
        }
      </td>
    </tr>
  );
};

export default TableRow;
