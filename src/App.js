import React, { useEffect, useState } from "react";
import "./App.css";


function App() {

  const [message, setMessage] = useState([]);
  const [val, setVal] = useState([]);

  useEffect(() => {
     const Tabel_1 = fetch("http://localhost:3000/table1").then(res=>res.json())
     const Tabel_2 = fetch("http://localhost:3000/table2").then(res=>res.json())

     Promise.all([Tabel_1,Tabel_2]).then(([data1,data2])=>{
      setMessage(data1);
      setVal(data2);
      console.log(data1,data2);
     }).catch(error=>{
      console.log(error);
     })

  }, []);
  
  return <div className="App">
       <>
       <br/>
       <h5>Building Data Table 1</h5>
       <table>
        <tbody>
        <tr>
                    <th>ID</th>
                    <th>Template Type</th>
                    <th>Colum 1</th>
                    <th>Colum 2</th>
                    <th>Colum 3</th>
                    <th>Colum 4</th>
                    <th>Colum 5</th>
                    <th>Colum 6</th>
                    <th>Colum 7</th>
                    <th>Colum 8</th>
                    <th>Colum 9</th>
                    <th>Qty</th>
        </tr>
        {message.map((values, key) => {
                    return (
                        <tr key={key}>
                            <td>{values.id}</td>
                            <td>{values.Template_Type}</td>
                            <td>{values.Colum1}</td>
                            <td>{values.Colum2}</td>
                            <td>{values.Colum3}</td>
                            <td>{values.Colum4}</td>
                            <td>{values.Colum5}</td>
                            <td>{values.Colum6}</td>
                            <td>{values.Colum7}</td>
                            <td>{values.Colum8}</td>
                            <td>{values.Colum9}</td>
                            <td>{values.Qty}</td>
                        </tr>
                    )
                })}
          </tbody>
       </table>
       </>
       <br/>
       <br/>
       <h5>Building Data Table 2</h5>
       <table>
        <tbody>
        <tr>
                    <th>ID</th>
                    <th>Template Type</th>
                    <th>Colum 1</th>
                    <th>Colum 2</th>
                    <th>Colum 3</th>
                    <th>Colum 4</th>
                    <th>Colum 5</th>
                    <th>Colum 6</th>
                    <th>Colum 7</th>
                    <th>Colum 8</th>
                    <th>Colum 9</th>
                    <th>Qty</th> 
        </tr>
        {val.map((x,key2)=>{
                   return(
                        <tr key={key2}>
                            <td>{x.Nos}</td>
                            <td>{x.Template}</td>
                            <td>{x.Colum_1}</td>
                            <td>{x.Colum_2}</td>
                            <td>{x.Colum_3}</td>
                            <td>{x.Colum_4}</td>
                            <td>{x.Colum_5}</td>
                            <td>{x.Colum_6}</td>
                            <td>{x.Colum_7}</td>
                            <td>{x.Colum_8}</td>
                            <td>{x.Colum_9}</td>
                            <td>{x.Qty_all}</td>
                         </tr>
                    )
                })}
         </tbody>
       </table>
  </div>;
}

export default App;

