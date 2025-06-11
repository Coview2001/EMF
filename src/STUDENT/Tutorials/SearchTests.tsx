import React from 'react'

const SearchTests: React.FC = () => {
  return (
    <form id="form1" >
    <div>
        <table>
            <tr className='trowT'
            // style={{ verticalAlign: "central" }}
            >
                <td>
                  <select id='ddlQnsSelectionType'>
                    <option>--Select QnSelection type --</option>
                    <option value='0'>Type - 0</option>
                    <option value='1'>Type - 1</option>
                    <option value='2'>Type - 2</option>
                    <option value='3'>Type - 3</option>
                    <option value='4'>Type - 4</option>
                    <option value='5'>Type - 5</option>
                    <option value='6'>Type - 6</option>
                  </select>
                </td>
                <td>
                  <select id='ddlCountry'>
                    <option>Australia</option>
                    <option>Canada</option>
                  </select>
                </td>
                <td>
                    <button id="btnSearch">Search</button>
                </td>
            </tr>
            <tr>
                <td>
                    <label id="lblTests" ></label></td>
            </tr>
        </table>
        <br />
        <div id="divResults" className='divResultsT'
        style={{ width: "100%", height: "auto" }}
        >
            {/* <asp:Repeater id="rptTests" >
                <ItemTemplate>
                    <br />
                    <span><span><%# Container.ItemIndex + 1 %>)</span>&nbsp;&nbsp;<%# Eval("Name") %></span><br />
                </ItemTemplate>
            </asp:Repeater> */}
        </div>
    </div>
</form>
  )
}

export default SearchTests

// import React, { useState } from "react";

// const SearchTests: React.FC = () => {
//   const [qnSelectionType, setQnSelectionType] = useState<string>("");
//   const [country, setCountry] = useState<string>("Australia");
//   const [tests, setTests] = useState<{ name: string }[]>([]);

//   const handleSearch = () => {
//     setTests([]);

//     setTimeout(() => {
//       setTests([
//         { name: "Test 1" },
//         { name: "Test 2" },
//         { name: "Test 3" },
//       ]);
//     }, 500);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row align-items-center">
//         <div className="col-md-4">
//           <select
//             className="form-select"
//             value={qnSelectionType}
//             onChange={(e) => setQnSelectionType(e.target.value)}
//           >
//             <option value="">--Select QnSelection type --</option>
//             {[0, 1, 2, 3, 4, 5, 6, 8, 9].map((num) => (
//               <option key={num} value={num}>
//                 Type - {num}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="col-md-4">
//           <select
//             className="form-select"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option value="Australia">Australia</option>
//             <option value="Canada">Canada</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//       </div>

//       <div className="mt-3">
//         {tests.length > 0 && (
//           <label className="fw-bold">Search Results:</label>
//         )}
//         <div id="divResults">
//           {tests.map((test, index) => (
//             <div key={index}>
//               <span>{index + 1}) {test.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchTests;
