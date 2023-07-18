import { ApiResponse } from '@renderer/api/apiClient'
import { create } from 'zustand'

type Params = { key: string; value: string }

type State = {
  url: string
  method: string
  response: ApiResponse | null
  requestData: string
  params: Params[] | null
}

type Action = {
  setUrl: (url: State['url']) => void
  setMethod: (method: State['method']) => void
  setResponse: (response: State['response']) => void
  setRequestData: (requestData: State['requestData']) => void
  setParams: (params: State['params']) => void
}

export const useAppStore = create<State & Action>((set) => ({
  url: '',
  method: 'GET',
  requestData: '',
  response: null,
  params: null,
  setUrl: (url) => set(() => ({ url: url })),
  setMethod: (method) => set(() => ({ method: method })),
  setResponse: (response) => set(() => ({ response: response })),
  setRequestData: (requestData) => set(() => ({ requestData: requestData })),
  setParams: (params) => set(() => ({ params: params }))
}))
