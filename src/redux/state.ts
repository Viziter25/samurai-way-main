import {rerenderEntiretree} from '../render';


type MessageType = {
  id: number,
  message: string
}

type DialogType = {
  id: number,
  name: string
}

export type PostType = {
  id: number
  message: string
  likescount: number

}

export type ProfilePageType = {
  posts: PostType[]

}

export type DialogPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
}

export type RootStateType = {
  profilePage: ProfilePageType
  messagePage: DialogPageType
}

export type StateType = {
  state: RootStateType
  addPost: (postMessage: string) => void
}

export let state: RootStateType = {
  profilePage: {
    posts: [
      {id: 1, message: 'hi', likescount: 1},
      {id: 2, message: 'Bye', likescount: 41},
      {id: 3, message: 'asdsad', likescount: 21},
    ]
  },
  messagePage: {
    dialogs: [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Vasa'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Ilya'},
    ],
    messages: [
      {id: 1, message: 'hi'},
      {id: 2, message: 'yo'},
      {id: 3, message: 'hello'},
    ]
  }

}

export let addPost = (postMessage: string) => {
  debugger
  let newPost: PostType = {
    id: 5,
    message: postMessage,
    likescount: 0,
  }
  state.profilePage.posts.push(newPost)
  rerenderEntiretree(state)

}
