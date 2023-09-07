import React from 'react'
import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import OperationalEfficiencyList from '../components/OperationalEfficiencyList/OperationalEfficiencyList'


const OperationalEfficiency = () => {
  return (
<>
      <Header />
      <main>
        <h1 className="display-7 ps-3 pe-3 pt-3">Operational Efficiency</h1>
        <Filters />
        <OperationalEfficiencyList />
      </main>
    </>
  )
}

export default OperationalEfficiency
