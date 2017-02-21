import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import {grey50} from 'material-ui/styles/colors';
import topicsArray from './data.js'
import DownArrow from 'react-icons/lib/md/keyboard-arrow-down';
import './App.css';

class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {input: "", randomConcepts: []}
  }

handleChange = (event) => {
  this.setState({input: event.target.value})
}

handleGenerate = () => {

  const listofitems = topicsArray.slice(0)

  function selectItem(arr) {
      const item = arr[Math.floor(Math.random() * arr.length)]
      arr.splice(arr.indexOf(item), 1)
      return item
  }

  const items = [selectItem(listofitems), selectItem(listofitems), selectItem(listofitems)];

  this.setState({randomConcepts: items});

}


handleSubmit = () => {
  this.props.submitSubmission(this.state.input, this.state.randomConcepts);
  this.setState({input: "",randomConcepts: []});
}

handleScroll() {
  //var itemComponent = this.refs.textInput;
  //var domNode = React.findDOMNode(itemComponent);
  //const element =  document.getElementByClassName("dataTable");
  //element.scrollIntoView({behavior: "smooth"});
 // const tryNode1 = ReactDOM.findDOMNode("dataTable");
 // const node = ReactDOM.findDOMNode(this.refs.dataTable);
  var viewTable = document.getElementById('data_table')
  viewTable.scrollIntoView({behavior: "smooth"})

}


  render() {

    return (
        <div className="main-container">
          <div className="main">
              <h1 className="main-head">_Concept__Combinations_</h1>
              <p className="main-subhead">
                  Imagination is Beautiful.
              </p>
              <div className="main-button">
              <RaisedButton label="Generate"
                              secondary={true}
                              fullWidth={false}
                              onClick={this.handleGenerate}/>
              </div>

                {this.state.randomConcepts.length > 0 &&

                    <div>
                      <div className="main-list">
                        <div className='concept-list-hoz'>
                          {this.state.randomConcepts.map((concept,i) => {
                            return(<li key={i}>{concept}</li>)
                          })}
                        </div>
                      </div>
                        <div className="main-text-field">
                          <TextField
                            value={this.state.input}
                            hintText="Write your concept..."
                            hintStyle={{color: grey50}}
                            multiLine={true}
                            rows={1}
                            rowsMax={50}
                            onChange={this.handleChange}
                          />
                          <RaisedButton label="Submit"
                                        primary={true}
                                        disabled={this.state.input === ""}
                                        onClick={this.handleSubmit}/>
                        </div>
                      </div>

                }
          </div>
          <div className="main-arrow"><DownArrow size={45} onClick={this.handleScroll} /></div>
          <div className="main-data-container">
            <div className="data-table" id="data_table" ref={(thisInput) => {this.textInput = thisInput}}>
                  <Table style={{backgroundColor: '#25aabb'}}>
                     <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
                      <TableRow>
                        <TableHeaderColumn style={{fontWeight: 'bold', color: '#212121', fontSize: '16px'}} >Date</TableHeaderColumn>
                        <TableHeaderColumn style={{fontWeight: 'bold', color: '#212121', textAlign: 'center', fontSize: '16px'}}>Terms</TableHeaderColumn>
                        <TableHeaderColumn style={{fontWeight: 'bold', color: '#212121', textAlign: 'right', fontSize: '16px'}}>Concept</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} >
                       {this.props.submission.map((submission,i) =>
                          {return(<TableRow  key={i}>
                                    <TableRowColumn style={{color: '#ffffff', fontSize: '14px'}}>{submission.date}</TableRowColumn>
                                    <TableRowColumn style={{textAlign: 'center', color: '#000000', fontSize: '14px'}}>{submission.randomconcepts}</TableRowColumn>
                                    <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', textAlign: 'right', color: '#ffffff', fontSize: '14px'}}>{submission.concept}</TableRowColumn>
                                  </TableRow>
                                  )
                          })}
                    </TableBody>
                  </Table>
            </div>
        </div>
      </div>

    );
  }
}

export default App;







