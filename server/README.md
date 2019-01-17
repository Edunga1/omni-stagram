# Introduction

인스타그램 Private GraphQL API를 이용하는 API 서버입니다.

# Endpoints

## 사용자 게시물 정보

`/users/:user/medias?count=2`

성공적인 응답 예:

```json
{
    "last": "QVFESG5xaV96aEVhY1Exd2ZBVVVYeTc3b3E0bGVFdEZmYWs1Ym1zd3k2WVE5cUUxelVsdjhOYl9kZnFmYUNYZmdDaXBFRmdrQk1ySV83TGpZdm15c3VBeA==",
    "hasNext": true,
    "medias": [
        {
            "id": "1958461959750271607",
            "timestamp": 1547686880,
            "tumbnailSrc": "https://scontent-icn1-1.cdninstagram.com/vp/b98c9677594ce4b19e44c2de86dfb31f/5CC7DCB8/t51.2885-15/sh0.08/e35/s640x640/49775807_2259042057652142_6403526868843686693_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
        },
        {
            "id": "1958430515195616870",
            "timestamp": 1547683132,
            "tumbnailSrc": "https://scontent-icn1-1.cdninstagram.com/vp/790a092f950d2b39b480826a1eb3eca4/5CD1B1D6/t51.2885-15/sh0.08/e35/c0.67.1080.1080/s640x640/49446333_2268991646465621_4610641441445814240_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
        }
    ]
}
```

|Query String|Type|Description|
|---|---|---|
|count|number|가져올 게시물 수|
|last?|string|**optional** 마지막 게시물에 대한 Cursor.<br>응답의 `last`로 pagination 합니다.|
