import React, { Suspense } from 'react'

const EmployeesTable = React.lazy(() => import('../components/EmployeesTable'))

const EmployeesList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <EmployeesTable />
      </main>
    </Suspense>
  )
}

export default EmployeesList