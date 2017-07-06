" Specify a directory for plugins
" - For Neovim: 
" - Avoid using standard Vim directory names like 'plugin'
" call plug#begin('~/.vim/plugged')
call plug#begin('~/.local/share/nvim/plugged')

Plug 'scrooloose/nerdtree'
Plug 'jistr/vim-nerdtree-tabs'


" Initialize plugin system
call plug#end()

""""""""""""""""""""""""""""""""""""
" NERDTree
""""""""""""""""""""""""""""""""""""

" Close NERDTree when it's the only window left open
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

"map <Leader>n <plug>NERDTreeTabsToggle<CR>
"map <C-n> :NERDTreeToggle<CR>

map <C-n> :NERDTreeTabsToggle<CR>
