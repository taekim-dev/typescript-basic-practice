export const throttle = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => ReturnType<T> | void => {

    let lastCall = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: Parameters<T> | null = null;

    return function (...args: Parameters<T>): void {
        const now = Date.now();

        // Execute the function immediately if enough time has passed
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        } else {
            // Store the latest arguments and set a timeout if none exists
            lastArgs = args;

            if (!timeoutId) {
                const remainingTime = delay - (now - lastCall);
                timeoutId = setTimeout(() => {
                    lastCall = Date.now();
                    timeoutId = null;
                    if (lastArgs) {
                        fn(...lastArgs);
                    }
                }, remainingTime);
            }
        }
    };
};
