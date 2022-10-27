import React from "react";
// import { BrowserRouter as router, Switch, Route,Link } from "react-router-dom";


import  post from './posts'

const postComponent = ()=>{
    return (
        <router exact path="/" component={post} ></router>
    )
}

export default postComponent