//MENU
const product = 'product';
const productType = 'productType';

export const PATHS_PRODUCT_PAGES = {
	product: {
		withSlash: `/${product}`,
		onlyPath: product
	},
	productType: {
		withSlash: `/${productType}`,
		onlyPath: productType
	}
};

//Productos
const productsPage = 'product';
const productSearchPage = 'prodSearch';
const productRegisterPage = 'prodRegister';

export const PATHS_PRODUCT_SUBPAGES = {
	withSlash: `/${productsPage}`,
	onlyPath: productsPage,

	prodSearch: {
		withSlash: `/${productsPage}/${productSearchPage}`,
		onlyPath: productSearchPage
	},
	prodRegister: {
		withSlash: `/${productRegisterPage}`,
		onlyPath: productRegisterPage
	}
};

//Tipos de productos
const productTypePage = 'productType';
const productTypeSearchPage = 'prodTypeSearch';
const productTypeRegisterPage = 'prodTypeRegister';

export const PATHS_PRODUCT_TYPE_SUBPAGES = {
	withSlash: `/${productTypePage}`,
	onlyPath: productTypePage,

	prodTypeSearch: {
		withSlash: `/${productTypePage}/${productTypeSearchPage}`,
		onlyPath: productTypeSearchPage
	},
	prodTypeRegister: {
		withSlash: `/${productTypeRegisterPage}`,
		onlyPath: productTypeRegisterPage
	}
};
