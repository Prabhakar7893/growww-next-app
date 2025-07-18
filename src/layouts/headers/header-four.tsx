'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import { Cart } from "@/components/svg";
import logo_1 from '@/assets/img/logo/logo.png';
import logo_2 from '@/assets/img/logo/logo-white.png';
import useSticky from "@/hooks/use-sticky";
import CartOffcanvas from "@/components/offcanvas/cart-offcanvas";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import AccountProfile from "@/components/account/account-profile";


export default function HeaderFour() {
  const {sticky,headerRef,headerFullWidth,adjustMenuBackground} = useSticky();
  const [openCartMini, setOpenCartMini] = React.useState(false);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    adjustMenuBackground();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-3-area mt-35 z-index-5 ${sticky?'header-sticky':''}`}>
          <span className="menu-bg"></span>
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  <Link className="logo-1" href="/">
                    <Image src={logo_1} alt="logo" /> 
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image src={logo_2} alt="logo" /> 
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center growww-hd-menu">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        {/* header menus */}
                        <HeaderMenus />   
                        {/* header menus */}
                      </nav>
                    </div>
                    <div className="tp-header-3-cart p-relative">
                      <button className="userlogin-open-btn">
                        <span>
                          <a href="https://account.growww.in/?_gl=1*1yschv5*_gcl_au*MTQwNjU3ODczMy4xNzQ5NzkzMjky">
                            <i className="fa-regular fa-user"></i>
                            </a>
                        </span>
                      </button>
                      <button className="cartmini-open-btn" onClick={() => setOpenCartMini(true)}>
                        <span>
                          <Cart clr="white" />
                        </span>
                        <em>0</em>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  {/* <div className="tp-header-3-social d-none d-sm-block">
                    <a href="https://g.page/r/CeDUh5jhTvDHEBM">
                      <i className="fa-brands fa-google"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC2CCtqNw62HM1HCaoU9y5hg">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://www.instagram.com/growww_ecommerce/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/growww-official">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div> */}
                  <button onClick={() => setOpenOffCanvas(true)} className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini */}
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      {/* cart mini */}

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
