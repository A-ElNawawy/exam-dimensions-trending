import { useEffect, useState } from "react";

import ReposPage from "./pages/ReposPage/ReposPage";
import DevsPage from "./pages/DevsPage/DevsPage";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";

const repos = "https://gh-trending-api.herokuapp.com/repositories";
const devs = "https://gh-trending-api.herokuapp.com/developers";

const getData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("We got an error");
  }

  const data = await res.json();

  return data;
};

const App = () => {
  const [Repos, setRepos] = useState([]);
  const [Devs, setDevs] = useState([]);

  useEffect(() => {
    getData(repos).then((repos) => setRepos(repos));
    getData(devs).then((devs) => setDevs(devs));
  }, []);

  //console.log({ Repos });
  //console.log({ Devs });

  return (
    <div className='App'>
      <Header />
      <Layout>
        {/*<ReposPage Repos={Repos} />*/}
        <DevsPage Devs={Devs} />
      </Layout>
    </div>
  );
};

export default App;
