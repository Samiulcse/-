var sahri = ["3:52", "3:51", "3:50", "3:50", "3:49", "3:49", "3:48", "3:48", "3:47", "3:47",
                "3:46", "3:46", "3:45", "3:44", "3:44", "3:43", "3:43", "3:42", "3:42", "3:41",
                "3:41", "3:40", "3:40", "3:40", "3:39", "3:39", "3:39", "3:39", "3:39", "3:39"
            ];

            var iftar = ["6:34", "6:34", "6:35", "6:35", "6:36", "6:36", "6:36", "6:37", "6:37", "6:38",
                "6:38", "6:39", "6:39", "6:40", "6:40", "6:41", "6:42", "6:42", "6:42", "6:43",
                "6:43", "6:44", "6:44", "6:45", "6:45", "6:46", "6:46", "6:46", "6:47", "6:47"
            ];

            var districtList = {
                "dhaka": ["ঢাকা", 0, 0],
                "norsingdi": ["নরসিংদী", -2, -2],
                "narayanganj": ["নারায়ণগঞ্জ", 0, -1],
                "munshiganj": ["মুন্সিগঞ্জ", 0, -1],
                "gazipur": ["গাজীপুর", -1, 0],
                "manikganj": ["মানিকগঞ্জ", 1, 1],
                "tangail": ["টাঙ্গাইল", 0, 2],
                "chottogram": ["চট্টগ্রাম", -2, -9],
                "chandpur": ["চাঁদপুর", 0, -3],
                "cumilla": ["কুমিল্লা", -2, -4],
                "coxbazar": ["কক্সবাজার", 0, -10],
                "bandorban": ["বান্দরবান", -4, -10],
                "khagrachari": ["খাগড়াছড়ি", -5, -8],
                "rangamati": ["রাঙামাটি", -4, -10],
                "noakhali": ["নোয়াখালী", -1, -5],
                "lokkhipur": ["লক্ষ্মীপুর", 0, -4],
                "feni": ["ফেনী", -2, -6],
                "b_baria": ["ব্রাহ্মণবাড়িয়া", -4, -3],
                "mymensingh": ["ময়মনসিংহ", -3, 1],
                "sherpur": ["শেরপুর", -2, 3],
                "jamalpur": ["জামালপুর", -1, 3],
                "netrokona": ["নেত্রকোনা", -4, 0],
                "rangpur": ["রংপুর", -1, 7],
                "dinajpur": ["দিনাজপুর", 2, 9],
                "gaibandha": ["গাইবান্ধা", -1, 5],
                "kurigram": ["কুড়িগ্রাম", -2, 6],
                "nilphamari": ["নীলফামারী", 1, 9],
                "panchagarh": ["পঞ্চগড়", 1, 11],
                "thakurgaon": ["ঠাকুরগাঁও", 2, 11],
                "lalmonirhat": ["লালমনিরহাট", -2, 7],
                "rajshahi": ["রাজশাহী", 5, 7],
                "nator": ["নাটোর", 4, 6],
                "chapai": ["চাঁপাইনবাবগঞ্জ", 6, 9],
                "joypurhat": ["জয়পুরহাট", 2, 7],
                "naogaon": ["নওগাঁ", 3, 7],
                "bogura": ["বগুড়া", 1, 5],
                "pabna": ["পাবনা", 4, 5],
                "sirajganj": ["সিরাজগঞ্জ", 1, 3],
                "kishoreganj": ["কিশোরগঞ্জ", -3, -1],
                "sylhet": ["সিলেট", -9, -5],
                "hobiganj": ["হবিগঞ্জ", -6, -4],
                "moulovibazar": ["মৌলভীবাজার", -8, -5],
                "sunamganj": ["সুনামগঞ্জ", -7, -2],
                "barisal": ["বরিশাল", 2, -2],
                "borguna": ["বরগুনা", 5, -2],
                "bhola": ["ভোলা", 2, -3],
                "jhalkathi": ["ঝালকাঠি", 3, -1],
                "patuakhali": ["পটুয়াখালী", 4, -2],
                "pirojpur": ["পিরোজপুর", 5, -1],
                "khulna": ["খুলনা", 6, -1],
                "bagerhut": ["বাগেরহাট", 5, 0],
                "satkhira": ["সাতক্ষীরা", 8, 3],
                "chuadanga": ["চুয়াডাঙ্গা", 6, 5],
                "jessore": ["যশোর", 6, 3],
                "jhinaidaha": ["ঝিনাইদহ", 5, 4],
                "rajbari": ["রাজবাড়ী", 4, 4],
                "gopalganj": ["গোপালগঞ্জ", 4, 1],
                "shariatpur": ["শরীয়তপুর", 2, -1],
                "madaripur": ["মাদারীপুর", 2, -1],
                "faridpur": ["ফরিদপুর", 2, 1],
                "khustia": ["কুষ্টিয়া", 5, 5],
                "magura": ["মাগুরা", 4, 3],
                "meherpur": ["মেহেরপুর", 7, 7],
                "norail": ["নড়াইল", 5, 2]


            }

            var divisionDistrictInfo = {
                "dhaka": {
                    "ঢাকা": ["dhaka"],
                    "নরসিংদী": ["norsingdi"],
                    "নারায়ণগঞ্জ": ["narayanganj"],
                    "গাজীপুর": ["gazipur"],
                    "মুন্সিগঞ্জ": ["munshiganj"],
                    "মানিকগঞ্জ": ["manikganj"],
                    "টাঙ্গাইল": ["tangail"],
                    "রাজবাড়ী": ["rajbari"],
                    "গোপালগঞ্জ": ["gopalganj"],
                    "শরীয়তপুর": ["shariatpur"],
                    "মাদারীপুর": ["madaripur"],
                    "ফরিদপুর": ["faridpur"],
                    "কিশোরগঞ্জ": ["kishoreganj"]
                },
                "chottogram": {
                    "চট্টগ্রাম": ["chottogram"],
                    "চাঁদপুর": ["chandpur"],
                    "কুমিল্লা": ["cumilla"],
                    "কক্সবাজার": ["coxbazar"],
                    "বান্দরবান": ["bandorban"],
                    "খাগড়াছড়ি": ["khagrachari"],
                    "রাঙামাটি": ["rangamati"],
                    "নোয়াখালী": ["noakhali"],
                    "লক্ষ্মীপুর": ["lokkhipur"],
                    "ফেনী": ["feni"],
                    "ব্রাহ্মণবাড়িয়া": ["b_baria"]
                },
                "mymensingh": {
                    "ময়মনসিংহ": ["mymensingh"],
                    "শেরপুর": ["sherpur"],
                    "জামালপুর": ["jamalpur"],
                    "নেত্রকোনা": ["netrokona"]
                },
                "rangpur": {
                    "রংপুর": ["rangpur"],
                    "দিনাজপুর": ["dinajpur"],
                    "গাইবান্ধা": ["gaibandha"],
                    "কুড়িগ্রাম": ["kurigram"],
                    "নীলফামারী ": ["nilphamari"],
                    "পঞ্চগড়": ["panchagarh"],
                    "ঠাকুরগাঁও": ["thakurgaon"],
                    "লালমনিরহাট": ["lalmonirhat"]
                },
                "sylhet": {
                    "সিলেট": ["sylhet"],
                    "হবিগঞ্জ": ["hobiganj"],
                    "মৌলভীবাজার": ["moulovibazar"],
                    "সুনামগঞ্জ ": ["sunamganj"]
                },
                "barisal": {
                    "বরিশাল": ["barisal"],
                    "বরগুনা": ["borguna"],
                    "ভোলা": ["bhola"],
                    "ঝালকাঠি": ["jhalkathi"],
                    "পটুয়াখালী": ["patuakhali"],
                    "পিরোজপুর": ["pirojpur"]
                },
                "khulna": {
                    "খুলনা": ["khulna"],
                    "বাগেরহাট": ["bagerhut"],
                    "চুয়াডাঙ্গা": ["chuadanga"],
                    "যশোর": ["jessore"],
                    "ঝিনাইদহ": ["jhinaidaha"],
                    "কুষ্টিয়া": ["khustia"],
                    "মাগুরা": ["magura"],
                    "মেহেরপুর": ["meherpur"],
                    "নড়াইল": ["norail"],
                    "সাতক্ষীরা": ["satkhira"]
                },
                "rajshahi": {
                    "রাজশাহী": ["rajshahi"],
                    "নাটোর": ["nator"],
                    "চাঁপাইনবাবগঞ্জ": ["chapai"],
                    "জয়পুরহাট": ["joypurhat"],
                    "নওগাঁ": ["naogaon"],
                    "বগুড়া": ["bogura"],
                    "পাবনা": ["pabna"],
                    "সিরাজগঞ্জ": ["sirajganj"]
                }
            }

            var locat = window.location.search.split('locat=')[1] ? window.location.search.split('locat=')[1] : ReadCookie();
            document.getElementById('dist').innerHTML = districtList[locat][0];
            var myhref = window.parent.location;
            myhref = myhref.toString();



            var selDivision = document.getElementById("division_s");
            var selDisctric = document.getElementById("district_s");

            $("#district_s").on('change', function() {

                var district_na = divisionDistrictInfo[selDivision.value][this.value];

                var now = new Date();
                now.setMonth(now.getMonth() + 1);
                district = escape(district_na) + ";"
                document.cookie = "district = " + district;
                document.cookie = "expires = " + now.toUTCString() + ";";



            });

            function ReadCookie() {
                var allcookies = document.cookie;
                cookiearray = allcookies.split(';');
                var length = cookiearray.length;
                var district = "dhaka";
                for (var i = 0; i < length; i++) {
                    if (cookiearray[i].split('=')[0].trim() == 'district') {
                        district = cookiearray[i].split('=')[1];
                    }
                }
                return district;
            }

            /* if(localStorage.getItem("district_name").length >0){		
		$(location).attr("href")+ "?locat=" +district_na;
               
	} */

            var nSahri = districtList[locat][1];
            var nIftar = districtList[locat][2];

            var timeTable = document.getElementById('timeTable');
            for (var r = 1; r < 31; r++) {
                hourS = parseInt(sahri[r - 1].split(':', 1));
                minuteS = parseInt(sahri[r - 1].split(':').pop());
                hourI = parseInt(iftar[r - 1].split(':', 1));
                minuteI = parseInt(iftar[r - 1].split(':').pop());


                minuteS = minuteS + nSahri;
                if (minuteS >= 60) {
                    hourS++;
                    minuteS = minuteS - 60;
                    minuteS = "0" + minuteS;
                }
                timeTable.rows[r].cells[3].innerHTML = getBanglaNum(hourS.toString()) + ":" + getBanglaNum(minuteS.toString());

                minuteI = minuteI + nIftar;
                if (minuteI >= 60) {
                    hourI++;
                    minuteI = minuteI - 60;
                    minuteI = "0" + minuteI;
                }
                timeTable.rows[r].cells[4].innerHTML = getBanglaNum(hourI.toString()) + ":" + getBanglaNum(minuteI.toString());
            }
            selDivision.onchange = function() {
                selDisctric.length = 1;
                if (this.selectedIndex < 1) return;
                for (var district in divisionDistrictInfo[this.value]) {

                    selDisctric.options[selDisctric.options.length] = new Option(district, district);
                }
            }
            selDisctric.onchange = function() {
                var distValue = "",
                    minuteIAdd = 0,
                    minuteSAdd = 0,
                    minuteISub = 0,
                    minuteSSub = 0,
                    hourS = 0,
                    hourI = 0,
                    minuteS = 0,
                    minuteI = 0;
                distValue = divisionDistrictInfo[selDivision.value][this.value];
                if (myhref.indexOf("?") > 0) {
                    myhref = myhref.substring(0, myhref.indexOf("?"));
                }
                location.href = myhref + "?locat=" + distValue;
            }

            function getBanglaNum(num) {
                var numbers = {
                    '0': '০',
                    '1': '১',
                    '2': '২',
                    '3': '৩',
                    '4': '৪',
                    '5': '৫',
                    '6': '৬',
                    '7': '৭',
                    '8': '৮',
                    '9': '৯'
                };
                var retStr = num;
                for (var x in numbers) {
                    retStr = retStr.replace(new RegExp(x, 'g'), numbers[x]);
                }
                return retStr;
            };