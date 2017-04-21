// @flow

export type Props = {
  id: number,
  published: string,
  flow: {
    id: string,
    name: string,
  },
  hubs: Array<{
    id: string,
    name: string,
    isSubscribed?: boolean,
  }>,
  title: string,
  isDraft?: boolean,
  isMy?: boolean,
  author: {
    id: number,
    nick: string,
    name: string,
    specialization: string,
    contacts?: Array<{
      type: string,
      url: string,
    }>,
    votingCounter: number,
    karma: number,
    rating: number,
  },
  company?: {
    id: number,
    avatar: string,
    name: string,
    specialization: string,
    contacts?: Array<{
      type: string,
      url: string,
    }>,
    rating: number,
  },
  tags: Array<string>,
  content: string,
  viewsCount: number,
  favoritesCount: number,
  isTeaser?: boolean,
}
