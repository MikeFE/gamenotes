import React, { useState, useEffect } from 'react';
import {ListGroup, Form, Badge, Button} from 'react-bootstrap'

function ProcessList(props) {
  const [processes, setProcesses] = useState(null);
  const [procSelected, setProcSelected] = useState(null);
  const [timerId, setTimerId] = useState(null);

  // Fetch process list on the system, set list of process names in state
  const updateProcessList = async () => {
    const r = await fetch('http://localhost:3000/api/processes');
    const jsondata = await r.json();
    setProcesses(jsondata.processes);
  };

  useEffect(() => {
    updateProcessList();

    // Keep polling running processes / updating the list
    const tick = async () => {
      updateProcessList();
    }

    setTimerId(
      setInterval(async () => await tick(), 3000)
    );

    return () => {
      clearInterval(timerId);
    }

  }, []);


  const processClicked = (index) => {
    setProcSelected(processes[index]);
  };

  if (!processes) {
    return <div>Loading process list...</div>
  }

  return (
    <div className="proclistmain">
      <div className="procheader">
        <h4>Select a game&nbsp;&nbsp;<Badge variant="light">{processes.length}</Badge></h4>
        <div className="helptext">Select a game from the list of currently running processes.</div>
      </div>
      <ListGroup className="proclistgroup">
        {/* Output each process name in the list as a clickable list group item */}
        {processes.map((val, index) => {
          return (
            <ListGroup.Item action key={index} className="procitem"
              id={`proclist-item${index}`}
              onClick={(e) => processClicked(index)}>
              {val}
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <div id="proclistcontrols">
        {/* Display selected process if one exists */}
        {procSelected &&
        <div className="procitem">
          Selected: {procSelected}
        </div>}

        <Form inline>
          <Form.Label htmlFor="gamename" srOnly>
            Game name
          </Form.Label>
          <Form.Control
            id="gamename"
            placeholder='Game name goes here (e.g.: Dead Cells)'
          />

          <Button disabled={procSelected === null} type="submit" className="ml-1">
            Create notes
          </Button>

        </Form>
      </div>
    </div>
  )
}

export default ProcessList;