import { getCache, setCache, setupCache } from "../../src/processor/Cache";

describe("set and get cache", () => {
    it("should return cached value", async () => {
        setCache("abc", 1);
        expect(getCache("abc")).toStrictEqual(1);
    });

    it("should override max cache", async () => {
        setupCache(1, 100);
        setCache("abc", 1);
        setCache("def", 2);
        expect(getCache("abc")).toBeUndefined();
    });
});
