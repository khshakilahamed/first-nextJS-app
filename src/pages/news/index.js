import { Button } from "antd";
import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <Link href="/">
        <Button type="primary">Home</Button>
      </Link>
    </div>
  );
};

export default NewsPage;
