// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var element = document.body;
  // var nodeList = element.classList;

  //list of child nodes
  var nodeChildren = element.childNodes;

//for each node in 'body'
  //run function(node)
  for (var i =0; i<nodeChildren.length; i++){
    var node= nodeChildren[i]; 
    // console.log("node: ",node);   
    checkNodes(node);
  }

//function(node)
  //if node has children
    //run function(child)
  //if node.classlist contains className
    //add node to output

  function checkNodes(element){
    if(element.hasChildNodes()){
      for (var i=0; i<element.childNodes.length; i++){
        checkNodes(element.childNodes[i]);
      }
    }  

    var nodeClassList = element.classList;
    if(nodeClassList !== undefined){
        // if (nodeClassList.includes(className)){
        //   output.push(element);
        // }
        for(var i = 0; i < nodeClassList.length; i++){
          if(nodeClassList[i] === className){
            output.push(element);
          }
        }
      }
  }



  // if (nodeChildren.hasChildNodes()){
  //   for (var i=0; i< nodeChildren.length; i++){
  //    output.push(checkNodes(nodeChildren));
  //   }
  //   element = nodeChildren.firstChild;
  //   checkNodes(nodeChildren);
  // }
  
 console.log("output: ", output);
  return output;
};
