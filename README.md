# ct-antlr

Will convert grammar from `JakselLISP.g4` file to a subset of Scheme LISP. Jaksel LISP is a reduced LISP that only does arithmetic (`+`, `-`, `*`, `/`). Originally created for COMP6062001 Compilation Techniques (2023).

Also take a look at the [interactive compiler](https://jaksel-lisp.demo.sanii.my.id).

Examples: 
> `jadi plis buka plis tambah plis buka plis kurang 70 69 plis tutup 1337 plis tutup`
>
> `(+ (- 70 69) 1337)`

> `jadi plis buka plis tambah 5 plis buka plis kurang plis buka plis kali 2 7 plis tutup 7 plis tutup 1 plis tutup`

> `jadi plis buka plis bagi plis buka plis tambah 8 plis buka plis kali 3 4 plis tutup plis tutup plis buka plis kurang plis buka plis kali 2 4 plis tutup 8 plis tutup plis tutup`

## How to install

### Requirements

- Node v18
- Basic terminal knowledge
- A functional brain.

### Steps

1. Figure it out yourself