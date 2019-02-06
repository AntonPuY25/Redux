import React from "react";
import { connect } from "react-redux";


class BookInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}


	render(){

		let currentBook = "Nothing Selected";
		if(this.props.selBook){
			currentBook = (<li className="list-group-item">
								<h3 className="list-group-item-heading">{this.props.selBook.title}</h3>
								<p className="list-group-item-text">{this.props.selBook.author}</p>
							</li>)
		}

		return (<div className="col-xs-12">
					<ul className="list-group">
						<li className="list-group-item">Selected book is:</li>
						{currentBook}
						xz
					</ul>
				</div>
			)
	}
}

function mapStateToProps(state){
	return {selBook: state.selBook}
}

export default connect(mapStateToProps)(BookInfo);

