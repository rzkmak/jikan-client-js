import nock from 'nock';
import { Manga } from '../src/Manga'

const mockMangaGenericResponse = {request_hash:"request:manga:ace010d3da615a813b33131f003284e0be815ec7",request_cached:false,request_cache_expiry:86400,mal_id:11101,url:"https://myanimelist.net/manga/11101/Ijiwaru_na_Aitsu",title:"Ijiwaru na Aitsu",title_english:"Stop bullying me!",title_synonyms:["Naisho ni Shite yo?","Megane-tachi no Hishoshitsu"],title_japanese:"意地悪なアイツ",status:"Finished",image_url:"https://cdn.myanimelist.net/images/manga/2/147639.jpg",type:"Manga",volumes:2,chapters:17,publishing:false,published:{from:"2021-03-27T20:05:00+00:00",to:"2010-12-07T00:00:00+00:00",prop:{from:{day:27,month:3,year:2021},to:{day:7,month:12,year:2010}},string:"Mar , 2005 to Dec  7, 2010"},rank:6341,score:7.11,scored_by:434,popularity:11002,members:935,favorites:1,synopsis:"Cute, simple-minded Tomo Masaki has a brother complex. Tomo so adores his older brother Ei that he studied hard to get into Kouryou Academy, where Ei is a popular senior and Student Council President. Now the bane of Tomo's existence is Ei's best friend and Student Council Vice-president, Motoki Izumi. For some reason, Izumi always bullies and teases Tomo whenever he comes to the student council room to pay his brother a visit. Why can't Izumi just stop it and leave him alone? More importantly, why does Tomo's heart pound whenever Izumi does bully him?! Sometimes, Izumi's even nice to Tomo—which only makes his heart beat faster! (Source: DMP) Included one-shots: Volume 1: Naisho ni Shite yo? (Please Keep It a Secret) Volume 2: Megane-tachi no Hishoshitsu - 2 parts",background:null,related:{},genres:[{mal_id:23,type:"manga",name:"School",url:"https://myanimelist.net/manga/genre/23/School"},{mal_id:28,type:"manga",name:"Shounen Ai",url:"https://myanimelist.net/manga/genre/28/Shounen_Ai"}],authors:[{mal_id:2270,type:"people",name:"Shino, Natsuho",url:"https://myanimelist.net/people/2270/Natsuho_Shino"}],serializations:[{mal_id:131,type:"manga",name:"GUSH",url:"https://myanimelist.net/manga/magazine/131/GUSH"}]}

describe("get manga by id", () => {
    it("should return manga with generic information", async () => {
        nock("https://api.jikan.moe/v3/").get('/manga/100').reply(200, mockMangaGenericResponse);

        const manga = new Manga(100);
        const result = await manga.get();
        expect(result).toStrictEqual(mockMangaGenericResponse);
    });
});