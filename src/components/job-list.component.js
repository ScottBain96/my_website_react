import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Job = props => (
  <tr>
    <td>{props.job.username}</td>
    <td>{props.job.description}</td>
    <td>{props.job.salary}</td>
    <td>{props.job.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.job._id}>edit</Link> | <a href="#" onClick={() => { props.deleteJob(props.job._id) }}>delete</a>
    </td>
  </tr>
)

export default class JobList extends Component {
  constructor(props) {
    super(props);

    this.deleteJob = this.deleteJob.bind(this)

    this.state = {jobs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/jobs/')
      .then(response => {
        this.setState({ jobs: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteJob(id) {
    axios.delete('http://localhost:5000/jobs/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      jobs: this.state.jobs.filter(el => el._id !== id)
    })
  }

  jobList() {
    return this.state.jobs.map(currentjob => {
      return <Job job={currentjob} deleteJob={this.deleteJob} key={currentjob._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Available Jobs</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Salary</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.jobList() }
          </tbody>
        </table>
      </div>
    )
  }
}