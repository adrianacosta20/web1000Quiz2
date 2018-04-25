
Instructions: create a new repository called ng-ds-test. Within this repo, create a README.md file. Copy and paste all of these questions into this README file and answer them.

Name and describe the two main operations of a stack (to add and remove data). push & pop- Push is when a new element is added to the stack. This is necessary for functions to work their way down the code, because in many instances, the code cannot functionally continue until it reaches a certain point within the body of the code. The only way for this point to be reached is to stack each element in sequence on top of the other. This will keep happening until there is a trigger for the pop operation, at which point, this trigger, oftentimes set by a condition such as an if statement, will begin to remove the elements that were added to the stack in the inverse order that they were added, in other words, the last element added to the stack will be the first to be removed from the top of the stack and so forth. An element that was added before another element cannot be removed from the stack without the element added after it is first removed.

Name and describe the two main operations of a queue (to add and remove data). Enqueue & Dequeue - Enqueuing, similarly to the push operation in a stack, adds a new element to the queue the difference being that enqueing adds the element to the back of the queue and not the front of the stack,whereas dequeue removes an element from the queue from the front of the queue. If you compare a queue to a stack, visually, the difference becomes clear:

Stack:

<- last element added & first to remove
<- first element added
Queue:

last element added v | | | | | | <- first element to remove

Draw the tree resulting from adding the following sequence of numbers to an empty tree: 30, 45, 15, 10, 50, 40, 20, 27

             30
           /    \
         15      45
       /    \   /  \
     10     20 40   50
              \
              27
Is this tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

The tree is balacned because there is the imbalance of the 27 node only goes one branch deeper than the rest of the tree--that being said, the tree can be made to be more balanced by applying a left rotation to 20 (leftRotation(20)), so that the order of the nodes makes more sense as in the example below:

                30
              /    \
            20      45
          /    \   /  \
        15     27 40   50
      /         
     10   
Now add 29. Is the tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

             30
           /    \
         15      45
       /    \   /  \
     10     20 40   50
              \
              27
                \
                 29
2 branches deeper than the rest of the tree,hence tree is now unbalanced. leftRotation 20 would fix this, once again:

                30

            /         \
          20          45
        /    \       /  \
      15     27     40   50
    /          \ 
  10           29
Consider the following tree:
------5
---2-----8
-1--3 0 Now add 0 to the tree. Which one is the first node to go out of balance?
8 since it is the one that is 2 branches shallower than the leftmost side of the tree

How do you fix this node? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))
rightRotation(2) would be the best fix for this tree:

-------2 ---1-----5
-0---3-----8
What are the four main steps of mergesort?
mergeSort has 2 main steps, divide and merge. When you have an unsorted array, you can divide each element into it's own array. You then merge each element (since they are considered sorted since they are now by themselves) with another element. Then you take another single element and merge with another element. Do this until all you ahve is groups of two elements. Then begin merging one group of two elements with another group of two elements. Do this until you have only groups of 4 elements. Then start merging the groups of 4 elements with each other, etc., etc.

Say you have a program which handles the login queue to a game server. The game server is able to log in one person every one second. Assume that one second must elapse after a person logs in with an empty queue before they are removed from the queue. Draw the state of the queue at 12:00:06, considering the following sequence of events:
At 12:00:00 Hades logs in
At 12:00:00 Ares logs in
At 12:00:00 Zeus logs in
At 12:00:00 Buzz Light Year logs in
At 12:00:02 Kanye West logs in
At 12:00:03 Taylor Swift logs in
At 12:00:03 Darkwing Duck logs in
At 12:00:04 Evil Mickey logs in.
Queue should look like:

Hades--Ares


Solve https://www.hackerrank.com/challenges/compare-the-triplets - be mindful that you are required to print the output to the console in exactly the format that was asked. You are not required to return a value, just print to the console. Also be mindful to use JavaScript.

Solve https://www.hackerrank.com/challenges/mini-max-sum - be mindful that you are required to print the output to the console in exactly the format that was asked. You are not required to return a value, just print to the console. Also be mindful to use JavaScript.