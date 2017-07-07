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
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'ervandew/supertab'
Plug 'ryanoasis/vim-devicons'
Plug 'flazz/vim-colorschemes'
Plug 'majutsushi/tagbar'
Plug 'mattn/emmet-vim'
Plug 'mileszs/ack.vim'           " Read up
Plug 'raimondi/delimitmate'
Plug 'rking/ag.vim'              " Read up
Plug 'tpope/vim-sensible'
Plug 'octref/rootignore'
Plug 'junegunn/vim-easy-align'   " Read up
Plug 'roxma/vim-paste-easy'      " Might not need this
Plug 'vim-scripts/a.vim'         " Seems to be for C


" TMUX
Plug 'christoomey/vim-tmux-navigator'
Plug 'benmills/vimux'
Plug 'xuyuanp/nerdtree-git-plugin'
 
" Git
Plug 'tpope/vim-fugitive'
Plug 'xuyuanp/nerdtree-git-plugin'
Plug 'airblade/vim-gitgutter'
Plug 'gregsexton/gitv'

" Snippets
Plug 'honza/vim-snippets'
Plug 'SirVer/ultisnips'

" Indent
Plug 'nathanaelkane/vim-indent-guides'


" Python
Plug 'klen/python-mode'
Plug 'davidhalter/jedi-vim'
Plug 'vheon/jedihttp'
Plug 'nvie/vim-flake8'
Plug 'tmhedberg/simpylfold'
Plug 'jmcantrell/vim-virtualenv'

" Javascript
Plug 'marijnh/tern_for_vim'

" Linter
Plug 'w0rp/ale'

" Syntax
Plug 'elzr/vim-json'

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

let g:NERDTreeIndicatorMapCustom = {
    \ "Modified"  : "✹",
    \ "Staged"    : "✚",
    \ "Untracked" : "✭",
    \ "Renamed"   : "➜",
    \ "Unmerged"  : "═",
    \ "Deleted"   : "✖",
    \ "Dirty"     : "✗",
    \ "Clean"     : "✔︎",
    \ 'Ignored'   : '☒',
    \ "Unknown"   : "?"
    \ }

""""""""""""""""""""""""""""""""""""
" Airline
""""""""""""""""""""""""""""""""""""
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ' '
let g:airline#extensions#tabline#left_alt_sep = '|'
let g:airline_powerline_fonts = 1
let g:airline_theme = 'minimalist'

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
" Indent Guide
""""""""""""""""""""""""""""""""""""
"let g:indent_guides_enable_on_vim_startup = 1


""""""""""""""""""""""""""""""""""""
" Autocompletion / Snippets
""""""""""""""""""""""""""""""""""""
" make YCM compatible with UltiSnips (using supertab)
let g:ycm_key_list_select_completion = ['<C-n>', '<Down>']
let g:ycm_key_list_previous_completion = ['<C-p>', '<Up>']
let g:SuperTabDefaultCompletionType = '<C-n>'

" better key bindings for UltiSnipsExpandTrigger
let g:UltiSnipsExpandTrigger = "<tab>"
let g:UltiSnipsJumpForwardTrigger = "<tab>"
let g:UltiSnipsJumpBackwardTrigger = "<s-tab>"


""""""""""""""""""""""""""""""""""""
" Vim Fugitive
""""""""""""""""""""""""""""""""""""
autocmd QuickFixCmdPost *grep* cwindow

colorscheme blacksea
set background=dark

""""""""""""""""""""""""""""""""""""
" GitGutter 
""""""""""""""""""""""""""""""""""""

let g:gitgutter_sign_column_always =  1
let g:gitgutter_realtime = 0
let g:gitgutter_eager = 0

let g:gitgutter_sign_added = 'xx'
let g:gitgutter_sign_modified = 'yy'
let g:gitgutter_sign_removed = 'zz'
let g:gitgutter_sign_removed_first_line = '^^'
let g:gitgutter_sign_modified_removed = 'ww'

""""""""""""""""""""""""""""""""""""
" TagBar
""""""""""""""""""""""""""""""""""""
nmap <C-c> :TagbarToggle<CR>


""""""""""""""""""""""""""""""""""""
" Emmet
""""""""""""""""""""""""""""""""""""
let g:user_emmet_install_global = 0
autocmd FileType html,css,ts,js,jsx EmmetInstall


" Start interactive EasyAlign in visual mode (e.g. vipga)
xmap ga <Plug>(EasyAlign)

" Start interactive EasyAlign for a motion/text object (e.g. gaip)
nmap ga <Plug>(EasyAlign)


""""""""""""""""""""""""""""""""""""
" Gitv
""""""""""""""""""""""""""""""""""""
nmap <leader>gv :Gitv<CR>

""""""""""""""""""""""""""""""""""""
" SimpylFold
""""""""""""""""""""""""""""""""""""
let g:SimpylFold_docstring_preview = 1     " Preview Docstring
