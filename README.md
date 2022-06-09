# Standard Library for JavaScript

To install this package run:
`npm install dsplus` or `yarn add dsplus`

Data Structures

-   <a href="#sll">Singly Linked List</a>

<h2 id="sll">Singly Linked List</h2>
<p>
Just create a instance of SinglyLinkedList class and store data on it. To create instance of SinglyLinkedList you just need to write a simple code.
</p>

`let store = new SinglyLinkedList();`

<p>
You can initially store data in this data structure by passing data in the constructor of SinglyLinkedList. The number of the parameter is not fixed. You can provide 2, 3, 4, ..., n number of data as arguments. If you just want to create a empty linked list then you do not need to provide any data as argument.
</p>
For example the following codes are valid-

-   `let store = new SinglyLinkedList(1, 'string', { x: 'object' }, [1, 3, 4]);`
-   `let store = new SinglyLinkedList({ x: 'object-1' }, { x: 'object-2' });`
-   `let store = new SinglyLinkedList();`

### Methods

<b>SinglyLinkedList.pushFront(data)</b> Time complexity: O(1)

<p>
    Parameter 'data' can be a number, string, object, array or a boolean value. The primary and only job of this method is store the provided data at the first position of the list. This method will return nothing.
</p>

