import React,{useState} from "react";




const info = [
    {
    StdId : "01",
    StdName : "Ikhlas Afzaal",
    StdEducation : "Developer",
    StdGroup : "A"
},
    {
    StdId : "02",
    StdName : "Fatima Khan",
    StdEducation : "Data Analyst",
    StdGroup : "B"
},
    {
    StdId : "03",
    StdName : "Quba Kashaf",
    StdEducation : "Data Scientist",
    StdGroup : "C"
}
]

const newvalues =[{
    StdId : "",
    StdName : "",
    StdEducation : "",
    StdGroup : ""
}]


function Task1(){


const [data, setData] = useState(info);
// const [StdId, setStdId] = useState("");
const [StdName, setStdName] = useState("");
const [StdEducation, setStdEducation] = useState("");
const [StdGroup, setStdGroup] = useState("");
const [showAlert, setShowAlert] = useState("");

function alert(){
       if (StdName === "" || StdEducation === "" || StdGroup === "") {
    // if (StdName === "" || StdEducation === "" || StdGroup === "") {
        setShowAlert(true);
    }
    else{
        const adddata = {
            StdId: new Date(),
            StdName,
            StdEducation,
            StdGroup
        }
         setData([...data, adddata]);
        setStdName(newvalues.StdName);
        setStdEducation(newvalues.StdEducation);
        setStdGroup(newvalues.StdGroup);
    }
}


function name (e){
    setStdName(e.target.value);
}
function education (e){
    setStdEducation(e.target.value);
}
function group (e){
    setStdGroup(e.target.value);
}


  const deleteInfo = (id) => {
    const updatedData = data.filter((x) => x.StdId !== id);
    setData(updatedData);
  };

return(

 <div className="container">

        <h1 className="heading" style={{color: "purple"}}>Student Info Desk!</h1>

        {showAlert && <div className="alert" style={{color: "black"}}><b>All fields are required!</b></div>}

        <input type="text" className="std inputs" placeholder="Enter Name of Student" value={StdName} onChange={name} /><br></br><br></br>
        <input type="text" className="std inputs" placeholder="Enter Education of Student" value={StdEducation} onChange={education} /><br></br><br></br>
        <input type="text" className="std inputs" placeholder="Enter Group of Student" value={StdGroup} onChange={group} /><br></br><br></br>

        <button className="btn" onClick={alert}>Add StdData</button>


    


    {data.map((x) => {
        return(
            <div key={x.StdId} className="std">
                {x.StdName} , {x.StdEducation} , {x.StdGroup}
                <button className="delete-btn" onClick={() => deleteInfo(x.StdId)}>Remove</button>
            </div>
            );

        })}

    </div>



);




}
export default Task1;