interface SDPGUser {
  id: string;
}

interface SDPGraphQL {
  user: SDPGUser;
}

interface SDProfilePage {
  graphql: SDPGraphQL;
}

interface SDEntryData {
  ProfilePage: Array<SDProfilePage>;
}

interface SharedData {
  rhx_gis: string
  entry_data: SDEntryData
}

interface Media {
  /**
   * 게시글 ID
   */
  id: string;

  /**
   * 작성일 timestamp
   */
  timestamp: number;

  /**
   * 썸네일 주소
   */
  tumbnailSrc: string;
}

interface MediaResponse {
  /**
   * 다음 목록 커서
   */
  last: string;

  /**
   * 게시물이 더 있는지 여부
   */
  hasNext: boolean;

  /**
   * 미디어(게시물) 목록
   */
  medias: Array<Media>;
}
