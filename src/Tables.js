import React from 'react'
import { Table } from 'react-bootstrap'

const Tables = ({ filmy }) => {
  console.log({})
  return (
    <Table striped bordered size="sm" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Film Name</th>
          {filmy[0].day.map(({ dayWeek }) => (
            <td>{dayWeek}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filmy.map(({ nameFilm, day }, index) => (
          <tr>
            <td>{index}</td>
            <td>{nameFilm}</td>
            {day.map(({ price }) => (
              <td>{price}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Tables
