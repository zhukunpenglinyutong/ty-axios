// 这个文件放着公共接口类型

export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'OPTIONS' | 'options' | 'put' | 'PUT' | 'PATCH' | 'patch'

export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    param?: any
}