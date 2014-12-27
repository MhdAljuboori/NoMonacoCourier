if (document.defaultView && document.defaultView.getComputedStyle) {
  nodes = document.body.getElementsByTagName('*');

  for(var i= 0; i<nodes.length; i++){
    node = nodes[i];
    if (document.defaultView.getComputedStyle(node)['font-family'] === "monaco, courier") {
      node.style['font-family'] = "monospace";
    }
  }
}