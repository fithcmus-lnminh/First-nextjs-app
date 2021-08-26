// domain.com/news
import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="news/abc">Go to abc</Link>
        </li>
        <li>
          <Link href="news/xyz">Go to xyz</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
