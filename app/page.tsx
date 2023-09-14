import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import RootLayout from "./layout";
import { SearchParams } from "@/types/searchParams";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  console.log("these are the: ");
  console.log(searchParams);
  return (
    /* <RootLayout searchParams={searchParams}> */
    <div>
      <h1 className="text-4xl font-bold text-content bg-bkg">Home</h1>
    </div>
    // </RootLayout>
  );
}
