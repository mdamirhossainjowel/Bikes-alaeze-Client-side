import React from "react";

const Blog = () => {
  return (
    <section>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center text-accent font-semibold">
                  How will you improve the performance of a React Application?
                </h1>
                <p className="text-xl">
                  1.Keeping component state local where necessary <br />
                  2.Memoizing React components to prevent unnecessary re-renders
                  <br />
                  3.Code-splitting in React using dynamic import()
                  <br />
                  4.Windowing or list virtualization in React
                  <br />
                  5.Lazy loading images in React
                </p>
              </div>
            </div>
            <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center text-accent font-semibold">
                  What are the different ways to manage a state in a React
                  application?
                </h1>
                <p className="text-xl">
                  There are four main types of state you need to properly manage
                  in your React apps:
                  <br />
                  1. Local state
                  <br />
                  2. Global state
                  <br />
                  3. Server state
                  <br />
                  4. URL state
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center text-accent font-semibold">
                  How does prototypical inheritance work?
                </h1>
                <p className="text-xl">
                  he Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object.getPrototypeOf and
                  Object.
                </p>
              </div>
            </div>
            <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center text-accent font-semibold">
                  You have an array of products. Each product has a name, price,
                  description, etc. How will you implement a search to find
                  products by name?
                </h1>
                <p className="text-xl">
                  By using include method whice will return the similer names.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center text-accent font-semibold">
                  Why you do not set the state directly in React. For example,
                  if you have const [products, setProducts] = useState([]). Why
                  you do not set products = [...] instead, you use the
                  setProducts
                </h1>
                <p className="text-xl">
                  It returns a pair of values: the current state and a function
                  that updates it. This is why we write const [count, setCount]
                  = useState(). This is similar to this.state.count and
                  this.setState in a class, except you get them in a pair. If
                  you’re not familiar with the syntax we used, we’ll come back
                  to it at the bottom of this page.
                </p>
              </div>
            </div>
            <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center text-accent font-semibold">
                  What is a unit test? Why should write unit tests?
                </h1>
                <p className="text-xl">
                  Unit testing involves testing individual components of the
                  software program or application. The main purpose behind this
                  is to check that all the individual parts are working as
                  intended. A unit is known as the smallest possible component
                  of software that can be tested. Generally, it has a few inputs
                  and a single output. <br />
                  For the best practice, all projects must be under unit
                  testing, but normally it is used for larger projects. Smaller
                  projects can still benefit from unit tests, but project
                  managers and clients should evaluate the time needed to
                  develop unit tests during the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
