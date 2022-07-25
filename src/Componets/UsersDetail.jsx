import React from "react";
import { useParams } from "react-router-dom";
 const UsersDetail=()=>{
    const {id} = useParams();
    const [userDetail, setUserDetail] = React.useState([]);
    // console.log(id)
    React.useEffect(() => {
      fetch(`https://reqres.in/api/users/${id}`)
        .then((res) => res.json())
        .then((res) => setUserDetail(res));
    }, [id]); 

        return(
        <>
        <h1>user Details - {id}</h1>
        <div>
      <h4>{JSON.stringify(userDetail)} </h4>
    </div>
        </>
    )
 }

 export default UsersDetail;