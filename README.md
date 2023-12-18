# ct-antlr

Will convert grammar from `JakselLISP.g4` file to LISP. JakselLISP is a reduced LISP that only does arithmetic.

Input examples: 
> `jadi plis buka plis tambah plis buka plis kurang 70 69 plis tutup 1337 plis tutup`

> `jadi plis buka plis tambah 5 plis buka plis kurang plis buka plis kali 2 7 plis tutup 7 plis tutup 1 plis tutup`

> `jadi plis buka plis bagi plis buka plis tambah 8 plis buka plis kali 3 4 plis tutup plis tutup plis buka plis kurang plis buka plis kali 2 4 plis tutup 8 plis tutup plis tutup`

Example output:
> `( + ( - 70 69 ) 1337 )`

## How to install

### Requirements

- Node v18
- Basic terminal knowledge
- A functional brain.

### Steps

1. Figure it out yourself