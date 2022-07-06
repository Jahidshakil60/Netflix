import React, { useState } from 'react'
import Homes from "../components/homes/Homes"
import Upcomming from '../components/Upcomming/Upcomming'
import {upcome} from "../data"

function HomePages() {
  const [items, setItems] = useState(upcome)
  return (
    <div>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
    </div>
  )
}

export default HomePages