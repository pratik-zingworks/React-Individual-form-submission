import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DisplayCard from "../DisplayCard/DisplayCard.component";
import './DisplayAccounts.style.css'

const DisplayAccount = () => {
    const [data, setData] = useState();
    const [flag, setFlag] = useState(true)


    useEffect(() => {
        if(JSON.parse(window.localStorage.getItem('users')) !== null){
            setData(JSON.parse(window.localStorage.getItem('users')))
        }
      }, [flag]);

      const handleFlag = () => {
          setFlag((f) => !f)
      }
    return ( 
        <div className="account-container">
            <div className="header">
                <h3 className="heading">All Accounts</h3>
            </div>
            <div className="display-body">
                <Grid container spacing = {2}>
                {
                data === undefined?
                <h3>No Data Found</h3>
                :
                data.map((data => (
                    <Grid item md = {4} lg = {3} sm = {6} xs = {12} xl = {2} key={data.id}>
                     <DisplayCard Title = {data.userName} Email = {data.userEmail} Id = {data.id} changeFlag = {handleFlag}/>
                    </Grid>
                )))
                }
                </Grid>
            </div>
        </div>
     );
}
 
export default DisplayAccount;