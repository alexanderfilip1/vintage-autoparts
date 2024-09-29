import React from "react";
import "../assets/css/HeroSection.css";
import logo from "../assets/images/HJcuk0lCnYSKtxeCHIEXzR-4096x4096.webp";
import ActionBtn from "./ActionBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <>
      <section className="heroSection container">
        <div className="heroSection__text fadeIn">
          <h1>Vintage Car Parts</h1>
          <p>
            Welcome to our vintage car parts store, where you&apos;ll find a
            wide selection of high-quality parts for your classic vehicle.
          </p>
          <ActionBtn
            path={"/shop"}
            icon={<FontAwesomeIcon icon={faBasketShopping} />}
            text={"Shop Now"}
          />
        </div>
        <div className="image__wrapper">
          <img src={logo} alt="Classic car" className="heroSection__image" />
        </div>
      </section>
    </>
  );
}
