import BaseLayout from "../../Layout/Base";
import { Card } from "../../components/Card/Card";

function Home() {
  return (
    <BaseLayout>
      <Card>
        <h2 className="text-4xl">Welcome to GrimRoster</h2>
        <p>A wargaming roster management tool</p>
      </Card>
    </BaseLayout>
  );
}

export default Home;
