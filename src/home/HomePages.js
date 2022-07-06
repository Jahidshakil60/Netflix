import React, { useState } from 'react'
import Homes from "../components/homes/Homes"
import Trending from '../components/trending/Trending'
import Upcomming from '../components/upcomming/Upcomming'
import {upcome , latest, recommended} from "../data"

function HomePages() {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [ref, setref] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={item} title='Recommended Movies' />
    </>
  )
}

export default HomePages