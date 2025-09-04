// 示範選秀池資料
const DRAFT_POOL = [
    {
        id: "player1",
        name: "瀨戶環奈",
        image: "https://i.meee.com.tw/FIm5iku.jpg",
        instagram: "https://www.instagram.com/setokanna_/"
    },
    {
        id: "player2",
        name: "村上悠華",
        image: "https://i.meee.com.tw/AiDkM8J.jpg",
        instagram: "https://www.instagram.com/murakami_yuka_/"
    },
    {
        id: "player3",
        name: "神宮寺奈緒",
        image: "https://i.meee.com.tw/4PhBRsS.jpg",
        instagram: "https://www.instagram.com/jinguji_nao/"
    },
    {
        id: "player4",
        name: "河北彩伽",
        image: "https://i.meee.com.tw/m1s5FUu.jpg",
        instagram: "https://www.instagram.com/saika_kawakita__official/"
    },
    {
        id: "player5",
        name: "青空光",
        image: "https://i.meee.com.tw/pnIXZRt.jpg",
        instagram: "https://www.instagram.com/aozora_cmore/"
    },
    {
        id: "player6",
        name: "西宮夢",
        image: "https://i.meee.com.tw/0DR3Yba.jpg",
        instagram: "https://www.instagram.com/nishimiya_yume/"
    },
    {
        id: "player7",
        name: "miru",
        image: "https://i.meee.com.tw/kdACMPc.jpg",
        instagram: "https://www.instagram.com/mirugram_55/"
    },
    {
        id: "player8",
        name: "櫻空桃",
        image: "https://i.meee.com.tw/EhtUY3H.jpg",
        instagram: "https://www.instagram.com/sakumomo1203/"
    },
    {
        id: "player9",
        name: "七瀨愛麗絲",
        image: "https://i.meee.com.tw/WvjhVdW.jpg",
        instagram: "https://www.instagram.com/nanase_alice_all/"
    },
    {
        id: "player10",
        name: "涼森玲夢",
        image: "https://i.meee.com.tw/Rtnk2cl.jpg",
        instagram: "https://www.instagram.com/remu19971203/"
    },
    {
        id: "player11",
        name: "七澤米亞",
        image: "https://i.meee.com.tw/KciX689.jpg",
        instagram: "https://www.instagram.com/miananasawa_official/"
    },
    {
        id: "player12",
        name: "石川澪",
        image: "https://i.meee.com.tw/nkOPGbO.jpg",
        instagram: "https://www.instagram.com/ishikawa._.mio/"
    },
    {
        id: "player13",
        name: "明里紬",
        image: "https://i.meee.com.tw/baD6ecI.jpg",
        instagram: "https://www.instagram.com/akari.tsumugi/"
    },
    {
        id: "player14",
        name: "神木麗",
        image: "https://i.meee.com.tw/8nkle7L.jpg",
        instagram: "https://www.instagram.com/rei.kamiki/"
    },
    {
        id: "player15",
        name: "本庄鈴",
        image: "https://i.meee.com.tw/wNssJ48.jpg",
        instagram: "https://www.instagram.com/honjo_suzu/"
    },
    {
        id: "player16",
        name: "美園和花",
        image: "https://i.meee.com.tw/h9lRbif.jpg",
        instagram: "https://www.instagram.com/misono_waka/"
    },
    {
        id: "player17",
        name: "金松季步",
        image: "https://i.meee.com.tw/IVtJOez.jpg",
        instagram: "https://www.instagram.com/kiho_kanematsu/"
    },
    {
        id: "player18",
        name: "紗倉真菜",
        image: "https://i.meee.com.tw/tCzojSE.jpg",
        instagram: "https://www.instagram.com/sakuramanateee/"
    },
    {
        id: "player19",
        name: "小宵虎南",
        image: "https://i.meee.com.tw/oKzjWIm.jpg",
        instagram: "https://www.instagram.com/konankoyoiiii/"
    },
    {
        id: "player20",
        name: "新有菜",
        image: "https://i.meee.com.tw/uQp3oml.jpg",
        instagram: "https://www.instagram.com/arina_arata2/"
    },
    {
        id: "player21",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player22",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player23",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player24",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player25",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player26",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player27",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player28",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player29",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player30",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player31",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player32",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player33",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player34",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player35",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player36",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player37",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player38",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player39",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player40",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player41",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player42",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player43",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player44",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player45",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player46",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player47",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player48",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player49",
        name: "",
        image: "",
        instagram: ""
    },
    {
        id: "player50",
        name: "",
        image: "",
        instagram: ""
    },
];

// 獲取選秀池資料
function getDraftPool() {
    return DRAFT_POOL.map(player => ({
        ...player,
        isSelected: false,
        selectedBy: null,
        selectedRound: null
    }));
}