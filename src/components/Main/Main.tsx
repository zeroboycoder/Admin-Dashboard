import React from 'react'
import Cards from './Cards/Cards'
import Table from '../Table/table'
import "./Main.css"

const Main = () => {
    return <div className="Main">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
}

export default Main