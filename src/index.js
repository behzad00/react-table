import React from 'react'
import ReactDOM from 'react-dom'

import PeopleTable from './PeopleTable'
import ProjectTable from './ProjectTable'

import './Table.css'

class Demo extends React.Component {
  state = {
    showing: ''
  }

  render() {
    return (
      <div style={{ margin: '0.5em' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <button onClick={e => this.setState({ showing: 'vertical' })}>
            Show People
          </button>
          <button onClick={e => this.setState({ showing: 'horizontal' })}>
            Show Projects
          </button>
        </div>
        {this.state.showing === 'vertical' && (
          <div>
            <h1>People Table</h1>
            <PeopleTable />
          </div>
        )}
        {this.state.showing === 'horizontal' && (
          <div>
            <h1>Project Table</h1>
            <ProjectTable />
          </div>
        )}
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);