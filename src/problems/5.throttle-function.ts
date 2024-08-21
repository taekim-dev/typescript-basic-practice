export const throttle = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => ReturnType<T> | void => {
    
    let lastCall = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let nextCallArgs: Parameters<T> | null = null;

    return function (...args: Parameters<T>): ReturnType<T> | void {
        const now = Date.now();

        // If enough time has passed, execute the function immediately
        if (now - lastCall >= delay) {
            lastCall = now;
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            return fn(...args); 
        }

        nextCallArgs = args;

        // Schedule the function to run after the remaining throttle period
        if (!timeoutId) {
            const remainingTime = delay - (now - lastCall);
            timeoutId = setTimeout(() => {
                lastCall = Date.now();
                timeoutId = null;
                if (nextCallArgs) {
                    fn(...nextCallArgs); // Call the function with the latest arguments
                    nextCallArgs = null; // Clear the stored arguments after the call
                }
            }, remainingTime);
        }
    }
};