import { useRouter } from "next/router";

const seller = () => {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <div>this is the service professional details page of seller id {id}</div>
  );
};

export default seller;
