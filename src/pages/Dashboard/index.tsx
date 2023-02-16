import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface IDashboard {
  user: any;
}

const Dashboard = ({ user }: IDashboard) => {
  const [repos, setRepos] = useState<Array<boolean>>([]);

  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    api
      .get(`${user.login}/repos`)
      .then((res) => setRepos(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  }, []);

  return (
    <Container>
      <div>
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.name}</h2>
        </div>

        <Button
          color="colorDashboard"
          size="dashboard"
          onClick={() => history.back()}
        >
          Trocar usuário
        </Button>
      </div>

      <menu></menu>
    </Container>
  );
};

export { Dashboard };
