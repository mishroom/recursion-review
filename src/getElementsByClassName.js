// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var element = document;

  var nodeChildren = element.childNodes;

  for (var i = 0; i < nodeChildren.length; i++) {
    var node = nodeChildren[i]; 
    checkNodes(node);
  }

  function checkNodes(element) {
    if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        checkNodes(element.childNodes[i]);
      }
    }  

    var nodeClassList = element.classList;
    if (nodeClassList !== undefined) {
      for (var i = 0; i < nodeClassList.length; i++) {
        if (nodeClassList[i] === className) {
          output.push(element);
        }
      }
    }
  }
  
  return output.reverse();
};
