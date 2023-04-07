node ./build/make-dist.cjs
node ./build/increase-version.cjs
npm run build
git commit -m "$@" -a
git push
npm publish