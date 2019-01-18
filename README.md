# Introduction

SNS 아이디로 게시물 목록을 보여줍니다.

# NPM Scripts

|script|desc.|
|---|---|
|`start`|**클라이언트만** 개발모드로 시작합니다. **도커를 사용하지 않습니다.**|
|`server:dev`|**서버만** 개발모드로 시작합니다. **도커를 사용하지 않습니다.**|
|`server:start`|**서버만** 시작합니다. **도커를 사용하지 않습니다.**|
|`docker:build`|클라이언트를 빌드하여 도커이미지를 만듭니다. 이미지 태그는 `omni-stagram` 입니다.|
|`docker:start`|**클라이언트만** 도커로 시작합니다.|
|`docker:server:build`|서버를 빌드하여 도커이미지를 만듭니다. 이미지 태그는 `instagram-proxy-api` 입니다.|
|`docker:server:start`|**서버만** 도커로 시작합니다.|
|`docker:up`|docker-compose로 서버와 클라이언트 모두 개발 모드로 실행합니다. 소스코드 수정 시 앱이 재시작 됩니다.|
|`docker:down`|docker-compose로 실행된 서버와 클라이언트를 모두 중지하고 컨테이너를 제거합니다.|

# 서버와 클라이언트

편의상 서버 프로젝트도 여기에 둡니다. `server` 폴더에 서버 프로젝트를 위치합니다.

# 실행 방법

개발, production 모두 서버는 `5000`, 클라이언트는 `3000` 포트로 연결됩니다.
자세한 실행 방법은 아래에서 확인하세요.

## 개발 모드

`docker:up`으로 시작하는 것을 추천합니다.
개발 모드로 시작하면 소스코드 수정 시 따로 재시작 할 필요없이 적용됩니다.

끝내려면 `docker:down`로 중지합니다.

## production

서버는 `docker:server:build`로 이미지 생성 후 `docker:server:start`로 시작합니다.<br>
클라이언트는 `docker:build`로 이미지 생성 후 `docker:start`로 시작합니다.

## 도커 없이..

도커를 사용하지 않고 실행하려면 Npm scripts 항목을 확인해 주세요.

# 서버 Spec.

[server/README.md](./server/README.md)를 참조하세요.
