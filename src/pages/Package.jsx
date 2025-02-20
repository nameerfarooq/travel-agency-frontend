import { useParams } from "react-router-dom";

const Package = () => {
  const params = useParams();
  return <div>package id is : {params.id}</div>;
};

export default Package;
