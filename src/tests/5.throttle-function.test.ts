// Problem:
// Implement a throttle function that ensures a given function can only be called 
// at most once every specified time period. 
// This is often used to control the rate of calls to a function 
// in response to events like scrolling or resizing.

import { throttle } from '../problems/5.throttle-function';

jest.useFakeTimers();

test('should call the function immediately on the first call', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
});

test('should not call the function again before the throttle period has ended', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
});

test('should ensure the function is called with the latest arguments during the throttle period', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc('first call');
    throttledFunc('second call');
    throttledFunc('third call');

    jest.advanceTimersByTime(1100);

    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith('third call');

    throttledFunc('fourth call');
    expect(func).toHaveBeenCalledTimes(3);
    expect(func).toHaveBeenLastCalledWith('fourth call');
});
