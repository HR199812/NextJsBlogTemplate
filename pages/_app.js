import "../styles/globals.css";
import Layout from "../components/Layout";
// import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import withRedux from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    // {/* </Provider> */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

//makeStore function that returns a new store for every request
// const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);

// export default MyApp;
