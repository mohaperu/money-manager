import { Link, Switch, Route } from "react-router-dom"
import './App.css';
import { Button, TabContent } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="wrapper">
      <div className="nav-bar">

        <Link className="bold " to="/">Money Manager</Link>
        <Link className="nav-items" to="/">Home</Link>
        <Link className="nav-items" to="/Income and Expenditure">Income and Expenditure</Link>
        <Link className="nav-items" to="/My Profile">My Profile</Link>
        <Link className="nav-items" to="/About">About</Link>

      </div>
      <div className="main" >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Income and Expenditure">
            <IE />
          </Route>
          <Route exact path="/My Profile">
            <p>My Profile</p>
          </Route>
          <Route exact path="/About">
            <h1>About</h1>
            <h4>Personal money management skills include budgeting, wise use of credit, managing debt, banking, and planning for the future. Learning to manage money well can increase your financial power by making your money work harder for you. Below are suggested sources of information to help you make smart decisions about your money.</h4>
          </Route>
        </Switch>
      </div>
    </div>

  );
}

function Home() {
  const cards = [
    {
      name: "Weekly",
      money: "$18000"
    },
    {
      name: "Monthly",
      money: "$30000"
    },
    {
      name: "Yearly",
      money: "$36000"
    }
  ];
  return (
    <div className="ie">
      <div>
        <p className="title">Dashboard</p>

      </div>
      <p>Welcome to Money Mangement</p>
      <div className="cardholder2"><p className="title2">History of Income and Expenditure</p>
        <div className="card-holder">
          {cards.map((value) => <Card name={value.name} money={value.money} />)}
        </div>
        <Button variant="primary" className="viewall" >View all</Button>
      </div>
      <div className="adduser">
        <Popup />
      </div>

    </div>
  );
}

function IE() {
  return (
    <div className="ie">
      <h1>Income and Expenditure</h1>
      <h4>An income and expenditure budget for a project (or a program, or a whole organization), will show: the anticipated costs (expenditure), and funding (income) to cover those costs, for a specified period of time. You are probably already familiar with this type of budget as it is widely used in project management.</h4>
    </div>
  );
}

function Card(props) {
  return (

    <div className="card">
      <p className="cardsname">{props.name}</p>
      <p className="cardmoney">{props.money}</p>

    </div>
  );
}

function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>

            <Tabs>
              <TabList>
                <Tab>Salary</Tab>
                <Tab>Expense</Tab>
              </TabList>
              <TabPanel>
                <Modal.Body>
                  <PopupModel/>
                </Modal.Body>
              </TabPanel>

              <TabPanel>
                <Modal.Body>
                  <PopupModel/>
                </Modal.Body>
              </TabPanel>
            </Tabs>

          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function PopupModel(props) {
  return (
    <div>
      <input type="radio" name="usage" id="gap"/><label id="categories" >Office</label>
      <input type="radio" name="usage"   id="gap"/><label id="categories" >Personal</label><br/>

      <input type="checkbox"  id="gap" /><label id="categories" for="fuel">Fuel</label>
      <input type="checkbox" id="gap" /><label id="categories" for="movie">Movie</label>
      <input type="checkbox" id="gap" /><label id="categories" for="food">Food</label>
      <input type="checkbox" id="gap" /><label id="categories" for="loan">Loan</label>
      <br />
      <input type="text" placeholder="Description" />
    </div>
  );

}






export default App;
