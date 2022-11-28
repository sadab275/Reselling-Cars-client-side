import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p> In React apps, there are at least seven ways to handle the state.1.URL, 2.Local Storage, 3.Web State, 4.Lifted State 5.Derived State.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:

                        “The modern web developer's platform”

                        It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.



                        React is considered a UI library. They define themselves as:

                        “A JavaScript library for building user interfaces”

                        Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.



                        Last but not least, Vue.js is, according to its site:

                        “A progressive JavaScript framework”

                        Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.



                        These 3 frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;