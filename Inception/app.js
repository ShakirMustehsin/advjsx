/**
 * div #parent 
 *    div # child 
 *         h1 
 *      div # child 2 
 *            h1 
 *            h2 
 */

const parent = React.createElement("div", {id : "parent"}, 
      [ React.createElement("div", {id : "child"}, 
              [React.createElement("h1", {}, " this is h1 form child 1"),
                     React.createElement("h2", {}, " this is h2 form child 1")
              ]
       ), React.createElement("div", {id : "child2"}, 
              [React.createElement("h1", {}, " this is h1 form child 2"),
                     React.createElement("h2", {}, " this is h2 form child 2")
              ]
       )]
)

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render (parent);