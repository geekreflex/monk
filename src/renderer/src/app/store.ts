import { ApiResponse } from '@renderer/api/apiClient'
import { create } from 'zustand'

type State = {
  url: string
  method: string
  response: ApiResponse | null
  requestData: string
}

type Action = {
  setUrl: (url: State['url']) => void
  setMethod: (method: State['method']) => void
  setResponse: (response: State['response']) => void
  setRequestData: (requestData: State['requestData']) => void
}

export const useStore = create<State & Action>((set) => ({
  url: '',
  method: 'GET',
  requestData: '',
  response: null,
  setUrl: (url) => set(() => ({ url: url })),
  setMethod: (method) => set(() => ({ method: method })),
  setResponse: (response) => set(() => ({ response: response })),
  setRequestData: (requestData) => set(() => ({ requestData: requestData }))
}))
