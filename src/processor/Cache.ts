import LRU from 'lru-cache';

let cache = new LRU({ max: 500})

export function setupCache(maxAmount: number, maxAge: number): void {
    cache = new LRU({ max: maxAmount, maxAge })
}

export function getCache(index: string): any | undefined {
    return cache.get(index);
}

export function setCache(index: string, value: any): boolean {
    return cache.set(index, value);
}