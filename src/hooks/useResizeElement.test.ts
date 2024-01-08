import { MutableRefObject } from 'react';
import {
    UseResizeElementError,
    isNullThrowError,
    throwErrorIfElementIsInvalid,
    findDesiredHeightInPixels,
    ResizableElementShape,
    resizeElementPostValidation,
} from './useResizeElement';

describe('UseResizeElementError', () => {
    it('should create an error with the correct message', () => {
        const error = UseResizeElementError('test error message');
        expect(error.message).toBe('Error in useResizeElement: test error message');
    });
})

describe('isNullThrowError', () => {
    it('should throw an error if the value is null or undefined', () => {
        const value = null;
        const message = 'test error message';
        expect(() => isNullThrowError(value, message)).toThrowError(UseResizeElementError(message));
    });

    it('should not throw an error if the value is not null or undefined', () => {
        const value = 'test value';
        const message = 'test error message';
        expect(() => isNullThrowError(value, message)).not.toThrow();
    });
});

describe('throwErrorIfElementIsInvalid', () => {
    describe('throw an error if', () => {
        function callAndExpectThrownException(eleRef: any) {
            expect(() => throwErrorIfElementIsInvalid(eleRef)).toThrowError(
                /^Error in useResizeElement:.*/
            );
        }
        it('ref.current is null', () => {
            const eleRef = { current: null } as unknown as MutableRefObject<any>;
            callAndExpectThrownException(eleRef);
        })
        it('ref.current.scrollHeight is null', () => {
            const eleRef = { current: { style: { height: '10px' }, scrollHeight: null } } as unknown as MutableRefObject<any>;
            callAndExpectThrownException(eleRef);
        })
        it('ref.current.style is null', () => {
            const eleRef = { current: { style: null, scrollHeight: null } } as unknown as MutableRefObject<any>;
            callAndExpectThrownException(eleRef);
        })
        it('ref.current.style.height is null', () => {
            const eleRef = { current: { style: { height: '10px' }, scrollHeight: null } } as unknown as MutableRefObject<any>;
            callAndExpectThrownException(eleRef);
        })
    })

    it('should not throw an error if all of the conditions pass', () => {
        const eleRef = { current: { style: { height: 'test' }, scrollHeight: 'test' } } as unknown as MutableRefObject<any>;
        expect(() => throwErrorIfElementIsInvalid(eleRef)).not.toThrow();
    });
});

describe('findDesiredHeight', () => {
    it('should return the scrollHeight if it is greater than or equal to the minimum height', () => {
        const scrollHeight = 100;
        const min = 50;
        const opts = { min, max: 1000, gapAtBottom: 0 };
        const desiredHeight = findDesiredHeightInPixels(scrollHeight, opts);
        expect(desiredHeight).toBe('100px');
    });

    it('should return the minimum height if the scrollHeight is less than the minimum height', () => {
        const scrollHeight = 50;
        const min = 100;
        const opts = { min, max: 1000, gapAtBottom: 0 };
        const desiredHeight = findDesiredHeightInPixels(scrollHeight, opts);
        expect(desiredHeight).toBe('100px');
    });

    it('should return the maximum height if the scrollHeight is greater than the maximum height', () => {
        const scrollHeight = 1000;
        const min = 0;
        const max = 500;
        const opts = { min, max, gapAtBottom: 0 };
        const desiredHeight = findDesiredHeightInPixels(scrollHeight, opts);
        expect(desiredHeight).toBe('500px');
    });

    it('should add the gapAtBottom to the calculated height', () => {
        const scrollHeight = 100;
        const min = 50;
        const gapAtBottom = 10;
        const opts = { min, max: 1000, gapAtBottom };
        const desiredHeight = findDesiredHeightInPixels(scrollHeight, opts);
        expect(desiredHeight).toBe(scrollHeight + gapAtBottom + 'px');
    });
});

describe('findDesiredHeightInPixels', () => {
    it('should return the scrollHeight if it is greater than or equal to the minimum height', () => {
        const scrollHeight = 100;
        const min = 50;
        const opts = { min, max: 1000, gapAtBottom: 0 };
        const result = findDesiredHeightInPixels(scrollHeight, opts);
        expect(result).toBe(scrollHeight + 'px');
    });

    it('should return the minimum height if the scrollHeight is less than the minimum height', () => {
        const scrollHeight = 50;
        const min = 100;
        const opts = { min, max: 1000, gapAtBottom: 0 };
        const result = findDesiredHeightInPixels(scrollHeight, opts);
        expect(result).toBe(min + 'px');
    });

    it('should return the maximum height if the scrollHeight is greater than the maximum height', () => {
        const scrollHeight = 1000;
        const min = 0;
        const max = 500;
        const opts = { min, max, gapAtBottom: 0 };
        const result = findDesiredHeightInPixels(scrollHeight, opts);
        expect(result).toBe(max + 'px');
    });

    it('should add the gapAtBottom to the calculated height', () => {
        const scrollHeight = 100;
        const min = 50;
        const gapAtBottom = 10;
        const opts = { min, max: 1000, gapAtBottom };
        const result = findDesiredHeightInPixels(scrollHeight, opts);
        expect(result).toBe((scrollHeight + gapAtBottom) + 'px');
    });
});

describe('resizeElementPostValidation', () => {
    it('should set the height to 0px', () => {
        const ele: ResizableElementShape = {
            scrollHeight: 100,
            style: {
                height: '10px',
            },
        };
        resizeElementPostValidation(ele, () => '10px', { min: 0, max: 1000, gapAtBottom: 7 });
        expect(ele.style.height).toEqual('10px');
    });
})
