# Introduction

SNS 아이디로 게시물 목록을 보여줍니다.

# NPM Scripts

|script|desc.|
|---|---|
|`docker:build`|클라이언트를 빌드하여 도커이미지를 만듭니다. 이미지 태그는 `omni-stagram` 입니다.|
|`docker:start`|**클라이언트만** 도커로 시작합니다. 바인딩되는 포트는 `3000`입니다.|
|`docker:server:build`|서버를 빌드하여 도커이미지를 만듭니다. 이미지 태그는 `instagram-proxy-api` 입니다.|
|`docker:server:start`|**서버만** 도커로 시작합니다. 바인딩되는 포트는 `5000`입니다.|

# 서버와 클라이언트

편의상 서버 프로젝트도 여기에 둡니다. `server` 폴더에 서버 프로젝트를 위치합니다.

# 실행 방법

## 클라이언트 실행

`npm start`을 통해 개발 모드로 시작합니다.

## 서버 실행

Docker로 시작하는 것을 추천합니다.
`npm run docker:up`로 시작합니다.

Port는 `5000`번에 바인딩 됩니다.

# 서버 Spec.

[server/README.md](./server/README.md)를 참조하세요.
