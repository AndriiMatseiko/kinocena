import React from 'react'
import { Table } from 'react-bootstrap'

const Tables = ({ filmy,kinoteater }) => {

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
            <td><a  href={kinoteater ==='helios' ? 'https://www.helios.pl':kinoteater ==='multikino'?'https://multikino.pl':'https://www.cinema-city.pl'}
            target="_blank"
          
            rel="noreferrer">{nameFilm}</a></td>
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
