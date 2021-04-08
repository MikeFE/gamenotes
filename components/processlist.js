import React from 'react';
import Table from 'react-bootstrap/Table';

class ProcessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {processes: null};
  }

  componentDidMount() {
    this.updateProcessList();
    this.timerID = setInterval(
      async () => await this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  async updateProcessList() {
    const r = await fetch('http://localhost:3000/api/processes');
    const jsondata = await r.json();
    this.setState({processes: jsondata.processes})
  }

  async tick() {
    this.updateProcessList();

    // fetch('http://localhost:3000/api/processes')
    //   .then((result) => result.json())
    //   .then(data => console.log(data));
  }

  render() {
    if (!this.state.processes) {
      return <div>HAVENT LOADED PROCESSES YET</div>
    }
    console.log(this.state.processes)
    return (
      <div class="proclist">
        <Table striped bordered rounded hover size="sm">
          <tbody>
          {this.state.processes.map((val, index) => {
            return (
              <tr>
                <td>{val}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProcessList;