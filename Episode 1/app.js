const heading = React.createElement("h1",{id : "kartik"},"hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", { id: "child1" }, "I am an h1 tag"),
      React.createElement("h2", { id: "child2" }, "I am an h2 tag")]
    )
  );
  
  root.render(parent);