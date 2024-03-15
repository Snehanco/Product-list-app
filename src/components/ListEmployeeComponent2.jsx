import { useEffect, useState } from "react"
import {listOfAllEmployees} from '../services/EmployeeService'

const ListEmployeeComponent2 = () => {
       
    const [employees,setEmployees]= useState([])

    useEffect(()=>{
        listOfAllEmployees().then((response)=>{
            setEmployees(response.data);

        }).catch(error=>{
            console.log(error);
        })
    },[])
    
    return(
        <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee first name</th>
                        <th>Employee last name</th>
                        <th>Employee email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
    </div>
    
  )
}
                          

export default ListEmployeeComponent2
