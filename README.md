
# Webpack + Babel

- ES6 환경 구축

  

## Description

- IE를 포함한 구형 브라우저 등 ES6모듈을 지원하지 않음

- 기타 여러가지 이슈가 존재

  

## Babel Version

- @babel/cli: 7.11.6

- @babel/core: 7.11.6

- @babel/plugin-proposal-class-properties: 7.10.4

- @babel/preset-env: 7.11.5

- babel-loader: 8.1.0

  

## Webpack Version

- webpack: 4.44.2

- webpack-cli: 3.3.12

  

## What is Babel?

- ES6+버전의 자바스크립트를 ES5이하의 코드로 변환시켜주는 도구

>- Babel을 사용하기 위해선 @babel/preset-env를 설치해야함
>- 필요한 플러그인들을 프로젝트 지원 환경에 맞춰서 동적으로 결정해줌
>- preset : 목적에 맞게 여러가지 플러그인을 세트로 모아놓은 것

- .babelrc에 프리셋 등록 필수

- npm에 build 명령어 추가
>- -w: 타깃 폴더에 있는 모든 파일들이 변경을 자동으로 감지하여 트랜스 파일링(--watch 축약)
>- -d: 트랜스파일링된 결과물이 저장될 폴더를 지정(--out-dir 축약)
- Promise, Array.from 등 ES5로 트랜스파일링 해도 당장 해결 불가능한 코드는 babel/polyfill모듈을 설치한 뒤, 앞서 나온 기능을 사용하려는 파일 맨 첫줄에  **import  "@babel/polyfill"**를 추가
- 기타 필요한 플러그인은 Babel홈페이지에서 검색
  
  ## What is Webpack?

- 의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러
- Webpack이 모듈을 번들링할때 Babel을 사용하여 ES6+코드를 ES5코드로 트랜스파일링 하도록 babel-loader 설치
- webpack.config.js파일을 생성하여 설정 필수
>- entry : 의존성 그래프의 최상단에 위치한 파일
>- output : 컴파일 + 번들링 된 js파일이 위치할 경로와 이름 지정
>- module : 모듈들의 유형(js, css, html ...)에 따라 어떻게 처리할지 결정
- Promise, Array.from 등 ES5로 트랜스파일링 해도 당장 해결 불가능한 코드는 babel/polyfill모듈을 설치한 뒤, webpack.config.js파일의 entry속성 안에 **entry: ["@babel/polyfill", ...]** 를 추가