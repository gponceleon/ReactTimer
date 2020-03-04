const React=require('react');
const Nav = require('Nav');

const Main = (props) =>{
    return(
        <div>
            <Nav/>
            <div className="row">
                <div className="colum small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>   
        </div>
    ); 
}

module.exports=Main;

