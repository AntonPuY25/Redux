import React from "react";
import {connect} from "react-redux";
import {Bookinfo} from "./action";
import {bindActionCreators} from "redux";


class BookList extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
			
	}

	render(){

		let goods = this.props.allBooks.map( book => {
				return (<li 
							key={book.title} 
							className="list-group-item"
							onClick={()=>{
								this.props.setActiveBook(book);
							}}
							>
							<h3 className="list-group-item-title">
							{book.title}
							</h3>
						</li>)
			} );

		return (<div className="col-xs-12" style={{height: 500, backgroundColor: "lightgrey"}}>
					<ul className="list-group">
						{goods}
					</ul>
					
				</div>
			)
	}
}
function mapStateToProps(state){
    return{allBooks:state.allBooks}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({setActiveBook:Bookinfo},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);