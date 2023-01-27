import useProducts from './useProducts';

export default function useProductsList() {
    const {productList } =useProducts();

    return productList;
}