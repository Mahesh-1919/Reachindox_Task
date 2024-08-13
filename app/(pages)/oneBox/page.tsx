"use client";
import React, { useEffect } from "react";
import TopBar from "@/components/TopBar";
import SubView from "@/components/SubView";
import { useRecoilValue } from "recoil";
import { pageState } from "@/store/atom";
import MainPage from "@/components/MainPage";
type Props = {};

const Page = (props: Props) => {
  const page = useRecoilValue(pageState);

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");

    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="bg-black w-full text-white h-full">
      <TopBar />
      {page ? <MainPage /> : <SubView />}
    </div>
  );
};

export default Page;
