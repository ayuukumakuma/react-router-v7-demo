default:
  just --list

# install a new component
[group("shadcn")]
add-component component-name='':
  pnpm dlx shadcn@latest add {{component-name}}

alias ac := add-component

# start the development server
[group("pnpm")]
dev:
  pnpm run dev

# run a script
[group("pnpm")]
script script-name:
  pnpm run {{script-name}}

alias d := dev
alias s := script
