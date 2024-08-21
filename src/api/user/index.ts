import { service } from '@/utils/request';
import type { ApiResponse } from '@spyro/axios';
import type { User } from './types';

// 获取用户列表
export function getUserList(): Promise<ApiResponse<User[]>> {
	return service.request({
		url: '/users',
		method: 'get'
	});
}

// 获取用户信息
export function getUserInfo(): Promise<ApiResponse<User>> {
	return service.request({
		url: '/getUserInfo',
		method: 'get'
	});
}