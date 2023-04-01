import React from 'react';

import './qanswer.css'

const QAnswer = () => {
    return (
        <div className='pb-5 px-3 px-sm-0'>
            <h2 className='pt-5 py-4 qa-panel'><span className='text-danger'>Question</span> & <span className='text-success'>Answer </span> Blogs ??</h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>01. Difference between State and Props?</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p><b>Answer:</b></p>
                            <div>
                                <table>
                                    <tr>
                                        <th>Props</th>
                                        <th>State</th>
                                    </tr>
                                    <tr>
                                        <td>Props are read-only.</td>
                                        <td>State changes can be asynchronous.</td>
                                    </tr>
                                    <tr>
                                        <td>Props are immutable.</td>
                                        <td>State is mutable.</td>
                                    </tr>
                                    <tr>
                                        <td>Props allow you to pass data from one component to other components as an argument.</td>
                                        <td>State holds information about the components.</td>
                                    </tr>
                                    <tr>
                                        <td>Props can be accessed by the child component.</td>
                                        <td>State cannot be accessed by child components.</td>
                                    </tr>
                                    <tr>
                                        <td>Props are used to communicate between components.</td>
                                        <td>States can be used for rendering dynamic changes with the component.</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>02. How does useState work?</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p className='mb-1'><b>Answer:</b></p>
                            The useState() is a Hook that allows you to have state variables in functional components . So basically useState is the ability to encapsulate local state in a functional component. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries. It accepts an argument which is the initial value of the state property and returns the current value of state property and a method which is capable of updating that state property.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>03. What is the purpose of useEffect other than fetching data.</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                           <p> By default, effect (useEffect) run after every completed render but you can choose to fire only when certain values have changed.</p>
                            <strong>UseEffect use cases:</strong>
                            <ul>
                                <li>Running on state change: validating input field</li>
                                <li>Running on state change: live filtering</li>
                                <li>Running on state change: trigger animation on new array value</li>
                                <li>Running on props change: updating fetched api data</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <strong>04. How Does React work?</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. React is used to create modular user interfaces. It promotes the development of reusable UI components that display dynamic data.</p>
                            
                            <p>React uses a declarative paradigm, react application aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>

                            <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QAnswer;