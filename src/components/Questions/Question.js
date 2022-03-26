import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h3>How React works?</h3>
                <p>React works with the help of two packages one is react and the other is react dom. React convert js code to html code. Then show the html code in browser with the help of react dom. It works without reloading the page. That is why react works very fast and instantly.</p>
            </div>
            <div>
                <h3>Props Vs State?</h3>
                <p>State:
                    State is used for doing any change in site. It is a own object of any component. Component render when the value of state will change.
                    Props:
                    Wc can send props when creating component as component attribute. It carries attributes from parent component to child component. Props value is read only, that means the value can't change in child component.</p>
            </div>
            <div>
                <h3>How useState Works?</h3>
                <p>UseState returns a state variable and a function to set the the value of the variable. The initial value of the variable has to declare in state. And after that for updating the value of the variable need to use the returned function.</p>
            </div>
        </div>
    );
};

export default Question;