import React from 'react';
import "./Intro.css";
import GIF from "./img/sushi-saga-demo.gif";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="intro">
            <Link to="/app">  
            <div className="btn">
                <p className="p">X</p>
            </div>
            </Link>
            <div className="intro__left">
                <img className="gif" src={GIF} alt="" />
                <h1 className="h1title demo">DEMO</h1>
            </div>
            <div className="intro__right">
            <h1 className="h1title">Suahi Saga</h1>
            <h2 className="h1title">Project Goals:</h2>
                <p>Inspectors will be coming by to check that our patented Sushi Saga conveyor belt
                    is working properly! Oh no!</p>
                    <h2 className="h1title">Project Requirements:</h2>
                <ul>
                    <li>
                    The sushi list is properly received from the server and displayed in our app.
                    </li>
                    <li>
                    Only 4 sushi are rendered at a time.
                    </li>
                    <li>
                    Clicking the "More Sushi!" button shows the next set of 4 sushi in the list.
                    </li>
                    <li>
                    Clicking a sushi on a plate will eat the sushi, causing it to be removed from
                    its plate and an empty plate to appear on the table.
                    </li>
                    <li>
                    We need to make money! Whenever a sushi is eaten, customers should be
                    automatically charged! Based on a budget decided by you, the developer, the
                    amount of money remaining should go down by the cost of the sushi that was
                    eaten. There is a spot to display this number in the `Table` component.
                    </li>
                    <li>
                    No free meals! Customers cannot eat any sushi that exceeds the amount of
                    money remaining in their balance.
                    </li>
                    <li>
                    Sushi Wallet! Add a form for customers to add more money to their balance.
                    </li>
                </ul>

                <Link to="/app">
                <button className="introbutton">View Final Product</button>
                </Link>
                <a href="https://github.com/jaimedavid01/react-hooks-practice-sushi-saga">
                <button className="introbutton">View Code</button>
                </a>
                
            </div>
            
        </div>
    )
}

export default Intro;
