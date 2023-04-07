npm run build
node ./build/increase-version.js
git commit -m "$@" -a
git push
npm publish