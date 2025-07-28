const alphabet = {
        a: [" AAA ",
            "A   A",
            "A   A",
            "AAAAA",
            "A   A",
            "A   A",
            "A   A"],

        b: ["BBBB ",
            "B   B",
            "B   B",
            "BBBB ",
            "B   B",
            "B   B",
            "BBBB "],

        c: [" CCC ",
            "C   C",
            "C    ",
            "C    ",
            "C    ",
            "C   C",
            " CCC "],

        d: ["DDDD ",
            "D   D",
            "D   D",
            "D   D",
            "D   D",
            "D   D",
            "DDDD "],

        e: ["EEEEE",
            "E    ",
            "E    ",
            "EEEE ",
            "E    ",
            "E    ",
            "EEEEE"],

        f: ["FFFFF",
            "F    ",
            "F    ",
            "FFFF ",
            "F    ",
            "F    ",
            "F    "],

        g: [" GGG ",
            "G   G",
            "G    ",
            "G    ",
            "G  GG",
            "G   G",
            " GGG "],

        h: ["H   H",
            "H   H",
            "H   H",
            "HHHHH",
            "H   H",
            "H   H",
            "H   H"],

        i: ["III",
            " I ",
            " I ",
            " I ",
            " I ",
            " I ",
            "III"],

        j: ["  JJJ",
            "   J ",
            "   J ",
            "   J ",
            "   J ",
            "J  J ",
            " JJ  "],

        k: ["K   K",
            "K  K ",
            "K K  ",
            "KK   ",
            "K K  ",
            "K  K ",
            "K   K"],
        
        l: ["L    ",
            "L    ",
            "L    ",
            "L    ",
            "L    ",
            "L    ",
            "LLLLL"],

        m: ["M   M",
            "MM MM",
            "M M M",
            "M M M",
            "M   M",
            "M   M",
            "M   M"],

        n: ["N   N",
            "N   N",
            "NN  N",
            "N N N",
            "N  NN",
            "N   N",
            "N   N"],

        o: [" OOO ",
            "O   O",
            "O   O",
            "O   O",
            "O   O",
            "O   O",
            " OOO "],
        
        p: ["PPPP ",
            "P   P",
            "P   P",
            "PPPP ",
            "P    ",
            "P    ",
            "P    "],

        q: [" QQQ ",
            "Q   Q",
            "Q   Q",
            "Q   Q",
            "Q Q Q",
            "Q  Q ",
            " QQ Q"],

        r: ["RRRR ",
            "R   R",
            "R   R",
            "RRRR ",
            "R R  ",
            "R  R ",
            "R   R"],

        s: [" SSSS",
            "S    ",
            "S    ",
            " SSS ",
            "    S",
            "    S",
            "SSSS "],
        
        t: ["TTTTT",
            "  T  ",
            "  T  ",
            "  T  ",
            "  T  ",
            "  T  ",
            "  T  "],

        u: ["U   U",
            "U   U",
            "U   U",
            "U   U",
            "U   U",
            "U   U",
            " UUU "],

        v: ["V   V",
            "V   V",
            "V   V",
            "V   V",
            " V V ",
            " V V ",
            "  V  "],

        w: ["W   W",
            "W   W",
            "W   W",
            "W W W",
            "W W W",
            "W W W",
            " W W "],

        x: ["X   X",
            "X   X",
            " X X ",
            "  X  ",
            " X X ",
            "X   X",
            "X   X"],

        y: ["Y   Y",
            "Y   Y",
            " Y Y ",
            "  Y  ",
            "  Y  ",
            "  Y  ",
            "  Y  "],

        z: ["ZZZZZ",
            "    Z",
            "   Z ",
            "  Z  ",
            " Z   ",
            "Z    ",
            "ZZZZZ"],

        "!": ["!",
            "!",
            "!",
            "!",
            "!",
            " ",
            "!"],
        
        "?": [" ?? ",
              "?  ?",
              "   ?",
              "  ? ",
              " ?  ",
              "    ",
              " ?  "],
        
        ".": [" ",
              " ",
              " ",
              " ",
              " ",
              " ",
              "."],
        
        ",": [" ",
              " ",
              " ",
              " ",
              " ",
              ",",
              ","],
        
        " ": [" ",
              " ",
              " ",
              " ",
              " ",
              " ",
              " "]
    };

const userInput = document.querySelector(".user-input");
const bigifyButton = document.querySelector(".bigify-button");
const resultTextarea = document.querySelector(".result-textarea");
const copyButton = document.querySelector(".copy-button");
const copiedMessage = document.querySelector(".copied-message");

bigifyButton.onclick = () => {
    const input = userInput.value.toLowerCase();
    let result = "";
    for (let i = 0; i < 7; i++) {
        for (let j of input) {
            try {
                result += (alphabet[`${j}`][i] + " ");
            } catch(err) {
                continue;
            }
        }
        result += "\n";
    }
    resultTextarea.value = result;
};

copyButton.onclick = () => {
    navigator.clipboard.writeText(resultTextarea.value);
    copiedMessage.classList.add("visible");
    setTimeout(() => {
        copiedMessage.classList.remove("visible");
    }, 500)
};