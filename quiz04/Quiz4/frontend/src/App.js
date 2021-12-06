import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
	return <div className="App">
		
    <Header name={this.props.Name}/>
	<Main/>
	<Footer/>

	</div>;
};

export default App;
