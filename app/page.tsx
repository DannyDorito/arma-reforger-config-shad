import { Loading } from "@/components/loading";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/home").then((h) => h.Home), {
  loading: () => <Loading />,
});

export default function Page() {
  return <Home />;
}
