import React from "react";
import ReactDom from "react-dom";
import List from "./main";
import {createStore} from "redux";
import {Provider} from "react-redux";
import roootReducer from "./rootreducer";
 
let myStore = createStore(roootReducer);
ReactDom.render(<Provider store={myStore}><List/></Provider>,document.getElementById('test'));