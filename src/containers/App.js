import React, {Component} from 'react';
import CardList from '../components/Card/CardList';
import SearchBox from '../components/Search box/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';




class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({robots: users}) });
    }

    onSearchChanges = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriend</h1>
                <SearchBox searchChange={this.onSearchChanges}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;