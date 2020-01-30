import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateJob extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeSalary = this.onChangeSalary.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        description: '',
        salary: null,
        date: new Date(),
        users: []
      }
    }

    //react lifecycle
    componentDidMount() {

     axios.get('http://localhost:5000/users/')
      .then(response => {

        if (response.data.length > 0){

          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
    }



        onChangeUsername(e) {
            this.setState({
              username: e.target.value
            })
          }
        
          onChangeDescription(e) {
            this.setState({
              description: e.target.value
            })
          }
        
          onChangeSalary(e) {
            this.setState({
              salary: e.target.value
            })
          }
        
          onChangeDate(date) {
            this.setState({
              date: date
            })
          }
        
          onSubmit(e) {
            e.preventDefault();
        
            const job = {
              username: this.state.username,
              description: this.state.description,
              salary: this.state.salary,
              date: this.state.date
            }
        
            console.log(job);
            axios.post('http://localhost:5000/jobs/add', job)
            .then(res => console.log(res.data));
            window.location = '/SearchJob';
      
    }

    render() {
        return (
        <div className="content">
          <br/>
          <h3>Post a new job</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                  {
                    this.state.users.map(function(user) {
                      return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>
            <div className="form-group">
              <label>Salary: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.salary}
                  onChange={this.onChangeSalary}
                  />
            </div>
            <div className="form-group">
              <label>Expiring Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
    
            <div className="form-group">
              <input type="submit" value="Post Job" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }
