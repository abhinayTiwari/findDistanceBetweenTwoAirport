(function(){
  window.app = window.app || {};
  app.model = function(){
       var airportsData = [
         {
           "code":"ABE",
           "name":"Lehigh Valley International Airport",
           "city":"Allentown",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":40.6514,
           "lng":-75.4342,
           "search":"abe|lehighvalleyinternationalairport|allentownpa|pennsylvania"
         },
         {
           "code":"ABI",
           "name":"Abilene Regional Airport",
           "city":"Abilene",
           "state":"TX",
           "statename":"Texas",
           "lat":32.4164,
           "lng":-99.6803,
           "search":"abi|abileneregionalairport|abilenetx|texas"
         },
         {
           "code":"ABL",
           "name":"Ambler Airport",
           "city":"Kiana",
           "state":"AK",
           "statename":"Alaska",
           "lat":67.1058,
           "lng":-157.854,
           "search":"abl|amblerairport|kianaak|alaska"
         },
         {
           "code":"ABQ",
           "name":"Albuquerque International Airport",
           "city":"Albuquerque",
           "state":"NM",
           "statename":"New Mexico",
           "lat":35.0494,
           "lng":-106.625,
           "search":"abq|albuquerqueinternationalairport|albuquerquenm|newmexico"
         },
         {
           "code":"ABR",
           "name":"Aberdeen Regional Airport",
           "city":"Aberdeen",
           "state":"SD",
           "statename":"South Dakota",
           "lat":45.4536,
           "lng":-98.4189,
           "search":"abr|aberdeenregionalairport|aberdeensd|southdakota"
         },
         {
           "code":"ABY",
           "name":"Southwest Georgia Regional Airport",
           "city":"Albany",
           "state":"GA",
           "statename":"Georgia",
           "lat":31.5328,
           "lng":-84.1867,
           "search":"aby|southwestgeorgiaregionalairport|albanyga|georgia"
         },
         {
           "code":"ACK",
           "name":"Nantucket Memorial Airport",
           "city":"Nantucket",
           "state":"MA",
           "statename":"Massachusetts",
           "lat":41.2568,
           "lng":-70.0649,
           "search":"ack|nantucketmemorialairport|nantucketma|massachusetts"
         },
         {
           "code":"ACT",
           "name":"Waco Regional Airport",
           "city":"Waco",
           "state":"TX",
           "statename":"Texas",
           "lat":31.609,
           "lng":-97.2234,
           "search":"act|wacoregionalairport|wacotx|texas"
         },
         {
           "code":"ACV",
           "name":"Arcata Airport",
           "city":"Mckinleyville",
           "state":"CA",
           "statename":"California",
           "lat":40.9698,
           "lng":-124.108,
           "search":"acv|arcataairport|mckinleyvilleca|california"
         },
         {
           "code":"ACY",
           "name":"Atlantic City International Airport",
           "city":"Egg Harbor City",
           "state":"NJ",
           "statename":"New Jersey",
           "lat":39.4512,
           "lng":-74.5716,
           "search":"acy|atlanticcityinternationalairport|eggharborcitynj|newjersey"
         },
         {
           "code":"ADK",
           "name":"Adak Airport",
           "city":"Adak",
           "state":"AK",
           "statename":"Alaska",
           "lat":51.88,
           "lng":-176.639,
           "search":"adk|adakairport|adakak|alaska"
         },
         {
           "code":"ADQ",
           "name":"Kodiak Airport",
           "city":"Kodiak",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.7545,
           "lng":-152.512,
           "search":"adq|kodiakairport|kodiakak|alaska"
         },
         {
           "code":"AET",
           "name":"Allakaket Airport",
           "city":"Allakaket",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.55,
           "lng":-152.65,
           "search":"aet|allakaketairport|allakaketak|alaska"
         },
         {
           "code":"AEX",
           "name":"Alexandria International Airport",
           "city":"Alexandria",
           "state":"LA",
           "statename":"Louisiana",
           "lat":31.323,
           "lng":-92.5417,
           "search":"aex|alexandriainternationalairport|alexandriala|louisiana"
         },
         {
           "code":"AGN",
           "name":"Angoon Airport",
           "city":"Angoon",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.4996,
           "lng":-134.577,
           "search":"agn|angoonairport|angoonak|alaska"
         },
         {
           "code":"AGS",
           "name":"Bush Field Airport",
           "city":"Augusta",
           "state":"GA",
           "statename":"Georgia",
           "lat":33.3735,
           "lng":-81.9732,
           "search":"ags|bushfieldairport|augustaga|georgia"
         },
         {
           "code":"AHC",
           "name":"Amedee Army Air Field",
           "city":"Herlong",
           "state":"CA",
           "statename":"California",
           "lat":40.2664,
           "lng":-120.151,
           "search":"ahc|amedeearmyairfield|herlongca|california"
         },
         {
           "code":"AIA",
           "name":"Alliance Municipal Airport",
           "city":"Alliance",
           "state":"NE",
           "statename":"Nebraska",
           "lat":42.0622,
           "lng":-102.81,
           "search":"aia|alliancemunicipalairport|alliancene|nebraska"
         },
         {
           "code":"AIN",
           "name":"Wainwright Airport",
           "city":"Wainwright",
           "state":"AK",
           "statename":"Alaska",
           "lat":70.6139,
           "lng":-159.857,
           "search":"ain|wainwrightairport|wainwrightak|alaska"
         },
         {
           "code":"AKB",
           "name":"Atka Airport",
           "city":"Atka",
           "state":"AK",
           "statename":"Alaska",
           "lat":52.2217,
           "lng":-174.204,
           "search":"akb|atkaairport|atkaak|alaska"
         },
         {
           "code":"AKI",
           "name":"Akiak Airport",
           "city":"Bethel",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.8866,
           "lng":-161.218,
           "search":"aki|akiakairport|bethelak|alaska"
         },
         {
           "code":"AKK",
           "name":"Akhiok Airport",
           "city":"Kodiak",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.95,
           "lng":-154.167,
           "search":"akk|akhiokairport|kodiakak|alaska"
         },
         {
           "code":"AKN",
           "name":"King Salmon Airport",
           "city":"King Salmon",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.6775,
           "lng":-156.655,
           "search":"akn|kingsalmonairport|kingsalmonak|alaska"
         },
         {
           "code":"AKP",
           "name":"Anaktuvuk Pass Airport",
           "city":"Anaktuvuk Pass",
           "state":"AK",
           "statename":"Alaska",
           "lat":68.1916,
           "lng":-151.79,
           "search":"akp|anaktuvukpassairport|anaktuvukpassak|alaska"
         },
         {
           "code":"ALB",
           "name":"Albany International Airport",
           "city":"Latham",
           "state":"NY",
           "statename":"New York",
           "lat":42.7426,
           "lng":-73.809,
           "search":"alb|albanyinternationalairport|lathamny|newyork"
         },
         {
           "code":"ALM",
           "name":"Alamogordo White Sands Regional Airport",
           "city":"Alamogordo",
           "state":"NM",
           "statename":"New Mexico",
           "lat":32.8407,
           "lng":-105.994,
           "search":"alm|alamogordowhitesandsregionalairport|alamogordonm|newmexico"
         },
         {
           "code":"ALO",
           "name":"Waterloo Municipal Airport",
           "city":"Waterloo",
           "state":"IA",
           "statename":"Iowa",
           "lat":42.5509,
           "lng":-92.3951,
           "search":"alo|waterloomunicipalairport|waterlooia|iowa"
         },
         {
           "code":"ALS",
           "name":"San Luis Valley Regional Airport",
           "city":"Alamosa",
           "state":"CO",
           "statename":"Colorado",
           "lat":37.4444,
           "lng":-105.865,
           "search":"als|sanluisvalleyregionalairport|alamosaco|colorado"
         },
         {
           "code":"ALW",
           "name":"Walla Walla Regional Airport",
           "city":"Walla Walla",
           "state":"WA",
           "statename":"Washington",
           "lat":46.0879,
           "lng":-118.283,
           "search":"alw|wallawallaregionalairport|wallawallawa|washington"
         },
         {
           "code":"ALZ",
           "name":"Alitak Seaplane Base",
           "city":"Alitak",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.8988,
           "lng":-154.246,
           "search":"alz|alitakseaplanebase|alitakak|alaska"
         },
         {
           "code":"AMA",
           "name":"Amarillo International Airport",
           "city":"Amarillo",
           "state":"TX",
           "statename":"Texas",
           "lat":35.2177,
           "lng":-101.706,
           "search":"ama|amarillointernationalairport|amarillotx|texas"
         },
         {
           "code":"ANC",
           "name":"Anchorage International Airport",
           "city":"Anchorage",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.1767,
           "lng":-149.961,
           "search":"anc|anchorageinternationalairport|anchorageak|alaska"
         },
         {
           "code":"ANI",
           "name":"Aniak Airport",
           "city":"Bethel",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.5742,
           "lng":-159.535,
           "search":"ani|aniakairport|bethelak|alaska"
         },
         {
           "code":"ANV",
           "name":"Anvik Airport",
           "city":"Anvik",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.65,
           "lng":-160.217,
           "search":"anv|anvikairport|anvikak|alaska"
         },
         {
           "code":"AOO",
           "name":"Altoona-Blair County Airport",
           "city":"Martinsburg",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":40.2952,
           "lng":-78.324,
           "search":"aoo|altoonablaircountyairport|martinsburgpa|pennsylvania"
         },
         {
           "code":"AOS",
           "name":"Amook Bay Seaplane Base",
           "city":"Amook",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.4672,
           "lng":-153.839,
           "search":"aos|amookbayseaplanebase|amookak|alaska"
         },
         {
           "code":"APA",
           "name":"Centennial Airport",
           "city":"Englewood",
           "state":"CO",
           "statename":"Colorado",
           "lat":39.5752,
           "lng":-104.845,
           "search":"apa|centennialairport|englewoodco|colorado"
         },
         {
           "code":"APF",
           "name":"Naples Municipal Airport",
           "city":"Naples",
           "state":"FL",
           "statename":"Florida",
           "lat":26.1483,
           "lng":-81.7745,
           "search":"apf|naplesmunicipalairport|naplesfl|florida"
         },
         {
           "code":"APN",
           "name":"Alpena County Regional Airport",
           "city":"Alpena",
           "state":"MI",
           "statename":"Michigan",
           "lat":45.07,
           "lng":-83.5683,
           "search":"apn|alpenacountyregionalairport|alpenami|michigan"
         },
         {
           "code":"ARC",
           "name":"Arctic Village Airport",
           "city":"Arctic Village",
           "state":"AK",
           "statename":"Alaska",
           "lat":68.1167,
           "lng":-145.583,
           "search":"arc|arcticvillageairport|arcticvillageak|alaska"
         },
         {
           "code":"ART",
           "name":"Watertown International Airport",
           "city":"Dexter",
           "state":"NY",
           "statename":"New York",
           "lat":43.9942,
           "lng":-76.0232,
           "search":"art|watertowninternationalairport|dexterny|newyork"
         },
         {
           "code":"ARV",
           "name":"Lakelan-Noble F. Lee Memerial Field Airport",
           "city":"Woodruff",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":45.9296,
           "lng":-89.7371,
           "search":"arv|lakelannoblef.leememerialfieldairport|woodruffwi|wisconsin"
         },
         {
           "code":"ASE",
           "name":"Aspen Pitkin County Airport-Sardy Field",
           "city":"Aspen",
           "state":"CO",
           "statename":"Colorado",
           "lat":39.2197,
           "lng":-106.864,
           "search":"ase|aspenpitkincountyairportsardyfield|aspenco|colorado"
         },
         {
           "code":"ATK",
           "name":"Atqasuk Airport",
           "city":"Atqasuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":70.4639,
           "lng":-157.331,
           "search":"atk|atqasukairport|atqasukak|alaska"
         },
         {
           "code":"ATL",
           "name":"Hartsfield-Jackson Atlanta International Airport",
           "city":"Atlanta",
           "state":"GA",
           "statename":"Georgia",
           "lat":33.6558,
           "lng":-84.4333,
           "search":"atl|hartsfieldjacksonatlantainternationalairport|atlantaga|georgia"
         },
         {
           "code":"ATT",
           "name":"Atmautluak Airport",
           "city":"Atmautluak",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.865,
           "lng":-162.276,
           "search":"att|atmautluakairport|atmautluakak|alaska"
         },
         {
           "code":"ATW",
           "name":"Outagamie County Airport",
           "city":"Appleton",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":44.2603,
           "lng":-88.5111,
           "search":"atw|outagamiecountyairport|appletonwi|wisconsin"
         },
         {
           "code":"ATY",
           "name":"Watertown Municipal Airport",
           "city":"Watertown",
           "state":"SD",
           "statename":"South Dakota",
           "lat":44.9216,
           "lng":-97.1609,
           "search":"aty|watertownmunicipalairport|watertownsd|southdakota"
         },
         {
           "code":"AUG",
           "name":"Augusta State Airport",
           "city":"Augusta",
           "state":"ME",
           "statename":"Maine",
           "lat":44.3181,
           "lng":-69.7933,
           "search":"aug|augustastateairport|augustame|maine"
         },
         {
           "code":"AUK",
           "name":"Alakanuk Airport",
           "city":"Alakanuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.6833,
           "lng":-164.633,
           "search":"auk|alakanukairport|alakanukak|alaska"
         },
         {
           "code":"AUS",
           "name":"Austin-Bergstrom International Airport",
           "city":"Austin",
           "state":"TX",
           "statename":"Texas",
           "lat":30.2027,
           "lng":-97.6653,
           "search":"aus|austinbergstrominternationalairport|austintx|texas"
         },
         {
           "code":"AVL",
           "name":"Asheville Regional Airport",
           "city":"Fletcher",
           "state":"NC",
           "statename":"North Carolina",
           "lat":35.4349,
           "lng":-82.5373,
           "search":"avl|ashevilleregionalairport|fletchernc|northcarolina"
         },
         {
           "code":"AVP",
           "name":"Wilkes Barre Scranton International Airport",
           "city":"Pittston",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":41.3354,
           "lng":-75.7294,
           "search":"avp|wilkesbarrescrantoninternationalairport|pittstonpa|pennsylvania"
         },
         {
           "code":"AZA",
           "name":"Phoenix-Mesa Gateway Airport",
           "city":"Phoenix",
           "state":"AZ",
           "statename":"Arizona",
           "lat":33.3078,
           "lng":-111.656,
           "search":"aza|phoenixmesagatewayairport|phoenixaz|arizona"
         },
         {
           "code":"AZO",
           "name":"Kalamazoo-Battle Creek International Airport",
           "city":"Kalamazoo",
           "state":"MI",
           "statename":"Michigan",
           "lat":42.2398,
           "lng":-85.5563,
           "search":"azo|kalamazoobattlecreekinternationalairport|kalamazoomi|michigan"
         },
         {
           "code":"BDL",
           "name":"Bradley International Airport",
           "city":"Windsor Locks",
           "state":"CT",
           "statename":"Connecticut",
           "lat":41.9271,
           "lng":-72.6816,
           "search":"bdl|bradleyinternationalairport|windsorlocksct|connecticut"
         },
         {
           "code":"BDR",
           "name":"Igor I Sikorsky Memorial Airport",
           "city":"Stratford",
           "state":"CT",
           "statename":"Connecticut",
           "lat":41.1636,
           "lng":-73.1283,
           "search":"bdr|igorisikorskymemorialairport|stratfordct|connecticut"
         },
         {
           "code":"BET",
           "name":"Bethel Airport",
           "city":"Bethel",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.7788,
           "lng":-161.847,
           "search":"bet|bethelairport|bethelak|alaska"
         },
         {
           "code":"BFD",
           "name":"Bradford Regional Airport",
           "city":"Lewis Run",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":41.7964,
           "lng":-78.6407,
           "search":"bfd|bradfordregionalairport|lewisrunpa|pennsylvania"
         },
         {
           "code":"BFF",
           "name":"William B Heilig Field Airport",
           "city":"Scottsbluff",
           "state":"NE",
           "statename":"Nebraska",
           "lat":41.8683,
           "lng":-103.597,
           "search":"bff|williambheiligfieldairport|scottsbluffne|nebraska"
         },
         {
           "code":"BFI",
           "name":"King County International Airport-Boeing Field",
           "city":"Seattle",
           "state":"WA",
           "statename":"Washington",
           "lat":47.5369,
           "lng":-122.304,
           "search":"bfi|kingcountyinternationalairportboeingfield|seattlewa|washington"
         },
         {
           "code":"BFL",
           "name":"Kern County-Meadows Field Airport",
           "city":"Bakersfield",
           "state":"CA",
           "statename":"California",
           "lat":35.4288,
           "lng":-119.044,
           "search":"bfl|kerncountymeadowsfieldairport|bakersfieldca|california"
         },
         {
           "code":"BGM",
           "name":"Greater Binghamton Edwin A Link Field Airport",
           "city":"Johnson City",
           "state":"NY",
           "statename":"New York",
           "lat":42.2082,
           "lng":-75.9825,
           "search":"bgm|greaterbinghamtonedwinalinkfieldairport|johnsoncityny|newyork"
         },
         {
           "code":"BGR",
           "name":"Bangor International Airport",
           "city":"Bangor",
           "state":"ME",
           "statename":"Maine",
           "lat":44.8086,
           "lng":-68.8167,
           "search":"bgr|bangorinternationalairport|bangorme|maine"
         },
         {
           "code":"BHB",
           "name":"Hancock County-Bar Harbor Airport",
           "city":"Ellsworth",
           "state":"ME",
           "statename":"Maine",
           "lat":44.4461,
           "lng":-68.3615,
           "search":"bhb|hancockcountybarharborairport|ellsworthme|maine"
         },
         {
           "code":"BHM",
           "name":"Birmingham International Airport",
           "city":"Birmingham",
           "state":"AL",
           "statename":"Alabama",
           "lat":33.5604,
           "lng":-86.7492,
           "search":"bhm|birminghaminternationalairport|birminghamal|alabama"
         },
         {
           "code":"BID",
           "name":"Block Island State Airport",
           "city":"Block Island",
           "state":"RI",
           "statename":"Rhode Island",
           "lat":41.1696,
           "lng":-71.58,
           "search":"bid|blockislandstateairport|blockislandri|rhodeisland"
         },
         {
           "code":"BIL",
           "name":"Logan International Airport",
           "city":"Billings",
           "state":"MT",
           "statename":"Montana",
           "lat":45.8034,
           "lng":-108.537,
           "search":"bil|loganinternationalairport|billingsmt|montana"
         },
         {
           "code":"BIS",
           "name":"Bismarck Municipal Airport",
           "city":"Bismarck",
           "state":"ND",
           "statename":"North Dakota",
           "lat":46.7745,
           "lng":-100.757,
           "search":"bis|bismarckmunicipalairport|bismarcknd|northdakota"
         },
         {
           "code":"BJI",
           "name":"Bemidji-Beltrami County Airport",
           "city":"Bemidji",
           "state":"MN",
           "statename":"Minnesota",
           "lat":47.5065,
           "lng":-94.9338,
           "search":"bji|bemidjibeltramicountyairport|bemidjimn|minnesota"
         },
         {
           "code":"BKC",
           "name":"Buckland Airport",
           "city":"Buckland",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.9833,
           "lng":-161.167,
           "search":"bkc|bucklandairport|bucklandak|alaska"
         },
         {
           "code":"BKL",
           "name":"Burke Lakefront Airport",
           "city":"Cleveland",
           "state":"OH",
           "statename":"Ohio",
           "lat":41.5115,
           "lng":-81.6869,
           "search":"bkl|burkelakefrontairport|clevelandoh|ohio"
         },
         {
           "code":"BKW",
           "name":"Raleigh County Memorial Airport",
           "city":"Beaver",
           "state":"WV",
           "statename":"West Virginia",
           "lat":37.7849,
           "lng":-81.1174,
           "search":"bkw|raleighcountymemorialairport|beaverwv|westvirginia"
         },
         {
           "code":"BLI",
           "name":"Bellingham International Airport",
           "city":"Bellingham",
           "state":"WA",
           "statename":"Washington",
           "lat":48.7955,
           "lng":-122.532,
           "search":"bli|bellinghaminternationalairport|bellinghamwa|washington"
         },
         {
           "code":"BLV",
           "name":"Belleville",
           "city":"Belleville",
           "state":"IL",
           "statename":"Illinois",
           "lat":38.5412,
           "lng":-89.8499,
           "search":"blv|belleville|bellevilleil|illinois"
         },
         {
           "code":"BMI",
           "name":"Bloomington Normal Airport",
           "city":"Bloomington",
           "state":"IL",
           "statename":"Illinois",
           "lat":40.4841,
           "lng":-88.9134,
           "search":"bmi|bloomingtonnormalairport|bloomingtonil|illinois"
         },
         {
           "code":"BNA",
           "name":"Nashville International Airport",
           "city":"Nashville",
           "state":"TN",
           "statename":"Tennessee",
           "lat":36.1342,
           "lng":-86.6682,
           "search":"bna|nashvilleinternationalairport|nashvilletn|tennessee"
         },
         {
           "code":"BOI",
           "name":"Boise Air Terminal",
           "city":"Boise",
           "state":"ID",
           "statename":"Idaho",
           "lat":43.5709,
           "lng":-116.222,
           "search":"boi|boiseairterminal|boiseid|idaho"
         },
         {
           "code":"BOS",
           "name":"Gen E L Logan International Airport",
           "city":"Boston",
           "state":"MA",
           "statename":"Massachusetts",
           "lat":42.3717,
           "lng":-71.0281,
           "search":"bos|genelloganinternationalairport|bostonma|massachusetts"
         },
         {
           "code":"BOW",
           "name":"Bartow Municipal Airport",
           "city":"Bartow",
           "state":"FL",
           "statename":"Florida",
           "lat":27.9493,
           "lng":-81.7818,
           "search":"bow|bartowmunicipalairport|bartowfl|florida"
         },
         {
           "code":"BPT",
           "name":"Jefferson County Airport",
           "city":"Beaumont",
           "state":"TX",
           "statename":"Texas",
           "lat":29.9551,
           "lng":-94.0185,
           "search":"bpt|jeffersoncountyairport|beaumonttx|texas"
         },
         {
           "code":"BQK",
           "name":"Glynco Jetport Airport",
           "city":"Brunswick",
           "state":"GA",
           "statename":"Georgia",
           "lat":31.2525,
           "lng":-81.4703,
           "search":"bqk|glyncojetportairport|brunswickga|georgia"
         },
         {
           "code":"BQN",
           "name":"Rafael Hernandez Airport",
           "city":"Aguadilla",
           "state":"PR",
           "statename":"Puerto Rico",
           "lat":18.496,
           "lng":-67.1357,
           "search":"bqn|rafaelhernandezairport|aguadillapr|puertorico"
         },
         {
           "code":"BRD",
           "name":"Brainerd-Crow Wing County Regional Airport",
           "city":"Brainerd",
           "state":"MN",
           "statename":"Minnesota",
           "lat":46.3909,
           "lng":-94.1413,
           "search":"brd|brainerdcrowwingcountyregionalairport|brainerdmn|minnesota"
         },
         {
           "code":"BRL",
           "name":"Burlington Municipal Airport",
           "city":"Burlington",
           "state":"IA",
           "statename":"Iowa",
           "lat":40.7816,
           "lng":-91.1197,
           "search":"brl|burlingtonmunicipalairport|burlingtonia|iowa"
         },
         {
           "code":"BRO",
           "name":"Brownsville-South Padre Island International Air",
           "city":"Brownsville",
           "state":"TX",
           "statename":"Texas",
           "lat":25.9064,
           "lng":-97.4321,
           "search":"bro|brownsvillesouthpadreislandinternationalair|brownsvilletx|texas"
         },
         {
           "code":"BRW",
           "name":"Wiley Post Will Rogers Memorial Airport",
           "city":"Barrow",
           "state":"AK",
           "statename":"Alaska",
           "lat":71.2892,
           "lng":-156.772,
           "search":"brw|wileypostwillrogersmemorialairport|barrowak|alaska"
         },
         {
           "code":"BTI",
           "name":"Barter Island Airport",
           "city":"Kaktovik",
           "state":"AK",
           "statename":"Alaska",
           "lat":70.1478,
           "lng":-143.579,
           "search":"bti|barterislandairport|kaktovikak|alaska"
         },
         {
           "code":"BTL",
           "name":"W K Kellogg Airport",
           "city":"Battle Creek",
           "state":"MI",
           "statename":"Michigan",
           "lat":42.3046,
           "lng":-85.2448,
           "search":"btl|wkkelloggairport|battlecreekmi|michigan"
         },
         {
           "code":"BTM",
           "name":"Bert Mooney Airport",
           "city":"Butte",
           "state":"MT",
           "statename":"Montana",
           "lat":45.9544,
           "lng":-112.503,
           "search":"btm|bertmooneyairport|buttemt|montana"
         },
         {
           "code":"BTR",
           "name":"Baton Rouge Metropolitan Airport",
           "city":"Baton Rouge",
           "state":"LA",
           "statename":"Louisiana",
           "lat":30.533,
           "lng":-91.1567,
           "search":"btr|batonrougemetropolitanairport|batonrougela|louisiana"
         },
         {
           "code":"BTT",
           "name":"Bettles Airport",
           "city":"Bettles",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.9134,
           "lng":-151.551,
           "search":"btt|bettlesairport|bettlesak|alaska"
         },
         {
           "code":"BTV",
           "name":"Burlington International Airport",
           "city":"South Burlington",
           "state":"VT",
           "statename":"Vermont",
           "lat":44.4688,
           "lng":-73.1552,
           "search":"btv|burlingtoninternationalairport|southburlingtonvt|vermont"
         },
         {
           "code":"BUF",
           "name":"Greater Buffalo International Airport",
           "city":"Buffalo",
           "state":"NY",
           "statename":"New York",
           "lat":42.9309,
           "lng":-78.738,
           "search":"buf|greaterbuffalointernationalairport|buffalony|newyork"
         },
         {
           "code":"BUR",
           "name":"Burbank Glendale Pasadena Airport",
           "city":"Burbank",
           "state":"CA",
           "statename":"California",
           "lat":34.1963,
           "lng":-118.352,
           "search":"bur|burbankglendalepasadenaairport|burbankca|california"
         },
         {
           "code":"BWI",
           "name":"Baltimore-Washington International Thurgood Mars",
           "city":"Baltimore",
           "state":"MD",
           "statename":"Maryland",
           "lat":39.1841,
           "lng":-76.6745,
           "search":"bwi|baltimorewashingtoninternationalthurgoodmars|baltimoremd|maryland"
         },
         {
           "code":"BZN",
           "name":"Gallatin Field Airport",
           "city":"Bozeman",
           "state":"MT",
           "statename":"Montana",
           "lat":45.7722,
           "lng":-111.157,
           "search":"bzn|gallatinfieldairport|bozemanmt|montana"
         },
         {
           "code":"CAE",
           "name":"Columbia Metropolitan Airport",
           "city":"West Columbia",
           "state":"SC",
           "statename":"South Carolina",
           "lat":33.9468,
           "lng":-81.1241,
           "search":"cae|columbiametropolitanairport|westcolumbiasc|southcarolina"
         },
         {
           "code":"CAK",
           "name":"Akron Canton Regional Airport",
           "city":"Canton",
           "state":"OH",
           "statename":"Ohio",
           "lat":40.9149,
           "lng":-81.4309,
           "search":"cak|akroncantonregionalairport|cantonoh|ohio"
         },
         {
           "code":"CDB",
           "name":"Cold Bay Airport",
           "city":"Cold Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.2005,
           "lng":-162.705,
           "search":"cdb|coldbayairport|coldbayak|alaska"
         },
         {
           "code":"CDC",
           "name":"Cedar City Municipal Airport",
           "city":"Cedar City",
           "state":"UT",
           "statename":"Utah",
           "lat":37.6992,
           "lng":-113.092,
           "search":"cdc|cedarcitymunicipalairport|cedarcityut|utah"
         },
         {
           "code":"CDR",
           "name":"Chadron Municipal Airport",
           "city":"Chadron",
           "state":"NE",
           "statename":"Nebraska",
           "lat":42.8284,
           "lng":-103.094,
           "search":"cdr|chadronmunicipalairport|chadronne|nebraska"
         },
         {
           "code":"CDV",
           "name":"Merle K Mudhole Smith Airport",
           "city":"Cordova",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.4924,
           "lng":-145.475,
           "search":"cdv|merlekmudholesmithairport|cordovaak|alaska"
         },
         {
           "code":"CDW",
           "name":"Essex County Airport",
           "city":"Fairfield",
           "state":"NJ",
           "statename":"New Jersey",
           "lat":40.8759,
           "lng":-74.2775,
           "search":"cdw|essexcountyairport|fairfieldnj|newjersey"
         },
         {
           "code":"CEC",
           "name":"Jack Mcnamara Field Airport",
           "city":"Crescent City",
           "state":"CA",
           "statename":"California",
           "lat":41.7765,
           "lng":-124.237,
           "search":"cec|jackmcnamarafieldairport|crescentcityca|california"
         },
         {
           "code":"CEM",
           "name":"Central Airport",
           "city":"Circle",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.6121,
           "lng":-144.674,
           "search":"cem|centralairport|circleak|alaska"
         },
         {
           "code":"CEZ",
           "name":"Cortez-Montezuma County Airport",
           "city":"Cortez",
           "state":"CO",
           "statename":"Colorado",
           "lat":37.3044,
           "lng":-108.63,
           "search":"cez|cortezmontezumacountyairport|cortezco|colorado"
         },
         {
           "code":"CGA",
           "name":"Craig Seaplane Base",
           "city":"Craig",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.4592,
           "lng":-133.106,
           "search":"cga|craigseaplanebase|craigak|alaska"
         },
         {
           "code":"CGI",
           "name":"Cape Girardeau Municipal Airport",
           "city":"Scott City",
           "state":"MO",
           "statename":"Missouri",
           "lat":37.2272,
           "lng":-89.5637,
           "search":"cgi|capegirardeaumunicipalairport|scottcitymo|missouri"
         },
         {
           "code":"CHA",
           "name":"Chattanooga Metropolitan Airport",
           "city":"Chattanooga",
           "state":"TN",
           "statename":"Tennessee",
           "lat":35.0373,
           "lng":-85.1966,
           "search":"cha|chattanoogametropolitanairport|chattanoogatn|tennessee"
         },
         {
           "code":"CHO",
           "name":"Charlottesville Albemarle Airport",
           "city":"Earlysville",
           "state":"VA",
           "statename":"Virginia",
           "lat":38.14,
           "lng":-78.4487,
           "search":"cho|charlottesvillealbemarleairport|earlysvilleva|virginia"
         },
         {
           "code":"CHS",
           "name":"Charleston International Airport",
           "city":"North Charleston",
           "state":"SC",
           "statename":"South Carolina",
           "lat":32.8838,
           "lng":-80.0356,
           "search":"chs|charlestoninternationalairport|northcharlestonsc|southcarolina"
         },
         {
           "code":"CHU",
           "name":"Chuathbaluk",
           "city":"Chuathbaluk",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.5769,
           "lng":-159.244,
           "search":"chu|chuathbaluk|chuathbalukak|alaska"
         },
         {
           "code":"CIC",
           "name":"Chico Municipal Airport",
           "city":"Chico",
           "state":"CA",
           "statename":"California",
           "lat":39.7987,
           "lng":-121.854,
           "search":"cic|chicomunicipalairport|chicoca|california"
         },
         {
           "code":"CID",
           "name":"Cedar Rapids Municipal Airport",
           "city":"Cedar Rapids",
           "state":"IA",
           "statename":"Iowa",
           "lat":41.8893,
           "lng":-91.7008,
           "search":"cid|cedarrapidsmunicipalairport|cedarrapidsia|iowa"
         },
         {
           "code":"CIK",
           "name":"Chalkyitsik Airport",
           "city":"Chalkyitsik",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.65,
           "lng":-143.75,
           "search":"cik|chalkyitsikairport|chalkyitsikak|alaska"
         },
         {
           "code":"CIU",
           "name":"Chippewa County International Airport",
           "city":"Kincheloe",
           "state":"MI",
           "statename":"Michigan",
           "lat":46.2581,
           "lng":-84.4739,
           "search":"ciu|chippewacountyinternationalairport|kincheloemi|michigan"
         },
         {
           "code":"CKB",
           "name":"Benedum Airport",
           "city":"Clarksburg",
           "state":"WV",
           "statename":"West Virginia",
           "lat":39.2967,
           "lng":-80.2314,
           "search":"ckb|benedumairport|clarksburgwv|westvirginia"
         },
         {
           "code":"CKD",
           "name":"Crooked Creek Airport",
           "city":"Aniak",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.8667,
           "lng":-158.133,
           "search":"ckd|crookedcreekairport|aniakak|alaska"
         },
         {
           "code":"CKX",
           "name":"Chicken Airport",
           "city":"Tok",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.0833,
           "lng":-141.917,
           "search":"ckx|chickenairport|tokak|alaska"
         },
         {
           "code":"CLD",
           "name":"Mcclellan Palomar Airport",
           "city":"Carlsbad",
           "state":"CA",
           "statename":"California",
           "lat":33.1255,
           "lng":-117.275,
           "search":"cld|mcclellanpalomarairport|carlsbadca|california"
         },
         {
           "code":"CLE",
           "name":"Hopkins International Airport",
           "city":"Cleveland",
           "state":"OH",
           "statename":"Ohio",
           "lat":41.4115,
           "lng":-81.8339,
           "search":"cle|hopkinsinternationalairport|clevelandoh|ohio"
         },
         {
           "code":"CLL",
           "name":"Easterwood Field Airport",
           "city":"College Station",
           "state":"TX",
           "statename":"Texas",
           "lat":30.5938,
           "lng":-96.3685,
           "search":"cll|easterwoodfieldairport|collegestationtx|texas"
         },
         {
           "code":"CLM",
           "name":"William R Fairchild International Airport",
           "city":"Port Angeles",
           "state":"WA",
           "statename":"Washington",
           "lat":48.1155,
           "lng":-123.491,
           "search":"clm|williamrfairchildinternationalairport|portangeleswa|washington"
         },
         {
           "code":"CLP",
           "name":"Clarks Point Airport",
           "city":"Clarks Point",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.8517,
           "lng":-158.51,
           "search":"clp|clarkspointairport|clarkspointak|alaska"
         },
         {
           "code":"CLT",
           "name":"Douglas International Airport",
           "city":"Charlotte",
           "state":"NC",
           "statename":"North Carolina",
           "lat":35.2226,
           "lng":-80.946,
           "search":"clt|douglasinternationalairport|charlottenc|northcarolina"
         },
         {
           "code":"CMH",
           "name":"Port Columbus International Airport",
           "city":"Columbus",
           "state":"OH",
           "statename":"Ohio",
           "lat":39.9974,
           "lng":-82.8877,
           "search":"cmh|portcolumbusinternationalairport|columbusoh|ohio"
         },
         {
           "code":"CMI",
           "name":"University of Illinois-Willard Airport",
           "city":"Savoy",
           "state":"IL",
           "statename":"Illinois",
           "lat":40.0367,
           "lng":-88.2638,
           "search":"cmi|universityofillinoiswillardairport|savoyil|illinois"
         },
         {
           "code":"CMX",
           "name":"Houghton County Memorial Airport",
           "city":"Hancock",
           "state":"MI",
           "statename":"Michigan",
           "lat":47.1689,
           "lng":-88.4942,
           "search":"cmx|houghtoncountymemorialairport|hancockmi|michigan"
         },
         {
           "code":"CNM",
           "name":"Cavern City Air Terminal Airport",
           "city":"Carlsbad",
           "state":"NM",
           "statename":"New Mexico",
           "lat":32.3458,
           "lng":-104.251,
           "search":"cnm|caverncityairterminalairport|carlsbadnm|newmexico"
         },
         {
           "code":"CNY",
           "name":"Canyonlands Field Airport",
           "city":"Thompson",
           "state":"UT",
           "statename":"Utah",
           "lat":38.7609,
           "lng":-109.742,
           "search":"cny|canyonlandsfieldairport|thompsonut|utah"
         },
         {
           "code":"COD",
           "name":"Yellowstone Regional Airport",
           "city":"Cody/Yellowstone",
           "state":"WY",
           "statename":"Wyoming",
           "lat":44.5134,
           "lng":-109.031,
           "search":"cod|yellowstoneregionalairport|cody/yellowstonewy|wyoming"
         },
         {
           "code":"COS",
           "name":"City of Colorado Springs Municipal Airport",
           "city":"Colorado Springs",
           "state":"CO",
           "statename":"Colorado",
           "lat":38.7829,
           "lng":-104.697,
           "search":"cos|cityofcoloradospringsmunicipalairport|coloradospringsco|colorado"
         },
         {
           "code":"COU",
           "name":"Columbia Regional Airport",
           "city":"Columbia",
           "state":"MO",
           "statename":"Missouri",
           "lat":38.8174,
           "lng":-92.2218,
           "search":"cou|columbiaregionalairport|columbiamo|missouri"
         },
         {
           "code":"CPR",
           "name":"Natrona County International Airport",
           "city":"Casper",
           "state":"WY",
           "statename":"Wyoming",
           "lat":42.8966,
           "lng":-106.465,
           "search":"cpr|natronacountyinternationalairport|casperwy|wyoming"
         },
         {
           "code":"CPX",
           "name":"Culebra Airport",
           "city":"Culebra",
           "state":"PR",
           "statename":"Puerto Rico",
           "lat":18.3204,
           "lng":-65.2929,
           "search":"cpx|culebraairport|culebrapr|puertorico"
         },
         {
           "code":"CRP",
           "name":"Corpus Christi International Airport",
           "city":"Corpus Christi",
           "state":"TX",
           "statename":"Texas",
           "lat":27.7747,
           "lng":-97.5019,
           "search":"crp|corpuschristiinternationalairport|corpuschristitx|texas"
         },
         {
           "code":"CRW",
           "name":"Yeager Airport",
           "city":"Charleston",
           "state":"WV",
           "statename":"West Virginia",
           "lat":38.3697,
           "lng":-81.5951,
           "search":"crw|yeagerairport|charlestonwv|westvirginia"
         },
         {
           "code":"CSG",
           "name":"Columbus Metropolitan Airport",
           "city":"Columbus",
           "state":"GA",
           "statename":"Georgia",
           "lat":32.5184,
           "lng":-84.9401,
           "search":"csg|columbusmetropolitanairport|columbusga|georgia"
         },
         {
           "code":"CVG",
           "name":"Greater Cincinnati International Airport",
           "city":"Hebron",
           "state":"OH",
           "statename":"Ohio",
           "lat":39.0571,
           "lng":-84.6625,
           "search":"cvg|greatercincinnatiinternationalairport|hebronoh|ohio"
         },
         {
           "code":"CVN",
           "name":"Clovis Municipal Airport",
           "city":"Texico",
           "state":"NM",
           "statename":"New Mexico",
           "lat":34.4271,
           "lng":-103.087,
           "search":"cvn|clovismunicipalairport|texiconm|newmexico"
         },
         {
           "code":"CWA",
           "name":"Central Wisconsin Airport",
           "city":"Mosinee",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":44.7846,
           "lng":-89.6704,
           "search":"cwa|centralwisconsinairport|mosineewi|wisconsin"
         },
         {
           "code":"CYF",
           "name":"Chefornak Airport",
           "city":"Chefornak",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.1558,
           "lng":-164.273,
           "search":"cyf|chefornakairport|chefornakak|alaska"
         },
         {
           "code":"CYS",
           "name":"Cheyenne Airport",
           "city":"Cheyenne",
           "state":"WY",
           "statename":"Wyoming",
           "lat":41.1527,
           "lng":-104.819,
           "search":"cys|cheyenneairport|cheyennewy|wyoming"
         },
         {
           "code":"CZN",
           "name":"Chisana Airport",
           "city":"Gakona",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.0833,
           "lng":-142.05,
           "search":"czn|chisanaairport|gakonaak|alaska"
         },
         {
           "code":"DAB",
           "name":"Daytona Beach International Airport",
           "city":"Daytona Beach",
           "state":"FL",
           "statename":"Florida",
           "lat":29.1874,
           "lng":-81.0615,
           "search":"dab|daytonabeachinternationalairport|daytonabeachfl|florida"
         },
         {
           "code":"DAL",
           "name":"Dallas Love Field Airport",
           "city":"Dallas",
           "state":"TX",
           "statename":"Texas",
           "lat":32.8439,
           "lng":-96.8496,
           "search":"dal|dallaslovefieldairport|dallastx|texas"
         },
         {
           "code":"DAY",
           "name":"James M Cox Dayton International Airport",
           "city":"Dayton",
           "state":"OH",
           "statename":"Ohio",
           "lat":39.8968,
           "lng":-84.2207,
           "search":"day|jamesmcoxdaytoninternationalairport|daytonoh|ohio"
         },
         {
           "code":"DBQ",
           "name":"Dubuque Regional Airport",
           "city":"Dubuque",
           "state":"IA",
           "statename":"Iowa",
           "lat":42.4047,
           "lng":-90.7037,
           "search":"dbq|dubuqueregionalairport|dubuqueia|iowa"
         },
         {
           "code":"DCA",
           "name":"Washington National Airport",
           "city":"Arlington",
           "state":"VA",
           "statename":"Virginia",
           "lat":38.849,
           "lng":-77.0438,
           "search":"dca|was|washingtonnationalairport|arlingtonva|virginia"
         },
         {
           "code":"DDC",
           "name":"Dodge City Regional Airport",
           "city":"Dodge City",
           "state":"KS",
           "statename":"Kansas",
           "lat":37.7573,
           "lng":-99.9697,
           "search":"ddc|dodgecityregionalairport|dodgecityks|kansas"
         },
         {
           "code":"DEC",
           "name":"Decatur Airport",
           "city":"Decatur",
           "state":"IL",
           "statename":"Illinois",
           "lat":39.8335,
           "lng":-88.8773,
           "search":"dec|decaturairport|decaturil|illinois"
         },
         {
           "code":"DEN",
           "name":"Denver International Airport",
           "city":"Denver",
           "state":"CO",
           "statename":"Colorado",
           "lat":39.8396,
           "lng":-104.672,
           "search":"den|denverinternationalairport|denverco|colorado"
         },
         {
           "code":"DFW",
           "name":"Fort Worth International Airport",
           "city":"Dallas",
           "state":"TX",
           "statename":"Texas",
           "lat":32.9222,
           "lng":-97.0409,
           "search":"dfw|fortworthinternationalairport|dallastx|texas"
         },
         {
           "code":"DHN",
           "name":"Dothan Airport",
           "city":"Dothan",
           "state":"AL",
           "statename":"Alabama",
           "lat":31.3144,
           "lng":-85.4487,
           "search":"dhn|dothanairport|dothanal|alabama"
         },
         {
           "code":"DIK",
           "name":"Dickinson Municipal Airport",
           "city":"Dickinson",
           "state":"ND",
           "statename":"North Dakota",
           "lat":46.8035,
           "lng":-102.802,
           "search":"dik|dickinsonmunicipalairport|dickinsonnd|northdakota"
         },
         {
           "code":"DLG",
           "name":"Dillingham Municipal Airport",
           "city":"Dillingham",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.0445,
           "lng":-158.513,
           "search":"dlg|dillinghammunicipalairport|dillinghamak|alaska"
         },
         {
           "code":"DLH",
           "name":"Duluth International Airport",
           "city":"Duluth",
           "state":"MN",
           "statename":"Minnesota",
           "lat":46.838,
           "lng":-92.1781,
           "search":"dlh|duluthinternationalairport|duluthmn|minnesota"
         },
         {
           "code":"DRG",
           "name":"Deering Airport",
           "city":"Deering",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.0833,
           "lng":-162.767,
           "search":"drg|deeringairport|deeringak|alaska"
         },
         {
           "code":"DRO",
           "name":"Durango la Plata County Airport",
           "city":"Durango",
           "state":"CO",
           "statename":"Colorado",
           "lat":37.1595,
           "lng":-107.751,
           "search":"dro|durangolaplatacountyairport|durangoco|colorado"
         },
         {
           "code":"DRT",
           "name":"Del Rio International Airport",
           "city":"Del Rio",
           "state":"TX",
           "statename":"Texas",
           "lat":29.3702,
           "lng":-100.918,
           "search":"drt|delriointernationalairport|delriotx|texas"
         },
         {
           "code":"DSM",
           "name":"Des Moines International Airport",
           "city":"Des Moines",
           "state":"IA",
           "statename":"Iowa",
           "lat":41.5328,
           "lng":-93.6481,
           "search":"dsm|desmoinesinternationalairport|desmoinesia|iowa"
         },
         {
           "code":"DTW",
           "name":"Detroit Metropolitan Wayne County Airport",
           "city":"Detroit",
           "state":"MI",
           "statename":"Michigan",
           "lat":42.2327,
           "lng":-83.3412,
           "search":"dtw|dtt|detroitmetropolitanwaynecountyairport|detroitmi|michigan"
         },
         {
           "code":"DUJ",
           "name":"Du Bois Jefferson County Airport",
           "city":"Reynoldsville",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":41.1833,
           "lng":-78.8953,
           "search":"duj|duboisjeffersoncountyairport|reynoldsvillepa|pennsylvania"
         },
         {
           "code":"DUT",
           "name":"Unalaska Airport",
           "city":"Unalaska",
           "state":"AK",
           "statename":"Alaska",
           "lat":53.896,
           "lng":-166.535,
           "search":"dut|unalaskaairport|unalaskaak|alaska"
         },
         {
           "code":"DVL",
           "name":"Devils Lake Municipal Airport",
           "city":"Devils Lake",
           "state":"ND",
           "statename":"North Dakota",
           "lat":48.108,
           "lng":-98.9037,
           "search":"dvl|devilslakemunicipalairport|devilslakend|northdakota"
         },
         {
           "code":"EAA",
           "name":"Eagle Airport",
           "city":"Tok",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.7667,
           "lng":-141.15,
           "search":"eaa|eagleairport|tokak|alaska"
         },
         {
           "code":"EAR",
           "name":"Kearney Municipal Airport",
           "city":"Kearney",
           "state":"NE",
           "statename":"Nebraska",
           "lat":40.7236,
           "lng":-99.0151,
           "search":"ear|kearneymunicipalairport|kearneyne|nebraska"
         },
         {
           "code":"EAT",
           "name":"Pangborn Memorial Airport",
           "city":"East Wenatchee",
           "state":"WA",
           "statename":"Washington",
           "lat":47.4048,
           "lng":-120.21,
           "search":"eat|pangbornmemorialairport|eastwenatcheewa|washington"
         },
         {
           "code":"EAU",
           "name":"Eau Claire County Airport",
           "city":"Eau Claire",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":44.8625,
           "lng":-91.4826,
           "search":"eau|eauclairecountyairport|eauclairewi|wisconsin"
         },
         {
           "code":"EDA",
           "name":"Edna Bay Seaplane Base",
           "city":"Ketchikan",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.9503,
           "lng":-133.656,
           "search":"eda|ednabayseaplanebase|ketchikanak|alaska"
         },
         {
           "code":"EEK",
           "name":"Eek Airport",
           "city":"Eek",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.2167,
           "lng":-162.017,
           "search":"eek|eekairport|eekak|alaska"
         },
         {
           "code":"EGE",
           "name":"Eagle County Regional Airport",
           "city":"Gypsum",
           "state":"CO",
           "statename":"Colorado",
           "lat":39.6395,
           "lng":-106.912,
           "search":"ege|eaglecountyregionalairport|gypsumco|colorado"
         },
         {
           "code":"EGV",
           "name":"Eagle River Union Airport",
           "city":"Eagle River",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":45.932,
           "lng":-89.2599,
           "search":"egv|eagleriverunionairport|eagleriverwi|wisconsin"
         },
         {
           "code":"EGX",
           "name":"Egegik Airport",
           "city":"Egegik",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.2101,
           "lng":-157.366,
           "search":"egx|egegikairport|egegikak|alaska"
         },
         {
           "code":"EKO",
           "name":"Elko Municipal Airport-J C Harris Field",
           "city":"Elko",
           "state":"NV",
           "statename":"Nevada",
           "lat":40.829,
           "lng":-115.78,
           "search":"eko|elkomunicipalairportjcharrisfield|elkonv|nevada"
         },
         {
           "code":"ELI",
           "name":"Elim Airport",
           "city":"Elim",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.6167,
           "lng":-162.267,
           "search":"eli|elimairport|elimak|alaska"
         },
         {
           "code":"ELM",
           "name":"Elmira Corning Regional Airport",
           "city":"Horseheads",
           "state":"NY",
           "statename":"New York",
           "lat":42.1633,
           "lng":-76.8973,
           "search":"elm|elmiracorningregionalairport|horseheadsny|newyork"
         },
         {
           "code":"ELP",
           "name":"El Paso International Airport",
           "city":"El Paso",
           "state":"TX",
           "statename":"Texas",
           "lat":31.7982,
           "lng":-106.393,
           "search":"elp|elpasointernationalairport|elpasotx|texas"
         },
         {
           "code":"ELV",
           "name":"Elfin Cove Airport",
           "city":"Elfin Cove",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.1833,
           "lng":-136.317,
           "search":"elv|elfincoveairport|elfincoveak|alaska"
         },
         {
           "code":"ELY",
           "name":"Yelland Field Airport",
           "city":"Ely",
           "state":"NV",
           "statename":"Nevada",
           "lat":39.3043,
           "lng":-114.853,
           "search":"ely|yellandfieldairport|elynv|nevada"
         },
         {
           "code":"EMK",
           "name":"Emmonak Airport",
           "city":"Alakanuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.785,
           "lng":-164.491,
           "search":"emk|emmonakairport|alakanukak|alaska"
         },
         {
           "code":"ENA",
           "name":"Kenai Municipal Airport",
           "city":"Kenai",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.5651,
           "lng":-151.244,
           "search":"ena|kenaimunicipalairport|kenaiak|alaska"
         },
         {
           "code":"ENW",
           "name":"Kenosha Regional Airport",
           "city":"Kenosha",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":42.5934,
           "lng":-87.9299,
           "search":"enw|kenosharegionalairport|kenoshawi|wisconsin"
         },
         {
           "code":"ERI",
           "name":"Erie International Airport",
           "city":"Erie",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":42.0829,
           "lng":-80.1824,
           "search":"eri|erieinternationalairport|eriepa|pennsylvania"
         },
         {
           "code":"ESC",
           "name":"Delta County Airport",
           "city":"Escanaba",
           "state":"MI",
           "statename":"Michigan",
           "lat":45.718,
           "lng":-87.0942,
           "search":"esc|deltacountyairport|escanabami|michigan"
         },
         {
           "code":"ESD",
           "name":"Orcas Island Airport",
           "city":"Eastsound",
           "state":"WA",
           "statename":"Washington",
           "lat":48.7073,
           "lng":-122.909,
           "search":"esd|orcasislandairport|eastsoundwa|washington"
         },
         {
           "code":"EUG",
           "name":"Mahlon Sweet Field Airport",
           "city":"Eugene",
           "state":"OR",
           "statename":"Oregon",
           "lat":44.1184,
           "lng":-123.213,
           "search":"eug|mahlonsweetfieldairport|eugeneor|oregon"
         },
         {
           "code":"EVV",
           "name":"Evansville Regional Airport",
           "city":"Evansville",
           "state":"IN",
           "statename":"Indiana",
           "lat":38.0464,
           "lng":-87.5308,
           "search":"evv|evansvilleregionalairport|evansvillein|indiana"
         },
         {
           "code":"EWB",
           "name":"New Bedford Municipal Airport",
           "city":"New Bedford",
           "state":"MA",
           "statename":"Massachusetts",
           "lat":41.6735,
           "lng":-70.9579,
           "search":"ewb|newbedfordmunicipalairport|newbedfordma|massachusetts"
         },
         {
           "code":"EWD",
           "name":"Wildman Lake",
           "city":"Wildman Lake",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.1021,
           "lng":-149.924,
           "search":"ewd|wildmanlake|wildmanlakeak|alaska"
         },
         {
           "code":"EWN",
           "name":"Craven County Regional Airport",
           "city":"New Bern",
           "state":"NC",
           "statename":"North Carolina",
           "lat":35.0786,
           "lng":-77.0343,
           "search":"ewn|cravencountyregionalairport|newbernnc|northcarolina"
         },
         {
           "code":"EWR",
           "name":"Newark International Airport",
           "city":"Newark",
           "state":"NJ",
           "statename":"New Jersey",
           "lat":40.6924,
           "lng":-74.1843,
           "search":"ewr|nyc|newarkinternationalairport|newarknj|newjersey"
         },
         {
           "code":"EYW",
           "name":"Key West International Airport",
           "city":"Key West",
           "state":"FL",
           "statename":"Florida",
           "lat":24.5536,
           "lng":-81.7551,
           "search":"eyw|keywestinternationalairport|keywestfl|florida"
         },
         {
           "code":"FAI",
           "name":"Fairbanks International Airport",
           "city":"Fairbanks",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.8183,
           "lng":-147.866,
           "search":"fai|fairbanksinternationalairport|fairbanksak|alaska"
         },
         {
           "code":"FAR",
           "name":"Hector International Airport",
           "city":"Fargo",
           "state":"ND",
           "statename":"North Dakota",
           "lat":46.9195,
           "lng":-96.8243,
           "search":"far|hectorinternationalairport|fargond|northdakota"
         },
         {
           "code":"FAT",
           "name":"Fresno Yosemite International Airport",
           "city":"Fresno",
           "state":"CA",
           "statename":"California",
           "lat":36.7675,
           "lng":-119.717,
           "search":"fat|fresnoyosemiteinternationalairport|fresnoca|california"
         },
         {
           "code":"FAY",
           "name":"Fayetteville Regional Airport",
           "city":"Fayetteville",
           "state":"NC",
           "statename":"North Carolina",
           "lat":34.9914,
           "lng":-78.8889,
           "search":"fay|fayettevilleregionalairport|fayettevillenc|northcarolina"
         },
         {
           "code":"FCA",
           "name":"Glacier Park International Airport",
           "city":"Kalispell",
           "state":"MT",
           "statename":"Montana",
           "lat":48.3075,
           "lng":-114.252,
           "search":"fca|glacierparkinternationalairport|kalispellmt|montana"
         },
         {
           "code":"FKL",
           "name":"Chess Lamberton Airport",
           "city":"Franklin",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":41.3766,
           "lng":-79.8573,
           "search":"fkl|chesslambertonairport|franklinpa|pennsylvania"
         },
         {
           "code":"FLG",
           "name":"Flagstaff Pulliam Airport",
           "city":"Flagstaff",
           "state":"AZ",
           "statename":"Arizona",
           "lat":35.139,
           "lng":-111.675,
           "search":"flg|flagstaffpulliamairport|flagstaffaz|arizona"
         },
         {
           "code":"FLL",
           "name":"Fort Lauderdale Hollywood International Airport",
           "city":"Dania Beach",
           "state":"FL",
           "statename":"Florida",
           "lat":26.0722,
           "lng":-80.1354,
           "search":"fll|fortlauderdalehollywoodinternationalairport|daniabeachfl|florida"
         },
         {
           "code":"FLO",
           "name":"Florence Regional Airport",
           "city":"Florence",
           "state":"SC",
           "statename":"South Carolina",
           "lat":34.1936,
           "lng":-79.7289,
           "search":"flo|florenceregionalairport|florencesc|southcarolina"
         },
         {
           "code":"FMN",
           "name":"Four Corners Regional Airport",
           "city":"Farmington",
           "state":"NM",
           "statename":"New Mexico",
           "lat":36.7387,
           "lng":-108.227,
           "search":"fmn|fourcornersregionalairport|farmingtonnm|newmexico"
         },
         {
           "code":"FMY",
           "name":"Page Field Airport",
           "city":"Fort Myers",
           "state":"FL",
           "statename":"Florida",
           "lat":26.5815,
           "lng":-81.862,
           "search":"fmy|pagefieldairport|fortmyersfl|florida"
         },
         {
           "code":"FNL",
           "name":"Fort Collins Loveland Municipal Airport",
           "city":"Loveland",
           "state":"CO",
           "statename":"Colorado",
           "lat":40.4505,
           "lng":-105.008,
           "search":"fnl|fortcollinslovelandmunicipalairport|lovelandco|colorado"
         },
         {
           "code":"FNT",
           "name":"Bishop International Airport",
           "city":"Flint",
           "state":"MI",
           "statename":"Michigan",
           "lat":42.9756,
           "lng":-83.7411,
           "search":"fnt|bishopinternationalairport|flintmi|michigan"
         },
         {
           "code":"FOD",
           "name":"Fort Dodge Regional Airport",
           "city":"Fort Dodge",
           "state":"IA",
           "statename":"Iowa",
           "lat":42.5523,
           "lng":-94.1819,
           "search":"fod|fortdodgeregionalairport|fortdodgeia|iowa"
         },
         {
           "code":"FRD",
           "name":"Friday Harbor Airport",
           "city":"Friday Harbor",
           "state":"WA",
           "statename":"Washington",
           "lat":48.5252,
           "lng":-123.027,
           "search":"frd|fridayharborairport|fridayharborwa|washington"
         },
         {
           "code":"FSD",
           "name":"Sioux Falls Regional Airport",
           "city":"Sioux Falls",
           "state":"SD",
           "statename":"South Dakota",
           "lat":43.5813,
           "lng":-96.7317,
           "search":"fsd|siouxfallsregionalairport|siouxfallssd|southdakota"
         },
         {
           "code":"FSM",
           "name":"Smith Field Airport",
           "city":"Fort Smith",
           "state":"AR",
           "statename":"Arkansas",
           "lat":36.1881,
           "lng":-94.4944,
           "search":"fsm|smithfieldairport|fortsmithar|arkansas"
         },
         {
           "code":"FWA",
           "name":"Fort Wayne Municipal Airport-Baer Field",
           "city":"Fort Wayne",
           "state":"IN",
           "statename":"Indiana",
           "lat":40.9883,
           "lng":-85.1899,
           "search":"fwa|fortwaynemunicipalairportbaerfield|fortwaynein|indiana"
         },
         {
           "code":"FYU",
           "name":"Fort Yukon Airport",
           "city":"Fort Yukon",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.5714,
           "lng":-145.25,
           "search":"fyu|fortyukonairport|fortyukonak|alaska"
         },
         {
           "code":"GAL",
           "name":"Galena Airport",
           "city":"Galena",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.7404,
           "lng":-156.931,
           "search":"gal|galenaairport|galenaak|alaska"
         },
         {
           "code":"GAM",
           "name":"Gambell Airport",
           "city":"Gambell",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.7667,
           "lng":-171.738,
           "search":"gam|gambellairport|gambellak|alaska"
         },
         {
           "code":"GBD",
           "name":"Great Bend Municipal Airport",
           "city":"Great Bend",
           "state":"KS",
           "statename":"Kansas",
           "lat":38.352,
           "lng":-98.853,
           "search":"gbd|greatbendmunicipalairport|greatbendks|kansas"
         },
         {
           "code":"GCC",
           "name":"Gillette Campbell County Airport",
           "city":"Gillette",
           "state":"WY",
           "statename":"Wyoming",
           "lat":44.3465,
           "lng":-105.533,
           "search":"gcc|gillettecampbellcountyairport|gillettewy|wyoming"
         },
         {
           "code":"GCK",
           "name":"Garden City Regional Airport",
           "city":"Pierceville",
           "state":"KS",
           "statename":"Kansas",
           "lat":37.9267,
           "lng":-100.719,
           "search":"gck|gardencityregionalairport|piercevilleks|kansas"
         },
         {
           "code":"GEG",
           "name":"Spokane International Airport",
           "city":"Spokane",
           "state":"WA",
           "statename":"Washington",
           "lat":47.625,
           "lng":-117.538,
           "search":"geg|spokaneinternationalairport|spokanewa|washington"
         },
         {
           "code":"GFK",
           "name":"Grand Forks Mark Andrews International Airport",
           "city":"Grand Forks",
           "state":"ND",
           "statename":"North Dakota",
           "lat":47.9494,
           "lng":-97.1762,
           "search":"gfk|grandforksmarkandrewsinternationalairport|grandforksnd|northdakota"
         },
         {
           "code":"GGG",
           "name":"Gregg County Airport",
           "city":"Longview",
           "state":"TX",
           "statename":"Texas",
           "lat":32.3874,
           "lng":-94.7194,
           "search":"ggg|greggcountyairport|longviewtx|texas"
         },
         {
           "code":"GJT",
           "name":"Walker Field Airport",
           "city":"Grand Junction",
           "state":"CO",
           "statename":"Colorado",
           "lat":39.1217,
           "lng":-108.529,
           "search":"gjt|walkerfieldairport|grandjunctionco|colorado"
         },
         {
           "code":"GLH",
           "name":"Mid Delta Regional Airport",
           "city":"Greenville",
           "state":"MS",
           "statename":"Mississippi",
           "lat":33.4819,
           "lng":-90.9903,
           "search":"glh|middeltaregionalairport|greenvillems|mississippi"
         },
         {
           "code":"GLV",
           "name":"Golovin",
           "city":"Golovin",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.5433,
           "lng":-163.033,
           "search":"glv|golovin|golovinak|alaska"
         },
         {
           "code":"GNU",
           "name":"Goodnews Bay",
           "city":"Goodnews Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.1218,
           "lng":-161.588,
           "search":"gnu|alaska|goodnewsbayak|alaska"
         },
         {
           "code":"GNV",
           "name":"Gainesville Regional Airport",
           "city":"Gainesville",
           "state":"FL",
           "statename":"Florida",
           "lat":29.6861,
           "lng":-82.277,
           "search":"gnv|gainesvilleregionalairport|gainesvillefl|florida"
         },
         {
           "code":"GPT",
           "name":"Gulfport Biloxi Regional Airport",
           "city":"Gulfport",
           "state":"MS",
           "statename":"Mississippi",
           "lat":30.4133,
           "lng":-89.072,
           "search":"gpt|gulfportbiloxiregionalairport|gulfportms|mississippi"
         },
         {
           "code":"GRB",
           "name":"Austin Straubel International Airport",
           "city":"Green Bay",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":44.4923,
           "lng":-88.1274,
           "search":"grb|austinstraubelinternationalairport|greenbaywi|wisconsin"
         },
         {
           "code":"GRK",
           "name":"Killeen-Fort Hood Regional Airport",
           "city":"Killeen",
           "state":"TX",
           "statename":"Texas",
           "lat":31.0615,
           "lng":-97.8206,
           "search":"grk|killeenforthoodregionalairport|killeentx|texas"
         },
         {
           "code":"GRR",
           "name":"Gerald R. Ford International Airport",
           "city":"Grand Rapids",
           "state":"MI",
           "statename":"Michigan",
           "lat":42.8841,
           "lng":-85.5307,
           "search":"grr|geraldr.fordinternationalairport|grandrapidsmi|michigan"
         },
         {
           "code":"GSO",
           "name":"Triad International Airport",
           "city":"Greensboro",
           "state":"NC",
           "statename":"North Carolina",
           "lat":36.1038,
           "lng":-79.9427,
           "search":"gso|triadinternationalairport|greensboronc|northcarolina"
         },
         {
           "code":"GSP",
           "name":"Greenville Spartanburg International Airport",
           "city":"Greer",
           "state":"SC",
           "statename":"South Carolina",
           "lat":34.8907,
           "lng":-82.2167,
           "search":"gsp|greenvillespartanburginternationalairport|greersc|southcarolina"
         },
         {
           "code":"GST",
           "name":"Gustavus Airport",
           "city":"Gustavus",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.4246,
           "lng":-135.707,
           "search":"gst|gustavusairport|gustavusak|alaska"
         },
         {
           "code":"GTF",
           "name":"Great Falls International Airport",
           "city":"Great Falls",
           "state":"MT",
           "statename":"Montana",
           "lat":47.482,
           "lng":-111.356,
           "search":"gtf|greatfallsinternationalairport|greatfallsmt|montana"
         },
         {
           "code":"GTR",
           "name":"Golden Triangle Regional Airport",
           "city":"Columbus",
           "state":"MS",
           "statename":"Mississippi",
           "lat":33.4516,
           "lng":-88.5876,
           "search":"gtr|goldentriangleregionalairport|columbusms|mississippi"
         },
         {
           "code":"GUC",
           "name":"Gunnison County Airport",
           "city":"Gunnison",
           "state":"CO",
           "statename":"Colorado",
           "lat":38.5356,
           "lng":-106.941,
           "search":"guc|gunnisoncountyairport|gunnisonco|colorado"
         },
         {
           "code":"GUM",
           "name":"Antonio B Won Pat International Airport",
           "city":"HagՂtձa",
           "state":"GU",
           "statename":"Guam",
           "lat":13.4833,
           "lng":144.796,
           "search":"gum|antoniobwonpatinternationalairport|hagՂtձagu|guam"
         },
         {
           "code":"HAE",
           "name":"Havasupai",
           "city":"Havasupai",
           "state":"AZ",
           "statename":"Arizona",
           "lat":36.2306,
           "lng":-112.669,
           "search":"hae|havasupai|havasupaiaz|arizona"
         },
         {
           "code":"HCR",
           "name":"Holy Cross",
           "city":"Holy Cross",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.2016,
           "lng":-159.77,
           "search":"hcr|alaska|holycrossak|alaska"
         },
         {
           "code":"HDN",
           "name":"Yampa Valley Airport",
           "city":"Hayden",
           "state":"CO",
           "statename":"Colorado",
           "lat":40.485,
           "lng":-107.219,
           "search":"hdn|yampavalleyairport|haydenco|colorado"
         },
         {
           "code":"HHH",
           "name":"Hilton Head Airport",
           "city":"Hilton Head Island",
           "state":"SC",
           "statename":"South Carolina",
           "lat":32.2267,
           "lng":-80.6989,
           "search":"hhh|hiltonheadairport|hiltonheadislandsc|southcarolina"
         },
         {
           "code":"HIB",
           "name":"Chisholm Hibbing Airport",
           "city":"Hibbing",
           "state":"MN",
           "statename":"Minnesota",
           "lat":47.3934,
           "lng":-92.8418,
           "search":"hib|chisholmhibbingairport|hibbingmn|minnesota"
         },
         {
           "code":"HKB",
           "name":"Healy Lake Airport",
           "city":"Healy Lake",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.8667,
           "lng":-148.967,
           "search":"hkb|healylakeairport|healylakeak|alaska"
         },
         {
           "code":"HLN",
           "name":"Helena Regional Airport",
           "city":"Helena",
           "state":"MT",
           "statename":"Montana",
           "lat":46.6104,
           "lng":-111.99,
           "search":"hln|helenaregionalairport|helenamt|montana"
         },
         {
           "code":"HNH",
           "name":"Hoonah Airport",
           "city":"Hoonah",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.0966,
           "lng":-135.41,
           "search":"hnh|hoonahairport|hoonahak|alaska"
         },
         {
           "code":"HNL",
           "name":"Honolulu International Airport",
           "city":"Honolulu",
           "state":"HI",
           "statename":"Hawaii",
           "lat":21.3358,
           "lng":-157.919,
           "search":"hnl|honoluluinternationalairport|honoluluhi|hawaii"
         },
         {
           "code":"HNM",
           "name":"Hana Airport",
           "city":"Hana",
           "state":"HI",
           "statename":"Hawaii",
           "lat":20.7944,
           "lng":-156.015,
           "search":"hnm|hanaairport|hanahi|hawaii"
         },
         {
           "code":"HNS",
           "name":"Haines Airport",
           "city":"Haines",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.2439,
           "lng":-135.524,
           "search":"hns|hainesairport|hainesak|alaska"
         },
         {
           "code":"HOB",
           "name":"Lea County Regional Airport",
           "city":"Hobbs",
           "state":"NM",
           "statename":"New Mexico",
           "lat":32.6929,
           "lng":-103.215,
           "search":"hob|leacountyregionalairport|hobbsnm|newmexico"
         },
         {
           "code":"HOM",
           "name":"Homer Airport",
           "city":"Homer",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.6408,
           "lng":-151.499,
           "search":"hom|homerairport|homerak|alaska"
         },
         {
           "code":"HON",
           "name":"Howes",
           "city":"Huron",
           "state":"SD",
           "statename":"South Dakota",
           "lat":44.3833,
           "lng":-98.2333,
           "search":"hon|howes|huronsd|southdakota"
         },
         {
           "code":"HOU",
           "name":"William P Hobby Airport",
           "city":"Houston",
           "state":"TX",
           "statename":"Texas",
           "lat":29.6572,
           "lng":-95.2795,
           "search":"hou|williamphobbyairport|houstontx|texas"
         },
         {
           "code":"HPB",
           "name":"Hooper Bay Airport",
           "city":"Hooper Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.5262,
           "lng":-166.142,
           "search":"hpb|hooperbayairport|hooperbayak|alaska"
         },
         {
           "code":"HPN",
           "name":"Westchester County Airport",
           "city":"Purchase",
           "state":"NY",
           "statename":"New York",
           "lat":41.0693,
           "lng":-73.7042,
           "search":"hpn|westchestercountyairport|purchaseny|newyork"
         },
         {
           "code":"HRL",
           "name":"Grande Valley International Airport",
           "city":"Harlingen",
           "state":"TX",
           "statename":"Texas",
           "lat":26.2216,
           "lng":-97.663,
           "search":"hrl|grandevalleyinternationalairport|harlingentx|texas"
         },
         {
           "code":"HSL",
           "name":"Huslia",
           "city":"Huslia",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.7024,
           "lng":-156.387,
           "search":"hsl|alaska|husliaak|alaska"
         },
         {
           "code":"HSV",
           "name":"Huntsville International Airport",
           "city":"Huntsville",
           "state":"AL",
           "statename":"Alabama",
           "lat":34.6492,
           "lng":-86.7767,
           "search":"hsv|huntsvilleinternationalairport|huntsvilleal|alabama"
         },
         {
           "code":"HTS",
           "name":"Tri State Walker Long Field Airport",
           "city":"Huntington",
           "state":"WV",
           "statename":"West Virginia",
           "lat":38.37,
           "lng":-82.5542,
           "search":"hts|tristatewalkerlongfieldairport|huntingtonwv|westvirginia"
         },
         {
           "code":"HUS",
           "name":"Hughes",
           "city":"Hughes",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.0443,
           "lng":-154.258,
           "search":"hus|hughes|hughesak|alaska"
         },
         {
           "code":"HVN",
           "name":"Tweed New Haven Airport",
           "city":"East Haven",
           "state":"CT",
           "statename":"Connecticut",
           "lat":41.2709,
           "lng":-72.89,
           "search":"hvn|tweednewhavenairport|easthavenct|connecticut"
         },
         {
           "code":"HVR",
           "name":"Havre City-County Airport",
           "city":"Havre",
           "state":"MT",
           "statename":"Montana",
           "lat":48.5461,
           "lng":-109.773,
           "search":"hvr|havrecitycountyairport|havremt|montana"
         },
         {
           "code":"HYA",
           "name":"Barnstable Boardman Polando Airport",
           "city":"Hyannis",
           "state":"MA",
           "statename":"Massachusetts",
           "lat":41.6667,
           "lng":-70.2863,
           "search":"hya|barnstableboardmanpolandoairport|hyannisma|massachusetts"
         },
         {
           "code":"HYG",
           "name":"Hydaburg",
           "city":"Hydaburg",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.205,
           "lng":-132.822,
           "search":"hyg|alaska|hydaburgak|alaska"
         },
         {
           "code":"HYL",
           "name":"SPB",
           "city":"Hollis",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.4833,
           "lng":-132.65,
           "search":"hyl|spb|hollisak|alaska"
         },
         {
           "code":"HYS",
           "name":"Hays Municipal Airport",
           "city":"Hays",
           "state":"KS",
           "statename":"Kansas",
           "lat":38.8546,
           "lng":-99.2737,
           "search":"hys|haysmunicipalairport|haysks|kansas"
         },
         {
           "code":"IAD",
           "name":"Dulles International Airport",
           "city":"Washington",
           "state":"VA",
           "statename":"Virginia",
           "lat":38.9556,
           "lng":-77.4484,
           "search":"iad|was|dullesinternationalairport|washingtonva|virginia"
         },
         {
           "code":"IAG",
           "name":"Niagara Falls International Airport",
           "city":"Niagara Falls",
           "state":"NY",
           "statename":"New York",
           "lat":43.1,
           "lng":-78.9423,
           "search":"iag|niagarafallsinternationalairport|niagarafallsny|newyork"
         },
         {
           "code":"IAH",
           "name":"George Bush Intercontinental Airport",
           "city":"Houston",
           "state":"TX",
           "statename":"Texas",
           "lat":29.9784,
           "lng":-95.3424,
           "search":"iah|hou|georgebushintercontinentalairport|houstontx|texas"
         },
         {
           "code":"IAN",
           "name":"Kiana",
           "city":"Kiana",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.9699,
           "lng":-160.429,
           "search":"ian|kiana|kianaak|alaska"
         },
         {
           "code":"ICT",
           "name":"Wichita Mid-Continent Airport",
           "city":"Wichita",
           "state":"KS",
           "statename":"Kansas",
           "lat":37.6531,
           "lng":-97.43,
           "search":"ict|wichitamidcontinentairport|wichitaks|kansas"
         },
         {
           "code":"IDA",
           "name":"Fanning Field Airport",
           "city":"Idaho Falls",
           "state":"ID",
           "statename":"Idaho",
           "lat":43.5147,
           "lng":-112.068,
           "search":"ida|fanningfieldairport|idahofallsid|idaho"
         },
         {
           "code":"IFP",
           "name":"Laughlin-Bullhead International Airport",
           "city":"Bullhead City",
           "state":"AZ",
           "statename":"Arizona",
           "lat":35.1657,
           "lng":-114.557,
           "search":"ifp|laughlinbullheadinternationalairport|bullheadcityaz|arizona"
         },
         {
           "code":"IGG",
           "name":"Igiugig",
           "city":"Igiugig",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.3167,
           "lng":-155.9,
           "search":"igg|igiugig|igiugigak|alaska"
         },
         {
           "code":"IGM",
           "name":"Kingman Airport",
           "city":"Kingman",
           "state":"AZ",
           "statename":"Arizona",
           "lat":35.2692,
           "lng":-113.957,
           "search":"igm|kingmanairport|kingmanaz|arizona"
         },
         {
           "code":"IKO",
           "name":"Nikolski",
           "city":"Nikolski",
           "state":"AK",
           "statename":"Alaska",
           "lat":52.9389,
           "lng":-168.868,
           "search":"iko|nikolski|nikolskiak|alaska"
         },
         {
           "code":"ILI",
           "name":"Iliamna Airport",
           "city":"Iliamna",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.7555,
           "lng":-154.918,
           "search":"ili|iliamnaairport|iliamnaak|alaska"
         },
         {
           "code":"ILM",
           "name":"Wilmington International Airport",
           "city":"Wilmington",
           "state":"NC",
           "statename":"North Carolina",
           "lat":34.2668,
           "lng":-77.912,
           "search":"ilm|wilmingtoninternationalairport|wilmingtonnc|northcarolina"
         },
         {
           "code":"ILN",
           "name":"Airborne Airpark",
           "city":"Wilmington",
           "state":"OH",
           "statename":"Ohio",
           "lat":39.4348,
           "lng":-83.7982,
           "search":"iln|airborneairpark|wilmingtonoh|ohio"
         },
         {
           "code":"IMT",
           "name":"Ford Airport",
           "city":"Kingsford",
           "state":"MI",
           "statename":"Michigan",
           "lat":45.8153,
           "lng":-88.1185,
           "search":"imt|fordairport|kingsfordmi|michigan"
         },
         {
           "code":"IND",
           "name":"Indianapolis International Airport",
           "city":"Indianapolis",
           "state":"IN",
           "statename":"Indiana",
           "lat":39.7322,
           "lng":-86.2707,
           "search":"ind|indianapolisinternationalairport|indianapolisin|indiana"
         },
         {
           "code":"INL",
           "name":"Falls International Airport",
           "city":"International Falls",
           "state":"MN",
           "statename":"Minnesota",
           "lat":48.5661,
           "lng":-93.3978,
           "search":"inl|fallsinternationalairport|internationalfallsmn|minnesota"
         },
         {
           "code":"INT",
           "name":"Smith Reynolds Airport",
           "city":"Winston-Salem",
           "state":"NC",
           "statename":"North Carolina",
           "lat":36.1361,
           "lng":-80.2294,
           "search":"int|smithreynoldsairport|winstonsalemnc|northcarolina"
         },
         {
           "code":"IPL",
           "name":"Imperial County Airport",
           "city":"Imperial",
           "state":"CA",
           "statename":"California",
           "lat":32.8332,
           "lng":-115.57,
           "search":"ipl|imperialcountyairport|imperialca|california"
         },
         {
           "code":"IPT",
           "name":"Williamsport-Lycoming County Airport",
           "city":"Montoursville",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":41.2441,
           "lng":-76.9276,
           "search":"ipt|williamsportlycomingcountyairport|montoursvillepa|pennsylvania"
         },
         {
           "code":"IRC",
           "name":"Circle",
           "city":"Circle",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.8245,
           "lng":-144.063,
           "search":"irc|circle|circleak|alaska"
         },
         {
           "code":"IRM",
           "name":"Irma",
           "city":"Irma",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":45.3517,
           "lng":-89.6665,
           "search":"irm|irmawi|wisconsin"
         },
         {
           "code":"ISN",
           "name":"Sloulin Field International Airport",
           "city":"Williston",
           "state":"ND",
           "statename":"North Dakota",
           "lat":48.1767,
           "lng":-103.631,
           "search":"isn|sloulinfieldinternationalairport|willistonnd|northdakota"
         },
         {
           "code":"ISO",
           "name":"Kinston Jetport Stallings Airport",
           "city":"Kinston",
           "state":"NC",
           "statename":"North Carolina",
           "lat":35.3243,
           "lng":-77.6115,
           "search":"iso|kinstonjetportstallingsairport|kinstonnc|northcarolina"
         },
         {
           "code":"ISP",
           "name":"Long Island Macarthur Airport",
           "city":"Ronkonkoma",
           "state":"NY",
           "statename":"New York",
           "lat":40.7891,
           "lng":-73.0984,
           "search":"isp|longislandmacarthurairport|ronkonkomany|newyork"
         },
         {
           "code":"ITH",
           "name":"Tompkins County Airport",
           "city":"Ithaca",
           "state":"NY",
           "statename":"New York",
           "lat":42.4898,
           "lng":-76.4627,
           "search":"ith|tompkinscountyairport|ithacany|newyork"
         },
         {
           "code":"ITO",
           "name":"Hilo International Airport",
           "city":"Hilo",
           "state":"HI",
           "statename":"Hawaii",
           "lat":19.7126,
           "lng":-155.042,
           "search":"ito|hilointernationalairport|hilohi|hawaii"
         },
         {
           "code":"IWD",
           "name":"Gogebic-Iron County Airport",
           "city":"Ironwood",
           "state":"MI",
           "statename":"Michigan",
           "lat":46.5208,
           "lng":-90.1344,
           "search":"iwd|gogebicironcountyairport|ironwoodmi|michigan"
         },
         {
           "code":"IYK",
           "name":"Inyokern Airport",
           "city":"Inyokern",
           "state":"CA",
           "statename":"California",
           "lat":35.6606,
           "lng":-117.816,
           "search":"iyk|inyokernairport|inyokernca|california"
         },
         {
           "code":"JAC",
           "name":"Jackson Hole Airport",
           "city":"Jackson",
           "state":"WY",
           "statename":"Wyoming",
           "lat":43.6034,
           "lng":-110.736,
           "search":"jac|jacksonholeairport|jacksonwy|wyoming"
         },
         {
           "code":"JAN",
           "name":"Jackson International Airport",
           "city":"Pearl",
           "state":"MS",
           "statename":"Mississippi",
           "lat":32.3089,
           "lng":-90.0733,
           "search":"jan|jacksoninternationalairport|pearlms|mississippi"
         },
         {
           "code":"JAX",
           "name":"Jacksonville International Airport",
           "city":"Jacksonville",
           "state":"FL",
           "statename":"Florida",
           "lat":30.4914,
           "lng":-81.676,
           "search":"jax|jacksonvilleinternationalairport|jacksonvillefl|florida"
         },
         {
           "code":"JEF",
           "name":"Jefferson City Memorial Airport",
           "city":"Holts Summit",
           "state":"MO",
           "statename":"Missouri",
           "lat":38.593,
           "lng":-92.1652,
           "search":"jef|jeffersoncitymemorialairport|holtssummitmo|missouri"
         },
         {
           "code":"JFK",
           "name":"John F Kennedy International Airport",
           "city":"Jamaica",
           "state":"NY",
           "statename":"New York",
           "lat":40.6437,
           "lng":-73.79,
           "search":"jfk|nyc|johnfkennedyinternationalairport|jamaicany|newyork"
         },
         {
           "code":"JGC",
           "name":"Grand Canyon Heliport",
           "city":"Williams",
           "state":"AZ",
           "statename":"Arizona",
           "lat":35.9621,
           "lng":-112.133,
           "search":"jgc|grandcanyonheliport|williamsaz|arizona"
         },
         {
           "code":"JHM",
           "name":"Kapalua West Maui Airport",
           "city":"Lahaina",
           "state":"HI",
           "statename":"Hawaii",
           "lat":20.9619,
           "lng":-156.676,
           "search":"jhm|kapaluawestmauiairport|lahainahi|hawaii"
         },
         {
           "code":"JHW",
           "name":"Chautauqua County-Jamestown Airport",
           "city":"Jamestown",
           "state":"NY",
           "statename":"New York",
           "lat":42.1528,
           "lng":-79.2666,
           "search":"jhw|chautauquacountyjamestownairport|jamestownny|newyork"
         },
         {
           "code":"JKL",
           "name":"Julian Carroll Airport",
           "city":"Jackson",
           "state":"KY",
           "statename":"Kentucky",
           "lat":37.5917,
           "lng":-83.315,
           "search":"jkl|juliancarrollairport|jacksonky|kentucky"
         },
         {
           "code":"JLN",
           "name":"Joplin Regional Airport",
           "city":"Webb City",
           "state":"MO",
           "statename":"Missouri",
           "lat":37.147,
           "lng":-94.5019,
           "search":"jln|joplinregionalairport|webbcitymo|missouri"
         },
         {
           "code":"JMS",
           "name":"Jamestown Municipal Airport",
           "city":"Jamestown",
           "state":"ND",
           "statename":"North Dakota",
           "lat":46.9243,
           "lng":-98.6788,
           "search":"jms|jamestownmunicipalairport|jamestownnd|northdakota"
         },
         {
           "code":"JNU",
           "name":"Juneau International Airport",
           "city":"Juneau",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.3598,
           "lng":-134.583,
           "search":"jnu|juneauinternationalairport|juneauak|alaska"
         },
         {
           "code":"JRB",
           "name":"Downtown Manhattan Heliport",
           "city":"New York",
           "state":"NY",
           "statename":"New York",
           "lat":40.7039,
           "lng":-74.0129,
           "search":"jrb|downtownmanhattanheliport|newyorkny|newyork"
         },
         {
           "code":"JST",
           "name":"Johnstown Cambria County Airport",
           "city":"Johnstown",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":40.3208,
           "lng":-78.8306,
           "search":"jst|johnstowncambriacountyairport|johnstownpa|pennsylvania"
         },
         {
           "code":"KAL",
           "name":"Kaltag",
           "city":"Kaltag",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.3248,
           "lng":-158.725,
           "search":"kal|kaltag|kaltagak|alaska"
         },
         {
           "code":"KBC",
           "name":"Birch Creek Airport",
           "city":"Birch Creek",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.2667,
           "lng":-145.8,
           "search":"kbc|birchcreekairport|birchcreekak|alaska"
         },
         {
           "code":"KCC",
           "name":"Coffman Cove",
           "city":"Coffman Cove",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.014,
           "lng":-132.826,
           "search":"kcc|alaska|coffmancoveak|alaska"
         },
         {
           "code":"KCG",
           "name":"Chignik Fisheries Airport",
           "city":"Chignik Lagoon",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.3173,
           "lng":-158.596,
           "search":"kcg|chignikfisheriesairport|chigniklagoonak|alaska"
         },
         {
           "code":"KCL",
           "name":"Chignik Lagoon Airport",
           "city":"Chignik Lagoon",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.3065,
           "lng":-158.537,
           "search":"kcl|chigniklagoonairport|chigniklagoonak|alaska"
         },
         {
           "code":"KCQ",
           "name":"Chignik Lake Airport",
           "city":"Chignik",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.3119,
           "lng":-158.362,
           "search":"kcq|chigniklakeairport|chignikak|alaska"
         },
         {
           "code":"KEB",
           "name":"Nanwalek",
           "city":"Nanwalek",
           "state":"AK",
           "statename":"Alaska",
           "lat":41.0833,
           "lng":-92.4583,
           "search":"keb|nanwalek|nanwalekak|alaska"
         },
         {
           "code":"KEK",
           "name":"Ekwok",
           "city":"Ekwok",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.3516,
           "lng":-157.48,
           "search":"kek|ekwok|ekwokak|alaska"
         },
         {
           "code":"KFP",
           "name":"False Pass",
           "city":"False Pass",
           "state":"AK",
           "statename":"Alaska",
           "lat":54.85,
           "lng":-163.417,
           "search":"kfp|falsepassak|alaska"
         },
         {
           "code":"KGK",
           "name":"Koliganek Airport",
           "city":"New Koliganek",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.7266,
           "lng":-157.26,
           "search":"kgk|koliganekairport|newkoliganekak|alaska"
         },
         {
           "code":"KGX",
           "name":"Grayling",
           "city":"Grayling",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.9053,
           "lng":-160.067,
           "search":"kgx|alaska|graylingak|alaska"
         },
         {
           "code":"KKA",
           "name":"Koyuk",
           "city":"Koyuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.9311,
           "lng":-161.16,
           "search":"kka|koyuk|koyukak|alaska"
         },
         {
           "code":"KKB",
           "name":"Kitoi Seaplane Base",
           "city":"Kitoi Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.1869,
           "lng":-152.375,
           "search":"kkb|kitoiseaplanebase|kitoibayak|alaska"
         },
         {
           "code":"KKH",
           "name":"Kongiganak",
           "city":"Kongiganak",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"kkh|alaska|kongiganakak|alaska"
         },
         {
           "code":"KKI",
           "name":"Akiachak",
           "city":"Akiachak",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.9057,
           "lng":-161.424,
           "search":"kki|akiachak|akiachakak|alaska"
         },
         {
           "code":"KKU",
           "name":"Ekuk Airport",
           "city":"Clarks Point",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.8167,
           "lng":-158.55,
           "search":"kku|ekukairport|clarkspointak|alaska"
         },
         {
           "code":"KLG",
           "name":"Kalskag",
           "city":"Kalskag",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.5382,
           "lng":-160.314,
           "search":"klg|kalskag|kalskagak|alaska"
         },
         {
           "code":"KLL",
           "name":"Levelock",
           "city":"Levelock",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.1126,
           "lng":-156.856,
           "search":"kll|levelock|levelockak|alaska"
         },
         {
           "code":"KLN",
           "name":"Larsen Bay",
           "city":"Larsen Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.5383,
           "lng":-153.98,
           "search":"kln|larsenbay|larsenbayak|alaska"
         },
         {
           "code":"KLW",
           "name":"Klawock Seaplane Base",
           "city":"Klawock",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.5743,
           "lng":-133.064,
           "search":"klw|klawockseaplanebase|klawockak|alaska"
         },
         {
           "code":"KMC",
           "name":"King Khalid Military",
           "city":"King Khalid Mil. City",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.1333,
           "lng":-153.2,
           "search":"kmc|kingkhalidmilitary|kingkhalidmil.cityak|alaska"
         },
         {
           "code":"KMO",
           "name":"Manokotak",
           "city":"Manokotak",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.9817,
           "lng":-159.058,
           "search":"kmo|manokotak|manokotakak|alaska"
         },
         {
           "code":"KMY",
           "name":"Moser Bay",
           "city":"Moser Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":57,
           "lng":-154.167,
           "search":"kmy|moserbay|moserbayak|alaska"
         },
         {
           "code":"KNK",
           "name":"Kakhonak",
           "city":"Kakhonak",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.4333,
           "lng":-154.85,
           "search":"knk|kakhonakak|alaska"
         },
         {
           "code":"KNW",
           "name":"New Stuyahok",
           "city":"New Stuyahok",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.4513,
           "lng":-157.317,
           "search":"knw|newstuyahok|newstuyahokak|alaska"
         },
         {
           "code":"KOA",
           "name":"Kailua-Kona International Airport",
           "city":"Kailua Kona",
           "state":"HI",
           "statename":"Hawaii",
           "lat":19.7334,
           "lng":-156.039,
           "search":"koa|kailuakonainternationalairport|kailuakonahi|hawaii"
         },
         {
           "code":"KOT",
           "name":"Kotlik",
           "city":"Kotlik",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.0328,
           "lng":-163.554,
           "search":"kot|kotlik|kotlikak|alaska"
         },
         {
           "code":"KOY",
           "name":"Olga Bay",
           "city":"Olga Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":47.902,
           "lng":-112.265,
           "search":"koy|olgabay|olgabayak|alaska"
         },
         {
           "code":"KOZ",
           "name":"Ouzinkie",
           "city":"Ouzinkie",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"koz|alaska|ouzinkieak|alaska"
         },
         {
           "code":"KPB",
           "name":"Point Baker Seaplane Base",
           "city":"Point Baker",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.3502,
           "lng":-133.622,
           "search":"kpb|pointbakerseaplanebase|pointbakerak|alaska"
         },
         {
           "code":"KPC",
           "name":"Port Clarence Coast Guard Station",
           "city":"Brevig Mission",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.2544,
           "lng":-166.856,
           "search":"kpc|portclarencecoastguardstation|brevigmissionak|alaska"
         },
         {
           "code":"KPN",
           "name":"Kipnuk",
           "city":"Kipnuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.9371,
           "lng":-164.041,
           "search":"kpn|kipnuk|kipnukak|alaska"
         },
         {
           "code":"KPR",
           "name":"Port Williams",
           "city":"Port Williams",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.4833,
           "lng":-152.583,
           "search":"kpr|portwilliams|portwilliamsak|alaska"
         },
         {
           "code":"KPV",
           "name":"Perryville",
           "city":"Perryville",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.9122,
           "lng":-159.154,
           "search":"kpv|alaska|perryvilleak|alaska"
         },
         {
           "code":"KPY",
           "name":"Port Bailey",
           "city":"Port Bailey",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.743,
           "lng":-154.96,
           "search":"kpy|alaska|portbaileyak|alaska"
         },
         {
           "code":"KQA",
           "name":"Akutan Airport",
           "city":"Akutan",
           "state":"AK",
           "statename":"Alaska",
           "lat":54.1271,
           "lng":-165.889,
           "search":"kqa|akutanairport|akutanak|alaska"
         },
         {
           "code":"KSM",
           "name":"Saint Marys",
           "city":"Saint Marys",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.0503,
           "lng":-163.179,
           "search":"ksm|alaska|saintmarysak|alaska"
         },
         {
           "code":"KTB",
           "name":"Thorne Bay",
           "city":"Thorne Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.6833,
           "lng":-132.529,
           "search":"ktb|alaska|thornebayak|alaska"
         },
         {
           "code":"KTN",
           "name":"Ketchikan International Airport",
           "city":"Ketchikan",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.354,
           "lng":-131.706,
           "search":"ktn|ketchikaninternationalairport|ketchikanak|alaska"
         },
         {
           "code":"KTS",
           "name":"Teller Mission",
           "city":"Teller Mission",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.3333,
           "lng":-166.483,
           "search":"kts|tellermissionak|alaska"
         },
         {
           "code":"KUK",
           "name":"Kasigluk",
           "city":"Kasigluk",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.8953,
           "lng":-162.517,
           "search":"kuk|kasigluk|kasiglukak|alaska"
         },
         {
           "code":"KVC",
           "name":"King Cove",
           "city":"King Cove",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.0667,
           "lng":-162.317,
           "search":"kvc|kingcoveak|alaska"
         },
         {
           "code":"KVL",
           "name":"Kivalina",
           "city":"Kivalina",
           "state":"AK",
           "statename":"Alaska",
           "lat":67.7333,
           "lng":-164.667,
           "search":"kvl|kivalina|kivalinaak|alaska"
         },
         {
           "code":"KWK",
           "name":"Kwigillingok",
           "city":"Kwigillingok",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.9077,
           "lng":-163.026,
           "search":"kwk|kwigillingok|kwigillingokak|alaska"
         },
         {
           "code":"KWN",
           "name":"Quinhagak",
           "city":"Quinhagak",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.7511,
           "lng":-161.908,
           "search":"kwn|quinhagak|quinhagakak|alaska"
         },
         {
           "code":"KWP",
           "name":"Village Seaplane Base-West Point",
           "city":"West Point",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.7696,
           "lng":-153.554,
           "search":"kwp|villageseaplanebasewestpoint|westpointak|alaska"
         },
         {
           "code":"KWT",
           "name":"Kwethluk Airport",
           "city":"Kwethluk",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.8,
           "lng":-161.45,
           "search":"kwt|kwethlukairport|kwethlukak|alaska"
         },
         {
           "code":"KXA",
           "name":"Kasaan SPB",
           "city":"Kasaan",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.5,
           "lng":-132.5,
           "search":"kxa|kasaanspb|kasaanak|alaska"
         },
         {
           "code":"KYK",
           "name":"Karluk Airport",
           "city":"Kodiak",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.5645,
           "lng":-154.454,
           "search":"kyk|karlukairport|kodiakak|alaska"
         },
         {
           "code":"KYU",
           "name":"Koyukuk",
           "city":"Koyukuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.9,
           "lng":-157.7,
           "search":"kyu|koyukuk|koyukukak|alaska"
         },
         {
           "code":"KZB",
           "name":"Zachar Bay",
           "city":"Zachar Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.55,
           "lng":-153.75,
           "search":"kzb|zacharbay|zacharbayak|alaska"
         },
         {
           "code":"LAN",
           "name":"Lansing Capital City Airport",
           "city":"Lansing",
           "state":"MI",
           "statename":"Michigan",
           "lat":42.7728,
           "lng":-84.5888,
           "search":"lan|lansingcapitalcityairport|lansingmi|michigan"
         },
         {
           "code":"LAR",
           "name":"General Brees Field",
           "city":"Laramie",
           "state":"WY",
           "statename":"Wyoming",
           "lat":37.8527,
           "lng":-76.517,
           "search":"lar|generalbreesfield|laramiewy|wyoming"
         },
         {
           "code":"LAS",
           "name":"Mccarran International Airport",
           "city":"Las Vegas",
           "state":"NV",
           "statename":"Nevada",
           "lat":36.0806,
           "lng":-115.143,
           "search":"las|mccarraninternationalairport|lasvegasnv|nevada"
         },
         {
           "code":"LAW",
           "name":"Lawton Municipal Airport",
           "city":"Lawton",
           "state":"OK",
           "statename":"Oklahoma",
           "lat":34.573,
           "lng":-98.4135,
           "search":"law|lawtonmunicipalairport|lawtonok|oklahoma"
         },
         {
           "code":"LAX",
           "name":"Los Angeles International Airport",
           "city":"Los Angeles",
           "state":"CA",
           "statename":"California",
           "lat":33.9456,
           "lng":-118.391,
           "search":"lax|losangelesinternationalairport|losangelesca|california"
         },
         {
           "code":"LBB",
           "name":"Lubbock International Airport",
           "city":"Lubbock",
           "state":"TX",
           "statename":"Texas",
           "lat":33.6566,
           "lng":-101.821,
           "search":"lbb|lubbockinternationalairport|lubbocktx|texas"
         },
         {
           "code":"LBE",
           "name":"Westmoreland County Airport",
           "city":"Latrobe",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":40.2728,
           "lng":-79.4056,
           "search":"lbe|westmorelandcountyairport|latrobepa|pennsylvania"
         },
         {
           "code":"LBF",
           "name":"Lee Bird Field Airport",
           "city":"North Platte",
           "state":"NE",
           "statename":"Nebraska",
           "lat":41.1333,
           "lng":-100.705,
           "search":"lbf|leebirdfieldairport|northplattene|nebraska"
         },
         {
           "code":"LBL",
           "name":"Liberal Municipal Airport",
           "city":"Liberal",
           "state":"KS",
           "statename":"Kansas",
           "lat":37.0446,
           "lng":-100.952,
           "search":"lbl|liberalmunicipalairport|liberalks|kansas"
         },
         {
           "code":"LCH",
           "name":"Lake Charles Regional Airport",
           "city":"Lake Charles",
           "state":"LA",
           "statename":"Louisiana",
           "lat":30.1235,
           "lng":-93.2198,
           "search":"lch|lakecharlesregionalairport|lakecharlesla|louisiana"
         },
         {
           "code":"LCK",
           "name":"Rickenbacker International Airport",
           "city":"Columbus",
           "state":"OH",
           "statename":"Ohio",
           "lat":39.8176,
           "lng":-82.936,
           "search":"lck|rickenbackerinternationalairport|columbusoh|ohio"
         },
         {
           "code":"LEB",
           "name":"Lebanon Municipal Airport",
           "city":"West Lebanon",
           "state":"NH",
           "statename":"New Hampshire",
           "lat":43.6249,
           "lng":-72.3087,
           "search":"leb|lebanonmunicipalairport|westlebanonnh|newhampshire"
         },
         {
           "code":"LEX",
           "name":"Blue Grass Field",
           "city":"Lexington",
           "state":"KY",
           "statename":"Kentucky",
           "lat":38.0384,
           "lng":-84.5989,
           "search":"lex|bluegrassfield|lexingtonky|kentucky"
         },
         {
           "code":"LFT",
           "name":"Lafayette Regional Airport",
           "city":"Lafayette",
           "state":"LA",
           "statename":"Louisiana",
           "lat":30.2084,
           "lng":-91.9935,
           "search":"lft|lafayetteregionalairport|lafayettela|louisiana"
         },
         {
           "code":"LGA",
           "name":"LaGuardia Airport",
           "city":"Flushing",
           "state":"NY",
           "statename":"New York",
           "lat":40.7731,
           "lng":-73.8756,
           "search":"lga|nyc|laguardiaairport|flushingny|newyork"
         },
         {
           "code":"LGB",
           "name":"Long Beach Daugherty Field Airport",
           "city":"Long Beach",
           "state":"CA",
           "statename":"California",
           "lat":33.8186,
           "lng":-118.144,
           "search":"lgb|longbeachdaughertyfieldairport|longbeachca|california"
         },
         {
           "code":"LIH",
           "name":"Lihue Airport",
           "city":"Lihue",
           "state":"HI",
           "statename":"Hawaii",
           "lat":21.9782,
           "lng":-159.351,
           "search":"lih|lihueairport|lihuehi|hawaii"
         },
         {
           "code":"LIT",
           "name":"Adams Field Airport",
           "city":"Little Rock",
           "state":"AR",
           "statename":"Arkansas",
           "lat":34.7278,
           "lng":-92.219,
           "search":"lit|adamsfieldairport|littlerockar|arkansas"
         },
         {
           "code":"LKE",
           "name":"Lake Union Seaplane Base",
           "city":"Seattle",
           "state":"WA",
           "statename":"Washington",
           "lat":47.6333,
           "lng":-122.333,
           "search":"lke|lakeunionseaplanebase|seattlewa|washington"
         },
         {
           "code":"LMA",
           "name":"Lake Minchumina",
           "city":"Lake Minchumina",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.8825,
           "lng":-152.313,
           "search":"lma|lakeminchumina|lakeminchuminaak|alaska"
         },
         {
           "code":"LMT",
           "name":"Klamath Falls International Airport",
           "city":"Klamath Falls",
           "state":"OR",
           "statename":"Oregon",
           "lat":42.1638,
           "lng":-121.745,
           "search":"lmt|klamathfallsinternationalairport|klamathfallsor|oregon"
         },
         {
           "code":"LNK",
           "name":"Lincoln Municipal Airport",
           "city":"Lincoln",
           "state":"NE",
           "statename":"Nebraska",
           "lat":40.8461,
           "lng":-96.7543,
           "search":"lnk|lincolnmunicipalairport|lincolnne|nebraska"
         },
         {
           "code":"LNY",
           "name":"Lanai Airport",
           "city":"Lanai City",
           "state":"HI",
           "statename":"Hawaii",
           "lat":20.7909,
           "lng":-156.951,
           "search":"lny|lanaiairport|lanaicityhi|hawaii"
         },
         {
           "code":"LOU",
           "name":"Bowman Field Airport",
           "city":"Louisville",
           "state":"KY",
           "statename":"Kentucky",
           "lat":38.2228,
           "lng":-85.6669,
           "search":"lou|bowmanfieldairport|louisvilleky|kentucky"
         },
         {
           "code":"LPS",
           "name":"Lopez Island Airport",
           "city":"Lopez Island",
           "state":"WA",
           "statename":"Washington",
           "lat":48.4855,
           "lng":-122.936,
           "search":"lps|lopezislandairport|lopezislandwa|washington"
         },
         {
           "code":"LRD",
           "name":"Laredo International Airport",
           "city":"Laredo",
           "state":"TX",
           "statename":"Texas",
           "lat":27.5431,
           "lng":-99.4555,
           "search":"lrd|laredointernationalairport|laredotx|texas"
         },
         {
           "code":"LSE",
           "name":"La Crosse Municipal Airport",
           "city":"La Crosse",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":43.8751,
           "lng":-91.2638,
           "search":"lse|lacrossemunicipalairport|lacrossewi|wisconsin"
         },
         {
           "code":"LUF",
           "name":"Luke Air Force Base",
           "city":"Webb",
           "state":"AZ",
           "statename":"Arizona",
           "lat":33.5355,
           "lng":-112.372,
           "search":"luf|lukeairforcebase|webbaz|arizona"
         },
         {
           "code":"LUP",
           "name":"Kalaupapa Airport",
           "city":"Kalaupapa",
           "state":"HI",
           "statename":"Hawaii",
           "lat":21.2077,
           "lng":-156.976,
           "search":"lup|kalaupapaairport|kalaupapahi|hawaii"
         },
         {
           "code":"LUR",
           "name":"Cape Lisburne Long-Range Radar Station",
           "city":"Point Hope",
           "state":"AK",
           "statename":"Alaska",
           "lat":68.8482,
           "lng":-166.118,
           "search":"lur|capelisburnelongrangeradarstation|pointhopeak|alaska"
         },
         {
           "code":"LWB",
           "name":"Greenbrier Valley Airport",
           "city":"Lewisburg",
           "state":"WV",
           "statename":"West Virginia",
           "lat":37.8571,
           "lng":-80.4044,
           "search":"lwb|greenbriervalleyairport|lewisburgwv|westvirginia"
         },
         {
           "code":"LWS",
           "name":"Lewiston Nez Perce County Airport",
           "city":"Lewiston",
           "state":"ID",
           "statename":"Idaho",
           "lat":46.3776,
           "lng":-117.011,
           "search":"lws|lewistonnezpercecountyairport|lewistonid|idaho"
         },
         {
           "code":"LWT",
           "name":"Lewistown Municipal Airport",
           "city":"Lewistown",
           "state":"MT",
           "statename":"Montana",
           "lat":47.0552,
           "lng":-109.46,
           "search":"lwt|lewistownmunicipalairport|lewistownmt|montana"
         },
         {
           "code":"LYH",
           "name":"Lynchburg Regional Airport",
           "city":"Lynchburg",
           "state":"VA",
           "statename":"Virginia",
           "lat":37.3309,
           "lng":-79.1944,
           "search":"lyh|lynchburgregionalairport|lynchburgva|virginia"
         },
         {
           "code":"MAF",
           "name":"Midland International Airport",
           "city":"Midland",
           "state":"TX",
           "statename":"Texas",
           "lat":31.9361,
           "lng":-102.208,
           "search":"maf|midlandinternationalairport|midlandtx|texas"
         },
         {
           "code":"MAZ",
           "name":"Eugenio Maria de Hostos Airport",
           "city":"Mayaguez",
           "state":"PR",
           "statename":"Puerto Rico",
           "lat":18.2531,
           "lng":-67.1489,
           "search":"maz|eugeniomariadehostosairport|mayaguezpr|puertorico"
         },
         {
           "code":"MBL",
           "name":"Manistee County-Blacker Airport",
           "city":"Manistee",
           "state":"MI",
           "statename":"Michigan",
           "lat":44.2757,
           "lng":-86.2558,
           "search":"mbl|manisteecountyblackerairport|manisteemi|michigan"
         },
         {
           "code":"MBS",
           "name":"MBS International Airport",
           "city":"Freeland",
           "state":"MI",
           "statename":"Michigan",
           "lat":43.5311,
           "lng":-84.0933,
           "search":"mbs|mbsinternationalairport|freelandmi|michigan"
         },
         {
           "code":"MCE",
           "name":"Merced Municipal Airport-Macready Field",
           "city":"Merced",
           "state":"CA",
           "statename":"California",
           "lat":37.2892,
           "lng":-120.515,
           "search":"mce|mercedmunicipalairportmacreadyfield|mercedca|california"
         },
         {
           "code":"MCG",
           "name":"Mcgrath Airport",
           "city":"Mcgrath",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.9536,
           "lng":-155.603,
           "search":"mcg|mcgrathairport|mcgrathak|alaska"
         },
         {
           "code":"MCI",
           "name":"Kansas City International Airport",
           "city":"Kansas City",
           "state":"MO",
           "statename":"Missouri",
           "lat":39.2992,
           "lng":-94.7171,
           "search":"mci|kansascityinternationalairport|kansascitymo|missouri"
         },
         {
           "code":"MCK",
           "name":"Mccook Municipal Airport",
           "city":"Mccook",
           "state":"NE",
           "statename":"Nebraska",
           "lat":40.2071,
           "lng":-100.599,
           "search":"mck|mccookmunicipalairport|mccookne|nebraska"
         },
         {
           "code":"MCN",
           "name":"Middle Georgia Regional Airport",
           "city":"Macon",
           "state":"GA",
           "statename":"Georgia",
           "lat":32.7023,
           "lng":-83.65,
           "search":"mcn|middlegeorgiaregionalairport|maconga|georgia"
         },
         {
           "code":"MCO",
           "name":"Orlando International Airport",
           "city":"Orlando",
           "state":"FL",
           "statename":"Florida",
           "lat":28.4418,
           "lng":-81.3115,
           "search":"mco|orlandointernationalairport|orlandofl|florida"
         },
         {
           "code":"MCW",
           "name":"Mason City Municipal Airport",
           "city":"Clear Lake",
           "state":"IA",
           "statename":"Iowa",
           "lat":43.153,
           "lng":-93.3361,
           "search":"mcw|masoncitymunicipalairport|clearlakeia|iowa"
         },
         {
           "code":"MDT",
           "name":"Harrisburg International Airport",
           "city":"Middletown",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":40.1962,
           "lng":-76.7564,
           "search":"mdt|harrisburginternationalairport|middletownpa|pennsylvania"
         },
         {
           "code":"MDW",
           "name":"Chicago Midway International Airport",
           "city":"Chicago",
           "state":"IL",
           "statename":"Illinois",
           "lat":41.7875,
           "lng":-87.7416,
           "search":"mdw|chi|chicagomidwayinternationalairport|chicagoil|illinois"
         },
         {
           "code":"MEI",
           "name":"Key Field Airport",
           "city":"Meridian",
           "state":"MS",
           "statename":"Mississippi",
           "lat":32.3334,
           "lng":-88.7449,
           "search":"mei|keyfieldairport|meridianms|mississippi"
         },
         {
           "code":"MEM",
           "name":"Memphis International Airport",
           "city":"Memphis",
           "state":"TN",
           "statename":"Tennessee",
           "lat":35.047,
           "lng":-89.9823,
           "search":"mem|memphisinternationalairport|memphistn|tennessee"
         },
         {
           "code":"MFE",
           "name":"Miller International Airport",
           "city":"Mcallen",
           "state":"TX",
           "statename":"Texas",
           "lat":26.1813,
           "lng":-98.2404,
           "search":"mfe|millerinternationalairport|mcallentx|texas"
         },
         {
           "code":"MFR",
           "name":"Rogue Valley International-Medford Airport",
           "city":"Central Point",
           "state":"OR",
           "statename":"Oregon",
           "lat":42.3691,
           "lng":-122.874,
           "search":"mfr|roguevalleyinternationalmedfordairport|centralpointor|oregon"
         },
         {
           "code":"MGM",
           "name":"Montgomery Regional Airport",
           "city":"Montgomery",
           "state":"AL",
           "statename":"Alabama",
           "lat":32.3049,
           "lng":-86.3909,
           "search":"mgm|montgomeryregionalairport|montgomeryal|alabama"
         },
         {
           "code":"MGW",
           "name":"Morgantown Municipal Airport-Hart Field",
           "city":"Morgantown",
           "state":"WV",
           "statename":"West Virginia",
           "lat":39.6411,
           "lng":-79.9241,
           "search":"mgw|morgantownmunicipalairporthartfield|morgantownwv|westvirginia"
         },
         {
           "code":"MHK",
           "name":"Manhattan Municipal Airport",
           "city":"Manhattan",
           "state":"KS",
           "statename":"Kansas",
           "lat":39.1368,
           "lng":-96.6699,
           "search":"mhk|manhattanmunicipalairport|manhattanks|kansas"
         },
         {
           "code":"MHR",
           "name":"Mather Airport",
           "city":"Mather",
           "state":"CA",
           "statename":"California",
           "lat":38.5646,
           "lng":-121.297,
           "search":"mhr|matherairport|matherca|california"
         },
         {
           "code":"MHT",
           "name":"Manchester-Boston Regional Airport",
           "city":"Manchester",
           "state":"NH",
           "statename":"New Hampshire",
           "lat":42.9293,
           "lng":-71.4386,
           "search":"mht|manchesterbostonregionalairport|manchesternh|newhampshire"
         },
         {
           "code":"MIA",
           "name":"Miami International Airport",
           "city":"Miami",
           "state":"FL",
           "statename":"Florida",
           "lat":25.7953,
           "lng":-80.2727,
           "search":"mia|miamiinternationalairport|miamifl|florida"
         },
         {
           "code":"MKC",
           "name":"Kansas City Downtown Airport",
           "city":"Kansas City",
           "state":"MO",
           "statename":"Missouri",
           "lat":39.1197,
           "lng":-94.5906,
           "search":"mkc|kansascitydowntownairport|kansascitymo|missouri"
         },
         {
           "code":"MKE",
           "name":"General Mitchell International Airport",
           "city":"Milwaukee",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":42.9471,
           "lng":-87.9051,
           "search":"mke|generalmitchellinternationalairport|milwaukeewi|wisconsin"
         },
         {
           "code":"MKG",
           "name":"Muskegon County Airport",
           "city":"Muskegon",
           "state":"MI",
           "statename":"Michigan",
           "lat":43.1646,
           "lng":-86.2367,
           "search":"mkg|muskegoncountyairport|muskegonmi|michigan"
         },
         {
           "code":"MKK",
           "name":"Molokai Airport",
           "city":"Hoolehua",
           "state":"HI",
           "statename":"Hawaii",
           "lat":21.1557,
           "lng":-157.094,
           "search":"mkk|molokaiairport|hoolehuahi|hawaii"
         },
         {
           "code":"MLB",
           "name":"Melbourne International Airport",
           "city":"Melbourne",
           "state":"FL",
           "statename":"Florida",
           "lat":28.0957,
           "lng":-80.6282,
           "search":"mlb|melbourneinternationalairport|melbournefl|florida"
         },
         {
           "code":"MLI",
           "name":"Quad City Airport",
           "city":"Coal Valley",
           "state":"IL",
           "statename":"Illinois",
           "lat":41.4539,
           "lng":-90.5058,
           "search":"mli|quadcityairport|coalvalleyil|illinois"
         },
         {
           "code":"MLL",
           "name":"Marshall",
           "city":"Marshall",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.8833,
           "lng":-162.067,
           "search":"mll|marshall|marshallak|alaska"
         },
         {
           "code":"MLU",
           "name":"Monroe Regional Airport",
           "city":"Monroe",
           "state":"LA",
           "statename":"Louisiana",
           "lat":32.5099,
           "lng":-92.044,
           "search":"mlu|monroeregionalairport|monroela|louisiana"
         },
         {
           "code":"MLY",
           "name":"Manley Hot Springs",
           "city":"Manley Hot Springs",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.9812,
           "lng":-150.637,
           "search":"mly|manleyhotsprings|manleyhotspringsak|alaska"
         },
         {
           "code":"MMH",
           "name":"Mammoth June Lakes Airport",
           "city":"Mammoth Lakes",
           "state":"CA",
           "statename":"California",
           "lat":37.6288,
           "lng":-118.844,
           "search":"mmh|mammothjunelakesairport|mammothlakesca|california"
         },
         {
           "code":"MNT",
           "name":"Minto",
           "city":"Minto",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.1987,
           "lng":-149.53,
           "search":"mnt|minto|mintoak|alaska"
         },
         {
           "code":"MOB",
           "name":"Mobile Regional Airport",
           "city":"Mobile",
           "state":"AL",
           "statename":"Alabama",
           "lat":30.6775,
           "lng":-88.243,
           "search":"mob|mobileregionalairport|mobileal|alabama"
         },
         {
           "code":"MOD",
           "name":"Modesto City County Airport-Harry Sham Field",
           "city":"Modesto",
           "state":"CA",
           "statename":"California",
           "lat":37.6319,
           "lng":-120.959,
           "search":"mod|modestocitycountyairportharryshamfield|modestoca|california"
         },
         {
           "code":"MOT",
           "name":"Minot International Airport",
           "city":"Minot",
           "state":"ND",
           "statename":"North Dakota",
           "lat":48.2554,
           "lng":-101.291,
           "search":"mot|minotinternationalairport|minotnd|northdakota"
         },
         {
           "code":"MOU",
           "name":"Mountain Village",
           "city":"Mountain Village",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.0833,
           "lng":-163.733,
           "search":"mou|mountainvillage|mountainvillageak|alaska"
         },
         {
           "code":"MQT",
           "name":"Sawyer International Airport",
           "city":"Marquette",
           "state":"MI",
           "statename":"Michigan",
           "lat":46.3501,
           "lng":-87.3871,
           "search":"mqt|sawyerinternationalairport|marquettemi|michigan"
         },
         {
           "code":"MRY",
           "name":"Monterey Peninsula Airport",
           "city":"Monterey",
           "state":"CA",
           "statename":"California",
           "lat":36.5872,
           "lng":-121.851,
           "search":"mry|montereypeninsulaairport|montereyca|california"
         },
         {
           "code":"MSL",
           "name":"Muscle Shoals Regional Airport",
           "city":"Muscle Shoals",
           "state":"AL",
           "statename":"Alabama",
           "lat":34.7439,
           "lng":-87.6185,
           "search":"msl|muscleshoalsregionalairport|muscleshoalsal|alabama"
         },
         {
           "code":"MSN",
           "name":"Dane County Regional Airport-Truax Field",
           "city":"Madison",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":43.1351,
           "lng":-89.3465,
           "search":"msn|danecountyregionalairporttruaxfield|madisonwi|wisconsin"
         },
         {
           "code":"MSO",
           "name":"Missoula International Airport",
           "city":"Missoula",
           "state":"MT",
           "statename":"Montana",
           "lat":46.9192,
           "lng":-114.084,
           "search":"mso|missoulainternationalairport|missoulamt|montana"
         },
         {
           "code":"MSP",
           "name":"Minneapolis St Paul International Airport",
           "city":"St. Paul",
           "state":"MN",
           "statename":"Minnesota",
           "lat":44.8793,
           "lng":-93.1987,
           "search":"msp|minneapolisstpaulinternationalairport|st.paulmn|minnesota"
         },
         {
           "code":"MSS",
           "name":"Massena International Airport",
           "city":"Massena",
           "state":"NY",
           "statename":"New York",
           "lat":44.9326,
           "lng":-74.8535,
           "search":"mss|massenainternationalairport|massenany|newyork"
         },
         {
           "code":"MSY",
           "name":"New Orleans International Airport",
           "city":"Kenner",
           "state":"LA",
           "statename":"Louisiana",
           "lat":29.983,
           "lng":-90.2569,
           "search":"msy|neworleansinternationalairport|kennerla|louisiana"
         },
         {
           "code":"MTJ",
           "name":"Montrose Regional Airport",
           "city":"Montrose",
           "state":"CO",
           "statename":"Colorado",
           "lat":38.5003,
           "lng":-107.899,
           "search":"mtj|montroseregionalairport|montroseco|colorado"
         },
         {
           "code":"MTM",
           "name":"Metlakatla Sea Plane Base",
           "city":"Metlakatla",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.1333,
           "lng":-131.583,
           "search":"mtm|metlakatlaseaplanebase|metlakatlaak|alaska"
         },
         {
           "code":"MUE",
           "name":"Waimea Kohala Airport",
           "city":"Kamuela",
           "state":"HI",
           "statename":"Hawaii",
           "lat":19.9983,
           "lng":-155.675,
           "search":"mue|waimeakohalaairport|kamuelahi|hawaii"
         },
         {
           "code":"MVY",
           "name":"Marthas Vineyard Airport",
           "city":"Vineyard Haven",
           "state":"MA",
           "statename":"Massachusetts",
           "lat":41.3895,
           "lng":-70.6112,
           "search":"mvy|marthasvineyardairport|vineyardhavenma|massachusetts"
         },
         {
           "code":"MWA",
           "name":"Williamson County Regional Airport",
           "city":"Marion",
           "state":"IL",
           "statename":"Illinois",
           "lat":37.7467,
           "lng":-89.0104,
           "search":"mwa|williamsoncountyregionalairport|marionil|illinois"
         },
         {
           "code":"MYL",
           "name":"Mccall Airport",
           "city":"Mccall",
           "state":"ID",
           "statename":"Idaho",
           "lat":44.8968,
           "lng":-116.096,
           "search":"myl|mccallairport|mccallid|idaho"
         },
         {
           "code":"MYR",
           "name":"Myrtle Beach International Airport",
           "city":"Myrtle Beach",
           "state":"SC",
           "statename":"South Carolina",
           "lat":33.6821,
           "lng":-78.9228,
           "search":"myr|myrtlebeachinternationalairport|myrtlebeachsc|southcarolina"
         },
         {
           "code":"MYU",
           "name":"Mekoryuk",
           "city":"Mekoryuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.3906,
           "lng":-166.191,
           "search":"myu|mekoryuk|mekoryukak|alaska"
         },
         {
           "code":"NCN",
           "name":"Chenega",
           "city":"New Chenega",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.0784,
           "lng":-148.017,
           "search":"ncn|chenega|newchenegaak|alaska"
         },
         {
           "code":"NIB",
           "name":"Nikolai",
           "city":"Nikolai",
           "state":"AK",
           "statename":"Alaska",
           "lat":45.9837,
           "lng":-108.028,
           "search":"nib|nikolai|nikolaiak|alaska"
         },
         {
           "code":"NIP",
           "name":"Jacksonville Naval Air Station",
           "city":"Jacksonville",
           "state":"FL",
           "statename":"Florida",
           "lat":30.2342,
           "lng":-81.6753,
           "search":"nip|jacksonvillenavalairstation|jacksonvillefl|florida"
         },
         {
           "code":"NIU",
           "name":"Honolulu International Airport",
           "city":"Honolulu",
           "state":"HI",
           "statename":"Hawaii",
           "lat":21.3358,
           "lng":-157.919,
           "search":"niu|honoluluinternationalairport|honoluluhi|hawaii"
         },
         {
           "code":"NKI",
           "name":"Naukiti Airport",
           "city":"Naukiti",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.8556,
           "lng":-133.183,
           "search":"nki|naukitiairport|naukitiak|alaska"
         },
         {
           "code":"NLG",
           "name":"Nelson Lagoon",
           "city":"Nelson Lagoon",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.0167,
           "lng":-161.15,
           "search":"nlg|nelsonlagoonak|alaska"
         },
         {
           "code":"NME",
           "name":"Nightmute Airport",
           "city":"Nightmute",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.4723,
           "lng":-164.699,
           "search":"nme|nightmuteairport|nightmuteak|alaska"
         },
         {
           "code":"NNL",
           "name":"Nondalton",
           "city":"Nondalton",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.9717,
           "lng":-154.847,
           "search":"nnl|nondaltonak|alaska"
         },
         {
           "code":"NUI",
           "name":"Nuiqsut",
           "city":"Nuiqsut",
           "state":"AK",
           "statename":"Alaska",
           "lat":70.2167,
           "lng":-150.917,
           "search":"nui|nuiqsut|nuiqsutak|alaska"
         },
         {
           "code":"NUL",
           "name":"Nulato Airport",
           "city":"Nulato",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.7134,
           "lng":-158.077,
           "search":"nul|nulatoairport|nulatoak|alaska"
         },
         {
           "code":"NUP",
           "name":"Nunapitchuk",
           "city":"Nunapitchuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.897,
           "lng":-162.453,
           "search":"nup|alaska|nunapitchukak|alaska"
         },
         {
           "code":"NYA",
           "name":"Norwood Young America",
           "city":"Norwood Young America",
           "state":"MN",
           "statename":"Minnesota",
           "lat":44.7718,
           "lng":-93.9263,
           "search":"nya|norwoodyoungamericamn|minnesota"
         },
         {
           "code":"OAJ",
           "name":"Albert J Ellis Airport",
           "city":"Richlands",
           "state":"NC",
           "statename":"North Carolina",
           "lat":34.8307,
           "lng":-77.6053,
           "search":"oaj|albertjellisairport|richlandsnc|northcarolina"
         },
         {
           "code":"OAK",
           "name":"Oakland International Airport",
           "city":"Oakland",
           "state":"CA",
           "statename":"California",
           "lat":37.7158,
           "lng":-122.209,
           "search":"oak|oaklandinternationalairport|oaklandca|california"
         },
         {
           "code":"OBU",
           "name":"Kobuk Airport",
           "city":"Kobuk",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.9148,
           "lng":-156.878,
           "search":"obu|kobukairport|kobukak|alaska"
         },
         {
           "code":"ODW",
           "name":"Oak Harbor Airpark",
           "city":"Oak Harbor",
           "state":"WA",
           "statename":"Washington",
           "lat":48.2517,
           "lng":-122.68,
           "search":"odw|oakharborairpark|oakharborwa|washington"
         },
         {
           "code":"OGG",
           "name":"Kahului Airport",
           "city":"Kahului",
           "state":"HI",
           "statename":"Hawaii",
           "lat":20.8926,
           "lng":-156.441,
           "search":"ogg|kahuluiairport|kahuluihi|hawaii"
         },
         {
           "code":"OGS",
           "name":"Ogdensburg International Airport",
           "city":"Ogdensburg",
           "state":"NY",
           "statename":"New York",
           "lat":44.6782,
           "lng":-75.4765,
           "search":"ogs|ogdensburginternationalairport|ogdensburgny|newyork"
         },
         {
           "code":"OKC",
           "name":"Will Rogers World Airport",
           "city":"Oklahoma City",
           "state":"OK",
           "statename":"Oklahoma",
           "lat":35.3981,
           "lng":-97.5974,
           "search":"okc|willrogersworldairport|oklahomacityok|oklahoma"
         },
         {
           "code":"OLF",
           "name":"L. M. Clayton Airport",
           "city":"Wolf Point",
           "state":"MT",
           "statename":"Montana",
           "lat":48.0964,
           "lng":-105.575,
           "search":"olf|l.m.claytonairport|wolfpointmt|montana"
         },
         {
           "code":"OLH",
           "name":"Old Harbor",
           "city":"Old Harbor",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"olh|alaska|oldharborak|alaska"
         },
         {
           "code":"OMA",
           "name":"Eppley Airfield",
           "city":"Omaha",
           "state":"NE",
           "statename":"Nebraska",
           "lat":41.3,
           "lng":-95.8998,
           "search":"oma|eppleyairfield|omahane|nebraska"
         },
         {
           "code":"OME",
           "name":"Nome Airport",
           "city":"Nome",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.5125,
           "lng":-165.445,
           "search":"ome|nomeairport|nomeak|alaska"
         },
         {
           "code":"ONL",
           "name":"The Oneill Municipal Airport",
           "city":"O'neill",
           "state":"NE",
           "statename":"Nebraska",
           "lat":42.4655,
           "lng":-98.6866,
           "search":"onl|theoneillmunicipalairport|o'neillne|nebraska"
         },
         {
           "code":"ONT",
           "name":"Ontario International Airport",
           "city":"Ontario",
           "state":"CA",
           "statename":"California",
           "lat":34.062,
           "lng":-117.594,
           "search":"ont|ontariointernationalairport|ontarioca|california"
         },
         {
           "code":"OOK",
           "name":"Toksook Bay",
           "city":"Toksook Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.5334,
           "lng":-165.114,
           "search":"ook|toksookbay|toksookbayak|alaska"
         },
         {
           "code":"OPF",
           "name":"Opa Locka Airport",
           "city":"Opa-Locka",
           "state":"FL",
           "statename":"Florida",
           "lat":25.9023,
           "lng":-80.2677,
           "search":"opf|opalockaairport|opalockafl|florida"
         },
         {
           "code":"ORD",
           "name":"Chicago O'Hare International Airport",
           "city":"Chicago",
           "state":"IL",
           "statename":"Illinois",
           "lat":41.9796,
           "lng":-87.8825,
           "search":"ord|chi|chicagoohareinternationalairport|chicagoil|illinois"
         },
         {
           "code":"ORF",
           "name":"Norfolk International Airport",
           "city":"Norfolk",
           "state":"VA",
           "statename":"Virginia",
           "lat":36.8977,
           "lng":-76.2154,
           "search":"orf|norfolkinternationalairport|norfolkva|virginia"
         },
         {
           "code":"ORH",
           "name":"Worcester Municipal Airport",
           "city":"Worcester",
           "state":"MA",
           "statename":"Massachusetts",
           "lat":42.2699,
           "lng":-71.8706,
           "search":"orh|worcestermunicipalairport|worcesterma|massachusetts"
         },
         {
           "code":"ORI",
           "name":"Port Lions Airport",
           "city":"Port Lions",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.884987,
           "lng":-152.847231,
           "search":"ori|portlionsak|alaska"
         },
         {
           "code":"ORV",
           "name":"Curtis Memorial",
           "city":"Noorvik",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.8333,
           "lng":-161.033,
           "search":"orv|curtismemorial|noorvikak|alaska"
         },
         {
           "code":"OTH",
           "name":"North Bend Municipal Airport",
           "city":"North Bend",
           "state":"OR",
           "statename":"Oregon",
           "lat":43.4141,
           "lng":-124.244,
           "search":"oth|northbendmunicipalairport|northbendor|oregon"
         },
         {
           "code":"OTZ",
           "name":"Ralph Wien Memorial Airport",
           "city":"Kotzebue",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.8893,
           "lng":-162.61,
           "search":"otz|ralphwienmemorialairport|kotzebueak|alaska"
         },
         {
           "code":"OVS",
           "name":"Boscobel Airport",
           "city":"Boscobel",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":43.1537,
           "lng":-90.6764,
           "search":"ovs|boscobelairport|boscobelwi|wisconsin"
         },
         {
           "code":"OXR",
           "name":"Oxnard Airport",
           "city":"Oxnard",
           "state":"CA",
           "statename":"California",
           "lat":34.1984,
           "lng":-119.206,
           "search":"oxr|oxnardairport|oxnardca|california"
         },
         {
           "code":"PAH",
           "name":"Barkley Regional Airport",
           "city":"West Paducah",
           "state":"KY",
           "statename":"Kentucky",
           "lat":37.0612,
           "lng":-88.7672,
           "search":"pah|barkleyregionalairport|westpaducahky|kentucky"
         },
         {
           "code":"PBG",
           "name":"Plattsburgh Air Force Base",
           "city":"Plattsburgh",
           "state":"NY",
           "statename":"New York",
           "lat":44.6508,
           "lng":-73.4683,
           "search":"pbg|plattsburghairforcebase|plattsburghny|newyork"
         },
         {
           "code":"PBI",
           "name":"Palm Beach International Airport",
           "city":"West Palm Beach",
           "state":"FL",
           "statename":"Florida",
           "lat":26.6909,
           "lng":-80.0889,
           "search":"pbi|palmbeachinternationalairport|westpalmbeachfl|florida"
         },
         {
           "code":"PCE",
           "name":"Painter Creek",
           "city":"Painter Creek",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.093,
           "lng":-157.258,
           "search":"pce|paintercreek|paintercreekak|alaska"
         },
         {
           "code":"PDB",
           "name":"Pedro Bay",
           "city":"Pedro Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.7868,
           "lng":-154.105,
           "search":"pdb|pedrobay|pedrobayak|alaska"
         },
         {
           "code":"PDT",
           "name":"Eastern Oregon Regional Airport",
           "city":"Pendleton",
           "state":"OR",
           "statename":"Oregon",
           "lat":45.6893,
           "lng":-118.839,
           "search":"pdt|easternoregonregionalairport|pendletonor|oregon"
         },
         {
           "code":"PDX",
           "name":"Portland International Airport",
           "city":"Portland",
           "state":"OR",
           "statename":"Oregon",
           "lat":45.5867,
           "lng":-122.587,
           "search":"pdx|portlandinternationalairport|portlandor|oregon"
         },
         {
           "code":"PEC",
           "name":"Pelican Sea Plane Base",
           "city":"Pelican",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.95,
           "lng":-136.233,
           "search":"pec|pelicanseaplanebase|pelicanak|alaska"
         },
         {
           "code":"PFN",
           "name":"Panama City Bay County Airport",
           "city":"Panama City",
           "state":"FL",
           "statename":"Florida",
           "lat":30.2071,
           "lng":-85.6829,
           "search":"pfn|panamacitybaycountyairport|panamacityfl|florida"
         },
         {
           "code":"PGA",
           "name":"Page Municipal Airport",
           "city":"Page",
           "state":"AZ",
           "statename":"Arizona",
           "lat":36.9243,
           "lng":-111.451,
           "search":"pga|pagemunicipalairport|pageaz|arizona"
         },
         {
           "code":"PGM",
           "name":"Port Graham",
           "city":"Port Graham",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.35,
           "lng":-151.833,
           "search":"pgm|portgraham|portgrahamak|alaska"
         },
         {
           "code":"PGV",
           "name":"Pitt Greenville Airport",
           "city":"Greenville",
           "state":"NC",
           "statename":"North Carolina",
           "lat":35.6336,
           "lng":-77.3808,
           "search":"pgv|pittgreenvilleairport|greenvillenc|northcarolina"
         },
         {
           "code":"PHF",
           "name":"Newport News-Williamsburg International Airport",
           "city":"Newport News",
           "state":"VA",
           "statename":"Virginia",
           "lat":37.1306,
           "lng":-76.5026,
           "search":"phf|newportnewswilliamsburginternationalairport|newportnewsva|virginia"
         },
         {
           "code":"PHL",
           "name":"Philadelphia International Airport",
           "city":"Philadelphia",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":39.8768,
           "lng":-75.2419,
           "search":"phl|philadelphiainternationalairport|philadelphiapa|pennsylvania"
         },
         {
           "code":"PHO",
           "name":"Point Hope Airport",
           "city":"Point Hope",
           "state":"AK",
           "statename":"Alaska",
           "lat":68.3494,
           "lng":-166.797,
           "search":"pho|pointhopeairport|pointhopeak|alaska"
         },
         {
           "code":"PHX",
           "name":"Sky Harbor International Airport",
           "city":"Phoenix",
           "state":"AZ",
           "statename":"Arizona",
           "lat":33.4376,
           "lng":-112.03,
           "search":"phx|skyharborinternationalairport|phoenixaz|arizona"
         },
         {
           "code":"PIA",
           "name":"Greater Peoria Regional Airport",
           "city":"Peoria",
           "state":"IL",
           "statename":"Illinois",
           "lat":40.6663,
           "lng":-89.6909,
           "search":"pia|greaterpeoriaregionalairport|peoriail|illinois"
         },
         {
           "code":"PIB",
           "name":"Pine Belt Regional Airport",
           "city":"Moselle",
           "state":"MS",
           "statename":"Mississippi",
           "lat":31.4671,
           "lng":-89.3333,
           "search":"pib|pinebeltregionalairport|mosellems|mississippi"
         },
         {
           "code":"PIE",
           "name":"St. Petersburg-Clearwater International Airport",
           "city":"Clearwater",
           "state":"FL",
           "statename":"Florida",
           "lat":27.9065,
           "lng":-82.6924,
           "search":"pie|st.petersburgclearwaterinternationalairport|clearwaterfl|florida"
         },
         {
           "code":"PIH",
           "name":"Pocatello Municipal Airport",
           "city":"Pocatello",
           "state":"ID",
           "statename":"Idaho",
           "lat":42.9056,
           "lng":-112.588,
           "search":"pih|pocatellomunicipalairport|pocatelloid|idaho"
         },
         {
           "code":"PIP",
           "name":"Pilot Point Airport",
           "city":"Pilot Point",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.5631,
           "lng":-157.558,
           "search":"pip|pilotpointairport|pilotpointak|alaska"
         },
         {
           "code":"PIR",
           "name":"Pierre Municipal Airport",
           "city":"Pierre",
           "state":"SD",
           "statename":"South Dakota",
           "lat":44.3801,
           "lng":-100.293,
           "search":"pir|pierremunicipalairport|pierresd|southdakota"
         },
         {
           "code":"PIT",
           "name":"Pittsburgh International Airport",
           "city":"Coraopolis",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":40.4914,
           "lng":-80.2328,
           "search":"pit|pittsburghinternationalairport|coraopolispa|pennsylvania"
         },
         {
           "code":"PIZ",
           "name":"Dew Station",
           "city":"Point Lay",
           "state":"AK",
           "statename":"Alaska",
           "lat":69.7333,
           "lng":-163.017,
           "search":"piz|dewstation|pointlayak|alaska"
         },
         {
           "code":"PKA",
           "name":"Napaskiak",
           "city":"Napaskiak",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.7049,
           "lng":-161.766,
           "search":"pka|alaska|napaskiakak|alaska"
         },
         {
           "code":"PKB",
           "name":"Wood County Airport-Gill Robb Wilson Field",
           "city":"Williamstown",
           "state":"WV",
           "statename":"West Virginia",
           "lat":39.3462,
           "lng":-81.4345,
           "search":"pkb|woodcountyairportgillrobbwilsonfield|williamstownwv|westvirginia"
         },
         {
           "code":"PLN",
           "name":"Pellston Regional Airport",
           "city":"Pellston",
           "state":"MI",
           "statename":"Michigan",
           "lat":45.571,
           "lng":-84.7857,
           "search":"pln|pellstonregionalairport|pellstonmi|michigan"
         },
         {
           "code":"PMD",
           "name":"Air Force Plant Nr 42 Palmdale",
           "city":"Palmdale",
           "state":"CA",
           "statename":"California",
           "lat":34.6294,
           "lng":-118.084,
           "search":"pmd|airforceplantnr42palmdale|palmdaleca|california"
         },
         {
           "code":"PML",
           "name":"Port Moller",
           "city":"Port Moller",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.9833,
           "lng":-160.533,
           "search":"pml|portmollerak|alaska"
         },
         {
           "code":"PNS",
           "name":"Pensacola Regional Airport",
           "city":"Pensacola",
           "state":"FL",
           "statename":"Florida",
           "lat":30.4761,
           "lng":-87.1941,
           "search":"pns|pensacolaregionalairport|pensacolafl|florida"
         },
         {
           "code":"PPG",
           "name":"Pago Pago International Airport",
           "city":"Pago Pago",
           "state":"AS",
           "statename":"American Samoa",
           "lat":-14.3242,
           "lng":-170.706,
           "search":"ppg|pagopagointernationalairport|pagopagoas|americansamoa"
         },
         {
           "code":"PPV",
           "name":"Port Protection",
           "city":"Port Protection",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"ppv|alaska|portprotectionak|alaska"
         },
         {
           "code":"PQI",
           "name":"Northern Maine Regional Airport",
           "city":"Presque Isle",
           "state":"ME",
           "statename":"Maine",
           "lat":46.6921,
           "lng":-68.0447,
           "search":"pqi|northernmaineregionalairport|presqueisleme|maine"
         },
         {
           "code":"PQS",
           "name":"Pilot Station",
           "city":"Pilot Station",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.9362,
           "lng":-162.882,
           "search":"pqs|pilotstation|pilotstationak|alaska"
         },
         {
           "code":"PRC",
           "name":"Ernest A Love Field Airport",
           "city":"Prescott",
           "state":"AZ",
           "statename":"Arizona",
           "lat":34.6492,
           "lng":-112.428,
           "search":"prc|ernestalovefieldairport|prescottaz|arizona"
         },
         {
           "code":"PSC",
           "name":"Tri Cities Airport",
           "city":"Pasco",
           "state":"WA",
           "statename":"Washington",
           "lat":46.2592,
           "lng":-119.117,
           "search":"psc|tricitiesairport|pascowa|washington"
         },
         {
           "code":"PSE",
           "name":"Mercedita Airport",
           "city":"Coto Laurel",
           "state":"PR",
           "statename":"Puerto Rico",
           "lat":18.0116,
           "lng":-66.5664,
           "search":"pse|merceditaairport|cotolaurelpr|puertorico"
         },
         {
           "code":"PSG",
           "name":"Petersburg James A Johnson Airport",
           "city":"Petersburg",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.8067,
           "lng":-132.933,
           "search":"psg|petersburgjamesajohnsonairport|petersburgak|alaska"
         },
         {
           "code":"PSP",
           "name":"Palm Springs International Airport",
           "city":"Palm Springs",
           "state":"CA",
           "statename":"California",
           "lat":33.8227,
           "lng":-116.509,
           "search":"psp|palmspringsinternationalairport|palmspringsca|california"
         },
         {
           "code":"PTA",
           "name":"Port Alsworth",
           "city":"Port Alsworth",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.3956,
           "lng":-154.494,
           "search":"pta|portalsworth|portalsworthak|alaska"
         },
         {
           "code":"PTH",
           "name":"Port Heiden Airport",
           "city":"Port Heiden",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.9667,
           "lng":-158.633,
           "search":"pth|portheidenairport|portheidenak|alaska"
         },
         {
           "code":"PTU",
           "name":"Platinum",
           "city":"Platinum",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.9216,
           "lng":-161.727,
           "search":"ptu|platinum|platinumak|alaska"
         },
         {
           "code":"PUB",
           "name":"Pueblo Memorial Airport",
           "city":"Pueblo",
           "state":"CO",
           "statename":"Colorado",
           "lat":38.2836,
           "lng":-104.496,
           "search":"pub|pueblomemorialairport|puebloco|colorado"
         },
         {
           "code":"PUW",
           "name":"Pullman-Moscow Regional Airport",
           "city":"Pullman",
           "state":"WA",
           "statename":"Washington",
           "lat":46.743,
           "lng":-117.119,
           "search":"puw|pullmanmoscowregionalairport|pullmanwa|washington"
         },
         {
           "code":"PVC",
           "name":"Provincetown Municipal Airport",
           "city":"Provincetown",
           "state":"MA",
           "statename":"Massachusetts",
           "lat":42.0771,
           "lng":-70.2169,
           "search":"pvc|provincetownmunicipalairport|provincetownma|massachusetts"
         },
         {
           "code":"PVD",
           "name":"Theodore Francis Green State Airport",
           "city":"Warwick",
           "state":"RI",
           "statename":"Rhode Island",
           "lat":41.723,
           "lng":-71.4399,
           "search":"pvd|theodorefrancisgreenstateairport|warwickri|rhodeisland"
         },
         {
           "code":"PWK",
           "name":"Pal Waukee Airport",
           "city":"Wheeling",
           "state":"IL",
           "statename":"Illinois",
           "lat":42.1162,
           "lng":-87.8987,
           "search":"pwk|palwaukeeairport|wheelingil|illinois"
         },
         {
           "code":"PWM",
           "name":"Jetport International Airport",
           "city":"Portland",
           "state":"ME",
           "statename":"Maine",
           "lat":43.6475,
           "lng":-70.3103,
           "search":"pwm|jetportinternationalairport|portlandme|maine"
         },
         {
           "code":"QUL",
           "name":"Qulin",
           "city":"Qulin",
           "state":"MO",
           "statename":"Missouri",
           "lat":36.5922,
           "lng":-90.2465,
           "search":"qul|qulinmo|missouri"
         },
         {
           "code":"RAP",
           "name":"Rapid City Regional Airport",
           "city":"Rapid City",
           "state":"SD",
           "statename":"South Dakota",
           "lat":44.037,
           "lng":-103.06,
           "search":"rap|rapidcityregionalairport|rapidcitysd|southdakota"
         },
         {
           "code":"RBH",
           "name":"Brooks Lodge",
           "city":"Brooks Lodge",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.7381,
           "lng":-155.489,
           "search":"rbh|brookslodge|brookslodgeak|alaska"
         },
         {
           "code":"RBX",
           "name":"Roundup Airport",
           "city":"Roundup",
           "state":"MT",
           "statename":"Montana",
           "lat":46.4717,
           "lng":-108.55,
           "search":"rbx|roundupairport|roundupmt|montana"
         },
         {
           "code":"RBY",
           "name":"Ruby Airport",
           "city":"Ruby",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.7381,
           "lng":-155.489,
           "search":"rby|rubyairport|rubyak|alaska"
         },
         {
           "code":"RCE",
           "name":"Roche Harbor Airport",
           "city":"Friday Harbor",
           "state":"WA",
           "statename":"Washington",
           "lat":48.6126,
           "lng":-123.14,
           "search":"rce|rocheharborairport|fridayharborwa|washington"
         },
         {
           "code":"RCP",
           "name":"Cinder River",
           "city":"Cinder River",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.9809585,
           "lng":-157.7490617,
           "search":"rcp|cinderriverak|alaska"
         },
         {
           "code":"RDB",
           "name":"Red Dog",
           "city":"Red Dog",
           "state":"AK",
           "statename":"Alaska",
           "lat":67.75,
           "lng":-163.667,
           "search":"rdb|reddog|reddogak|alaska"
         },
         {
           "code":"RDD",
           "name":"Redding Municipal Airport",
           "city":"Redding",
           "state":"CA",
           "statename":"California",
           "lat":40.5056,
           "lng":-122.302,
           "search":"rdd|reddingmunicipalairport|reddingca|california"
         },
         {
           "code":"RDM",
           "name":"Roberts Field Airport",
           "city":"Redmond",
           "state":"OR",
           "statename":"Oregon",
           "lat":44.2533,
           "lng":-121.162,
           "search":"rdm|robertsfieldairport|redmondor|oregon"
         },
         {
           "code":"RDU",
           "name":"Durham International Airport",
           "city":"Raleigh/Durham",
           "state":"NC",
           "statename":"North Carolina",
           "lat":35.8729,
           "lng":-78.7923,
           "search":"rdu|durhaminternationalairport|raleigh/durhamnc|northcarolina"
         },
         {
           "code":"RDV",
           "name":"Red Devil",
           "city":"Red Devil",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.7645,
           "lng":-157.312,
           "search":"rdv|reddevil|reddevilak|alaska"
         },
         {
           "code":"RFD",
           "name":"Greater Rockford Airport",
           "city":"Rockford",
           "state":"IL",
           "statename":"Illinois",
           "lat":42.2035,
           "lng":-89.0955,
           "search":"rfd|greaterrockfordairport|rockfordil|illinois"
         },
         {
           "code":"RHI",
           "name":"Rhinelander-Oneida County Airport",
           "city":"Rhinelander",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":45.626,
           "lng":-89.4626,
           "search":"rhi|rhinelanderoneidacountyairport|rhinelanderwi|wisconsin"
         },
         {
           "code":"RIC",
           "name":"Richmond International Airport",
           "city":"Richmond",
           "state":"VA",
           "statename":"Virginia",
           "lat":37.5108,
           "lng":-77.3332,
           "search":"ric|richmondinternationalairport|richmondva|virginia"
         },
         {
           "code":"RIV",
           "name":"March Air Force Base",
           "city":"Alessandro",
           "state":"CA",
           "statename":"California",
           "lat":33.8806,
           "lng":-117.259,
           "search":"riv|marchairforcebase|alessandroca|california"
         },
         {
           "code":"RIW",
           "name":"Riverton Regional Airport",
           "city":"Riverton",
           "state":"WY",
           "statename":"Wyoming",
           "lat":43.0611,
           "lng":-108.458,
           "search":"riw|rivertonregionalairport|rivertonwy|wyoming"
         },
         {
           "code":"RKD",
           "name":"Knox County Regional Airport",
           "city":"Owls Head",
           "state":"ME",
           "statename":"Maine",
           "lat":44.0612,
           "lng":-69.0943,
           "search":"rkd|knoxcountyregionalairport|owlsheadme|maine"
         },
         {
           "code":"RKS",
           "name":"Rock Springs-Sweetwater County Airport",
           "city":"Rock Springs",
           "state":"WY",
           "statename":"Wyoming",
           "lat":41.5988,
           "lng":-109.072,
           "search":"rks|rockspringssweetwatercountyairport|rockspringswy|wyoming"
         },
         {
           "code":"RMP",
           "name":"Rampart",
           "city":"Rampart",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.5063,
           "lng":-150.169,
           "search":"rmp|rampart|rampartak|alaska"
         },
         {
           "code":"RNO",
           "name":"Reno-Tahoe International Airport",
           "city":"Reno",
           "state":"NV",
           "statename":"Nevada",
           "lat":39.5064,
           "lng":-119.776,
           "search":"rno|renotahoeinternationalairport|renonv|nevada"
         },
         {
           "code":"ROA",
           "name":"Roanoke Regional Airport-Woodrum Field",
           "city":"Roanoke",
           "state":"VA",
           "statename":"Virginia",
           "lat":37.3203,
           "lng":-79.9688,
           "search":"roa|roanokeregionalairportwoodrumfield|roanokeva|virginia"
         },
         {
           "code":"ROC",
           "name":"Greater Rochester International Airport",
           "city":"Rochester",
           "state":"NY",
           "statename":"New York",
           "lat":43.1309,
           "lng":-77.6697,
           "search":"roc|greaterrochesterinternationalairport|rochesterny|newyork"
         },
         {
           "code":"ROP",
           "name":"Rota International Airport",
           "city":"Rota",
           "state":"MP",
           "statename":"Northern Mariana Islands",
           "lat":14.1667,
           "lng":145.25,
           "search":"rop|rotainternationalairport|rotamp|northernmarianaislands"
         },
         {
           "code":"ROW",
           "name":"Roswell Industrial Air Center",
           "city":"Roswell",
           "state":"NM",
           "statename":"New Mexico",
           "lat":33.3071,
           "lng":-104.519,
           "search":"row|roswellindustrialaircenter|roswellnm|newmexico"
         },
         {
           "code":"RSH",
           "name":"Russian",
           "city":"Russian Mission",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.7833,
           "lng":-161.333,
           "search":"rsh|russian|russianmissionak|alaska"
         },
         {
           "code":"RSJ",
           "name":"Rosario Seaplane Base",
           "city":"Olga",
           "state":"WA",
           "statename":"Washington",
           "lat":48.6339,
           "lng":-122.81,
           "search":"rsj|rosarioseaplanebase|olgawa|washington"
         },
         {
           "code":"RST",
           "name":"Rochester International Airport",
           "city":"Rochester",
           "state":"MN",
           "statename":"Minnesota",
           "lat":43.9101,
           "lng":-92.4884,
           "search":"rst|rochesterinternationalairport|rochestermn|minnesota"
         },
         {
           "code":"RSW",
           "name":"Southwest Florida International Airport",
           "city":"Fort Myers",
           "state":"FL",
           "statename":"Florida",
           "lat":26.5228,
           "lng":-81.7531,
           "search":"rsw|southwestfloridainternationalairport|fortmyersfl|florida"
         },
         {
           "code":"RUT",
           "name":"Rutland State Airport",
           "city":"North Clarendon",
           "state":"VT",
           "statename":"Vermont",
           "lat":43.5291,
           "lng":-72.945,
           "search":"rut|rutlandstateairport|northclarendonvt|vermont"
         },
         {
           "code":"SAN",
           "name":"San Diego International Airport",
           "city":"San Diego",
           "state":"CA",
           "statename":"California",
           "lat":32.7299,
           "lng":-117.195,
           "search":"san|sandiegointernationalairport|sandiegoca|california"
         },
         {
           "code":"SAT",
           "name":"San Antonio International Airport",
           "city":"San Antonio",
           "state":"TX",
           "statename":"Texas",
           "lat":29.5252,
           "lng":-98.4729,
           "search":"sat|sanantoniointernationalairport|sanantoniotx|texas"
         },
         {
           "code":"SAV",
           "name":"Savannah International Airport",
           "city":"Savannah",
           "state":"GA",
           "statename":"Georgia",
           "lat":32.1338,
           "lng":-81.2133,
           "search":"sav|savannahinternationalairport|savannahga|georgia"
         },
         {
           "code":"SBA",
           "name":"Santa Barbara Municipal Airport",
           "city":"Goleta",
           "state":"CA",
           "statename":"California",
           "lat":34.4255,
           "lng":-119.835,
           "search":"sba|santabarbaramunicipalairport|goletaca|california"
         },
         {
           "code":"SBN",
           "name":"South Bend Regional Airport",
           "city":"South Bend",
           "state":"IN",
           "statename":"Indiana",
           "lat":41.7006,
           "lng":-86.311,
           "search":"sbn|southbendregionalairport|southbendin|indiana"
         },
         {
           "code":"SBP",
           "name":"San Luis Obispo County Airport",
           "city":"San Luis Obispo",
           "state":"CA",
           "statename":"California",
           "lat":35.239,
           "lng":-120.641,
           "search":"sbp|sanluisobispocountyairport|sanluisobispoca|california"
         },
         {
           "code":"SBY",
           "name":"Salisbury-Wicomico County Regional Airport",
           "city":"Salisbury",
           "state":"MD",
           "statename":"Maryland",
           "lat":38.3431,
           "lng":-75.517,
           "search":"sby|salisburywicomicocountyregionalairport|salisburymd|maryland"
         },
         {
           "code":"SCC",
           "name":"Deadhorse Airport",
           "city":"Prudhoe Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":70.1975,
           "lng":-148.458,
           "search":"scc|deadhorseairport|prudhoebayak|alaska"
         },
         {
           "code":"SCE",
           "name":"University Park Airport",
           "city":"State College",
           "state":"PA",
           "statename":"Pennsylvania",
           "lat":40.8515,
           "lng":-77.851,
           "search":"sce|universityparkairport|statecollegepa|pennsylvania"
         },
         {
           "code":"SCK",
           "name":"Stockton Metropolitan Airport",
           "city":"Stockton",
           "state":"CA",
           "statename":"California",
           "lat":37.8973,
           "lng":-121.253,
           "search":"sck|stocktonmetropolitanairport|stocktonca|california"
         },
         {
           "code":"SCM",
           "name":"Scammon Bay",
           "city":"Scammon Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.8425,
           "lng":-165.58,
           "search":"scm|scammonbay|scammonbayak|alaska"
         },
         {
           "code":"SDF",
           "name":"Louisville International Airport",
           "city":"Louisville",
           "state":"KY",
           "statename":"Kentucky",
           "lat":38.1865,
           "lng":-85.7462,
           "search":"sdf|louisvilleinternationalairport|louisvilleky|kentucky"
         },
         {
           "code":"SDP",
           "name":"Sand Point Airport",
           "city":"Sand Point",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.3184,
           "lng":-160.523,
           "search":"sdp|sandpointairport|sandpointak|alaska"
         },
         {
           "code":"SDY",
           "name":"Sidney Richland Municipal Airport",
           "city":"Sidney",
           "state":"MT",
           "statename":"Montana",
           "lat":47.7113,
           "lng":-104.184,
           "search":"sdy|sidneyrichlandmunicipalairport|sidneymt|montana"
         },
         {
           "code":"SEA",
           "name":"Tacoma International Airport",
           "city":"Seattle",
           "state":"WA",
           "statename":"Washington",
           "lat":47.4405,
           "lng":-122.296,
           "search":"sea|tacomainternationalairport|seattlewa|washington"
         },
         {
           "code":"SFB",
           "name":"Orlando Sanford International Airport",
           "city":"Sanford",
           "state":"FL",
           "statename":"Florida",
           "lat":28.773,
           "lng":-81.2403,
           "search":"sfb|orlandosanfordinternationalairport|sanfordfl|florida"
         },
         {
           "code":"SFO",
           "name":"San Francisco International Airport",
           "city":"San Francisco",
           "state":"CA",
           "statename":"California",
           "lat":37.6148,
           "lng":-122.392,
           "search":"sfo|sanfranciscointernationalairport|sanfranciscoca|california"
         },
         {
           "code":"SGF",
           "name":"Springfield Regional Airport",
           "city":"Springfield",
           "state":"MO",
           "statename":"Missouri",
           "lat":37.243,
           "lng":-93.3817,
           "search":"sgf|springfieldregionalairport|springfieldmo|missouri"
         },
         {
           "code":"SGU",
           "name":"St George Municipal Airport",
           "city":"St. George",
           "state":"UT",
           "statename":"Utah",
           "lat":37.0973,
           "lng":-113.591,
           "search":"sgu|stgeorgemunicipalairport|st.georgeut|utah"
         },
         {
           "code":"SGY",
           "name":"Skagway Airport",
           "city":"Skagway",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.4594,
           "lng":-135.314,
           "search":"sgy|skagwayairport|skagwayak|alaska"
         },
         {
           "code":"SHD",
           "name":"Shenandoah Valley Regional Airport",
           "city":"Weyers Cave",
           "state":"VA",
           "statename":"Virginia",
           "lat":38.2637,
           "lng":-78.9013,
           "search":"shd|shenandoahvalleyregionalairport|weyerscaveva|virginia"
         },
         {
           "code":"SHG",
           "name":"Shungnak Airport",
           "city":"Shungnak",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.8801,
           "lng":-157.067,
           "search":"shg|shungnakairport|shungnakak|alaska"
         },
         {
           "code":"SHH",
           "name":"Shishmaref",
           "city":"Shishmaref",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.2568,
           "lng":-166.067,
           "search":"shh|shishmaref|shishmarefak|alaska"
         },
         {
           "code":"SHR",
           "name":"Sheridan County Airport",
           "city":"Sheridan",
           "state":"WY",
           "statename":"Wyoming",
           "lat":44.7739,
           "lng":-106.97,
           "search":"shr|sheridancountyairport|sheridanwy|wyoming"
         },
         {
           "code":"SHV",
           "name":"Shreveport Regional Airport",
           "city":"Shreveport",
           "state":"LA",
           "statename":"Louisiana",
           "lat":32.4549,
           "lng":-93.8285,
           "search":"shv|shreveportregionalairport|shreveportla|louisiana"
         },
         {
           "code":"SHX",
           "name":"Shageluk",
           "city":"Shageluk",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.6333,
           "lng":-159.583,
           "search":"shx|shageluk|shagelukak|alaska"
         },
         {
           "code":"SIG",
           "name":"Isla Grande Airport",
           "city":"San Juan",
           "state":"PR",
           "statename":"Puerto Rico",
           "lat":18.4558,
           "lng":-66.0981,
           "search":"sig|islagrandeairport|sanjuanpr|puertorico"
         },
         {
           "code":"SIT",
           "name":"Sitka Airport",
           "city":"Sitka",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.0535,
           "lng":-135.366,
           "search":"sit|sitkaairport|sitkaak|alaska"
         },
         {
           "code":"SJC",
           "name":"Norman Y Mineta San Jose International Airport",
           "city":"San Jose",
           "state":"CA",
           "statename":"California",
           "lat":37.3679,
           "lng":-121.926,
           "search":"sjc|normanyminetasanjoseinternationalairport|sanjoseca|california"
         },
         {
           "code":"SJT",
           "name":"Mathis Field Airport",
           "city":"San Angelo",
           "state":"TX",
           "statename":"Texas",
           "lat":31.3616,
           "lng":-100.507,
           "search":"sjt|mathisfieldairport|sanangelotx|texas"
         },
         {
           "code":"SJU",
           "name":"Luis Munoz Marin Airport",
           "city":"Carolina",
           "state":"PR",
           "statename":"Puerto Rico",
           "lat":18.4367,
           "lng":-66.0095,
           "search":"sju|luismunozmarinairport|carolinapr|puertorico"
         },
         {
           "code":"SKK",
           "name":"Shaktoolik",
           "city":"Shaktoolik",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.3549,
           "lng":-161.193,
           "search":"skk|shaktoolik|shaktoolikak|alaska"
         },
         {
           "code":"SLC",
           "name":"Salt Lake City International Airport",
           "city":"Salt Lake City",
           "state":"UT",
           "statename":"Utah",
           "lat":40.7862,
           "lng":-111.982,
           "search":"slc|saltlakecityinternationalairport|saltlakecityut|utah"
         },
         {
           "code":"SLE",
           "name":"Mcnary Field Airport",
           "city":"Salem",
           "state":"OR",
           "statename":"Oregon",
           "lat":44.9104,
           "lng":-123.008,
           "search":"sle|mcnaryfieldairport|salemor|oregon"
         },
         {
           "code":"SLK",
           "name":"Adirondack Regional Airport",
           "city":"Saranac Lake",
           "state":"NY",
           "statename":"New York",
           "lat":44.3804,
           "lng":-74.2038,
           "search":"slk|adirondackregionalairport|saranaclakeny|newyork"
         },
         {
           "code":"SLN",
           "name":"Salina Municipal Airport",
           "city":"Salina",
           "state":"KS",
           "statename":"Kansas",
           "lat":38.7786,
           "lng":-97.6397,
           "search":"sln|salinamunicipalairport|salinaks|kansas"
         },
         {
           "code":"SLQ",
           "name":"Sleetmute Airport",
           "city":"Sleetmute",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.7,
           "lng":-157.117,
           "search":"slq|sleetmuteairport|sleetmuteak|alaska"
         },
         {
           "code":"SMF",
           "name":"Sacramento International Airport",
           "city":"Sacramento",
           "state":"CA",
           "statename":"California",
           "lat":38.683,
           "lng":-121.591,
           "search":"smf|sacramentointernationalairport|sacramentoca|california"
         },
         {
           "code":"SMK",
           "name":"St Michael",
           "city":"St Michael",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.4735,
           "lng":-162.052,
           "search":"smk|alaska|stmichaelak|alaska"
         },
         {
           "code":"SMN",
           "name":"Lemhi County Airport",
           "city":"Salmon",
           "state":"ID",
           "statename":"Idaho",
           "lat":45.1148,
           "lng":-113.888,
           "search":"smn|lemhicountyairport|salmonid|idaho"
         },
         {
           "code":"SMX",
           "name":"Santa Maria Public Airport",
           "city":"Santa Maria",
           "state":"CA",
           "statename":"California",
           "lat":34.8888,
           "lng":-120.437,
           "search":"smx|santamariapublicairport|santamariaca|california"
         },
         {
           "code":"SNA",
           "name":"John Wayne Airport",
           "city":"Santa Ana",
           "state":"CA",
           "statename":"California",
           "lat":33.6813,
           "lng":-117.859,
           "search":"sna|johnwayneairport|santaanaca|california"
         },
         {
           "code":"SNP",
           "name":"Saint Paul Island",
           "city":"Saint Paul Island",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.1667,
           "lng":-170.217,
           "search":"snp|saintpaulisland|saintpaulislandak|alaska"
         },
         {
           "code":"SOV",
           "name":"Seldovia",
           "city":"Seldovia",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.4428,
           "lng":-151.705,
           "search":"sov|seldoviaak|alaska"
         },
         {
           "code":"SOW",
           "name":"Show Low Municipal Airport",
           "city":"Show Low",
           "state":"AZ",
           "statename":"Arizona",
           "lat":34.2595,
           "lng":-110.005,
           "search":"sow|showlowmunicipalairport|showlowaz|arizona"
         },
         {
           "code":"SPB",
           "name":"St Thomas Seaplane Base",
           "city":"Charlotte Amalie",
           "state":"VI",
           "statename":"US Virgin Islands",
           "lat":18.3409,
           "lng":-64.9698,
           "search":"spb|stthomasseaplanebase|charlotteamalievi|usvirginislands"
         },
         {
           "code":"SPI",
           "name":"Capital Airport",
           "city":"Springfield",
           "state":"IL",
           "statename":"Illinois",
           "lat":39.8445,
           "lng":-89.672,
           "search":"spi|capitalairport|springfieldil|illinois"
         },
         {
           "code":"SPN",
           "name":"Saipan International Airport",
           "city":"Saipan",
           "state":"MP",
           "statename":"Northern Mariana Islands",
           "lat":15.1333,
           "lng":145.717,
           "search":"spn|saipaninternationalairport|saipanmp|northernmarianaislands"
         },
         {
           "code":"SPS",
           "name":"Sheppard Air Force Base",
           "city":"Wichita Falls",
           "state":"TX",
           "statename":"Texas",
           "lat":33.9862,
           "lng":-98.4984,
           "search":"sps|sheppardairforcebase|wichitafallstx|texas"
         },
         {
           "code":"SRQ",
           "name":"Sarasota Bradenton Airport",
           "city":"Sarasota",
           "state":"FL",
           "statename":"Florida",
           "lat":27.3868,
           "lng":-82.5516,
           "search":"srq|sarasotabradentonairport|sarasotafl|florida"
         },
         {
           "code":"SRV",
           "name":"Stony River",
           "city":"Stony River",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"srv|alaska|stonyriverak|alaska"
         },
         {
           "code":"SSB",
           "name":"Christiansted Harbor Seaplane Base",
           "city":"Christiansted",
           "state":"VI",
           "statename":"US Virgin Islands",
           "lat":17.75,
           "lng":-64.7,
           "search":"ssb|christianstedharborseaplanebase|christianstedvi|usvirginislands"
         },
         {
           "code":"STC",
           "name":"St Cloud Regional Airport",
           "city":"St. Cloud",
           "state":"MN",
           "statename":"Minnesota",
           "lat":45.5463,
           "lng":-94.066,
           "search":"stc|stcloudregionalairport|st.cloudmn|minnesota"
         },
         {
           "code":"STG",
           "name":"St George Island",
           "city":"St George Island",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"stg|alaska|stgeorgeislandak|alaska"
         },
         {
           "code":"STL",
           "name":"Lambert St Louis International Airport",
           "city":"St. Louis",
           "state":"MO",
           "statename":"Missouri",
           "lat":38.7414,
           "lng":-90.3647,
           "search":"stl|lambertstlouisinternationalairport|st.louismo|missouri"
         },
         {
           "code":"STS",
           "name":"Sonoma County Airport",
           "city":"Windsor",
           "state":"CA",
           "statename":"California",
           "lat":38.511,
           "lng":-122.805,
           "search":"sts|sonomacountyairport|windsorca|california"
         },
         {
           "code":"STT",
           "name":"Cyril E King International Airport",
           "city":"Charlotte Amalie",
           "state":"VI",
           "statename":"US Virgin Islands",
           "lat":18.3333,
           "lng":-64.9667,
           "search":"stt|cyrilekinginternationalairport|charlotteamalievi|usvirginislands"
         },
         {
           "code":"STX",
           "name":"Henry E Rohlson International Airport",
           "city":"Frederiksted",
           "state":"VI",
           "statename":"US Virgin Islands",
           "lat":17.6988,
           "lng":-64.7977,
           "search":"stx|henryerohlsoninternationalairport|frederikstedvi|usvirginislands"
         },
         {
           "code":"SUN",
           "name":"Friedman Memorial Airport",
           "city":"Hailey",
           "state":"ID",
           "statename":"Idaho",
           "lat":43.5065,
           "lng":-114.301,
           "search":"sun|friedmanmemorialairport|haileyid|idaho"
         },
         {
           "code":"SUX",
           "name":"Sioux Gateway Airport",
           "city":"Sioux City",
           "state":"IA",
           "statename":"Iowa",
           "lat":42.4012,
           "lng":-96.3784,
           "search":"sux|siouxgatewayairport|siouxcityia|iowa"
         },
         {
           "code":"SVA",
           "name":"Savoonga",
           "city":"Savoonga",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.6951,
           "lng":-170.465,
           "search":"sva|alaska|savoongaak|alaska"
         },
         {
           "code":"SVC",
           "name":"Silver City-Grant County Airport",
           "city":"Silver City",
           "state":"NM",
           "statename":"New Mexico",
           "lat":32.6301,
           "lng":-108.164,
           "search":"svc|silvercitygrantcountyairport|silvercitynm|newmexico"
         },
         {
           "code":"SVS",
           "name":"Stevens Village",
           "city":"Stevens Village",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.0044,
           "lng":-149.091,
           "search":"svs|stevensvillage|stevensvillageak|alaska"
         },
         {
           "code":"SWF",
           "name":"Stewart International Airport",
           "city":"New Windsor",
           "state":"NY",
           "statename":"New York",
           "lat":41.4869,
           "lng":-74.0974,
           "search":"swf|stewartinternationalairport|newwindsorny|newyork"
         },
         {
           "code":"SWO",
           "name":"Stillwater Municipal Airport",
           "city":"Stillwater",
           "state":"OK",
           "statename":"Oklahoma",
           "lat":36.1618,
           "lng":-97.0751,
           "search":"swo|stillwatermunicipalairport|stillwaterok|oklahoma"
         },
         {
           "code":"SXP",
           "name":"Sheldon SPB",
           "city":"Sheldon Point",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.5333,
           "lng":-164.833,
           "search":"sxp|sheldonspb|sheldonpointak|alaska"
         },
         {
           "code":"SYB",
           "name":"Seal Bay Airport",
           "city":"Kodiak",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.1667,
           "lng":-152.5,
           "search":"syb|sealbayairport|kodiakak|alaska"
         },
         {
           "code":"SYR",
           "name":"Hancock International Airport",
           "city":"Syracuse",
           "state":"NY",
           "statename":"New York",
           "lat":43.1141,
           "lng":-76.1121,
           "search":"syr|hancockinternationalairport|syracuseny|newyork"
         },
         {
           "code":"TAL",
           "name":"Ralph Calhoun",
           "city":"Tanana",
           "state":"AK",
           "statename":"Alaska",
           "lat":47.7184,
           "lng":-115.431,
           "search":"tal|ralphcalhoun|tananaak|alaska"
         },
         {
           "code":"TBN",
           "name":"Waynesville Regional Airport At Forney Field",
           "city":"Fort Leonard Wood",
           "state":"MO",
           "statename":"Missouri",
           "lat":37.7327,
           "lng":-92.1361,
           "search":"tbn|waynesvilleregionalairportatforneyfield|fortleonardwoodmo|missouri"
         },
         {
           "code":"TCT",
           "name":"Takotna",
           "city":"Takotna",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.9845,
           "lng":-156.07,
           "search":"tct|takotna|takotnaak|alaska"
         },
         {
           "code":"TEB",
           "name":"Teterboro Airport",
           "city":"Teterboro",
           "state":"NJ",
           "statename":"New Jersey",
           "lat":40.8541,
           "lng":-74.0662,
           "search":"teb|teterboroairport|teterboronj|newjersey"
         },
         {
           "code":"TEK",
           "name":"Tatitlek Seaplane Base",
           "city":"Valdez",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.8644,
           "lng":-146.693,
           "search":"tek|tatitlekseaplanebase|valdezak|alaska"
         },
         {
           "code":"TEX",
           "name":"Telluride Regional Airport",
           "city":"Telluride",
           "state":"CO",
           "statename":"Colorado",
           "lat":37.9544,
           "lng":-107.901,
           "search":"tex|tellurideregionalairport|tellurideco|colorado"
         },
         {
           "code":"TGC",
           "name":"Gibson County Airport",
           "city":"Milan",
           "state":"TN",
           "statename":"Tennessee",
           "lat":35.9349,
           "lng":-88.8506,
           "search":"tgc|gibsoncountyairport|milantn|tennessee"
         },
         {
           "code":"TKE",
           "name":"Tenakee Springs",
           "city":"Tenakee Springs",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.7773,
           "lng":-135.208,
           "search":"tke|tenakeesprings|tenakeespringsak|alaska"
         },
         {
           "code":"TKJ",
           "name":"Tok Junction Airport",
           "city":"Tok",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.328819,
           "lng":-142.953613,
           "search":"tkj|tokjunctionairport|tokak|alaska"
         },
         {
           "code":"TLA",
           "name":"Teller",
           "city":"Teller",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.2413,
           "lng":-166.331,
           "search":"tla|teller|tellerak|alaska"
         },
         {
           "code":"TLH",
           "name":"Tallahassee Regional Airport",
           "city":"Tallahassee",
           "state":"FL",
           "statename":"Florida",
           "lat":30.3964,
           "lng":-84.3503,
           "search":"tlh|tallahasseeregionalairport|tallahasseefl|florida"
         },
         {
           "code":"TLJ",
           "name":"Tatalina LRRS Airport",
           "city":"McGrath",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.895031,
           "lng":-155.977011,
           "search":"tlj|tatalinaak|alaska"
         },
         {
           "code":"TLT",
           "name":"Tuluksak",
           "city":"Tuluksak",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.0959,
           "lng":-160.968,
           "search":"tlt|tuluksak|tuluksakak|alaska"
         },
         {
           "code":"TNC",
           "name":"Tin City AFS",
           "city":"Tin City",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.5639,
           "lng":-167.919,
           "search":"tnc|tincityafs|tincityak|alaska"
         },
         {
           "code":"TNK",
           "name":"Tununak Airport",
           "city":"Tununak",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.5813,
           "lng":-165.253,
           "search":"tnk|tununakairport|tununakak|alaska"
         },
         {
           "code":"TOG",
           "name":"Togiak Village",
           "city":"Togiak Village",
           "state":"AK",
           "statename":"Alaska",
           "lat":37.1198,
           "lng":-89.8786,
           "search":"tog|togiakvillage|togiakvillageak|alaska"
         },
         {
           "code":"TOL",
           "name":"Toledo Express Airport",
           "city":"Swanton",
           "state":"OH",
           "statename":"Ohio",
           "lat":41.5923,
           "lng":-83.8072,
           "search":"tol|toledoexpressairport|swantonoh|ohio"
         },
         {
           "code":"TPA",
           "name":"Tampa International Airport",
           "city":"Tampa",
           "state":"FL",
           "statename":"Florida",
           "lat":27.9744,
           "lng":-82.5356,
           "search":"tpa|tampainternationalairport|tampafl|florida"
         },
         {
           "code":"TRI",
           "name":"Tri-Cities Regional Airport",
           "city":"Blountville",
           "state":"TN",
           "statename":"Tennessee",
           "lat":36.4805,
           "lng":-82.4087,
           "search":"tri|tricitiesregionalairport|blountvilletn|tennessee"
         },
         {
           "code":"TSS",
           "name":"East 34th Street Heliport",
           "city":"New York",
           "state":"NY",
           "statename":"New York",
           "lat":40.7474,
           "lng":-73.9912,
           "search":"tss|east34thstreetheliport|newyorkny|newyork"
         },
         {
           "code":"TUL",
           "name":"Tulsa International Airport",
           "city":"Tulsa",
           "state":"OK",
           "statename":"Oklahoma",
           "lat":36.1877,
           "lng":-95.8892,
           "search":"tul|tulsainternationalairport|tulsaok|oklahoma"
         },
         {
           "code":"TUP",
           "name":"Tupelo Municipal-C D Lemons Airport",
           "city":"Tupelo",
           "state":"MS",
           "statename":"Mississippi",
           "lat":34.2662,
           "lng":-88.766,
           "search":"tup|tupelomunicipalcdlemonsairport|tupeloms|mississippi"
         },
         {
           "code":"TUS",
           "name":"Tucson International Airport",
           "city":"Tucson",
           "state":"AZ",
           "statename":"Arizona",
           "lat":32.1204,
           "lng":-110.936,
           "search":"tus|tucsoninternationalairport|tucsonaz|arizona"
         },
         {
           "code":"TVC",
           "name":"Cherry Capital Airport",
           "city":"Traverse City",
           "state":"MI",
           "statename":"Michigan",
           "lat":44.7365,
           "lng":-85.5796,
           "search":"tvc|cherrycapitalairport|traversecitymi|michigan"
         },
         {
           "code":"TVF",
           "name":"Thief River Falls Regional Airport",
           "city":"Thief River Falls",
           "state":"MN",
           "statename":"Minnesota",
           "lat":48.0655,
           "lng":-96.1791,
           "search":"tvf|thiefriverfallsregionalairport|thiefriverfallsmn|minnesota"
         },
         {
           "code":"TWA",
           "name":"Twin Hills",
           "city":"Twin Hills",
           "state":"AK",
           "statename":"Alaska",
           "lat":36.8259,
           "lng":-83.3212,
           "search":"twa|twinhills|twinhillsak|alaska"
         },
         {
           "code":"TWF",
           "name":"Twin Falls-Sun Valley Regional Airport",
           "city":"Twin Falls",
           "state":"ID",
           "statename":"Idaho",
           "lat":42.4838,
           "lng":-114.485,
           "search":"twf|twinfallssunvalleyregionalairport|twinfallsid|idaho"
         },
         {
           "code":"TXK",
           "name":"Texarkana Regional Airport",
           "city":"Texarkana",
           "state":"AR",
           "statename":"Arkansas",
           "lat":33.457,
           "lng":-93.9943,
           "search":"txk|texarkanaregionalairport|texarkanaar|arkansas"
         },
         {
           "code":"TYR",
           "name":"Tyler Pounds Field Airport",
           "city":"Tyler",
           "state":"TX",
           "statename":"Texas",
           "lat":32.3506,
           "lng":-95.4118,
           "search":"tyr|tylerpoundsfieldairport|tylertx|texas"
         },
         {
           "code":"TYS",
           "name":"Mcghee Tyson Airport",
           "city":"Knoxville",
           "state":"TN",
           "statename":"Tennessee",
           "lat":35.8064,
           "lng":-83.9889,
           "search":"tys|mcgheetysonairport|knoxvilletn|tennessee"
         },
         {
           "code":"UGB",
           "name":"Ugashik Bay Airport",
           "city":"Pilot Point",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.4253,
           "lng":-157.74,
           "search":"ugb|ugashikbayairport|pilotpointak|alaska"
         },
         {
           "code":"UGI",
           "name":"Uganik Airport",
           "city":"Kodiak",
           "state":"AK",
           "statename":"Alaska",
           "lat":57.8838,
           "lng":-153.369,
           "search":"ugi|uganikairport|kodiakak|alaska"
         },
         {
           "code":"UIN",
           "name":"Quincy Municipal Airport-Baldwin Field",
           "city":"Quincy",
           "state":"IL",
           "statename":"Illinois",
           "lat":39.9348,
           "lng":-91.196,
           "search":"uin|quincymunicipalairportbaldwinfield|quincyil|illinois"
         },
         {
           "code":"UNK",
           "name":"Unalakleet",
           "city":"Unalakleet",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.8833,
           "lng":-160.783,
           "search":"unk|unalakleet|unalakleetak|alaska"
         },
         {
           "code":"VAK",
           "name":"Chevak Airport",
           "city":"Hooper Bay",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.5338,
           "lng":-165.584,
           "search":"vak|chevakairport|hooperbayak|alaska"
         },
         {
           "code":"VBM",
           "name":"Blue Mountain",
           "city":"Blue Mountain",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"vbm|alaska|bluemountainak|alaska"
         },
         {
           "code":"VCT",
           "name":"Victoria Regional Airport",
           "city":"Victoria",
           "state":"TX",
           "statename":"Texas",
           "lat":28.8449,
           "lng":-96.9201,
           "search":"vct|victoriaregionalairport|victoriatx|texas"
         },
         {
           "code":"VCV",
           "name":"Southern California Logistics Airport",
           "city":"Victorville",
           "state":"CA",
           "statename":"California",
           "lat":34.588,
           "lng":-117.373,
           "search":"vcv|southerncalifornialogisticsairport|victorvilleca|california"
         },
         {
           "code":"VDZ",
           "name":"Valdez Airport",
           "city":"Valdez",
           "state":"AK",
           "statename":"Alaska",
           "lat":61.1294,
           "lng":-146.256,
           "search":"vdz|valdezairport|valdezak|alaska"
         },
         {
           "code":"VEE",
           "name":"Venetie",
           "city":"Venetie",
           "state":"AK",
           "statename":"Alaska",
           "lat":67.009,
           "lng":-146.406,
           "search":"vee|venetie|venetieak|alaska"
         },
         {
           "code":"VEL",
           "name":"Vernal Airport",
           "city":"Vernal",
           "state":"UT",
           "statename":"Utah",
           "lat":40.4485,
           "lng":-109.514,
           "search":"vel|vernalairport|vernalut|utah"
         },
         {
           "code":"VIS",
           "name":"Visalia Municipal Airport",
           "city":"Visalia",
           "state":"CA",
           "statename":"California",
           "lat":36.3253,
           "lng":-119.394,
           "search":"vis|visaliamunicipalairport|visaliaca|california"
         },
         {
           "code":"VLD",
           "name":"Valdosta Regional Airport",
           "city":"Valdosta",
           "state":"GA",
           "statename":"Georgia",
           "lat":30.7892,
           "lng":-83.2787,
           "search":"vld|valdostaregionalairport|valdostaga|georgia"
         },
         {
           "code":"VPS",
           "name":"Eglin Air Force Base",
           "city":"Eglin Village",
           "state":"FL",
           "statename":"Florida",
           "lat":30.496,
           "lng":-86.55,
           "search":"vps|eglinairforcebase|eglinvillagefl|florida"
         },
         {
           "code":"VQS",
           "name":"Aeropuerto Antonio Rivera Rodriguez",
           "city":"Puerto Ferro",
           "state":"PR",
           "statename":"Puerto Rico",
           "lat":18.1355,
           "lng":-65.487,
           "search":"vqs|aeropuertoantonioriverarodriguez|puertoferropr|puertorico"
         },
         {
           "code":"WAA",
           "name":"Wales",
           "city":"Wales",
           "state":"AK",
           "statename":"Alaska",
           "lat":65.6112,
           "lng":-168.098,
           "search":"waa|wales|walesak|alaska"
         },
         {
           "code":"WBB",
           "name":"Stebbins",
           "city":"Stebbins",
           "state":"AK",
           "statename":"Alaska",
           "lat":63.52,
           "lng":-162.279,
           "search":"wbb|stebbins|stebbinsak|alaska"
         },
         {
           "code":"WBQ",
           "name":"Beaver",
           "city":"Beaver",
           "state":"AK",
           "statename":"Alaska",
           "lat":66.359,
           "lng":-147.396,
           "search":"wbq|alaska|beaverak|alaska"
         },
         {
           "code":"WKK",
           "name":"Aleknagik",
           "city":"Aleknagik",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.2667,
           "lng":-158.633,
           "search":"wkk|aleknagik|aleknagikak|alaska"
         },
         {
           "code":"WLK",
           "name":"Selawik",
           "city":"Selawik",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"wlk|alaska|selawikak|alaska"
         },
         {
           "code":"WMK",
           "name":"Meyers Chuck",
           "city":"Meyers Chuck",
           "state":"AK",
           "statename":"Alaska",
           "lat":55.7389,
           "lng":-132.258,
           "search":"wmk|meyerschuck|meyerschuckak|alaska"
         },
         {
           "code":"WMO",
           "name":"White Mountain",
           "city":"White Mountain",
           "state":"AK",
           "statename":"Alaska",
           "lat":64.6811,
           "lng":-163.408,
           "search":"wmo|whitemountain|whitemountainak|alaska"
         },
         {
           "code":"WNA",
           "name":"Napaskiak",
           "city":"Napakiak",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.7049,
           "lng":-161.766,
           "search":"wna|napaskiak|napakiakak|alaska"
         },
         {
           "code":"WRG",
           "name":"Wrangell Airport",
           "city":"Wrangell",
           "state":"AK",
           "statename":"Alaska",
           "lat":56.4876,
           "lng":-132.378,
           "search":"wrg|wrangellairport|wrangellak|alaska"
         },
         {
           "code":"WRL",
           "name":"Worland Municipal Airport",
           "city":"Worland",
           "state":"WY",
           "statename":"Wyoming",
           "lat":43.9747,
           "lng":-107.953,
           "search":"wrl|worlandmunicipalairport|worlandwy|wyoming"
         },
         {
           "code":"WSN",
           "name":"Naknek",
           "city":"South Naknek",
           "state":"AK",
           "statename":"Alaska",
           "lat":58.7285,
           "lng":-157.014,
           "search":"wsn|naknek|southnaknekak|alaska"
         },
         {
           "code":"WST",
           "name":"Westerly State Airport",
           "city":"Westerly",
           "state":"RI",
           "statename":"Rhode Island",
           "lat":41.3492,
           "lng":-71.8115,
           "search":"wst|westerlystateairport|westerlyri|rhodeisland"
         },
         {
           "code":"WSX",
           "name":"United States",
           "city":"Westsound",
           "state":"WA",
           "statename":"Washington",
           "lat":48.8907,
           "lng":-116.982,
           "search":"wsx|unitedstates|westsoundwa|washington"
         },
         {
           "code":"WTK",
           "name":"Noatak",
           "city":"Noatak",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"wtk|alaska|noatakak|alaska"
         },
         {
           "code":"WTL",
           "name":"Tuntutuliak",
           "city":"Tuntutuliak",
           "state":"AK",
           "statename":"Alaska",
           "lat":60.3432,
           "lng":-162.664,
           "search":"wtl|tuntutuliak|tuntutuliakak|alaska"
         },
         {
           "code":"WWP",
           "name":"Whale Pass",
           "city":"Whale Pass",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"wwp|alaska|whalepassak|alaska"
         },
         {
           "code":"WWT",
           "name":"Newtok",
           "city":"Newtok",
           "state":"AK",
           "statename":"Alaska",
           "lat":62.8903,
           "lng":-149.054,
           "search":"wwt|alaska|newtokak|alaska"
         },
         {
           "code":"WYS",
           "name":"Yellowstone Airport",
           "city":"West Yellowstone",
           "state":"MT",
           "statename":"Montana",
           "lat":44.6876,
           "lng":-111.114,
           "search":"wys|yellowstoneairport|westyellowstonemt|montana"
         },
         {
           "code":"XNA",
           "name":"Northwest Arkansas Regional Airport",
           "city":"Bentonville",
           "state":"AR",
           "statename":"Arkansas",
           "lat":36.2756,
           "lng":-94.2955,
           "search":"xna|northwestarkansasregionalairport|bentonvillear|arkansas"
         },
         {
           "code":"XNY",
           "name":"York",
           "city":"New York",
           "state":"NY",
           "statename":"New York",
           "lat":42.8767,
           "lng":-77.8826,
           "search":"xny|york|newyorkny|newyork"
         },
         {
           "code":"XVG",
           "name":"Longville Municipal Airport",
           "city":"Longville",
           "state":"MN",
           "statename":"Minnesota",
           "lat":46.9929,
           "lng":-94.2075,
           "search":"xvg|longvillemunicipalairport|longvillemn|minnesota"
         },
         {
           "code":"YAK",
           "name":"Yakutat Airport",
           "city":"Yakutat",
           "state":"AK",
           "statename":"Alaska",
           "lat":59.5103,
           "lng":-139.668,
           "search":"yak|yakutatairport|yakutatak|alaska"
         },
         {
           "code":"YIP",
           "name":"Willow Run Airport",
           "city":"Ypsilanti",
           "state":"MI",
           "statename":"Michigan",
           "lat":42.2385,
           "lng":-83.5467,
           "search":"yip|willowrunairport|ypsilantimi|michigan"
         },
         {
           "code":"YKM",
           "name":"Yakima Air Terminal",
           "city":"Yakima",
           "state":"WA",
           "statename":"Washington",
           "lat":46.5703,
           "lng":-120.54,
           "search":"ykm|yakimaairterminal|yakimawa|washington"
         },
         {
           "code":"YNG",
           "name":"Youngstown-Warren Regional Airport",
           "city":"Vienna",
           "state":"OH",
           "statename":"Ohio",
           "lat":41.2576,
           "lng":-80.6648,
           "search":"yng|youngstownwarrenregionalairport|viennaoh|ohio"
         },
         {
           "code":"YUM",
           "name":"Yuma International Airport",
           "city":"Yuma",
           "state":"AZ",
           "statename":"Arizona",
           "lat":32.6685,
           "lng":-114.599,
           "search":"yum|yumainternationalairport|yumaaz|arizona"
         },
         {
           "code":"ZFZ",
           "name":"New York",
           "city":"Buffalo",
           "state":"NY",
           "statename":"New York",
           "lat":40.7145,
           "lng":-74.0071,
           "search":"zfz|newyork|buffalony|newyork"
         },
         {
           "code":"ZML",
           "name":"General Mitchell International Airport",
           "city":"Milwaukee",
           "state":"WI",
           "statename":"Wisconsin",
           "lat":42.9471,
           "lng":-87.9051,
           "search":"zml|generalmitchellinternationalairport|milwaukeewi|wisconsin"
         },
         {
           "code":"ZTV",
           "name":"Louisville International Airport",
           "city":"Louisville",
           "state":"KY",
           "statename":"Kentucky",
           "lat":38.1865,
           "lng":-85.7462,
           "search":"ztv|louisvilleinternationalairport|louisvilleky|kentucky"
         },
         {
           "code":"ZUN",
           "name":"Black Rock Airport",
           "city":"Zuni",
           "state":"NM",
           "statename":"New Mexico",
           "lat":35.0843,
           "lng":-108.789,
           "search":"zun|blackrockairport|zuninm|newmexico"
         },
         {
           "code":"ZWV",
           "name":"Illinois",
           "city":"Glenview",
           "state":"IL",
           "statename":"Illinois",
           "lat":39.7393,
           "lng":-89.5041,
           "search":"zwv|illinois|glenviewil|illinois"
         }
       ];
       return {
         getAllAirportsData: function(){
            return airportsData;
         }

       };

  }
}())
