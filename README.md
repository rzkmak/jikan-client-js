# jikan-client-ts

WIP: Jikan Client for JS and TS. Contribution are welcome!

## Usage

```
npm install jikan-client-js
```

### Anime

#### Example (ES5)
```js
const { Anime } = require("jikan-client-js");

const anime = new Anime(40028); // 40028 is anime id (shingeki no kyojin final season), you can got from search api (WIP)
anime.get() // get anime information
    .then(result => console.log(result))
    .catch(e => console.log(e));

anime.getEpisodes(1) // get episode page 1
    .then(result => console.log(result))
    .catch(e => console.log(e));
```

#### Example (ES6+)
```js
import { Anime } from "jikan-client-js";

const anime = new Anime(40028); // 40028 is anime id (shingeki no kyojin final season), you can got from search api (WIP)
const animeInformation = await anime.get(); // get anime information
const animeEpisode = await anime.getEpisodes(1); // get episode page 1
```

#### Available API

Referenced from Jikan Moe API [https://jikan.docs.apiary.io/#reference/0/anime](https://jikan.docs.apiary.io/#reference/0/anime)

```
    get()
    getCharacterStaff()
    getEpisodes(page: number)
    getNews()
    getPV()
    getStatistics()
    getForum()
    getMoreInfo()
    getReviews(page: number)
    getRecommendations()
    getUserUpdates(page: number)
```

### Manga
WIP

### Person
WIP

### Character
WIP

### Search
WIP

### Season
WIP

### Season Archive
WIP

### Season Later
WIP

### Schedule
WIP

### Top
WIP

### Genre
WIP

### Producer
WIP

### Magazine
WIP

### User
WIP

### Club
WIP

### Meta
WIP