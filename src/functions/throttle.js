export default function throttle(fn, interval) {
    let coolingDown = false;
    return function(...args) {
        if (coolingDown) return;
        coolingDown = true;
        setTimeout(() => {
            coolingDown = false;
        }, interval);
        return fn.apply(this, args);
    }
}

// run at most once, never while a run is in flight
export default function throttleAsync(fn) {
    let pending = null;
    return function(...args) {
        if (pending) return pending;
        pending = Promise.resolve(fn.apply(this, args)).finally(() => { pending = null; });
        return pending;
    }
}