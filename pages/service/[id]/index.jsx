import { useRouter } from "next/router";

const service = () => {
  const router = useRouter();
  const { id } = router?.query;

  return <div>this is a service details page of service id {id}</div>;
};

export default service;
