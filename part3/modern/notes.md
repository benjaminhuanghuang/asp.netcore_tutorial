# Part 3  Webpack

http://opensourcedotnetter.blogspot.com/2016/07/building-web-application-usinpm install webpack@ng-aspnet_6.html
https://www.youtube.com/watch?v=KTvUAgUmCnE&t=23s
https://github.com/rajajhansi/aspnetcore-aurelia-tutorial

## Install webpack locally
    $ npm install webpack --save-dev

## bundle all js into one js
    $ webpack ./wwwroot/app/main.js ./wwwroot/app/bundle.js

## Use awesome-typescript-loader to translate ts files. No need run tsc any more.
    $ npm install awesome-typescript-loader --save-dev
    create config file