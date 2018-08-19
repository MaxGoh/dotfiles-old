# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=/Users/maxgoh/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git wd sudo vi-mode mercurial zsh-iterm-touchbar)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
    export editor=/usr/local/bin/nvim
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias vim="nvim"
alias et="nvim ~/.tmux.conf"
alias dbmax="mysql -u maxgoh -p max -h max-ai.cwnnahoekdn0.ap-southeast-1.rds.amazonaws.com"
alias gitk='"$(brew --prefix tcl-tk)/bin/wish" "$(which gitk)"'
#alias eb="nvim ~/.basic.vim"
alias ep="nvim ~/.plugin.vim"
alias ez="nvim ~/.zshrc"
alias et="nvim ~/.tmux.conf"
alias slack="cd ~/github/terminal-slack && node main.js"
alias c="clear"

alias ga="git add"
alias gaa="git add ."
alias gd="git diff"
alias gc="git commit"
alias gp="git push"
alias gs="git status"

PROMPT='${ret_status}%{$fg_bold[green]%}%p %{$fg[cyan]%}%c %{$fg_bold[blue]%}$(git_prompt_info)$(hg_prompt_info)%{$fg_bold[blue]%} % %{$reset_color%}'
ZSH_THEME_HG_PROMPT_PREFIX="%{$fg_bold[magenta]%}hg:(%{$fg[red]%}"
ZSH_THEME_HG_PROMPT_SUFFIX="%{$reset_color%}"
ZSH_THEME_HG_PROMPT_DIRTY="%{$fg[magenta]%}) %{$fg[yellow]%}✗%{$reset_color%}"
ZSH_THEME_HG_PROMPT_CLEAN="%{$fg[magenta]%})"

GIT_UNCOMMITTED="+"
GIT_UNSTAGED="!"
GIT_UNTRACKED="?"
GIT_STASHED="$"
GIT_UNPULLED="⇣"
GIT_UNPUSHED="⇡"

YARN_ENABLED=true


export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3
export SLACK_TOKEN="xoxp-167473182278-362962674611-374549069538-aa7fee62303ae745e72935985375be6f"

# load virtualenvwrapper for python (after custom PATHs)
venvwrap="virtualenvwrapper.sh"
/usr/bin/which -s $venvwrap
if [ $? -eq 0 ]; then
    venvwrap=`/usr/bin/which $venvwrap`
    source $venvwrap
fi

export PATH="$HOME/.yarn/bin:$PATH"
