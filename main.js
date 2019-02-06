import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BookList from "./booklist";
import BookInfo from "./bookinfo";


export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	
	}
	render(){

	

			
		return (
				<div className="container">
					<BookList />
					<BookInfo />
				</div>
			)
		
	}
};
