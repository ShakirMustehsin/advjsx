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

// ********** key points to remeber : **********

//     1) The root.render can be an elements etc even just a header div or a simple tagg, and the redering doesn't mean appending, the rendering replaces the already existing code there....that's why it is called a library not a framework!

//    //2)other thing : this is the core way of writing react, just for the sake of demonstration purpose. The other and industry standard, way will be in next sub-directories.