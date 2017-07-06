set nocompatible        " don't use old settings that vi used.  
						" Use the newer features that vim offers

" Line Number
set number
set rnu
"set cursorline          " highlight current line

" Syntax
syntax enable

" Tab & Spaces
set tabstop=4           " number of visual spaces per TAB
set softtabstop=4       " number of spaces in tab when editing
set expandtab           " tabs are spaces
set smarttab 		    " pressing backspace on a blank indented line 
						" will delete the amount of spaces equal to 
						" shiftwidth

" Search
set incsearch           " search as characters are entered
set hlsearch            " highlight matches

" Folds
set foldenable          " enable folding
set foldlevelstart=10   " open most folds by default
set foldmethod=indent   " fold based on indent level

" Leader
let mapleader = "\<Space>"


" jk is escape
inoremap jk <esc>

" edit vimrc/zshrc and load vimrc bindings
nnoremap <leader>ev :vsp $MYVIMRC<CR>
nnoremap <leader>eb :vsp $VIMBASIC<CR>
nnoremap <leader>ep :vsp $VIMPLUGIN<CR>
nnoremap <leader>ez :vsp ~/.zshrc<CR>
nnoremap <leader>sv :source $MYVIMRC<CR>

set backspace=2       	" make backspace able to go over end of lines
set laststatus=2    	" always show the status line
set t_Co=256        	" set colors to 256
set mousehide       	" hide mouse cursor while typing
set showmode        	" display the current mode

set showcmd             " show command in bottom bar

filetype indent on      " load filetype-specific indent files
set wildmenu            " visual autocomplete for command menu
set lazyredraw          " redraw only when we need to.
set showmatch           " highlight matching [{()}]

" Clipboard
set paste
set pastetoggle=<F2>
set mouse=a
set clipboard=unnamed   " Register clipboard to share copy and paste with system's clipboard

" Tab Control
nnoremap tt  :tabnew<CR>
nnoremap tl  :tabnext<CR>
nnoremap th  :tabprev<CR>
nnoremap tc  :tabclose<CR>

