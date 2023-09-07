import React from 'react'
import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import ReliabilityList from '../components/ReliabilityList/ReliabilityList'


const Reliability = () => {
  return (
<>
      <Header />
      <main>
        <h1 className="display-7 ps-3 pe-3 pt-3">Reliability</h1>
        <Filters />
        <ReliabilityList />
      </main>
    </>
  )
}

export default Reliability
