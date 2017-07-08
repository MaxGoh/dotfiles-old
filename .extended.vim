""""""""""""""""""""""""""""""""
" Python
""""""""""""""""""""""""""""""""

augroup python
   autocmd FileType python setl sw=4 sts=4 et
augroup end


""""""""""""""""""""""""""""""""
" HTML
""""""""""""""""""""""""""""""""

augroup html
   autocmd FileType html setl sw=2 sts=2 et
augroup end

autocmd FileType yaml setlocal

au BufRead,BufNewFile *.scss set filetype=scss.css
au BufRead,BufNewFile jquery.*.js set ft=javascript syntax=jquery

