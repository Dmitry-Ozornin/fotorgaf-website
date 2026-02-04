import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import BootstrapCarousel from "@/components/BanerSlider";
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our photography site",
};
export default function Home() {
  return (
    <>
      <BootstrapCarousel />
    </>
  );
}
