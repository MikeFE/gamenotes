import React from 'react';
import {ListGroup, Form, Badge, Button, Col, Row} from 'react-bootstrap'

class ProcessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: null,
      procselected: null
    };
  }

  componentDidMount() {
    this.updateProcessList();
    // Keep polling running processes / updating the list
    this.timerID = setInterval(
      async () => await this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Fetch process list on the system, set list of process names in state
  async updateProcessList() {
    const r = await fetch('http://localhost:3000/api/processes');
    const jsondata = await r.json();
    this.setState({processes: jsondata.processes})
  }

  async tick() {
    this.updateProcessList();
  }

  processClicked(index) {
    this.setState({procselected: this.state.processes[index]});
  }

  render() {
    if (!this.state.processes) {
      return <div>Loading process list...</div>
    }

    return (
      <div className="proclistmain">
        <div className="procheader">
          <h4>Select a game&nbsp;&nbsp;<Badge variant="light">{this.state.processes.length}</Badge></h4>
          <div className="helptext">Select a game from the list of currently running processes.</div>
        </div>
        <ListGroup className="proclistgroup">
          {/* Output each process name in the list as a clickable list group item */}
          {this.state.processes.map((val, index) => {
            return (
              <ListGroup.Item action key={index} className="procitem"
                id={`proclist-item${index}`}
                onClick={(e) => this.processClicked(index)}>
                {val}
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        <div id="proclistcontrols">
          {/* Display selected process if one exists */}
          {this.state.procselected &&
          <div className="procitem">
            Selected: {this.state.procselected}
          </div>}

          <Form inline>
            <Form.Label htmlFor="gamename" srOnly>
              Game name
            </Form.Label>
            <Form.Control
              id="gamename"

              placeholder='Notebook title goes here (e.g.: Dead Cells)'
            />

            <Button disabled={this.state.procselected === null} type="submit"
                   className="ml-1">
              Create notes
            </Button>

          </Form>
        </div>
      </div>
    );
  }
}

export default ProcessList;