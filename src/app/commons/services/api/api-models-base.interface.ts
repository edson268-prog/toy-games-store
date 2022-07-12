interface IResponse<T> {
	success: boolean;
	errors: string[];
	result: T;
}
