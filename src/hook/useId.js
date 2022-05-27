import { useState } from "react";

const useId = (id) => {
  const [productid, setProductid] = useState("");
  return [productid, setProductid];
};
export default useId;
