// domain.com/news/detail
//use [...].js for dymamic routing in nextjs
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newId = router.query.newId; //get newId (after news/)

  //send request
  //fetch news with newId

  return <h1>The News Detail Page</h1>;
};

export default DetailPage;
