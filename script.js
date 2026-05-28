// --- DATA APLIKASI SUPER LENGKAP & RINCI (38 Provinsi & 38 Pahlawan) ---
// --- DIURUTKAN BERDASARKAN ABJAD (A-Z) ---
const dataApp = {
    budaya: [
        { 
            id: 'aceh', title: "Aceh", img: "assets/aceh.jpg", 
            desc: "Terletak di ujung utara Sumatera, Aceh dijuluki 'Serambi Mekkah' karena sejarah panjang Kesultanan Islam yang berjaya pada abad ke-17. Daerah ini memiliki hak otonomi khusus dan kental dengan nilai-nilai syariat, serta menyimpan ketangguhan masyarakatnya yang berhasil bangkit pasca tsunami dahsyat tahun 2004.", 
            details: [{ title: "Tari Tradisional", content: "Tari Saman (diakui UNESCO), Tari Seudati." }, { title: "Rumah Adat", content: "Rumah Krong Bade." }, { title: "Bahasa Daerah", content: "Bahasa Aceh, Gayo, Alas." }] 
        },
        { 
            id: 'bali', title: "Bali", img: "assets/pura-bali.jpg", 
            desc: "Dikenal dunia sebagai 'Pulau Dewata', Bali memadukan keindahan alam dengan kehidupan spiritual Hindu Dharma yang mendalam. Masyarakatnya sangat menjaga keharmonisan antara manusia, alam, dan Tuhan (Tri Hita Karana), yang tercermin dari sistem pengairan Subak hingga ribuan pura yang tersebar.", 
            details: [{ title: "Tari Tradisional", content: "Tari Kecak, Tari Pendet, Tari Barong." }, { title: "Rumah Adat", content: "Gapura Candi Bentar." }, { title: "Bahasa Daerah", content: "Bahasa Bali." }] 
        },
        { 
            id: 'babel', title: "Bangka Belitung", img: "assets/bangka.jpg", 
            desc: "Provinsi kepulauan ini terkenal dengan formasi batuan granit raksasa di sepanjang pantainya yang berpasir putih. Sempat menjadi pusat penghasil timah terbesar, Babel juga menjadi simbol toleransi tinggi melalui perpaduan harmonis antara budaya Melayu dan Tionghoa.", 
            details: [{ title: "Tari Tradisional", content: "Tari Campak." }, { title: "Rumah Adat", content: "Rumah Rakit & Rumah Limas." }, { title: "Bahasa Daerah", content: "Bahasa Bangka, Melayu Belitung." }] 
        },
        { 
            id: 'banten', title: "Banten", img: "assets/banten.webp", 
            desc: "Pernah menjadi salah satu pelabuhan internasional tersibuk di era Kesultanan Banten. Provinsi ini sangat unik karena menjadi rumah bagi Suku Baduy, sebuah komunitas adat yang hidup selaras dengan alam dan dengan teguh menolak pengaruh modernisasi dan teknologi.", 
            details: [{ title: "Tari Tradisional", content: "Tari Cokek, Kesenian Debus." }, { title: "Rumah Adat", content: "Sulah Nyanda." }, { title: "Bahasa Daerah", content: "Bahasa Sunda Banten." }] 
        },
        { 
            id: 'bengkulu', title: "Bengkulu", img: "assets/bengkulu.webp", 
            desc: "Dijuluki 'Bumi Rafflesia' karena di hutan inilah bunga bangkai terbesar di dunia pertama kali ditemukan oleh Sir Thomas Stamford Raffles. Bengkulu juga sarat akan sejarah sebagai tempat pengasingan Bung Karno dan memiliki peninggalan megah Benteng Marlborough milik Inggris.", 
            details: [{ title: "Tari Tradisional", content: "Tari Andun, Tari Bidadari Teminang Anak." }, { title: "Rumah Adat", content: "Bubungan Lima." }, { title: "Bahasa Daerah", content: "Bahasa Bengkulu, Rejang." }] 
        },
        { 
            id: 'jogja', title: "DI Yogyakarta", img: "assets/jogja.jpeg", 
            desc: "Yogyakarta adalah satu-satunya provinsi di Indonesia yang dipimpin oleh seorang Sultan. Sebagai Kota Pelajar dan pusat pelestarian kebudayaan Jawa, Yogyakarta memancarkan pesona magis dari keraton, jalan Malioboro, hingga seni membatik yang diwariskan turun-temurun.", 
            details: [{ title: "Tari Tradisional", content: "Tari Serimpi, Tari Bedhaya Ketawang." }, { title: "Rumah Adat", content: "Bangsal Kencono (Keraton)." }, { title: "Bahasa Daerah", content: "Bahasa Jawa." }] 
        },
        { 
            id: 'jakarta', title: "DKI Jakarta", img: "assets/monas.webp", 
            desc: "Ibu Kota Indonesia yang menjadi tempat meleburnya berbagai suku bangsa dari seluruh Nusantara. Budaya aslinya berasal dari suku Betawi yang lahir dari asimilasi berbagai etnis (Arab, Tionghoa, Melayu, Eropa) sejak zaman Batavia, menghasilkan kesenian seperti Ondel-Ondel dan Tanjidor.", 
            details: [{ title: "Tari Tradisional", content: "Tari Yapong, Tari Topeng Betawi." }, { title: "Rumah Adat", content: "Rumah Kebaya." }, { title: "Bahasa Daerah", content: "Bahasa Betawi." }] 
        },
        { 
            id: 'gorontalo', title: "Gorontalo", img: "assets/gorontalo.webp", 
            desc: "Mendapat julukan 'Serambi Madinah', Gorontalo memiliki filosofi luhur 'Adat Bersendikan Syara, Syara Bersendikan Kitabullah'. Selain budaya Islami yang kuat, daerah ini menyimpan keindahan bawah laut luar biasa serta hiu paus yang berenang bebas di perairannya.", 
            details: [{ title: "Tari Tradisional", content: "Tari Saronde, Tari Dana-Dana." }, { title: "Rumah Adat", content: "Rumah Dulohupa, Bandayo Poboide." }, { title: "Bahasa Daerah", content: "Bahasa Gorontalo." }] 
        },
        { 
            id: 'jambi', title: "Jambi", img: "assets/jambi.jpg", 
            desc: "Jambi dilalui oleh Sungai Batanghari yang merupakan sungai terpanjang di Sumatera. Daerah ini adalah pusat peradaban kuno yang dibuktikan dengan berdirinya Kompleks Candi Muaro Jambi, situs percandian Buddha terluas di Asia Tenggara peninggalan Kerajaan Sriwijaya dan Melayu.", 
            details: [{ title: "Tari Tradisional", content: "Tari Sekapur Sirih." }, { title: "Rumah Adat", content: "Rumah Panggung Kajang Leko." }, { title: "Bahasa Daerah", content: "Bahasa Jambi, Kubu (Anak Dalam)." }] 
        },
        { 
            id: 'jabar', title: "Jawa Barat", img: "assets/jabar.webp", 
            desc: "Dikenal sebagai Tanah Pasundan atau Bumi Sangkuriang, Jawa Barat dikelilingi oleh pegunungan yang sejuk. Budaya Sunda sangat mengedepankan kesopanan, keceriaan, dan harmoni, yang direpresentasikan lewat alat musik bambu Angklung yang telah diakui oleh UNESCO.", 
            details: [{ title: "Tari Tradisional", content: "Tari Jaipong, Tari Merak." }, { title: "Rumah Adat", content: "Kasepuhan, Julang Ngapak." }, { title: "Bahasa Daerah", content: "Bahasa Sunda." }] 
        },
        { 
            id: 'jateng', title: "Jawa Tengah", img: "assets/jateng.jpeg", 
            desc: "Jantung peradaban kebudayaan Jawa yang memelihara tradisi Kasunanan Surakarta (Solo). Jawa Tengah terkenal dengan sifat masyarakatnya yang lemah lembut, kerajinan ukiran kayu Jepara yang mendunia, serta kemegahan Candi Borobudur sebagai mahakarya wangsa Syailendra.", 
            details: [{ title: "Tari Tradisional", content: "Tari Bambangan Cakil, Tari Gambyong." }, { title: "Rumah Adat", content: "Rumah Joglo." }, { title: "Bahasa Daerah", content: "Bahasa Jawa." }] 
        },
        { 
            id: 'jatim', title: "Jawa Timur", img: "assets/suro-boyo.webp", 
            desc: "Bekas pusat kejayaan Kerajaan Majapahit yang menyatukan Nusantara. Masyarakat Jawa Timur dikenal tangguh, blak-blakan, dan heroik—tercermin dari peristiwa 10 November di Surabaya. Selain itu, pesona Gunung Bromo menjadi daya tarik alam yang sangat magis.", 
            details: [{ title: "Tari Tradisional", content: "Reog Ponorogo, Tari Remo." }, { title: "Rumah Adat", content: "Rumah Joglo Situbondo." }, { title: "Bahasa Daerah", content: "Bahasa Jawa (dialek Arekan), Madura." }] 
        },
        { 
            id: 'kalbar', title: "Kalimantan Barat", img: "assets/kalbar.jpg", 
            desc: "Ibukotanya, Pontianak, dilintasi langsung oleh garis imajiner Khatulistiwa. Dijuluki Provinsi Seribu Sungai karena aliran Sungai Kapuas (sungai terpanjang di Indonesia) menjadi urat nadi kehidupan masyarakat suku Dayak, Melayu, dan Tionghoa yang hidup berdampingan.", 
            details: [{ title: "Tari Tradisional", content: "Tari Monong, Tari Pingan." }, { title: "Rumah Adat", content: "Rumah Radakng (Rumah Panjang)." }, { title: "Bahasa Daerah", content: "Bahasa Dayak, Melayu Pontianak." }] 
        },
        { 
            id: 'kalsel', title: "Kalimantan Selatan", img: "assets/kalsel.jpg", 
            desc: "Pusat budaya suku Banjar yang kehidupan sosialnya tidak bisa dilepaskan dari sungai. Keunikan utamanya adalah Pasar Terapung di Muara Kuin dan Lok Baintan, di mana para pedagang bertransaksi di atas perahu kelotok. Daerah ini juga terkenal dengan tambang intan di Martapura.", 
            details: [{ title: "Tari Tradisional", content: "Tari Baksa Kembang." }, { title: "Rumah Adat", content: "Rumah Bubungan Tinggi." }, { title: "Bahasa Daerah", content: "Bahasa Banjar." }] 
        },
        { 
            id: 'kalteng', title: "Kalimantan Tengah", img: "assets/kalteng.jpg", 
            desc: "Provinsi yang wilayah daratannya didominasi oleh hutan tropis yang menjadi salah satu paru-paru dunia. Masyarakat Dayak di sini memegang teguh filosofi 'Huma Betang', yaitu asas kebersamaan, gotong royong, dan toleransi beragama dalam satu atap rumah panjang.", 
            details: [{ title: "Tari Tradisional", content: "Tari Balean Dadas, Tari Tambun & Bungai." }, { title: "Rumah Adat", content: "Rumah Betang." }, { title: "Bahasa Daerah", content: "Bahasa Dayak Ngaju, Ma'anyan." }] 
        },
        { 
            id: 'kaltim', title: "Kalimantan Timur", img: "assets/kaltim.jpg", 
            desc: "Bumi Etam yang menjadi rumah bagi Kerajaan Hindu tertua di Indonesia, Kutai Kartanegara. Saat ini, Kalimantan Timur menjadi pusat perhatian karena sebagian wilayahnya ditetapkan sebagai lokasi Ibu Kota Negara (IKN) Nusantara yang mengusung konsep kota hijau dan cerdas.", 
            details: [{ title: "Tari Tradisional", content: "Tari Gong, Tari Hudoq." }, { title: "Rumah Adat", content: "Rumah Lamin." }, { title: "Bahasa Daerah", content: "Bahasa Kutai, Dayak." }] 
        },
        { 
            id: 'kaltara', title: "Kalimantan Utara", img: "assets/kaltara.webp", 
            desc: "Provinsi termuda di pulau Kalimantan yang berbatasan langsung dengan negara bagian Sabah dan Sarawak, Malaysia. Kaltara memiliki hutan konservasi Kayan Mentarang dan kebudayaan suku Tidung serta Dayak yang masih sangat otentik.", 
            details: [{ title: "Tari Tradisional", content: "Tari Kencet Ledo, Tari Bangen Tawai." }, { title: "Rumah Adat", content: "Rumah Baloy." }, { title: "Bahasa Daerah", content: "Bahasa Tidung, Dayak." }] 
        },
        { 
            id: 'kepri', title: "Kepulauan Riau", img: "assets/kepri.jpeg", 
            desc: "Gerbang utara Indonesia yang berhadapan langsung dengan Singapura dan jalur pelayaran internasional Selat Malaka. Sejarah mencatat Kepri sebagai jantung Kesultanan Riau-Lingga yang melahirkan Bahasa Indonesia dari akar Bahasa Melayu yang kaya akan sastra pantun dan gurindam.", 
            details: [{ title: "Tari Tradisional", content: "Tari Persembahan, Tari Tandak." }, { title: "Rumah Adat", content: "Belah Bubung." }, { title: "Bahasa Daerah", content: "Bahasa Melayu Kepri." }] 
        },
        { 
            id: 'lampung', title: "Lampung", img: "assets/lampung.jpg", 
            desc: "Gerbang penghubung Pulau Sumatera dan Jawa yang dilambangkan dengan mahkota pengantin 'Siger'. Lampung adalah rumah bagi Taman Nasional Way Kambas (konservasi Gajah Sumatera) dan kebudayaan kain Tapis yang disulam menggunakan benang emas berlapis-lapis.", 
            details: [{ title: "Tari Tradisional", content: "Tari Sembah (Cangget), Tari Melinting." }, { title: "Rumah Adat", content: "Nuwo Sesat." }, { title: "Bahasa Daerah", content: "Bahasa Lampung (dialek A & O)." }] 
        },
        { 
            id: 'maluku', title: "Maluku", img: "assets/maluku.webp", 
            desc: "Dikenal dalam sejarah penjelajahan Eropa sebagai 'Spices Island' (Kepulauan Rempah) karena melimpahnya cengkeh dan pala. Masyarakat Maluku memiliki ikatan persaudaraan yang sangat kuat melintasi batas agama melalui budaya 'Pela Gandong' yang menjunjung tinggi toleransi.", 
            details: [{ title: "Tari Tradisional", content: "Tari Cakalele, Tari Lenso." }, { title: "Rumah Adat", content: "Rumah Baileo." }, { title: "Bahasa Daerah", content: "Bahasa Ambon." }] 
        },
        { 
            id: 'malut', title: "Maluku Utara", img: "assets/malut.jpg", 
            desc: "Pada abad pertengahan, wilayah ini adalah pusat dari empat Kesultanan Islam besar (Ternate, Tidore, Bacan, Jailolo) yang memonopoli perdagangan rempah dunia. Keindahan gunung api yang muncul dari lautan menjadikan lanskap Maluku Utara sangat dramatis dan memukau.", 
            details: [{ title: "Tari Tradisional", content: "Tari Soya-Soya, Tari Tide-Tide." }, { title: "Rumah Adat", content: "Rumah Baileo, Kedaton." }, { title: "Bahasa Daerah", content: "Bahasa Ternate, Tidore." }] 
        },
        { 
            id: 'ntb', title: "Nusa Tenggara Barat", img: "assets/ntb.jpg", 
            desc: "Terdiri dari dua pulau besar, Lombok dan Sumbawa. Di Lombok yang dijuluki Pulau Seribu Masjid, berdiam Suku Sasak dengan keindahan Gunung Rinjani. Sementara di Sumbawa, hidup Suku Samawa dan Mbojo yang terkenal dengan padang sabana dan kuda liarnya.", 
            details: [{ title: "Tari Tradisional", content: "Tari Gandrung, Tari Mpaa Lenggo." }, { title: "Rumah Adat", content: "Bale Lumbung, Dalam Loka." }, { title: "Bahasa Daerah", content: "Bahasa Sasak, Samawa, Bima." }] 
        },
        { 
            id: 'ntt', title: "Nusa Tenggara Timur", img: "assets/ntt.jpg", 
            desc: "Provinsi kepulauan yang eksotis dan gersang namun memukau, rumah bagi hewan endemik purba Komodo dan Danau Kelimutu yang memiliki tiga warna. Kekayaan seni NTT paling terlihat pada instrumen dawai Sasando dan kain tenun ikat yang dibuat dengan proses natural berbulan-bulan.", 
            details: [{ title: "Tari Tradisional", content: "Tari Gareng Lameng, Tari Caci (Manggarai)." }, { title: "Rumah Adat", content: "Mbaru Niang (Wae Rebo), Musalaki." }, { title: "Bahasa Daerah", content: "Bahasa Dawan, Manggarai, Tetun." }] 
        },
        { 
            id: 'papua', title: "Papua", img: "assets/papua.jpg", 
            desc: "Terletak di ujung timur Indonesia, Papua menyimpan keindahan alam yang belum banyak tersentuh dengan ikon burung surga, Cendrawasih. Masyarakat Papua sangat menghormati alam sebagai 'Ibu' pelindung kehidupan, terlukis dalam ukiran dan nyanyian adat mereka.", 
            details: [{ title: "Tari Tradisional", content: "Tari Sajojo, Tari Yospan." }, { title: "Rumah Adat", content: "Rumah Honai." }, { title: "Bahasa Daerah", content: "Bahasa Papua (beragam sub-bahasa lokal)." }] 
        },
        { 
            id: 'papuabarat', title: "Papua Barat", img: "assets/papua-barat.jpg", 
            desc: "Menempati bagian 'Kepala Burung' dari pulau Papua. Wilayah ini terkenal dengan gugusan kepulauan kars dan ekosistem terumbu karang terkaya di dunia, serta menjadi pusat kehidupan masyarakat pesisir Papua yang terbiasa hidup bergantung pada kekayaan laut.", 
            details: [{ title: "Tari Tradisional", content: "Tari Suanggi, Tari Magasa." }, { title: "Rumah Adat", content: "Rumah Mod Aki Aksa." }, { title: "Bahasa Daerah", content: "Bahasa Biak, Irarutu." }] 
        },
        { 
            id: 'papuabaratdaya', title: "Papua Barat Daya", img: "assets/rajaampat.jpg", 
            desc: "Provinsi hasil pemekaran yang mencakup wilayah Sorong Raya. Berfungsi sebagai pintu gerbang utama menuju keajaiban pariwisata Raja Ampat. Walau bernama 'Barat Daya', secara geografis wilayah ini terletak di ujung paling barat laut Pulau Papua.", 
            details: [{ title: "Tari Tradisional", content: "Tari Yospan, Tari Bintuni." }, { title: "Rumah Adat", content: "Rumah Kambik." }, { title: "Bahasa Daerah", content: "Bahasa Moi, Tehit." }] 
        },
        { 
            id: 'papuapegunungan', title: "Papua Pegunungan", img: "assets/papuapegunungan.jpg", 
            desc: "Satu-satunya provinsi di Indonesia yang berstatus 'Landlocked' atau tidak berbatasan dengan laut sama sekali. Wilayah ini menaungi Lembah Baliem yang magis, tempat kediaman Suku Dani yang terkenal dengan tradisi Festival Budaya Lembah Baliem dan mumi pahlawan adatnya.", 
            details: [{ title: "Tari Tradisional", content: "Tari Perang." }, { title: "Rumah Adat", content: "Rumah Honai (Silimo)." }, { title: "Bahasa Daerah", content: "Bahasa Dani, Nduga." }] 
        },
        { 
            id: 'papuaselatan', title: "Papua Selatan", img: "assets/papuaselatan.webp", 
            desc: "Provinsi yang berbatasan langsung dengan negara Papua Nugini dan memiliki hamparan rawa serta sabana terluas di Papua. Ini adalah tanah leluhur Suku Asmat, seniman pahat kelas dunia yang mempercayai bahwa manusia berasal dari kayu ukiran.", 
            details: [{ title: "Tari Tradisional", content: "Tari Tumbuk Tanah." }, { title: "Rumah Adat", content: "Rumah Jew (Bujang)." }, { title: "Bahasa Daerah", content: "Bahasa Asmat, Marind." }] 
        },
        { 
            id: 'papuatengah', title: "Papua Tengah", img: "assets/papuatengah.webp", 
            desc: "Provinsi ini memiliki keajaiban alam Puncak Jaya (Cartensz Pyramid), satu-satunya tempat bersalju abadi di daerah tropis Indonesia. Wilayah ini juga menjadi lokasi tambang emas terbesar di dunia peninggalan alam yang dijaga oleh suku Amungme dan Kamoro.", 
            details: [{ title: "Tari Tradisional", content: "Tari Seka." }, { title: "Rumah Adat", content: "Rumah Honai, Karapao." }, { title: "Bahasa Daerah", content: "Bahasa Mee, Moni." }] 
        },
        { 
            id: 'riau', title: "Riau", img: "assets/riau.png", 
            desc: "Dikenal sebagai 'Bumi Lancang Kuning', Riau merupakan pusat peradaban dan pelestarian seni budaya Melayu di daratan Sumatera. Sebelum berkembang menjadi provinsi kaya minyak, daerah ini dikuasai oleh Kerajaan Siak Sri Indrapura yang megah dan sangat terpelajar.", 
            details: [{ title: "Tari Tradisional", content: "Tari Zapin, Tari Makan Sirih." }, { title: "Rumah Adat", content: "Selaso Jatuh Kembar." }, { title: "Bahasa Daerah", content: "Bahasa Melayu Riau." }] 
        },
        { 
            id: 'sulbar', title: "Sulawesi Barat", img: "assets/sulbar.jpg", 
            desc: "Dihuni mayoritas oleh suku Mandar, kawasan ini terkenal dengan tradisi bahari yang luar biasa berkat Perahu Sandeq, kapal layar bercadik tercepat di dunia peninggalan leluhur mereka. Daerah ini juga terkenal dengan tenun sutra Mandar yang halus dan elegan.", 
            details: [{ title: "Tari Tradisional", content: "Tari Patuddu, Tari Bamba Manurung." }, { title: "Rumah Adat", content: "Rumah Boyang." }, { title: "Bahasa Daerah", content: "Bahasa Mandar." }] 
        },
        { 
            id: 'sulsel', title: "Sulawesi Selatan", img: "assets/sulsel.jpg", 
            desc: "Provinsi yang melahirkan dua suku besar pelaut ulung: Bugis dan Makassar, pembuat Kapal Phinisi yang legendaris menjelajah samudera. Di utara, terdapat budaya Tana Toraja yang memiliki ritual pemakaman Rambu Solo paling unik dan mahal di dunia.", 
            details: [{ title: "Tari Tradisional", content: "Tari Pakarena, Tari Bosara." }, { title: "Rumah Adat", content: "Rumah Tongkonan, Balla Lombpoa." }, { title: "Bahasa Daerah", content: "Bahasa Bugis, Makassar, Toraja." }] 
        },
        { 
            id: 'sulteng', title: "Sulawesi Tengah", img: "assets/sulteng.jpeg",
            desc: "Membentang di garis Khatulistiwa, Sulawesi Tengah memiliki Taman Nasional Lore Lindu yang menyimpan ratusan patung megalitikum misterius berumur ribuan tahun. Keanekaragaman hayati dan kontur pegunungannya menjadikan wilayah ini kaya akan flora dan fauna endemik.", 
            details: [{ title: "Tari Tradisional", content: "Tari Dero (Tarian Persaudaraan), Tari Lumense." }, { title: "Rumah Adat", content: "Souraja (Banua Oge)." }, { title: "Bahasa Daerah", content: "Bahasa Kaili, Pamona." }] 
        },
        { 
            id: 'sultra', title: "Sulawesi Tenggara", img: "assets/sulteng.jpg", 
            desc: "Kepingan surga bawah laut dunia berada di provinsi ini, tepatnya di Taman Nasional Wakatobi. Sulawesi Tenggara merupakan wilayah eks-Kesultanan Buton yang tidak pernah dijajah secara langsung oleh Belanda, serta memiliki kekayaan tambang aspal dan nikel yang besar.", 
            details: [{ title: "Tari Tradisional", content: "Tari Lulo, Tari Balumpa." }, { title: "Rumah Adat", content: "Rumah Banua Tada, Malige." }, { title: "Bahasa Daerah", content: "Bahasa Tolaki, Buton, Muna." }] 
        },
        { 
            id: 'sulut', title: "Sulawesi Utara", img: "assets/sulut.webp", 
            desc: "Ujung utara pulau Sulawesi ini berhadapan langsung dengan negara Filipina. Masyarakat Minahasa sangat membanggakan semboyan 'Torang Samua Basudara' yang melahirkan kerukunan beragama tertinggi. Sulut terkenal dengan alat musik Kolintang dan pesona laut Bunaken.", 
            details: [{ title: "Tari Tradisional", content: "Tari Maengket, Tari Kabasaran." }, { title: "Rumah Adat", content: "Rumah Walewangko." }, { title: "Bahasa Daerah", content: "Bahasa Minahasa, Sangir." }] 
        },
        { 
            id: 'sumbar', title: "Sumatera Barat", img: "assets/sumbar.webp", 
            desc: "Jantung peradaban Suku Minangkabau yang menganut sistem kekerabatan matrilineal (garis keturunan ibu) terbesar di dunia. Filosofi 'Alam Takambang Jadi Guru' membuat masyarakatnya gemar merantau, dan kuliner aslinya, Rendang, dinobatkan sebagai salah satu makanan terlezat di bumi.", 
            details: [{ title: "Tari Tradisional", content: "Tari Piring, Tari Payung." }, { title: "Rumah Adat", content: "Rumah Gadang." }, { title: "Bahasa Daerah", content: "Bahasa Minangkabau." }] 
        },
        { 
            id: 'sumsel', title: "Sumatera Selatan", img: "assets/sumsel.jpg", 
            desc: "Palembang, ibu kotanya, merupakan kota tertua di Indonesia peninggalan Kerajaan Maritim Sriwijaya yang menguasai Nusantara pada abad ke-7. Dibelah oleh Sungai Musi yang dihiasi Jembatan Ampera, daerah ini menjadi pusat akulturasi Melayu, Tionghoa, dan Arab.", 
            details: [{ title: "Tari Tradisional", content: "Tari Tanggai, Tari Gending Sriwijaya." }, { title: "Rumah Adat", content: "Rumah Limas." }, { title: "Bahasa Daerah", content: "Bahasa Palembang, Musi." }] 
        },
        { 
            id: 'sumut', title: "Sumatera Utara", img: "assets/sumut.jpg", 
            desc: "Rumah bagi Danau Toba, kaldera gunung berapi terbesar di dunia yang tercipta dari letusan supervolcano puluhan ribu tahun lalu. Masyarakat mayoritas Batak dikenal dengan karakter vokal yang tegas, kepandaian bernyanyi, dan ikatan marga yang sangat dijunjung tinggi.", 
            details: [{ title: "Tari Tradisional", content: "Tari Tor-Tor." }, { title: "Rumah Adat", content: "Rumah Bolon." }, { title: "Bahasa Daerah", content: "Bahasa Batak (Toba, Karo, Mandailing), Nias." }] 
        }
    ],
    
    pahlawan: [
        { 
            id: 'muhidris', title: "Aji Muhammad Idris", img: "assets/ajimuh.webp", 
            info: "Asal: Kalimantan Timur | Wafat: Wajo, Sulsel", 
            desc: "Sultan Kutai Kartanegara ing Martadipura yang rela meninggalkan singgasananya dan berlayar menyeberangi lautan menuju Sulawesi untuk membantu perjuangan mertuanya, Raja Wajo, bertempur habis-habisan mengusir VOC.", 
            fakta: "Merupakan pahlawan nasional pertama dan satu-satunya yang ditetapkan dari Provinsi Kalimantan Timur." 
        },
        { 
            id: 'andidepu', title: "Andi Depu", img: "assets/andidepu.jpg", 
            info: "Asal: Sulawesi Barat | Lahir: Tinambung, 1907", 
            desc: "Seorang bangsawan wanita dari Mandar yang menentang keras pendudukan tentara NICA Belanda pasca kemerdekaan. Ia menjadikan rumahnya sebagai markas rahasia pejuang pemuda dan memelopori perlawanan bawah tanah di Sulawesi.", 
            fakta: "Pernah dengan gagah berani memeluk tiang bendera Merah Putih di depan bayonet tentara Belanda agar bendera tersebut tidak diturunkan." 
        },
        { 
            id: 'bungtomo', title: "Bung Tomo", img: "assets/bungtomo.jpg", 
            info: "Asal: Jawa Timur | Lahir: Surabaya, 1920", 
            desc: "Sutomo atau Bung Tomo adalah orator ulung yang suaranya lewat radio berhasil membakar semangat arek-arek Suroboyo. Ia memimpin perlawanan rakyat sipil melawan gempuran tentara Sekutu (Inggris) pada Pertempuran epik 10 November 1945.", 
            fakta: "Pekik takbir 'Allahu Akbar!' dan semboyan 'Merdeka atau Mati!' yang disuarakannya menjadi salah satu orasi paling ikonik dalam sejarah bangsa." 
        },
        { 
            id: 'cutnyak', title: "Cut Nyak Dien", img: "assets/cutnyakdien.jpg", 
            info: "Asal: Aceh | Wafat: Sumedang, 1908", 
            desc: "Pahlawan wanita paling ditakuti oleh Belanda dalam Perang Aceh. Setelah suami pertamanya gugur, ia bersumpah untuk terus menghancurkan Belanda. Bahkan ketika usianya menua, matanya rabun, dan sakit encok, ia tetap memimpin gerilya di belantara hutan Aceh.", 
            fakta: "Karena dikhawatirkan masih bisa mengobarkan perlawanan, Belanda mengasingkannya sangat jauh ke Sumedang, Jawa Barat, hingga akhir hayatnya." 
        },
        { 
            id: 'depatiamir', title: "Depati Amir", img: "assets/depatiamir.jpeg", 
            info: "Asal: Bangka Belitung | Wafat: Kupang, 1869", 
            desc: "Pahlawan yang menentang keras eksploitasi dan kerja paksa di tambang timah Bangka oleh pemerintah kolonial Belanda. Ia mengorganisir perang gerilya di hutan-hutan dan pesisir pantai selama berbulan-bulan yang sangat merepotkan Belanda.", 
            fakta: "Kehebatannya adalah berhasil menyatukan perlawanan dari Suku Melayu pesisir dan komunitas penambang Tionghoa (Kek) di Bangka." 
        },
        { 
            id: 'dewisartika', title: "Dewi Sartika", img: "assets/dewisartika.jpg", 
            info: "Asal: Jawa Barat | Lahir: Bandung, 1884", 
            desc: "Tokoh perintis dan pelopor hak pendidikan bagi kaum perempuan di Tatar Pasundan. Ia berjuang keras mendobrak tradisi patriarki kolonial yang menganggap perempuan tidak perlu sekolah, dengan tujuan mengangkat derajat kaum Hawa.", 
            fakta: "Pada tahun 1904, ia mendirikan 'Sakola Istri', sekolah perempuan pertama di Hindia Belanda yang mengajarkan membaca, menulis, dan keterampilan." 
        },
        { 
            id: 'fatmawati', title: "Fatmawati", img: "assets/fatmawati.jpg", 
            info: "Asal: Bengkulu | Wafat: Kuala Lumpur, 1980", 
            desc: "Istri Presiden Soekarno yang memiliki peran monumental dalam kemerdekaan. Di tengah tekanan dan pengawasan ketat tentara Jepang menjelang Proklamasi, ia memberanikan diri menyiapkan simbol kedaulatan negara yang belum merdeka.", 
            fakta: "Beliau menjahit Bendera Pusaka 'Sang Saka Merah Putih' dengan tangan sendiri menggunakan mesin jahit tangan, saat sedang mengandung putra sulungnya (Guntur)." 
        },
        { 
            id: 'kaisiepo', title: "Frans Kaisiepo", img: "assets/kaiseipo.webp", 
            info: "Asal: Papua | Lahir: Biak, 1921", 
            desc: "Tokoh sentral di balik pergerakan pro-Republik Indonesia di tanah Papua. Ia menolak rencana Belanda yang ingin menjadikan Papua sebagai negara boneka, dan mengkampanyekan persatuan Papua ke dalam pangkuan NKRI.", 
            fakta: "Ia adalah orang yang menggagas nama IRIAN, akronim dari 'Ikut Republik Indonesia Anti Nederland'. Wajahnya diabadikan dalam uang Rp10.000 keluaran 2016." 
        },
        { 
            id: 'ngurahrai', title: "I Gusti Ngurah Rai", img: "assets/ngurahrai.webp", 
            info: "Asal: Bali | Lahir: Badung, 1917", 
            desc: "Komandan militer (Letnan Kolonel) yang memimpin pasukan Ciung Wanara di Bali. Ia menolak mentah-mentah tawaran Belanda untuk membentuk Negara Indonesia Timur, dan memilih melawan konvoi Belanda bersenjata lengkap dengan senjata seadanya.", 
            fakta: "Ia memerintahkan 'Puputan' (bertempur habis-habisan sampai mati) di desa Margarana demi menjaga kehormatan pantang menyerah kepada penjajah." 
        },
        { 
            id: 'soekarno', title: "Ir. Soekarno", img: "assets/bpk-proklamator.webp", 
            info: "Asal: Jawa Timur | Lahir: Surabaya, 1901", 
            desc: "Bapak Proklamator dan Presiden Pertama Republik Indonesia. Seorang orator jenius yang mampu menyatukan ratusan suku bangsa Nusantara ke dalam satu wadah negara Merdeka dan sangat disegani di kancah politik internasional era Perang Dingin.", 
            fakta: "Sebagai arsitek (lulusan ITB) sekaligus pemikir, ia adalah tokoh utama yang merumuskan 'Pancasila' sebagai dasar negara kita pada 1 Juni 1945." 
        },
        { 
            id: 'sudirman', title: "Jend. Sudirman", img: "assets/sudirman.jpg", 
            info: "Asal: Jawa Tengah | Lahir: Purbalingga, 1916", 
            desc: "Panglima Besar Tentara Nasional Indonesia yang pertama. Ketika Belanda melancarkan Agresi Militer II dan menangkap Soekarno, ia menolak menyerah dan masuk ke hutan belantara untuk memimpin Perang Gerilya semesta di seluruh Pulau Jawa.", 
            fakta: "Memimpin pertempuran berbulan-bulan dalam kondisi sakit TBC paru-paru parah, sehingga harus ditandu oleh prajurit-prajurit setianya." 
        },
        { 
            id: 'dimara', title: "Johannes A. Dimara", img: "assets/johannesdimara.webp", 
            info: "Asal: Papua | Lahir: Biak Utara, 1916", 
            desc: "Mayor TNI yang menjadi tokoh kunci dalam operasi militer dan diplomasi penyatuan Irian Barat (Papua) ke Indonesia. Ia turut serta dalam perundingan di PBB dan menyerukan rakyat Papua untuk mendukung integrasi NKRI.", 
            fakta: "Sosoknya yang gagah dengan rantai putus di tangannya menjadi inspirasi langsung Bung Karno dalam pembuatan Patung Pembebasan Irian Barat di Lapangan Banteng, Jakarta." 
        },
        { 
            id: 'pattimura', title: "Kapitan Pattimura", img: "assets/pattimura.webp", 
            info: "Asal: Maluku | Lahir: Saparua, 1783", 
            desc: "Bernama asli Thomas Matulessy, ia memimpin pemberontakan rakyat Maluku yang muak dengan monopoli rempah-rempah dan penindasan oleh VOC/Belanda. Ia berhasil merebut Benteng Duurstede dan menewaskan Residen Belanda di sana.", 
            fakta: "Sebelum dihukum gantung, ia meneriakkan ancaman legendaris: 'Pattimura-Pattimura tua boleh dihancurkan, tapi Pattimura-Pattimura muda akan bangkit!'" 
        },
        { 
            id: 'dewantara', title: "Ki Hajar Dewantara", img: "assets/bpk-pendidikan.jpg", 
            info: "Asal: DI Yogyakarta | Lahir: Pakualaman, 1889", 
            desc: "Bapak Pendidikan Nasional (bernama asli RM Suwardi Suryaningrat). Karena kritikan tajamnya terhadap perayaan kemerdekaan Belanda di atas penderitaan rakyat jajahan, ia diasingkan. Sekembalinya, ia mendirikan Perguruan Taman Siswa.", 
            fakta: "Pencipta semboyan sakti pendidikan: 'Ing Ngarso Sung Tulodo, Ing Madya Mangun Karso, Tut Wuri Handayani' (Di depan memberi teladan, di tengah membangun semangat, di belakang memberi dorongan)." 
        },
        { 
            id: 'mhthamrin', title: "M.H. Thamrin", img: "assets/mhthamrin.jpg", 
            info: "Asal: DKI Jakarta | Lahir: Batavia, 1894", 
            desc: "Tokoh cendekiawan keturunan Betawi yang berjuang merebut hak rakyat melalui jalur diplomasi politik di dalam Volksraad (Dewan Rakyat Hindia Belanda). Ia sangat konsen pada penderitaan rakyat kecil di kampung-kampung kumuh ibu kota.", 
            fakta: "Ia menyisihkan sebagian besar hartanya untuk membangun perbaikan kampung (Kampoeng Verbetering) dan stadion sepakbola pertama untuk rakyat pribumi (VIJ)." 
        },
        { 
            id: 'martha', title: "Martha C. Tiahahu", img: "assets/martha.jpeg", 
            info: "Asal: Maluku | Wafat: Laut Banda, 1818", 
            desc: "Gadis remaja pemberani yang berjuang berdampingan bersama ayahnya dan Kapitan Pattimura melawan tentara kolonial bersenjata lengkap. Ia terjun langsung di garis depan pertempuran membawa tombak untuk membela tanah Saparua.", 
            fakta: "Tercatat sebagai salah satu pahlawan kemerdekaan termuda di dunia. Ia gugur di usia 17 tahun setelah mogok makan saat ditawan di atas kapal perang Belanda." 
        },
        { 
            id: 'nani', title: "Nani Wartabone", img: "assets/nani.jpeg", 
            info: "Asal: Gorontalo | Lahir: Suwawa, 1907", 
            desc: "Pemimpin Peristiwa Patriotik 23 Januari 1942 di mana ia dan pasukannya memproklamasikan kemerdekaan Gorontalo tiga tahun LEBIH AWAL dari Proklamasi 1945, setelah berhasil mengusir pejabat kolonial dari tanah Gorontalo.", 
            fakta: "Ia berhasil melucuti dan menangkap seluruh kepala pemerintahan kolonial Belanda di Gorontalo tanpa menjatuhkan satu pun korban jiwa." 
        },
        { 
            id: 'antasari', title: "Pangeran Antasari", img: "assets/antasari.jpg", 
            info: "Asal: Kalimantan Selatan | Wafat: Puruk Cahu, 1862", 
            desc: "Sultan dari Kerajaan Banjar yang mengobarkan Perang Banjar untuk melawan intervensi Belanda yang terus mencampuri urusan tahta kerajaan dan mengeksploitasi tambang batu bara rakyat.", 
            fakta: "Beliau dihormati karena keteguhannya memegang semboyan 'Haram Manyarah Waja Sampai Kaputing' (Pantang menyerah sampai tetes darah penghabisan)." 
        },
        { 
            id: 'diponegoro', title: "Pangeran Diponegoro", img: "assets/diponegoro.jpg", 
            info: "Asal: DI Yogyakarta | Lahir: 1785", 
            desc: "Pangeran keraton yang memimpin Perang Jawa (Perang Diponegoro) antara 1825-1830 karena Belanda merusak makam leluhurnya untuk membangun jalan. Perang ini membuat kas kerajaan Belanda bangkrut total.", 
            fakta: "Belanda baru bisa menangkapnya bukan melalui pertempuran, melainkan lewat kelicikan tipu muslihat dengan mengundangnya untuk berunding di Magelang lalu menangkapnya secara pengecut." 
        },
        { 
            id: 'kartini', title: "R.A. Kartini", img: "assets/kartini-baru.jpeg",
            info: "Asal: Jawa Tengah | Lahir: Jepara, 1879", 
            desc: "Pahlawan emansipasi yang pemikirannya melampaui zamannya. Meski dikurung tradisi pingitan keraton, ia gigih menulis surat kepada sahabat-sahabat penanya di Belanda, memprotes diskriminasi pendidikan dan pernikahan paksa bagi perempuan pribumi.", 
            fakta: "Kumpulan surat-suratnya yang tajam namun puitis dibukukan dengan judul 'Door Duisternis tot Licht' (Habis Gelap Terbitlah Terang) yang mengguncang pemikir di Eropa." 
        },
        { 
            id: 'abdulkadir', title: "Raden Abdul Kadir", img: "assets/abdulkadir.jpg", 
            info: "Asal: Kalimantan Barat | Berjuang di: Melawi", 
            desc: "Pahlawan bergelar Raden Tumenggung yang mengobarkan semangat perjuangan melawan penjajahan kolonial Belanda di kawasan Melawi, Kalimantan Barat. Ia menggunakan taktik gerilya di pedalaman sungai untuk memutus jalur logistik Belanda.", 
            fakta: "Ia menolak segala bujukan dan tawaran jabatan tinggi, pangkat, hingga kekayaan dari Belanda demi berdiri teguh membela kemerdekaan rakyatnya." 
        },
        { 
            id: 'radenintan', title: "Raden Intan II", img: "assets/radenintan.webp", 
            info: "Asal: Lampung | Lahir: Kuripan, 1834", 
            desc: "Seorang panglima perang dari Lampung yang sejak usia 16 tahun sudah diangkat menjadi pemimpin untuk melawan invasi militer Belanda. Ia membangun benteng-benteng pertahanan yang kuat di perbukitan Lampung Selatan.", 
            fakta: "Karena kesaktian dan kepemimpinannya, Belanda sangat kesulitan mengalahkannya dan terpaksa menyewa pengkhianat pribumi untuk menyergapnya saat beliau sedang lengah." 
        },
        { 
            id: 'rajaalihaji', title: "Raja Ali Haji", img: "assets/rajaalihaji.jpg", 
            info: "Asal: Kepulauan Riau | Lahir: Selangor, 1808", 
            desc: "Ulama, pujangga, dan bapak tata bahasa Melayu yang karyanya menjadi akar cikal-bakal lahirnya Bahasa Indonesia. Beliau berjuang bukan dengan senjata api, melainkan lewat tinta dan literatur yang mencerdaskan bangsa.", 
            fakta: "Karya terbesarnya adalah 'Gurindam Dua Belas' (1847), sebuah puisi sarat nilai moral dan agama yang masih dipelajari di sekolah-sekolah hingga saat ini." 
        },
        { 
            id: 'fisabilillah', title: "Raja Haji Fisabilillah", img: "assets/fisabilillah.jpg", 
            info: "Asal: Riau | Wafat: Teluk Ketapang, 1784", 
            desc: "Panglima armada laut Kesultanan Riau-Lingga-Johor-Pahang yang sangat ditakuti oleh armada VOC Belanda. Beliau mendirikan benteng pertahanan kuat di Pulau Penyengat dan berhasil menggagalkan monopoli dagang Eropa di perairan Melaka.", 
            fakta: "Pada tahun 1784, pasukannya berhasil meledakkan dan menenggelamkan kapal perang kebanggaan Belanda, 'Malaka's Welvaren', di perairan Riau." 
        },
        { 
            id: 'ratulangi', title: "Sam Ratulangi", img: "assets/ratulangi.jpg", 
            info: "Asal: Sulawesi Utara | Lahir: Tondano, 1890", 
            desc: "Dr. Gerungan Saul Samuel Jacob Ratulangi adalah intelektual, politikus, dan Gubernur Sulawesi pertama pasca kemerdekaan. Ia menggunakan pendidikan matematika dan jurnalisme untuk melawan kebodohan dan penindasan Belanda di Minahasa.", 
            fakta: "Beliau pencetus filosofi luar biasa dari Minahasa: 'Si tou timou tumou tou' yang artinya 'Manusia baru dapat disebut sebagai manusia, jika sudah dapat memanusiakan manusia lain'." 
        },
        { 
            id: 'papare', title: "Silas Papare", img: "assets/papare.jpg", 
            info: "Asal: Papua | Lahir: Serui, 1918", 
            desc: "Mantan perawat medis intelijen Sekutu yang kemudian mendirikan Partai Kemerdekaan Indonesia Irian (PKII). Ia menghabiskan sisa hidupnya berjuang di jalur politik dan bawah tanah agar Papua bisa bergabung dengan Indonesia.", 
            fakta: "Aktivitasnya yang sangat pro-Indonesia membuatnya sering diburu dan dipenjara berkali-kali oleh Belanda, hingga akhirnya ia kabur dan membentuk Batalyon Tentara Irian." 
        },
        { 
            id: 'sisingamangaraja', title: "Sisingamangaraja XII", img: "assets/sisingamangaraja-xii.jpg", 
            info: "Asal: Sumatera Utara | Wafat: Dairi, 1907", 
            desc: "Raja pendeta tertinggi masyarakat Batak di wilayah Toba yang selama 30 tahun memimpin perang gerilya menolak tunduk pada misionaris dan perluasan kekuasaan militer Hindia Belanda ke Tanah Batak.", 
            fakta: "Ia menolak tawaran damai berupa penobatan sebagai Sultan dari Belanda. Ia gugur heroik tertembak di medan perang bersama putri dan dua putranya demi mempertahankan kehormatan tanah leluhurnya." 
        },
        { 
            id: 'tirtayasa', title: "Sultan Ageng Tirtayasa", img: "assets/tirtayasa.jpg", 
            info: "Asal: Banten | Lahir: Banten, 1631", 
            desc: "Membawa Kesultanan Banten menuju Puncak Kejayaan. Ia sangat keras menentang monopoli perdagangan VOC di Batavia dan memajukan sektor pertanian kerajaannya dengan membangun sistem irigasi besar-besaran (Tirtayasa).", 
            fakta: "Sangat ahli taktik maritim, ia membangun armada laut yang kuat hingga menjalin hubungan diplomatik internasional dengan raja-raja di Eropa dan Turki Utsmani." 
        },
        { 
            id: 'hasanuddin', title: "Sultan Hasanuddin", img: "assets/hasanuddin.jpg", 
            info: "Asal: Sulawesi Selatan | Lahir: Makassar, 1631", 
            desc: "Raja Gowa ke-16 yang dengan gagah berani melawan monopoli perdagangan rempah-rempah oleh VOC (Belanda). Pasukan lautnya berkali-kali menyulitkan blokade ekonomi Belanda di perairan Indonesia Timur.", 
            fakta: "Karena keberanian dan kegigihannya yang pantang mundur di medan pertempuran laut, VOC dengan gentar menjulukinya 'De Haantjes van Het Oosten' (Ayam Jantan dari Timur)." 
        },
        { 
            id: 'himayatuddin', title: "Sultan Himayatuddin", img: "assets/himayatuddin.webp", 
            info: "Asal: Sulawesi Tenggara | Wafat: Hutan Siontapina, 1776", 
            desc: "Sultan Buton ke-20 dan ke-23 (Oputa Yi Koo) yang memilih meninggalkan kenyamanan singgasananya demi memimpin perang gerilya gerak cepat masuk keluar hutan melawan penjajahan VOC yang sewenang-wenang.", 
            fakta: "Ia adalah satu-satunya Sultan di Nusantara yang memilih turun takhta dan bergerilya di hutan (Oputa Yi Koo) hingga wafat demi menolak tunduk pada kontrak kompeni Belanda." 
        },
        { 
            id: 'badaruddin', title: "Sultan M. Badaruddin II", img: "assets/badaruddin.jpg", 
            info: "Asal: Sumatera Selatan | Wafat: Ternate, 1852", 
            desc: "Pemimpin tangguh dari Kesultanan Palembang Darussalam yang berjuang mempertahankan kerajaannya dari dua kekuatan kolonial besar sekaligus, yaitu Inggris dan Belanda, dalam Perang Menteng.", 
            fakta: "Meski akhirnya kalah persenjataan dan diasingkan jauh ke Ternate, perjuangannya sangat dihormati sehingga wajahnya diabadikan dalam mata uang kertas pecahan Rp10.000." 
        },
        { 
            id: 'nuku', title: "Sultan Nuku", img: "assets/nuku.jpg", 
            info: "Asal: Maluku Utara | Lahir: Tidore, 1738", 
            desc: "Sultan dari Kerajaan Tidore yang berhasil melepaskan wilayahnya dari cengkeraman penjajahan Belanda. Ia dikenal sebagai ahli strategi ulung yang mampu mengadu domba kekuatan Belanda dan Inggris demi keuntungannya sendiri.", 
            fakta: "Ia memimpin puluhan pertempuran laut dan tidak pernah kalah satu kali pun, sehingga mendapat julukan The Lord of Fortune (Tuan Keberuntungan)." 
        },
        { 
            id: 'thaha', title: "Sultan Thaha Syaifuddin", img: "assets/thaha.jpg", 
            info: "Asal: Jambi | Lahir: Jambi, 1816", 
            desc: "Sultan Jambi yang dengan tegas membatalkan seluruh perjanjian tunduk warisan ayahnya dengan Belanda. Ketika keratonnya dikuasai musuh, ia memindahkan pusat komando ke pedalaman dan melancarkan perang gerilya yang melelahkan militer Belanda.", 
            fakta: "Dalam setiap pertempuran, ia dikenal tidak pernah mundur. Butuh waktu puluhan tahun bagi Belanda untuk bisa menemukan markas persembunyian rahasianya di hutan Jambi." 
        },
        { 
            id: 'teukuumar', title: "Teuku Umar", img: "assets/teukuumar.jpg", 
            info: "Asal: Aceh | Lahir: Meulaboh, 1854", 
            desc: "Suami Cut Nyak Dien yang memiliki taktik perang gerilya paling jenius dan berisiko tinggi. Ia berpura-pura menyerah dan bergabung dengan militer Belanda untuk mempelajari taktik mereka serta mengambil persenjataan berat.", 
            fakta: "Setelah dipercaya dan diberi senjata lengkap oleh Belanda, ia berkhianat dan membawa kabur seluruh senjata tersebut untuk dibagikan kepada pasukan pejuang Aceh." 
        },
        { 
            id: 'zainuddin', title: "TGKH. M. Zainuddin", img: "assets/zainudin.jpg", 
            info: "Asal: Nusa Tenggara Barat | Lahir: Pancor, 1904", 
            desc: "Ulama kharismatik yang akrab disapa Tuan Guru Pancor, merupakan pahlawan nasional pembaharu yang gigih berjuang melawan kolonialisme melalui pendidikan dan dakwah Islam dengan mendirikan organisasi Nahdlatul Wathan.", 
            fakta: "Selain ulama besar dan pejuang pergerakan kemerdekaan, ia tercatat sebagai Pahlawan Nasional pertama dan satu-satunya yang berasal dari wilayah Nusa Tenggara Barat." 
        },
        { 
            id: 'tjilik', title: "Tjilik Riwut", img: "assets/tjilik.jpg", 
            info: "Asal: Kalimantan Tengah | Lahir: Kasongan, 1918", 
            desc: "Pemuda suku Dayak yang bergabung dalam perjuangan kemerdekaan di Pulau Jawa, dan kelak memimpin operasi penerjunan payung militer pertama TNI ke hutan Kalimantan Timur untuk membuka front gerilya melawan Belanda.", 
            fakta: "Beliau yang kemudian menjadi Gubernur pertama Kalimantan Tengah ini sangat bangga dengan identitas budaya Dayaknya dan sering menulis buku pelestarian budaya asli Kalimantan." 
        },
        { 
            id: 'tombolotutu', title: "Tombolotutu", img: "assets/tombolotutu.webp", 
            info: "Asal: Sulawesi Tengah | Wafat: Moutong, 1901", 
            desc: "Seorang Raja dari Kerajaan Moutong yang dengan keras kepala menentang penandatanganan penyerahan kedaulatan kepada pemerintah Hindia Belanda, serta menolak perintah kerja paksa bagi rakyatnya.", 
            fakta: "Karena kesaktian dan pengaruh perlawanannya yang begitu kuat di pesisir Teluk Tomini, Belanda terpaksa harus mendatangkan Pasukan Elite Marsose hanya untuk bisa meredam pasukannya." 
        },
        { 
            id: 'imambonjol', title: "Tuanku Imam Bonjol", img: "assets/imambonjol.webp", 
            info: "Asal: Sumatera Barat | Wafat: Minahasa, 1864", 
            desc: "Ulama besar (bernama asli Muhammad Shahab) yang memimpin Kaum Padri dalam Perang Padri yang berdarah-darah. Walau awalnya perang saudara, ia kemudian berhasil menyatukan kaum agama dan kaum adat untuk bersama-sama mengusir penjajah Belanda.", 
            fakta: "Selama 16 tahun ia sukses bertahan di dalam Benteng Bukit Tajadi yang tak bisa ditembus meriam Belanda. Wajahnya kini kita kenal di pecahan uang kertas Rp5.000." 
        }
    ]
};

// --- BANK SOAL KUIS (30 Soal Campuran Budaya & Pahlawan) ---
const bankSoal = [
    // SOAL BUDAYA 
    { q: "Provinsi manakah yang dikenal dengan julukan 'Serambi Mekkah'?", opt: ["Sumatera Barat", "Aceh", "Riau", "Banten"], ans: 1, exp: "Aceh dijuluki Serambi Mekkah karena kental dengan nilai syariat Islam dan sejarah kesultanannya." },
    { q: "Tari Kecak dan Tari Pendet adalah kesenian yang berasal dari provinsi...", opt: ["Bali", "Jawa Timur", "Nusa Tenggara Barat", "Papua"], ans: 0, exp: "Tari Kecak dan Pendet adalah tarian ikonik dari Pulau Dewata, Bali." },
    { q: "Rumah adat Rumah Gadang yang memiliki atap melengkung tajam berasal dari provinsi...", opt: ["Sumatera Utara", "Kalimantan Barat", "Sumatera Barat", "Sulawesi Selatan"], ans: 2, exp: "Rumah Gadang adalah rumah adat suku Minangkabau di Sumatera Barat." },
    { q: "Suku Baduy yang sangat menjaga kelestarian alam dan menolak modernisasi hidup di provinsi...", opt: ["Jawa Barat", "DKI Jakarta", "Banten", "Lampung"], ans: 2, exp: "Suku Baduy merupakan masyarakat adat yang tinggal di pedalaman Provinsi Banten." },
    { q: "Dijuluki 'Bumi Rafflesia' karena bunga bangkai terbesar di dunia pertama kali ditemukan di sana. Provinsi apakah ini?", opt: ["Bengkulu", "Jambi", "Sumatera Selatan", "Riau"], ans: 0, exp: "Bengkulu adalah tempat Sir Thomas Stamford Raffles pertama kali menemukan bunga Rafflesia Arnoldii." },
    { q: "Kesenian Reog Ponorogo yang menggunakan topeng singa besar berasal dari...", opt: ["Jawa Tengah", "DI Yogyakarta", "Jawa Barat", "Jawa Timur"], ans: 3, exp: "Reog Ponorogo adalah kesenian tradisional yang sangat energik dari Jawa Timur." },
    { q: "Provinsi yang menjadi habitat asli komodo dan alat musik dawai Sasando adalah...", opt: ["Nusa Tenggara Barat", "Nusa Tenggara Timur", "Maluku", "Papua Barat"], ans: 1, exp: "NTT menyimpan keajaiban Komodo di Pulau Komodo dan alat musik Sasando dari Pulau Rote." },
    { q: "Suku Asmat yang mahir dalam seni ukir kayu bernilai tinggi berasal dari provinsi...", opt: ["Papua Selatan", "Papua Pegunungan", "Maluku Utara", "Papua Barat Daya"], ans: 0, exp: "Suku Asmat yang terkenal dengan ukiran kayunya mendiami wilayah rawa di Papua Selatan." },
    { q: "Pasar Terapung di mana pedagang bertransaksi di atas perahu kelotok dapat ditemukan di...", opt: ["Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur"], ans: 2, exp: "Pasar Terapung Muara Kuin dan Lok Baintan adalah ikon budaya sungai di Kalimantan Selatan (Banjarmasin)." },
    { q: "Pembuat Kapal layar legendaris Phinisi adalah suku Bugis dan Makassar yang berasal dari...", opt: ["Sulawesi Utara", "Sulawesi Selatan", "Sulawesi Tenggara", "Sulawesi Barat"], ans: 1, exp: "Suku Bugis dan Makassar di Sulawesi Selatan dikenal sebagai pelaut ulung pembuat Kapal Phinisi." },
    { q: "Pada abad pertengahan, provinsi ini dikenal dunia sebagai 'Spices Island' atau Kepulauan Rempah. Provinsi manakah itu?", opt: ["Maluku", "Sulawesi Utara", "Nusa Tenggara Timur", "Bangka Belitung"], ans: 0, exp: "Maluku diperebutkan bangsa Eropa karena melimpahnya rempah-rempah seperti cengkeh dan pala." },
    { q: "Akar Bahasa Indonesia berasal dari bahasa Melayu yang kaya akan sastra Gurindam dari provinsi...", opt: ["Sumatera Utara", "Jambi", "Kepulauan Riau", "Bangka Belitung"], ans: 2, exp: "Kepulauan Riau (khususnya Pulau Penyengat) adalah pusat lahirnya tata bahasa Melayu." },
    { q: "Kepingan surga bawah laut dunia, Taman Nasional Wakatobi, terletak di provinsi...", opt: ["Sulawesi Tengah", "Gorontalo", "Sulawesi Selatan", "Sulawesi Tenggara"], ans: 3, exp: "Wakatobi adalah singkatan dari pulau Wangi-wangi, Kaledupa, Tomia, dan Binongko di Sulawesi Tenggara." },
    { q: "Provinsi yang berhadapan dengan Filipina dan terkenal dengan Taman Laut Bunaken adalah...", opt: ["Sulawesi Utara", "Maluku Utara", "Gorontalo", "Kalimantan Utara"], ans: 0, exp: "Sulawesi Utara (Manado) sangat terkenal dengan pesona bawah laut Bunaken." },
    { q: "Filosofi 'Huma Betang' yaitu hidup rukun dalam satu rumah panjang dimiliki oleh masyarakat Dayak di...", opt: ["Kalimantan Utara", "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan"], ans: 2, exp: "Rumah Betang adalah rumah adat suku Dayak di Kalimantan Tengah yang melambangkan kebersamaan." },

    // SOAL PAHLAWAN 
    { q: "Siapakah pahlawan yang menjahit Bendera Pusaka Sang Saka Merah Putih?", opt: ["R.A. Kartini", "Cut Nyak Dien", "Fatmawati", "Dewi Sartika"], ans: 2, exp: "Fatmawati (istri Bung Karno) menjahit bendera merah putih saat sedang hamil tua." },
    { q: "Pahlawan dari Sulawesi Selatan yang dijuluki Belanda 'Ayam Jantan dari Timur' adalah...", opt: ["Sultan Hasanuddin", "Sam Ratulangi", "Pangeran Antasari", "Andi Depu"], ans: 0, exp: "Karena keberaniannya melawan VOC di laut, Sultan Hasanuddin mendapat julukan tersebut." },
    { q: "Pahlawan wanita dari Aceh yang terus memimpin gerilya meski matanya mulai rabun adalah...", opt: ["Cut Meutia", "Cut Nyak Dien", "Malahayati", "Nani Wartabone"], ans: 1, exp: "Cut Nyak Dien terus melawan Belanda di hutan Aceh hingga usianya menua." },
    { q: "Tokoh pahlawan asal Papua yang menggagas nama IRIAN adalah...", opt: ["Silas Papare", "Johannes A. Dimara", "Frans Kaisiepo", "Kapitan Pattimura"], ans: 2, exp: "Frans Kaisiepo menggagas nama IRIAN (Ikut Republik Indonesia Anti Nederland)." },
    { q: "Pencipta semboyan sakti pendidikan 'Tut Wuri Handayani' adalah...", opt: ["Ir. Soekarno", "Ki Hajar Dewantara", "M.H. Thamrin", "Dr. Soetomo"], ans: 1, exp: "Ki Hajar Dewantara, Bapak Pendidikan Nasional kita, pencipta semboyan tersebut." },
    { q: "Pahlawan asal Bali yang memerintahkan perang habis-habisan (Puputan Margarana) adalah...", opt: ["I Gusti Ngurah Rai", "Untung Surapati", "Pangeran Diponegoro", "Sultan Nuku"], ans: 0, exp: "I Gusti Ngurah Rai memilih bertempur sampai mati daripada menyerah pada Belanda." },
    { q: "Siapakah orator ulung yang membakar semangat rakyat Surabaya pada 10 November 1945?", opt: ["Jenderal Sudirman", "Bung Tomo", "Bung Hatta", "Tjilik Riwut"], ans: 1, exp: "Bung Tomo membangkitkan semangat dengan pekik 'Allahu Akbar' dan 'Merdeka atau Mati'." },
    { q: "Pemimpin pemberontakan rakyat Maluku yang berhasil merebut Benteng Duurstede adalah...", opt: ["Kapitan Pattimura", "Sultan Baabullah", "Sultan Nuku", "Martha C. Tiahahu"], ans: 0, exp: "Kapitan Pattimura memimpin penyerangan dan menghancurkan VOC di Saparua." },
    { q: "Pahlawan Banjar yang teguh memegang semboyan 'Haram Manyarah Waja Sampai Kaputing' adalah...", opt: ["Pangeran Antasari", "Tjilik Riwut", "Aji Muhammad Idris", "Sultan Thaha"], ans: 0, exp: "Pangeran Antasari memimpin Perang Banjar dengan semboyan pantang menyerah tersebut." },
    { q: "Pahlawan yang tidak pernah kalah dalam pertempuran laut sehingga dijuluki 'The Lord of Fortune' adalah...", opt: ["Sultan Hasanuddin", "Sultan Nuku", "Raja Haji Fisabilillah", "Sultan Ageng Tirtayasa"], ans: 1, exp: "Sultan Nuku dari Tidore sangat pandai berdiplomasi dan mengatur strategi perang laut." },
    { q: "Pahlawan dari Sulawesi Utara yang mencetuskan filosofi 'Si tou timou tumou tou' adalah...", opt: ["Sam Ratulangi", "Nani Wartabone", "Tombolotutu", "Andi Depu"], ans: 0, exp: "Dr. Sam Ratulangi mencetuskan filosofi yang artinya 'Manusia hidup untuk memanusiakan orang lain'." },
    { q: "Pahlawan ini memproklamasikan kemerdekaan di Gorontalo pada tahun 1942, lebih dulu dari Jakarta. Siapakah dia?", opt: ["Nani Wartabone", "Raja Ali Haji", "Raden Intan II", "Depati Amir"], ans: 0, exp: "Nani Wartabone berhasil menangkap pejabat Belanda di Gorontalo dan mengibarkan Merah Putih di tahun 1942." },
    { q: "Gadis remaja berusia 17 tahun dari Maluku yang terjun langsung ke medan perang bersenjata tombak adalah...", opt: ["Cut Nyak Dien", "Dewi Sartika", "Martha C. Tiahahu", "Fatmawati"], ans: 2, exp: "Martha Christina Tiahahu adalah salah satu pahlawan kemerdekaan termuda di dunia." },
    { q: "Pahlawan dari Jawa Barat yang mendirikan 'Sakola Istri' untuk pendidikan kaum perempuan adalah...", opt: ["R.A. Kartini", "Dewi Sartika", "Cut Nyak Dien", "Nyi Ageng Serang"], ans: 1, exp: "Dewi Sartika mendirikan sekolah perempuan pertama di Hindia Belanda pada tahun 1904." },
    { q: "Raja pendeta tertinggi masyarakat Batak yang selama 30 tahun memimpin perang gerilya adalah...", opt: ["Tuanku Imam Bonjol", "Sisingamangaraja XII", "Teuku Umar", "Raden Intan II"], ans: 1, exp: "Sisingamangaraja XII melawan ekspansi Belanda ke Tanah Batak hingga akhir hayatnya." }
];

let quizData = []; // Variabel penampung yang nanti akan diisi 10 soal acak

let currentQ = 0, score = 0, timeLeft = 15, timerId;

function navTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    if (screenId !== 'quiz-screen') stopTimer();
}

// FUNGSI BUKA MENU
function openCategory(cat) {
    currentCategory = cat;
    
    // Pastikan kotak search kembali kosong saat pindah menu
    let searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = "";
    
    // Ubah judul sesuai menu
    document.getElementById('category-title').innerText = cat === 'budaya' ? 'Jelajah Budaya' : 'Pahlawan Nasional';
    
    // Pindah layar dan render daftar
    navTo('list-screen');
    renderList(); // Ini yang memunculkan daftar!
}

// FUNGSI PENCARIAN (SEARCH BAR)
function filterContent() {
    let input = document.getElementById('search-input');
    if (!input) return; // Mencegah error jika input tidak ditemukan
    
    let filter = input.value.toUpperCase();
    let container = document.getElementById('item-list-container');
    if (!container) return; // Mencegah error jika container tidak ditemukan

    // Ambil SEMUA kartu di dalam container, apa pun nama class-nya
    let cards = container.children; 

    for (let i = 0; i < cards.length; i++) {
        // Cari elemen teks judul di dalam kartu (h2, h3, atau h4)
        let title = cards[i].querySelector("h2, h3, h4"); 
        if (title) {
            let txtValue = title.textContent || title.innerText;
            // Cocokkan huruf
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = ""; // Munculkan
            } else {
                cards[i].style.display = "none"; // Sembunyikan
            }
        }
    }
}

function showDetail(item) {
    document.getElementById('detail-title').innerText = item.title;
    document.getElementById('detail-img').src = item.img;
    const infoText = document.getElementById('detail-info-text');
    const descEl = document.getElementById('detail-desc');
    const moreEl = document.getElementById('detail-more');
    
    if (infoText) infoText.innerHTML = '';
    if (moreEl) moreEl.innerHTML = '';
    
    if (item.fakta) { 
        if (infoText) {
            infoText.innerHTML = `<p style="margin-bottom: 15px; color: #666;">${item.info}</p><h3 style="color:var(--primary); margin-top:10px;">Peran Penting</h3>`;
        }
        descEl.innerText = item.desc;
        if (moreEl) {
            moreEl.innerHTML = `<div class="fakta-box"><h4>Fakta Menarik:</h4><p>${item.fakta}</p></div>`;
        }
    } else {
        descEl.innerText = item.desc;
        if (moreEl) {
            (item.details || []).forEach(d => {
                moreEl.innerHTML += `<div class="info-box"><h3>${d.title}</h3><p>${d.content}</p></div>`;
            });
        }
    }
    navTo('detail-screen');
}

// --- LOGIKA KUIS BARU ---
// 1. FUNGSI INI BERJALAN SAAT KAMU KLIK MENU "KUIS" DI BERANDA
function startQuiz() {
    // Matikan timer untuk berjaga-jaga agar tidak bocor
    stopTimer(); 
    
    // Reset data
    currentQ = 0; 
    score = 0;
    
    // Pindah ke layar kuis
    navTo('quiz-screen');
    
    // PASTIKAN: Hanya layar intro yang tampil, layar soal disembunyikan total
    document.getElementById('quiz-start-view').style.display = 'flex';
    document.getElementById('quiz-question-view').style.display = 'none';
    document.getElementById('quiz-feedback-view').style.display = 'none';
}

// 2. FUNGSI INI BERJALAN SAAT KAMU KLIK TOMBOL "MULAI KUIS SEKARANG"
function beginActualQuiz() {
    // Acak (Shuffle) bankSoal dan ambil 10 soal
    let shuffledSoal = [...bankSoal].sort(() => 0.5 - Math.random());
    quizData = shuffledSoal.slice(0, 10);

    // Tukar layar: Tutup intro, buka layar pertanyaan
    document.getElementById('quiz-start-view').style.display = 'none';
    document.getElementById('quiz-question-view').style.display = 'block';
    
    // Panggil soal pertama dan mulai timer HANYA DI SINI
    showQuestion();
}

function showQuestion() {
    stopTimer();
    timeLeft = 15;
    document.getElementById('quiz-timer').innerText = timeLeft;
    const q = quizData[currentQ];
    document.getElementById('quiz-progress').innerText = `Soal ${currentQ + 1} / ${quizData.length}`;
    document.getElementById('question-text').innerText = q.q;
    const optContainer = document.getElementById('options-container');
    optContainer.innerHTML = '';
    q.opt.forEach((o, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerText = o;
        btn.onclick = () => checkAns(i);
        optContainer.appendChild(btn);
    });
    timerId = setInterval(() => {
        timeLeft--; document.getElementById('quiz-timer').innerText = timeLeft;
        if (timeLeft <= 0) { stopTimer(); checkAns(-1); }
    }, 1000);
}

function checkAns(idx) {
    stopTimer();
    const q = quizData[currentQ];
    const statusEl = document.getElementById('feedback-status');
    const expEl = document.getElementById('feedback-explanation');
    
    document.getElementById('quiz-question-view').style.display = 'none';
    document.getElementById('quiz-feedback-view').style.display = 'flex';

    if (idx === q.ans) {
        score += 10;
        statusEl.innerText = "JAWABAN BENAR! 🎉";
        statusEl.className = "correct";
    } else {
        statusEl.innerText = "JAWABAN SALAH ❌";
        statusEl.className = "wrong";
    }
    // Tampilkan penjelasan kuis
    expEl.innerText = q.exp;
}

function nextQuestion() {
    currentQ++;
    if (currentQ < quizData.length) {
        document.getElementById('quiz-feedback-view').style.display = 'none';
        document.getElementById('quiz-question-view').style.display = 'block';
        showQuestion();
    } else {
        showResult();
    }
}

function stopTimer() { clearInterval(timerId); }

function showResult() {
    document.getElementById('quiz-feedback-view').style.display = 'none';
    document.getElementById('final-score').innerText = score;
    const msg = document.getElementById('result-message');
    if (score === 100) { msg.innerText = "LUAR BIASA! Kamu Sempurna! 🎆"; launchConfetti(); }
    else if (score >= 70) msg.innerText = "Bagus Sekali! Pertahankan prestasimu!";
    else msg.innerText = "Ayo belajar lagi agar lebih paham!";
    navTo('result-screen');
}

function launchConfetti() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

// --- 1. RENDER LIST (DIKUNCI PERSIS SEPERTI GAMBAR PERTAMA) ---
function renderList() {
    const container = document.getElementById('item-list-container');
    if (!container) return;
    
    container.innerHTML = ''; 
    
    // Paksa susunan menjadi 2 kolom rapi
    container.style.display = 'grid';
    container.style.gridTemplateColumns = '1fr 1fr';
    container.style.gap = '15px';
    container.style.padding = '5px';

    const data = dataApp[currentCategory]; 
    if (!data) return;

    data.forEach(item => {
        const card = document.createElement('div');
        card.onclick = () => showDetail(item);
        
        // PAKSA DESAIN KOTAK PUTIH (Tidak bergantung pada CSS lagi)
        card.style.backgroundColor = '#ffffff';
        card.style.borderRadius = '15px';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
        card.style.overflow = 'hidden';
        card.style.cursor = 'pointer';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';

        // PAKSA UKURAN GAMBAR & WARNA TEKS (#900500 / Merah Marun)
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://placehold.co/300x200?text=Foto'" 
                 style="width: 100%; height: 120px; object-fit: cover;">
            <h3 style="color: #900500; font-size: 14px; text-align: center; margin: 0; padding: 15px 10px; font-weight: bold;">
                ${item.title}
            </h3>
        `;
        
        container.appendChild(card);
    });
}

// --- 2. FUNGSI PENCARIAN (SEARCH BAR) ---
function filterContent() {
    const input = document.getElementById('search-input');
    if (!input) return;

    const filter = input.value.toLowerCase();
    const container = document.getElementById('item-list-container');
    
    // Ambil semua kotak di dalam container
    const cards = container.children; 

    for (let i = 0; i < cards.length; i++) {
        const titleElement = cards[i].querySelector('h3'); 
        if (titleElement) {
            const textValue = titleElement.textContent || titleElement.innerText;
            
            // Cocokkan teks
            if (textValue.toLowerCase().includes(filter)) {
                cards[i].style.display = "flex"; // Tetap tampilkan kotaknya
            } else {
                cards[i].style.display = "none"; // Sembunyikan jika tidak cocok
            }
        }
    }
}
