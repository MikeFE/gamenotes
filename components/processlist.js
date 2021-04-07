import React from 'react';

class ProcessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {processes: []};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {

  }

  render() {
    console.log("In processlist render");
    return (
      <table>
test
      </table>
    );
  }
}

export default ProcessList;