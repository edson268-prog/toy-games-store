export interface IResponseProduct {
	totalPages: number;
	totalRecords: number;
	responseResult: IProduct[];
	success: boolean;
	listErrors: any[];
}

export interface IResponseSingleProduct {
	responseResult: IProduct;
}

export interface IProduct {
	id: number;
	name: string;
	description: string;
	ageRestriction: number;
	company: string;
	price: number;
	productTypeDesc: any;
	productTypeName: any;
	productTypeId: number;
	soldOut: boolean;
}

export interface INewProduct {
	id: number;
	name: string;
	description: string;
	ageRestriction: number;
	company: string;
	price: number;
	productTypeId: number;
}

export interface IProductType {
	name: string;
	description: string;
}

export interface IProductTypeResponse {
	responseResult: IProductTypeSearch[];
	success: boolean;
	listErrors: any[];
}

export interface IProductTypeSearch {
	id: number;
	name: string;
	description: string;
}
