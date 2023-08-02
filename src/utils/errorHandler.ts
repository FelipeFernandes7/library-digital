import Bugsnag from '@bugsnag/js'
import { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

export default function errorHandler(error: AxiosError<string>) {
  Bugsnag.notify({
    name: `api: ${error.config?.url || 'error'}`,
    message: error.response?.data || 'not found',
  })
  if (error && error.response && error.response.status < 500) {
    toast.error(error.response.data)
    return
  }

  toast.error('Houve um erro na solicitação, tente novamente mais tarde')
}

export async function requestWithHandler<D>(
  service: () => Promise<AxiosResponse<D>>,
): Promise<D | undefined> {
  let response: AxiosResponse<D>
  try {
    response = await service()
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    errorHandler(error)
  }
  return undefined
}
