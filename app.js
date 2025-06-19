import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", {id: 'parent'}, [
    React.createElement("h1", {id: 'header'}, "Hello From React"),
    React.createElement("p", {id: 'description'}, "This is a paragraph")
]) ;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);