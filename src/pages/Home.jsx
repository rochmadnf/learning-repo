import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>Mention &mdash; Home</title>
        <meta
          name="description"
          content="this is a home page of Mention sites"
        />
      </Helmet>
      Home
    </div>
  );
}
