import React from 'react'
// import { Link } from 'gatsby'
const dormData = require('../data/nuDorms.json')
const queryString = require('query-string')

// import Layout from '../components/layout'

const DormInfo = ({ location }) => {
  // http://localhost:8000/dorm-info?dorm=Burstein+Hall
  const dormName = queryString.parse(location.search).dorm
  const dormDetails = dormData[dormName]

  return (
    <div className="results container text-align-left">
      <div className="row">
        <div className="col-md-12">
          <h1>Hello {dormName} Resident!</h1>

          <iframe
            width="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/directions?origin=${
              dormDetails.address
            }&destination=${
              dormDetails.pollingAddress
            }&mode=walking&key=AIzaSyBkU33xVkn78h4jXLr1TXtrv6dY27eHZSk`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Your Polling Place</h3>
          <address>
            {dormDetails.pollingLoc}
            <br />
            {dormDetails.pollingAddress}
          </address>
          <h3>Extra instructions</h3>
          <p>{dormDetails.instructions}</p>
        </div>
        <div className="col-md-6">
          <h3>Details</h3>
          Ward: {dormDetails.ward}
          <br />
          Precinct: {dormDetails.precinct}
        </div>
      </div>
    </div>
  )
}

export default DormInfo
