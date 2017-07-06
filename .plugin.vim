"if empty(glob('~/.config/nvim/autoload/plug.vim'))
"  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
"	  \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
"  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
"endif


" Specify a directory for plugins
" - For Neovim: 
" - Avoid using standard Vim directory names like 'plugin'
" call plug#begin('~/.vim/plugged')
call plug#begin('~/.config/nvim/plugged')

Plug 'scrooloose/nerdtree'
Plug 'jistr/vim-nerdtree-tabs'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'valloric/youcompleteme'
Plug 'tpope/vim-surround'

" Python
Plug 'klen/python-mode'
Plug 'davidhalter/jedi-vim'
Plug 'vheon/jedihttp'
Plug 'nvie/vim-flake8'

" Linter
Plug 'w0rp/ale'


" Initialize plugin system
call plug#end()


""""""""""""""""""""""""""""""""""""
" Vim Plug Shortcuts
""""""""""""""""""""""""""""""""""""

map <leader>i :PlugInstall<CR>
map <leader>c :PlugClean<CR>

""""""""""""""""""""""""""""""""""""
" NERDTree
""""""""""""""""""""""""""""""""""""

" Close NERDTree when it's the only window left open
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

map <C-n> :NERDTreeTabsToggle<CR>

""""""""""""""""""""""""""""""""""""
" CtrlP
""""""""""""""""""""""""""""""""""""
set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux


let g:ctrlp_user_command = ['.git', 'cd %s && git ls-files -co --exclude-standard'] " Ignore files in .gitignore
let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
let g:ctrlp_custom_ignore = {
\ 'dir':  '\v[\/]\.(git|hg|svn)$',
\ 'file': '\v\.(exe|so|dll)$',
\ 'link': 'some_bad_symbolic_links',
\ }

""""""""""""""""""""""""""""""""""""
" Jedi-VIM 
""""""""""""""""""""""""""""""""""""
let g:jedi#show_call_signatures = "1"
"let g:ycm_server_python_interpreter = 'python2'

""""""""""""""""""""""""""""""""""""
" Python-Mode
""""""""""""""""""""""""""""""""""""
let g:pymode_python = 'python3'

""""""""""""""""""""""""""""""""""""
" Neomake
""""""""""""""""""""""""""""""""""""
