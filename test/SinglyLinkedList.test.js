import assert from 'assert';
import SinglyLinkedList from '../SinglyLinkedList.js';

describe('singly linked list', function () {
    it('should add the new node in first position of the chain', () => {
        const obj_1 = { num: 1, value: '1' };
        const obj_2 = { num: 1, value: '2' };

        const sll = new SinglyLinkedList();
        sll.pushBack(obj_1);
        sll.pushFront(obj_2);
        assert.strictEqual(obj_2, sll.getHeadValue());
        assert.strictEqual(obj_1, sll.__head__.getNext().getData());
    });

    it('should add the new node in last position of the chain', () => {
        const obj_1 = { num: 1, value: '1' };
        const obj_2 = { num: 1, value: '2' };

        const sll = new SinglyLinkedList();
        sll.pushBack(obj_1);
        sll.pushBack(obj_2);
        assert.strictEqual(obj_1, sll.getHeadValue());
        assert.strictEqual(obj_2, sll.__head__.getNext().getData());
    });

    it('should delete some elements after few pop method invoking', () => {
        const arr = [1, 2, 3];
        const sll = new SinglyLinkedList(1, 2, 3, { num: 1, value: '1' }, arr);
        sll.pop(1);
        sll.pop(2);
        sll.pop(3);
        sll.pop({ num: 1, value: '1' });
        assert.strictEqual(sll.getHeadValue(), arr);
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

    it('should return null after calling find method if the given condition does not matched', () => {
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
});

