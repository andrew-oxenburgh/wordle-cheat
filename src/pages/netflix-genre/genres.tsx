// https://github.com/vrachieru/netflix-categories/blob/325d821211b6ed40ca0a03f70280678440f1f9af/categories.json

export type GenreCodesType = {
  [category: string]: {
    [genre: string]: number;
  };
};

const genres: GenreCodesType = {
   "Action & Adventure": {
      "Action & Adventure": 1365,
      "Action Sci-Fi & Fantasy": 1568,
      "Adventures": 7442,
      "Classic Action & Adventure": 46576,
      "Crime Action & Adventure": 9584,
      "Independent Action & Adventure": 11804,
      "Military Action & Adventure": 2125,
      "Slasher and Serial Killer Movies": 8646,
      "Spy Action & Adventure": 10702
   },
   "Anime": {
      "Anime": 7424,
      "Anime Sci-Fi": 2729,
      "Anime Series": 6721,
      "Anime comedies": 9302,
      "Anime dramas": 452,
      "Anime fantasy": 11146,
      "Anime features": 3063
   },
   "Children & Family Movies": {
      "Animal Tales": 5507,
      "Children & Family Movies": 783,
      "Disney": 67673,
      "Family Features": 51056,
      "Kids Faith & Spirituality": 751423,
      "Kids' TV": 27346,
      "Movies based on children's books": 10056,
      "Movies for ages 0 to 2": 6796,
      "Movies for ages 11 to 12": 6962,
      "Movies for ages 2 to 4": 6218,
      "Movies for ages 5 to 7": 5455,
      "Movies for ages 8 to 10": 561
   },
   "Comedies": {
      "Action Comedies": 43040,
      "Classic Comedies": 31694,
      "Cult Comedies": 9434,
      "Independent Comedies": 4195,
      "Late night Comedies": 1402,
      "Political Comedies": 2700,
      "Romantic Comedies": 5475,
      "Satires": 4922,
      "Screwball Comedies": 9702,
      "Slapstick Comedies": 10256,
      "Teen Comedies": 3519
   },
   "Documentaries": {
      "Biographical Documentaries": 3652,
      "Crime Documentaries": 9875,
      "Documentaries": 6839,
      "Historical Documentaries": 5349,
      "Military Documentaries": 4006,
      "Mockumentaries": 26,
      "Music and Concert Documentaries": 90361,
      "Political Documentaries": 7018,
      "Religious Documentaries": 10005,
      "Science and Nature Docs": 2595,
      "Social & Cultural Docs": 3675,
      "Spiritual Documentaries": 2760,
      "Travel and Adventure Documentaries": 1159
   },
   "Dramas": {
      "Biographical Dramas": 3179,
      "Classic Dramas": 29809,
      "Crime Dramas": 6889,
      "Dramas": 5763,
      "Dramas based on Books": 4961,
      "Dramas based on real life": 3653,
      "Epics": 52858,
      "Independent Dramas": 384,
      "LGBT Dramas": 500,
      "Military Dramas": 11,
      "Political Dramas": 6616,
      "Romantic Dramas": 1255,
      "Showbiz Dramas": 5012,
      "Social Issue Dramas": 3947,
      "Tearjerkers": 6384,
      "Teen Dramas": 9299
   },
   "Film Noir": {
      "Film Noir": 7687,
      "Gangster Movies": 31851
   },
   "Horror Movies": {
      "Horror Movies": 8711,
      "Satanic Stories": 6998,
      "Supernatural Horror Movies": 42023,
      "Teen Screams": 52147,
      "Vampire Horror Movies": 75804,
      "Werewolf Horror Movies": 75930,
      "Zombie Horror Movies": 75405
   },
   "International": {
      "African Movies": 3761,
      "Australian Movies": 5230,
      "Belgian Movies": 262,
      "British Movies": 10757,
      "Chinese Movies": 3960,
      "Eastern European Movies": 5254,
      "French Movies": 58807,
      "German Movies": 58886,
      "Greek Movies": 61115,
      "Indian Movies": 10463,
      "Irish Movies": 58750,
      "Italian Movies": 8221,
      "Japanese Movies": 10398,
      "Korean Movies": 5685,
      "Latin American Movies": 1613,
      "Middle Eastern Movies": 5875,
      "New Zealand Movies": 63782,
      "Russian Movies": 11567,
      "Scandinavian Movies": 9292,
      "Southeast Asian Movies": 9196,
      "Spanish Movies": 58741
   },
   "Music": {
      "Country & Western/Folk": 1105,
      "Jazz & Easy Listening": 10271,
      "Music": 1701,
      "Rock & Pop Concerts": 3278,
      "Urban & Dance Concerts": 9472
   },
   "Musicals": {
      "Bollywood Movies": 5480,
      "Classic Musicals": 32392,
      "Disney Musicals": 59433,
      "Musicals": 13335,
      "Showbiz Musicals": 13573
   },
   "Others": {
      "Adult animation": 11881,
      "Cult Movies": 7627,
      "Faith & Spirituality": 26835,
      "Independent Movies": 7077,
      "Period Pieces": 12123,
      "Silent Movies": 53310,
      "Westerns": 7700
   },
   "Romantic Movies": {
      "Classic Romantic Movies": 31273,
      "Quirky Romance": 36103,
      "Romantic Favorites": 502675,
      "Romantic Independent Movies": 9916,
      "Romantic Movies": 8883,
      "Steamy Romantic Movies": 35800,
      "Steamy Thrillers": 972
   },
   "Sci-Fi & Fantasy": {
      "Alien Sci-Fi": 3327,
      "Comic Books and Superhero Movies": 10118,
      "Create Features": 6895,
      "Cult Sci-Fi & Fantasy": 4734,
      "Fantasy Movies": 9744,
      "Monster Movies": 947,
      "Sci-Fi & Fantasy": 1492,
      "Sci-Fi Adventure": 6926,
      "Sci-Fi Dramas": 3916,
      "Sci-Fi Horror Movies": 1694
   },
   "Sports": {
      "Boxing Movies": 12443,
      "Football Movies": 12803,
      "Martial Arts Movies": 8985,
      "Martial Arts, Boxing and Wrestling": 6695,
      "Soccer Movies": 12549
   },
   "TV Shows": {
      "British TV Shows": 52117,
      "Crime TV Shows": 26146,
      "Korean TV Shows": 67879,
      "Military TV Shows": 25804,
      "Miniseries": 4814,
      "Reality TV": 9833,
      "Science & Nature TV": 52780,
      "Stand-up Comedy": 11559,
      "TV Action & Adventure": 10673,
      "TV Cartoons": 11177,
      "TV Comedies": 10375,
      "TV Documentaries": 10105,
      "TV Dramas": 11714,
      "TV Horror": 83059,
      "TV Mysteries": 4366,
      "TV Sci-Fi & Fantasy": 1372,
      "TV Shows": 83
   },
   "Thrillers": {
      "Action Thrillers": 43048,
      "Crime Thrillers": 10499,
      "Crime Thrillers from the 1940s": 2563,
      "Independent Thrillers": 3269,
      "Mysteries": 9994,
      "Political Thrillers": 10504,
      "Psychological Thrillers": 5505,
      "Sci - Fi Thrillers": 11014,
      "Spy Thrillers": 9147,
      "Supernatural Thrillers": 11140,
      "Thrillers": 8933
   }
}

export default genres

export {}
