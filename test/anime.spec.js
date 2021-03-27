"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockAnimeGenericResponse = void 0;
var nock_1 = __importDefault(require("nock"));
var Anime_1 = require("../src/Anime");
// tslint:disable:max-line-length
exports.mockAnimeGenericResponse = { request_hash: "request:anime:b2748716b753dd75fb9dbc52a29f337e5df14bcb", request_cached: true, request_cache_expiry: 26882, mal_id: 100, url: "https://myanimelist.net/anime/100/Shin_Shirayuki-hime_Densetsu_Prétear", image_url: "https://cdn.myanimelist.net/images/anime/9/11709.jpg", trailer_url: null, title: "Shin Shirayuki-hime Densetsu Prétear", title_english: "Prétear: The New Legend of Snow White", title_japanese: "新白雪姫伝説プリーティア", title_synonyms: ["Shin Shirayuki-hime Densetsu Pretear"], type: "TV", source: "Manga", episodes: 13, status: "Finished Airing", airing: false, aired: { from: "2001-04-04T00:00:00+00:00", to: "2001-06-27T00:00:00+00:00", prop: { from: { day: 4, month: 4, year: 2001 }, to: { day: 27, month: 6, year: 2001 } }, string: "Apr 4, 2001 to Jun 27, 2001" }, duration: "23 min per ep", rating: "PG-13 - Teens 13 or older", score: 7.19, scored_by: 24909, rank: 2804, popularity: 2183, members: 54204, favorites: 461, synopsis: "Due to her father's remarriage, robust 16-year-old Himeno Awayuki moves into a large mansion with a beautiful garden—the quintessential dream house for any girl her age. However, much to Himeno's disappointment, her new stepfamily doesn't really seem to like her, as her stepmother often occupies herself with her father, her younger stepsister Mawata ignores her, and her other stepsister—the equally aged Mayune—tries to prank her at every opportunity. But Himeno doesn't have time to dwell into thoughts of hopelessness—her new life has now become involved with a group of seven magical boys known as the Leafe Knights, after they ask her to become a magical princess who can borrow their powers! Although Himeno accepts their request and becomes the Prétear, she feels doubtful in her abilities to protect the world and its Leafe, the source of energy for all life. Will Himeno be able to find happiness among her new family and also save the Earth from the enemy, the Princess of Disaster? [Written by MAL Rewrite]", background: null, premiered: "Spring 2001", broadcast: "Wednesdays at 18:30 (JST)", related: { Adaptation: [{ mal_id: 1248, type: "manga", name: "Shin Shirayuki-hime Densetsu Pretear", url: "https://myanimelist.net/manga/1248/Shin_Shirayuki-hime_Densetsu_Pretear" }] }, producers: [{ mal_id: 113, type: "anime", name: "Kadokawa Shoten", url: "https://myanimelist.net/anime/producer/113/Kadokawa_Shoten" }, { mal_id: 160, type: "anime", name: "Rondo Robe", url: "https://myanimelist.net/anime/producer/160/Rondo_Robe" }], licensors: [{ mal_id: 97, type: "anime", name: "ADV Films", url: "https://myanimelist.net/anime/producer/97/ADV_Films" }, { mal_id: 102, type: "anime", name: "Funimation", url: "https://myanimelist.net/anime/producer/102/Funimation" }], studios: [{ mal_id: 34, type: "anime", name: "Hal Film Maker", url: "https://myanimelist.net/anime/producer/34/Hal_Film_Maker" }], genres: [{ mal_id: 4, type: "anime", name: "Comedy", url: "https://myanimelist.net/anime/genre/4/Comedy" }, { mal_id: 8, type: "anime", name: "Drama", url: "https://myanimelist.net/anime/genre/8/Drama" }, { mal_id: 10, type: "anime", name: "Fantasy", url: "https://myanimelist.net/anime/genre/10/Fantasy" }, { mal_id: 16, type: "anime", name: "Magic", url: "https://myanimelist.net/anime/genre/16/Magic" }, { mal_id: 22, type: "anime", name: "Romance", url: "https://myanimelist.net/anime/genre/22/Romance" }, { mal_id: 25, type: "anime", name: "Shoujo", url: "https://myanimelist.net/anime/genre/25/Shoujo" }, { mal_id: 31, type: "anime", name: "Super Power", url: "https://myanimelist.net/anime/genre/31/Super_Power" }], opening_themes: ["\"White destiny\" by Ishida Yoko"], ending_themes: ["\"Lucky Star\" by Yoshida Sayuri"] };
describe("get anime by id", function () {
    it("should return anime with generic information", function () { return __awaiter(void 0, void 0, void 0, function () {
        var anime, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nock_1.default("https://api.jikan.moe/v3/").get('/anime/100').reply(200, exports.mockAnimeGenericResponse);
                    anime = new Anime_1.Anime(100);
                    return [4 /*yield*/, anime.get()];
                case 1:
                    result = _a.sent();
                    expect(result).toStrictEqual(exports.mockAnimeGenericResponse);
                    return [2 /*return*/];
            }
        });
    }); });
});
