import React from "react";
import { Img, Text, Button, Input, Slider } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


export default function MenuOpenPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [collapsed, setCollapsed] = React.useState(true);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <>
      <div className="w-full bg-black-900">
        <div className="flex flex-col items-end">
          <div className="relative h-[1117px] self-stretch">
            <Img
              src="images/img_pngtree_five_thai.png"
              alt="pngtreefive_one"
              className="absolute bottom-[0.00px] left-[11%] m-auto h-[319px] w-[319px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[129px] md:gap-24 sm:gap-16">
              <div className="flex h-[900px]  self-stretch bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat md:h-auto">
                <div className="flex w-[69%] items-start justify-between gap-5 md:w-full md:flex-col md:p-5">
                  <Sidebar
                    width={collapsed ? "80px !important" : "347px !important"}
                    collapsed={collapsed}
                    className="!sticky top-0 flex h-100vh flex-col overflow-hidden bg-black-900_e5 py-[26px] md:hidden sm:py-5"
                  >
                    {/* Sidebar content */}
                    {collapsed === false ? (
                      <div className="mt-[13px] flex flex-col items-start self-stretch">
                        {/* Logo and close icon */}
                        <div className="ml-2 flex flex-col items-start self-stretch md:ml-0">
                          <div className="flex flex-col items-start self-stretch">
                            <Img
                              src="images/img_close.svg"
                              alt="close_one"
                              className="relative z-[1] ml-[49px] h-[36px] w-[36px] md:ml-0 cursor-pointer"
                              onClick={toggleCollapse}
                            />
                            <Img
                              src="images/img_chef_matt_rev_w_299x447.png"
                              alt="chefmattrevw"
                              className="relative mt-[-36px] h-[221px] w-full object-cover md:h-auto"
                            />
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="relative ml-[26px] mt-[-9px] !text-deep_orange-300 md:ml-0"
                          >
                            HOME
                          </Text>
                        </div>
                        {/* Menu items */}
                        <Text
                          size="md"
                          as="p"
                          className="ml-[34px] mt-[25px] md:ml-0"
                        >
                          PRODUCTS
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="ml-[34px] mt-[25px] md:ml-0"
                        >
                          MEET CHEF MATT
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="ml-[34px] mt-[27px] md:ml-0"
                        >
                          FAQ
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="ml-[34px] mt-[25px] md:ml-0"
                        >
                          CONNECT WITH US
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="mt-[259px] flex self-center"
                        >
                          <span className="text-white-A700">
                            TEXT SUPPORT 24/7
                          </span>
                          <span className="text-white-A700">&nbsp; &nbsp;</span>
                          <a
                            href="#"
                            className="text-deep_orange-300 underline"
                          >
                            070-7782-9137
                          </a>
                        </Text>
                        {/* Divider */}
                        <div className="mt-[17px] h-[2px] w-full rotate-[180deg] self-stretch bg-white-A700" />
                        {/* Cart and wishlist */}
                        <div className="mt-[17px] flex items-center self-center">
                          <Menu
                            menuItemStyles={{
                              button: {
                                padding: " ",
                                alignSelf: "start",
                                color: "#ffffff",
                                fontWeight: 400,
                                fontSize: "22px",
                                margin: " ",
                              },
                            }}
                            className="flex w-full flex-col"
                          >
                            <MenuItem
                              icon={
                                <Img
                                  src="images/img_bag.svg"
                                  alt="bag_one"
                                  className="h-[29px] w-[29px]"
                                />
                              }
                            >
                              CART
                            </MenuItem>
                          </Menu>
                          <Img
                            src="images/img_favorite.svg"
                            alt="favorite_one"
                            className="ml-[42px] h-[28px] w-[28px]"
                          />
                          <Text size="md" as="p" className="ml-2.5">
                            WISHLIST
                          </Text>
                        </div>
                      </div>
                    ) : (
                      <div className=" left-[0.00px] top-[0.00px] m-auto h-[900px] ">
                        <div className=" bottom-0 left-[0.00px] top-0 my-auto flex gap-[2rem] h-max w-[100%]">
                          <div className="flex flex-1 flex-col gap-2rem items-center-900_cc  ">
                            <Img
                              src="images/img_menu_hamburger.svg"
                              alt="menuhamburger"
                              className="mb-[784px] h-[40px] w-[40px] ml-[14px] cursor-pointer"
                              onClick={toggleCollapse}
                            />
                          </div>
                          <div className="h-[877px] w-[8px]  bg-deep_orange-300" />
                        </div>
                        <Img
                          src="images/img_chef_matt_rev_w.png"
                          alt="chefmattrevw"
                          className="absolute bottom-0 left-[12px] right-0 top-20 h-[400px]"
                        />
                      </div>
                    )}
                  </Sidebar>
                  <div className="mb-[29px] flex w-[36%] flex-col items-center gap-[122px] self-end md:w-full md:gap-[91px] sm:gap-[61px]">
                    <Button shape="square" className="w-full sm:px-5">
                      Meet Chef Matt
                    </Button>
                    <div className="flex h-[12px] w-[78px] justify-center" />
                  </div>
                </div>
              </div>
              <Text
                size="xl"
                as="p"
                className="ml-[223px] text-center !text-deep_orange-300 md:ml-0"
              >
                CHEF MATT PRODUCTS
              </Text>
            </div>
          </div>
          <Text
            as="p"
            className="ml-[223px] mt-[5px] w-[47%] self-start md:ml-0 md:w-full md:p-5"
          >
            <>
              Shop Gourmet Chef Quality products from the Chef Matt brand.{" "}
              <br />
              Chef it yourself and Thank us later.
            </>
          </Text>
          <div className="relative mr-[26px] mt-[78px] h-[314px] w-[87%] md:mr-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex w-[85%] gap-[38px] md:relative md:flex-col">
              <div className="flex w-full flex-col items-center md:p-5">
                <Img
                  src="images/img_ellipse_5.png"
                  alt="cinnamon_honey"
                  className="h-[234px] w-[234px] rounded-[50%]"
                />
                <Text as="p" className="mt-6 text-center !text-deep_orange-300">
                  CINNAMON HONEY
                </Text>
                <Text size="xs" as="p" className="mt-[5px] text-center">
                  <span className="text-sm text-white-A700 line-through">
                    $12.00
                  </span>
                  <span className="text-sm text-white-A700">&nbsp; $9.00</span>
                </Text>
              </div>
              <div className="flex w-full flex-col items-center md:p-5">
                <Img
                  src="images/img_ellipse_6.png"
                  alt="circleimage"
                  className="h-[234px] w-[235px] rounded-[50%]"
                />
                <Text as="p" className="mt-6 text-center !text-deep_orange-300">
                  COCONUT OIL
                </Text>
                <Text size="xs" as="p" className="mt-[5px] text-center">
                  <span className="text-sm text-white-A700 line-through">
                    $20.00
                  </span>
                  <span className="text-sm text-white-A700">&nbsp; $15.00</span>
                </Text>
              </div>
              <div className="flex w-full flex-col items-center md:p-5">
                <Img
                  src="images/img_ellipse_7.png"
                  alt="circleimage"
                  className="h-[234px] w-[235px] rounded-[50%]"
                />
                <Text as="p" className="mt-6 text-center !text-deep_orange-300">
                  MANGO HONEY
                </Text>
                <Text size="xs" as="p" className="mt-[5px] text-center">
                  <span className="text-sm text-white-A700 line-through">
                    $9.00
                  </span>
                  <span className="text-sm text-white-A700">&nbsp; $6.00</span>
                </Text>
              </div>
              <div className="flex w-full flex-col items-center md:p-5">
                <Img
                  src="images/img_ellipse_8.png"
                  alt="circleimage"
                  className="h-[234px] w-[234px] rounded-[50%]"
                />
                <Text as="p" className="mt-6 text-center !text-deep_orange-300">
                  HONEY HABANERO
                </Text>
                <Text size="xs" as="p" className="mt-[5px] text-center">
                  <span className="text-sm text-white-A700 line-through">
                    $12.00
                  </span>
                  <span className="text-sm text-white-A700">&nbsp; $9.00</span>
                </Text>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-1/4 m-auto flex w-full justify-between gap-5">
              <Img
                src="images/img_refresh.svg"
                alt="refresh_one"
                className="h-[77px] w-[76px]"
              />
              <Img
                src="images/img_forward.svg"
                alt="forward_one"
                className="h-[77px] w-[76px]"
              />
            </div>
          </div>
          <div className="mt-32 flex w-[89%] flex-col items-center md:w-full md:p-5">
            <div className="relative h-[383px] self-stretch md:h-auto">
              <div className="w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="mr-2.5 h-[12px] w-[12px] border border-solid border-gray_500" />
                    ) : (
                      <div className="mr-2.5 h-[12px] w-[12px] bg-gray_500" />
                    );
                  }}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="relative mx-auto h-[383px] bg-white-A700 px-6 pt-6 md:h-auto sm:px-5 sm:pt-5">
                        <Img
                          src="images/img_rectangle_7.png"
                          alt="image"
                          className="h-[344px] w-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[37%] flex-col items-center gap-[41px] pb-[47px] md:pb-5">
                          <Text
                            size="xl"
                            as="p"
                            className="text-center !text-black-900"
                          >
                            ONLINE ONLY
                          </Text>
                          <Text
                            size="md"
                            as="p"
                            className="text-center !text-black-900"
                          >
                            <span className="text-black-900">
                              <>
                                GET 20% OFF YOUR ORDER OF $50 OR MORE
                                <br />
                                Use code&nbsp;
                              </>
                            </span>
                            <span className="font-extrabold text-black-900">
                              “Chef20”
                            </span>
                          </Text>
                          <Button
                            color="black_900"
                            shape="square"
                            className="min-w-[359px] sm:px-5"
                          >
                            Shop Now
                          </Button>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="relative z-[2] mt-[83px] flex self-stretch md:flex-col">
              <div className="relative h-[229px] w-[50%] bg-white-A700 px-[27px] md:w-full sm:px-5">
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-center sm:relative sm:flex-col">
                  <div className="flex self-stretch md:flex-col w-[100%]">
                    <Img
                      src="images/img_image_banner_1_1.png"
                      alt="imagebannerone"
                      className="h-[229px] w-[100%] pl-[25rem] object-contain md:w-full "
                    />
                    <div className="absolute bottom-[14%] left-[50px] m-auto h-[123px] w-[75%] bg-white-A700" />
                  </div>
                </div>
                <Text
                  size="xl"
                  as="p"
                  className="relative z-[3] mt-[42px] !text-black-900"
                >
                  SUBSCRIBE & SAVE
                </Text>
                <Text
                  size="xs"
                  as="p"
                  className="absolute bottom-[18%] left-[5%] m-auto w-[58%] !text-black-900"
                >
                  <>
                    Join Chef Matt’s Monthly Subscription
                    <br />
                    and bring world class chef quality
                    <br />
                    meals to your home.
                  </>
                </Text>
              </div>
              <Img
                src="images/img_image_6.png"
                alt="imagesix_one"
                className="h-[229px] w-[50%] object-cover md:w-full"
              />
            </div>
            <div className="flex self-stretch md:flex-col">
              <Img
                src="images/img_rectangle_13.png"
                alt="image"
                className="h-[230px] w-[50%] object-cover md:w-full"
              />
              <Img
                src="images/img_rectangle_14.png"
                alt="image_one"
                className="h-[230px] w-[50%] object-cover md:w-full"
              />
            </div>
            <div className="flex h-[401px] items-start self-stretch bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat py-[65px] pl-[65px] pr-14 md:h-auto md:p-5">
              <div className="mb-[46px] mt-[34px] flex w-[62%] flex-col items-start md:w-full">
                <Text size="xl" as="p">
                  SIGN UP SPECIAL PROMOTIONS
                </Text>
                <div className="h-[4px] w-[79%] rotate-[180deg] bg-white-A700" />
                <Text as="p" className="mt-[33px]">
                  Get exclusive deals you won’t find anywhere else straight to
                  your inbox!
                </Text>
                <div className="mt-7 flex gap-4 self-stretch md:flex-col">
                  <Input
                    shape="square"
                    type="email"
                    name="email"
                    placeholder={"Enter email address"}
                    className="sm:pr-5"
                  />
                  <Button
                    color="deep_orange_300"
                    size="xs"
                    variant="fill"
                    shape="square"
                    className="min-w-[188px] border border-deep_orange-300 sm:px-5"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-[73px] flex w-[91%] items-center justify-between gap-5 md:w-full md:flex-col">
              <div className="flex items-start gap-[22px] sm:flex-col">
                <Img
                  src="images/img_thumbs_up.svg"
                  alt="thumbsup_one"
                  className="h-[32px] sm:w-full"
                />
                <div className="flex flex-col items-start gap-3">
                  <Text size="lg" as="p" className="!text-deep_orange-300">
                    FREE SHIPPING WORLDWIDE
                  </Text>
                  <Text as="p">Guaranteed Delivery</Text>
                </div>
              </div>
              <div className="flex items-start gap-[27px]">
                <Img
                  src="images/img_settings.svg"
                  alt="settings_one"
                  className="h-[30px] w-[31px]"
                />
                <div className="flex flex-col items-start gap-3">
                  <Text size="lg" as="p" className="!text-deep_orange-300">
                    24/7 CUSTOMER SERVICE
                  </Text>
                  <Text as="p">Text Us 24/7 at 070-7782-9137</Text>
                </div>
              </div>
              <div className="flex items-start gap-[22px]">
                <Img
                  src="images/img_checkmark.svg"
                  alt="checkmark_one"
                  className="h-[36px] w-[36px]"
                />
                <div className="flex flex-col items-start gap-2.5">
                  <Text size="lg" as="p" className="!text-deep_orange-300">
                    QUALITY GUARANTEE!
                  </Text>
                  <Text as="p">Send Within 30 Days</Text>
                </div>
              </div>
            </div>
            <div className="relative mt-[33px] h-[299px] self-stretch">
              <Img
                src="images/img_chef_matt_rev_w_299x447.png"
                alt="chefmattrevw"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[299px] w-[35%] object-cover"
              />
              <div className="absolute left-0 right-0 top-[12%] m-auto h-[8px] w-full rotate-[180deg] bg-deep_orange-300" />
            </div>
          </div>
        </div>

        <div className="w-full bg-red-700" >
        
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >

            items={[...Array(3)].map(() => (
              <SwiperSlide key={Math.random()}>
                <div className="relative mx-auto h-[383px] bg-white-A700 px-6 pt-6 md:h-auto sm:px-5 sm:pt-5">
                  <Img
                    src="images/img_rectangle_7.png"
                    alt="image"
                    className="h-[344px] w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[37%] flex-col items-center gap-[41px] pb-[47px] md:pb-5">
                    <Text
                      size="xl"
                      as="p"
                      className="text-center !text-black-900"
                    >
                      ONLINE ONLY
                    </Text>
                    <Text
                      size="md"
                      as="p"
                      className="text-center !text-black-900"
                    >
                      <span className="text-black-900">
                        <>
                          GET 20% OFF YOUR ORDER OF $50 OR MORE
                          <br />
                          Use code&nbsp;
                        </>
                      </span>
                      <span className="font-extrabold text-black-900">
                        “Chef20”
                      </span>
                    </Text>
                    <Button
                      color="black_900"
                      shape="square"
                      className="min-w-[359px] sm:px-5"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
      </div>
    </>
  );
}