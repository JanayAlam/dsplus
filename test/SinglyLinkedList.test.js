import assert from 'assert';
import SinglyLinkedList from '../SinglyLinkedList.js';

describe('singly linked list', function () {
    it('should add the new node in first position of the chain', () => {
        const obj_1 = { num: 1, value: '1' };
        const obj_2 = { num: 2, value: '2' };

        const sll = new SinglyLinkedList();
        sll.pushBack(obj_1);
        sll.pushFront(obj_2);
        assert.strictEqual(obj_2, sll.getHead().getData());
        assert.strictEqual(obj_1, sll.__head__.getNext().getData());
    });

    it('should add the new node in last position of the chain', () => {
        const obj_1 = { num: 1, value: '1' };
        const obj_2 = { num: 2, value: '2' };

        const sll = new SinglyLinkedList();
        sll.pushBack(obj_1);
        sll.pushBack(obj_2);
        assert.strictEqual(obj_1, sll.getHead().getData());
        assert.strictEqual(obj_2, sll.__head__.getNext().getData());
    });

    it('should delete some elements after few pop method invoking', () => {
        const arr = [1, 2, 3];
        const sll = new SinglyLinkedList(1, 2, 3, { num: 1, value: '1' }, arr);
        sll.pop(1);
        sll.pop(2);
        sll.pop(3);
        sll.pop({ num: 1, value: '1' });
        assert.strictEqual(sll.getHead().getData(), arr);
    });

    it('should return the head node', () => {
        const alam = { name: 'Alam', age: 22 };
        const zeshan = { name: 'Zeshan', age: 23 };

        const sll1 = new SinglyLinkedList(alam, zeshan);
        const sll2 = new SinglyLinkedList(zeshan, alam);
        assert.strict(sll1.getHead(), alam);
        assert.strict(sll2.getHead(), zeshan);
    });

    it('should return the tail node', () => {
        const alam = { name: 'Alam', age: 22 };
        const zeshan = { name: 'Zeshan', age: 23 };

        const sll1 = new SinglyLinkedList(alam, zeshan);
        const sll2 = new SinglyLinkedList(zeshan, alam);
        assert.strict(sll1.getTail(), zeshan);
        assert.strict(sll2.getTail(), alam);
    });

    it('should return a valid string after calling toString method', () => {
        const obj = { num: 3, value: '3' };
        const arr = [1, 2, 3, 5];
        const sll = new SinglyLinkedList(1, 2, obj, 'Hello', arr);
        assert.strictEqual(
            sll.toString(),
            `[ 1, 2, ${JSON.stringify(obj)}, "Hello", ${JSON.stringify(arr)} ]`
        );
    });

    it('should return desire data', () => {
        const obj = { index: 6, value: 6 };
        const sll = new SinglyLinkedList(
            1,
            [2, 3, 4],
            { index: 5, value: 5 },
            obj
        );

        assert.strictEqual(
            sll.find((element) => element.index === 6),
            obj
        );
    });

    it('should return null after calling find method with condition not matching', () => {
        const sll = new SinglyLinkedList(
            1,
            [2, 3, 4],
            { index: 5, value: 5 },
            { index: 6, value: 6 }
        );

        assert.strictEqual(
            sll.find((element) => element === 6),
            null
        );
    });

    it('should filter out right elements', () => {
        const alam = { name: 'Alam', age: 22 };
        const zeshan = { name: 'Zeshan', age: 23 };
        const misquat = { name: 'Misquat', age: 22 };
        const sadiya = { name: 'Sadiya', age: 22 };

        const sll = new SinglyLinkedList(1, 'Test', [100, 200, 300]);
        sll.pushBack(alam);
        sll.pushFront(zeshan);
        sll.pushFront(misquat);
        sll.pushFront(sadiya);

        const below23 = sll.filter((element) => element.age < 23);
        const aboveOrEqual23 = sll.filter((element) => element.age >= 23);
        const empty = sll.filter((element) => element.age === 100);

        assert.strictEqual(below23[0], sadiya);
        assert.strictEqual(below23[1], misquat);
        assert.strictEqual(below23[2], alam);
        assert.strictEqual(aboveOrEqual23[0], zeshan);
        assert.strictEqual(empty.length, 0);
    });

    it('should return a new reverse linked list', () => {
        const alam = { name: 'Alam', age: 22 };
        const zeshan = { name: 'Zeshan', age: 23 };
        const misquat = { name: 'Misquat', age: 22 };
        const sadiya = { name: 'Sadiya', age: 22 };
        const moon = { name: 'Moon', age: 23 };

        const oldLinkedList = new SinglyLinkedList(
            alam,
            zeshan,
            misquat,
            sadiya
        );
        oldLinkedList.pushFront(moon);

        const newLinkedList = oldLinkedList.reverse();

        assert.strictEqual(sadiya, newLinkedList.getHead().getData());
        assert.strictEqual(
            misquat,
            newLinkedList.getHead().getNext().getData()
        );
        assert.strictEqual(moon, newLinkedList.getTail().getData());
    });
});

