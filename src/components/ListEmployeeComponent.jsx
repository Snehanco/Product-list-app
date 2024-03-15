import React from 'react'

const ListEmployeeComponent = () => {
    const dummyData=[
        {
            "id":1,
            "firstName":"ABC",
            "lastName":"XYZ",
            "email":"a.b@XYZ.com"
        },
        {
            "id":2,
            "firstName":"PQR",
            "lastName":"MNO",
            "email":"c.d@XYZ.com"
        },
        {
            "id":3,
            "firstName":"GHI",
            "lastName":"STU",
            "email":"G.H@XYZ.com"
        }
    ]
  return (
    <>
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
                        dummyData.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
    </div>
    </>
  )
}

export default ListEmployeeComponent
