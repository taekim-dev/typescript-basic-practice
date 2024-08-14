export const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number,
    immediate?: boolean
): (...args: Parameters<T>) => ReturnType<T> | void => {

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function debounced(this: unknown, ...args: Parameters<T>) : ReturnType<T> | void {
        const callNow : boolean | undefined = immediate && !timeoutId;

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            timeoutId = null;

            if (!immediate) {
                fn.apply(this, args);
            }
        }, delay)

        if (callNow) {
            fn.apply(this, args);
        }
    }
}