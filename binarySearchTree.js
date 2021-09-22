//represents each node in the tree
class Node {
  constructor(value, left, right){ //three data properties
    this.value = value; //what wa are trying to store
    this.left = left || null; //pointer to left node
    this.right = right || null; //pointer to right node
  }
}

//larger nodes go to the right, smaller values left. equal nodes dont get added
 class binarySearchTree{
  constructor(){
    this.rootNode = null; //creates the root node and sets it to null
  }

  addNode(value){
    const node = this.rootNode; //reference to the root node

    //create a new node if this is the first node, based on the value passed in
    if(node === null) {
      this.rootNode = new Node(value); //set the rootNode to the new value we just passed in, so its no longer null
      return; 
    } 

    //if it's not the only node we have to figure out where to put the node via a recursive function called searchTree.
    else {
      const searchTree = function(node) {
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
          return null; //dont add data to the three
        }
      }; 
      return searchTree(node); //how we initially call the search tree function, but it can be called w/different nodes as it's going recursively through the three
    }
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

// 1) Its first going to see that the node is nut null becuase we have things in the tree, so it runs line 50's searchTree function with 50 as arg(setting 50 as root)
// 2) Then its gonna see that the value 23 is less than 50(line 28), so it goes left(line 32) and uses that node.value as the argument to searchTree(aka 17) on line 33.
// 3) jumps to line 28 and see thats not true. So goes to 36 which is true/see's that 23 is more than 17, so it goes right(line37)
// 4) It see's that the right node is null(line 37), so it creates a new nodd with 23 as the value (line 38)