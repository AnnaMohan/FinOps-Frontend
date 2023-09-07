import React from 'react'
import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import SecurityList from '../components/SecurityList/SecurityList'


const Security = () => {
  return (
<>
      <Header />
      <main>
        <h1 className="display-7 ps-3 pe-3 pt-3">Security</h1>
        <Filters />
        <SecurityList />
      </main>
    </>
  )
}

export default Security
