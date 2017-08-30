#!/bin/sh

cd docs
echo "www.debbieditton.com" >> CNAME
git init
git remote add origin git@github.com:debbiedittonvoice/debbiedittonvoice.github.io.git
git add .
git commit -m 'deploy'
git push -u origin master --force