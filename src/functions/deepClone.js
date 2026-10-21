/**
 * @template T
 * @param {T} value 
 * @return {T}
 */
export default function deepClone(value) {
    if (typeof value !== "object" || value === null) {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map((item) => deepClone(item));
    }

    return Object.fromEntries(
        Object.entries(value).map(([key, value]) => [key, deepClone(value)]),
    );
}

// approach 2
export default function deepClone2(value) {
    return JSON.parse(JSON.stringify(value));
}

// approach 3
const clonedObj = structuredClone(obj);