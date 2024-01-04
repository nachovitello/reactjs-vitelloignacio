import ItemListContainer from '../components/ItemListContainer'; 
import { useGetProducts } from '../hooks/useProducts';

const Home = () => {
  const { productsData } = useGetProducts(15);

  return <ItemListContainer productsData={productsData} />
};

export default Home;