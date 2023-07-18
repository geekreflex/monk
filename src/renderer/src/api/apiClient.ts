import axios, { Axios, AxiosResponse } from 'axios'

export interface ApiResponse {
  // Define format here
  statu: string
  data: any
  message: string
}

const apiClient = axios.create({
  baseURL: ''
})

export const makeApiRequest = async (
  method: string,
  url: string,
  data?: any,
  params?: any
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await apiClient.request({
      method,
      url,
      data,
      params
    })

    return response.data
  } catch (error) {
    throw error
  }
}
