import React from 'react'
import './Cards.css'
import {cardDatas} from '../../../Data/Data'
import Card from './Card/Card'

const Cards = () => {
  return (
    <div className="Cards">
        {cardDatas.map(data => <Card key={data.barValue} title={data.title} color={data.color} barValue={data.barValue} value={data.value} icon={data.icon} series={data.series} />)}
    </div>
  )
}

export default Cards