import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h1 className="heading">Welcome to Redux-Toolkit Store</h1>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
