
const input = "( / ( + 8 ( * 3 4 ) ) ( - ( * 2 4 ) 8 ) )";
console.log("jadi " + input
    .replaceAll("(", "plis buka")
    .replaceAll(")", "plis tutup")
    .replaceAll("*", "plis kali")
    .replaceAll("/", "plis bagi")
    .replaceAll("+", "plis tambah")
    .replaceAll("-", "plis kurang")
)
