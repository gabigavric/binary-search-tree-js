//represents each node in the tree
class Node {
  constructor(value, left, right){
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

//larger nodes go to the right, smaller values left. 
class binarySearchTree{
  constructor(){
    this.rootNode = null
  }

  addNode(value){
    const node = this.rootNode;

    //create a new node if this is the first node, based on the value passed in
    if(node === null) {
      this.rootNode = new Node(value); //set the root Node to the new value we just passed in, so its no longer null
      return; 
    } 

    //if it's not the only node we have to figure out where to put the node via a recursive function called searchTree.
    else {
      const searchTree = function(node ) {
        if(value < node.value) { //if passed in value is less than current node's value, pass the node to the left side of the tree
            if(node.left === null) { 
              node.left = new Node(value) //assign node.left to the new Node (put the node on the left side)
             return;
            }else if(node.left !== null) {
             return searchTree(node.left); //this just means we are going to continue searching down the tree to see where to put the node
           }

        }else if(value > node.value){
          if(node.right === null) {
            node.right = new Node(value);
            return;
          }else if(node.right !== null) {
            return searchTree(node.right);
          }

        }else { //if value is not larger or smaller than node than that means they are equal
          return null; //if equal return null
        }
      }; 
    }

    return searchTree(node); //how we initially call the search tree function
  }

  findMin() {
    let currentNode = this.rootNode;
    while(currentNode.left !== null){ //while their are still numbers on the left (no null values for the left-most node)
      currentNode = currentNode.left; //set the current node as whatever the left-most node is
    }//stop 
    return currentNode.value; //return the left-most node, the one
  }

  findMax(){
    let currentNode = this.rootNode;
    while(currentNode.right !== null){
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
}


// explenation on using addNode() - add 23 if 50 and 17 already exist
//         50       
//        /    
//       17    
//      

// 1) Its first going to see that the node is nut null becuase we have things in the tree, so it runs line 50's searchTree function with 50 as the root node argument
// 2) Then its gonna see that the value 23 is less than 50 on line 38 (node.value), so it goes left and uses that nodes value as the argument to searchTree(aka 17)
// 3) It sees that 23 is more than 17 (the node.value) so it goes right (line 36) to return line 27. It see's that the right node is null, 
// so it creates a new Node with 23 as the value



