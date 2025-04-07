import React,{useState} from "react";

function Login()
{
    let [user,setUser]=useState({
      name:"",
      email:"",
      mobile:"",
      designation:"",
      gender:"",
      terms:false
    });

     function save(event){
      event.preventDefault();
        console.log(user);
    }
    function handleUser(event){
        const type=event.target.type;
        setUser({...user, [event.target.name]: (type=="checkbox" ? event.target.checked : event.target.value)})
    }
    return(
        <>
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={(e)=>save(e)} className="p-4 border rounded shadow bg-light" style={{ width: "550px", height: "550px"}}>      
  <div className="mb-3">
    <label className="form-label" >User Name : </label>
    <input type="text" className="form-control" id="id1"  name="name" value={user.name} onChange={(e) => handleUser(e)} placeholder="Enter User Name "/>
  </div>
  <div className="mb-3">
    <label className="form-label" >Password</label>
    <input type="text" className="form-control"  name="email" onChange={(e) => handleUser(e)} value={user.email} id="id2" placeholder="Enter email"/>
  </div> 
  <div className="mb-3">
    <label className="form-label" >Mobile number</label>
    <input type="text" className="form-control"  name="mobile" onChange={(e) => handleUser(e)} value={user.mobile} id="id3" placeholder="Enter mobile"/>
  </div> 
  <div className="mb-3">
    <label className="form-label" >Designation</label>
    <select  name="designation" className= "form-select" onChange={(e) => handleUser(e)} value={user.designation} id="id4">
  <option value="">Select</option>
  <option value="Manager">Manager</option>
  <option value="Team Lead">Team Lead</option>
  <option value="Software Developer">Software Developer</option>
</select></div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="id5" checked={user.gender==="male"}  value="male" onChange={(e) => handleUser(e)}/>
  <label className="form-check-label" hrmlfor="inlineRadio1">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="id5" checked={user.gender==="female"} value="female" onChange={(e) => handleUser(e)}/>
  <label className="form-check-label" hrmlfor="inlineRadio2">Female</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" name="terms" id="id6" checked={user.terms} onChange={(e) => handleUser(e)}/>
  <label className="form-check-label" hrmlfor="flexCheckChecked">
   I agree
  </label>
</div>
  <div className="mb-3">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div> 
        </>
    )
}

export default Login