let rerenderEntiretree = (s:RootStateType) => {

}


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
  newPostText:string
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
  updateNewPostText: (newText:string )=>void

}

export let state: RootStateType = {
  profilePage: {
    posts: [
      {id: 1, message: 'hi', likescount: 1},
      {id: 2, message: 'Bye', likescount: 41},
      {id: 3, message: 'asdsad', likescount: 21},
    ],
    newPostText :'Hello'
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
    message: state.profilePage.newPostText,
    likescount: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText=' '
  rerenderEntiretree(state)

}

export let updateNewPostText = (newText:string) => {
  state.profilePage.newPostText = newText
  rerenderEntiretree(state)
}

export const subscribe = (observer:(state:RootStateType)=>void) => {
  rerenderEntiretree = observer
}