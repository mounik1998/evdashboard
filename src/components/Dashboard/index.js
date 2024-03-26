import {Component} from 'react'
import {v4} from 'uuid'

import {IoHomeOutline} from 'react-icons/io5'
import {CiDeliveryTruck} from 'react-icons/ci'
import {TbRecharging, TbBrandGoogleAnalytics} from 'react-icons/tb'
import {GiPlanePilot} from 'react-icons/gi'
import {GrSchedules} from 'react-icons/gr'
import {RiAdminLine} from 'react-icons/ri'
import {FaRegBell} from 'react-icons/fa6'
import {FaRegUserCircle} from 'react-icons/fa'

import './index.css'

const reports = [
  {
    id: v4(),
    license: 'FE213KM',
    make: 'BYD Auto',
    vin: 'VIN101',
    model: 'Class 5F cab & chasis 2022',
    type: 'Truck',
    date: '2024/03/01',
    milesDriven: 250,
  },
  {
    id: v4(),
    license: 'FE220KM',
    make: 'Tesla',
    vin: 'VIN102',
    model: 'Semi Delivery 2022',
    type: 'Truck',
    date: '2024/03/5',
    milesDriven: '150',
  },
  {
    id: v4(),
    license: 'FE223KM',
    make: 'Tesla',
    vin: 'VIN103',
    model: 'Semi Delivery 2021',
    type: 'Van',
    date: '2024/03/8',
    milesDriven: '225',
  },
  {
    id: v4(),
    license: 'FE225KM',
    make: 'TATA',
    vin: 'VIN104',
    model: 'Food truck 2020',
    type: 'Van',
    date: '2024/03/15',
    milesDriven: '55',
  },
  {
    id: v4(),
    license: 'FE254KM',
    make: 'Ashok',
    vin: 'VIN105',
    model: 'Semi Delivery 2021',
    type: 'Bus',
    date: '2024/03/2',
    milesDriven: '55',
  },
  {
    id: v4(),
    license: 'FE241KM',
    make: 'Maruthi',
    vin: 'VIN107',
    model: 'Semi Delivery 2019',
    type: 'Car',
    date: '2024/03/4',
    milesDriven: '320',
  },
]

class Dashboard extends Component {
  state = {
    isDisplay: false,
    category: 'miles',
  }

  getReport = e => {
    e.preventDefault()
    const {category} = this.state
    if (category === 'miles') {
      this.setState({isDisplay: true})
    }
  }

  setCategory = e => {
    this.setState({category: e.target.value})
  }

  render() {
    const {isDisplay} = this.state
    return (
      <div className="reports-main-page">
        <div className="nav-container">
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dhbsc0v2m/image/upload/v1711422946/zhxsz3cqfsejasuuth0p.avif"
              alt="logo"
              className="logo-image"
            />
            <h1>
              Electrify<span className="logo-span">It</span>
            </h1>
          </div>

          <ul className="nav-list">
            <li className="list-item">
              <IoHomeOutline className="list-icon" />
              <p>Overview</p>
            </li>
            <li className="list-item">
              <CiDeliveryTruck className="list-icon" />
              <p>Vehicles</p>
            </li>
            <li className="list-item">
              <TbRecharging className="list-icon" />
              <p>Charging</p>
            </li>
            <li className="list-item">
              <GiPlanePilot className="list-icon" />
              <p>Drivers</p>
            </li>
            <li className="list-item">
              <GrSchedules className="list-icon" />
              <p>Schedules</p>
            </li>
            <li className="list-item-selected">
              <TbBrandGoogleAnalytics className="list-icon" />
              <p>Reports</p>
            </li>
            <li className="list-item">
              <RiAdminLine className="list-icon" />
              <p>Admin Panel</p>
            </li>
          </ul>
        </div>

        <div className="reports-container">
          <div className="reports-startline">
            <h1>Reports</h1>
            <div>
              <FaRegBell className="reports-icons" />
              <FaRegUserCircle className="reports-icons" />
            </div>
          </div>
          <form className="reports-form" onSubmit={this.getReport}>
            <div>
              <label htmlFor="reportSelect">Report</label>
              <select id="reportSelect" onChange={this.setCategory}>
                <option value="miles">Total Miles Driven</option>
                <option value="energy">Energy Consumption</option>
                <option value="cost">Cost Analysis</option>
              </select>
            </div>
            <div>
              <label htmlFor="reportFrequency">Frequency</label>
              <select id="reportFrequency">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="time-frame">
              <label htmlFor="date">Time frame</label>
              <div id="date">
                <label htmlFor="from">From : </label>
                <input type="date" id="from" name="from" />
                <label htmlFor="to">To : </label>
                <input type="date" id="to" name="to" />
              </div>
            </div>
            <div>
              <button type="submit">Generate Report</button>
            </div>
          </form>
          {isDisplay && (
            <div className="report-display-container">
              <ul className="report-columns column-report-styling">
                <li className="report-row-main">License Plate</li>
                <li className="report-row-main">Make</li>
                <li className="report-row-main">VIN</li>
                <li className="report-row-main">Model</li>
                <li className="report-row-main">Type</li>
                <li className="report-row-main">Date</li>
                <li className="report-row-main">Miles Driven</li>
              </ul>
              {reports.map(item => (
                <ul className="report-columns">
                  <li className="report-row">{item.license}</li>
                  <li className="report-row">{item.make}</li>
                  <li className="report-row">{item.vin}</li>
                  <li className="report-row">{item.model}</li>
                  <li className="report-row">{item.type}</li>
                  <li className="report-row">{item.date}</li>
                  <li className="report-row">{item.milesDriven}</li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Dashboard
