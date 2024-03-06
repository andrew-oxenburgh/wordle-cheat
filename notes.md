# dir's to ignore

node_modules, dist, .config, .github, .upm, public

/* eslint-disable-next-line */

to verbose eslint, prefix with DEBUG=eslint:cli-engine 

/* eslint @typescript-eslint/no-unsafe-member-access: "off" */

# deploy to firebase

make sure clean repo

lints good
 - `npm run lint`

storybook builds and deploys to public
 - `npm run storybook:build`

app builds correctly
 - `npm run build`

incr build number
 - `npm version patch`

rebuild with new version number
 - `npm run build`

push repo
 - `git push`

deploy to firebase
 - `firebase emulators:start --only hosting,functions`


## March 1, 2024

installed react-grid-dnd with --legacy-peer-deps