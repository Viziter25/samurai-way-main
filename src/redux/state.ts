


export type AppPropsType = {
  state:AppPropsPageType
}
export  type AppPropsPageType = {
  profilePage:AppPropsItemType
  messagePage:DialogsPropsType
}

export type AppPropsItemType = {
  posts:PropsArrayType[]
}

/////////////////////////////

export type StatePropsType = {
  state:DialogsPropsType
}

export type DialogsPropsType = {
  dialogs: DialogType[]
  messages: MessagesType[]
}

export type DialogType = {
  id: number,
  name: string
}

export type MessagesType = {
  id: number,
  message: string
}
type PropsArrayType = {
  id: number
  message: string
  likescount: number
}


export let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'hi', likescount: 1},
      {id: 2, message: 'Bye', likescount: 41},
      {id: 3, message: 'asdsad', likescount: 21},
    ]
  },
  messagePage: {
    dialogs : [
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
  let newPost:PropsArrayType = {
    id: 5,
    message: postMessage,
    likescount: 0,
  }
  state.profilePage.posts.push(newPost)
}
