import { debounce } from '../problems/3.debounce-function';

jest.useFakeTimers();

test('should execute the function after the specified wait time', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(func).not.toHaveBeenCalledTimes(1);
});

test('should reset the wait time if debounced function is called again within the wait time', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalledTimes(1);
});

test('should execute the function with the latest arguments', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc('first call');
    debouncedFunc('second call');
    
    jest.advanceTimersByTime(1000);
    expect(func).not.toHaveBeenCalledWith('second call');
});

test('should not execute the function if it is not called again within the wait time', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    jest.advanceTimersByTime(500);
    
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalledTimes(1);
});

test('should allow immediate execution if specified', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000, true);

    debouncedFunc();
    expect(func).not.toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(func).not.toHaveBeenCalledTimes(1);
});
