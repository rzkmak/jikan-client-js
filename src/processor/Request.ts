import fetch from "node-fetch";
import PQueue from "p-queue";
import { getCache, setCache } from "./Cache";

const baseUrl = "https://api.jikan.moe/v3/"

const queue = new PQueue({
    concurrency: 2,
    interval: 4000
})

export async function request(url: string): Promise<any> {
    return await queue.add(async() => {
        const cachedResult = getCache(url);
        if (cachedResult) {
            return cachedResult;
        }
        const result = (await fetch(`${baseUrl}${url}`)).json()
        setCache(url, result)
        return result;
    })
}