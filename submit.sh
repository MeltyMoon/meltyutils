node ./build/make-dist.cjs
npm run build
node ./build/increase-version.cjs
git commit -m "$@" -a
git push
npm publish