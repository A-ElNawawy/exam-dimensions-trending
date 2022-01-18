import { useEffect, useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";

const repos = "https://gh-trending-api.herokuapp.com/repositories";
const devs = "https://gh-trending-api.herokuapp.com/developers";

const getData = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Sorry, We have an error");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    alert(error.message);
  }
};

const App = () => {
  const [Repos, setRepos] = useState([]);
  const [Devs, setDevs] = useState([]);

  const DevsPage = lazy(() => import("./pages/DevsPage/DevsPage"));
  const ReposPage = lazy(() => import("./pages/ReposPage/ReposPage"));

  useEffect(() => {
    getData(repos).then((repos) => setRepos(repos));
    getData(devs).then((devs) => setDevs(devs));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Layout>
        <Routes>
          <Route
            path='/developers'
            element={
              <Suspense fallback={<Loading />}>
                <DevsPage Devs={Devs} />
              </Suspense>
            }
          />
          <Route
            path='/repos'
            element={
              <Suspense fallback={<Loading />}>
                <ReposPage Repos={Repos} />
              </Suspense>
            }
          />
          <Route exact path='/' element={<Navigate to='/repos' />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
