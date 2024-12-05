import { Link } from "react-router-dom";


const SingleUser = ({user}) => {
  // console.log(user)
  const {id, username,name,phone}=user
  return (
    <div style={{border:'2px solid red',borderRadius:'10px',display:'grid',justifyContent:'center'}}>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{phone}</p>
      <Link to={`/about/${id}`} >Details</Link>
    </div>
  ) 
};

export default SingleUser;