import React from 'react'
import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import PerformanceEfficiencyList from '../components/PerformanceEfficiencyList/PerformanceEfficiencyList'


const PerformanceEfficiency = () => {
  return (
<>
      <Header />
      <main>
        <h1 className="display-7 ps-3 pe-3 pt-3">Performance Efficiency</h1>
        <Filters />
        <PerformanceEfficiencyList />
      </main>
    </>
  )
}

export default PerformanceEfficiency
