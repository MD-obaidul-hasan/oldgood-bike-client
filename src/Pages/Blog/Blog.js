
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div><h2 className='text-xl font-bold text-orange uppercase items-center text-center'> Welcome to our blog</h2></div>
        <div className='grid grid-cols-2 gap-4 my-20'>
            
            <div className="card w-96 bg-gray-500 text-primary-content">
                
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself.React state management is basically half of a React app. It includes all the data. The other half is the presentation including the HTML, CSS, and formatting. State and state management is relied on by presentation part of the app. The only time a React app will re-rendered is when state changes.
                        Here are all the sections included in this course:

                        useState
                        useReducer
                        useMemo & useCallback
                        useEffect
                        useRef
                        Context and Custom Hooks
                        React Query & React Location
                        Zustand
                        Valtio.</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-cyan-600 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title"> How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
             </div>

            <div className="card w-96 bg-orange-600 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title"> What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn">Buy Now</button> */}                 </div>
                </div>
            </div>

            <div className="card w-96 bg-yellow-600 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Blog;