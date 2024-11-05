import React from "react";

const Footer = () => {
  return (
    <div className="font-outfit">
      <footer class="bg-background">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 w-full">
              <div className="flex flex-col">
                <img src="./hire-logo.png" width={165} height={54} />
                <p className="text-white text-lg font-light ">
                  Hire eCom boosts eCommerce growth with the right
                  offshore/onsite talent, highly skilled developers, and
                  specialized digital marketers for your business.
                </p>
                <p className="text-white mt-4 font-medium text-base">FOLLOW </p>
                <div class="flex mt-4  ">
                  <img src="./fb.png" className="mx-2" />
                  <img src="./twitter.png" className="mx-2" />
                  <img src="./insta.png" className="mx-2" />
                  <img src="./linkedin.png" className="mx-2" />
                </div>
              </div>
              <div>
                <h2 class="mb-6 text-xl font-medium text-white  ">Company</h2>
                <ul class="list-disc list-inside text-white font-medium">
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    About Us
                  </li>
                  <li class="mb-4 font-normal text-sm lg:text-base">Team</li>
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    Employers
                  </li>
                  <li class="mb-4 font-normal  text-sm lg:text-base">
                    Services
                  </li>
                  <li class="mb-4 font-normal  text-sm lg:text-base">
                    Contact Us
                  </li>
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    Privacy Policy
                  </li>
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    Disclaimer
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-6 text-xl font-medium text-white  ">Platform</h2>
                <ul class="list-disc list-inside text-white font-medium">
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    WooCommerce
                  </li>
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    IBM Watson Commerce
                  </li>
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    Big Commerce
                  </li>
                  <li class="mb-4 font-normal text-sm lg:text-base">Shopify</li>
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    Salesforce Commerce Cloud
                  </li>
                  <li class="mb-4 font-normal text-sm lg:text-base">
                    {" "}
                    Magento
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-6 text-xl font-medium text-white  ">Contact</h2>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <div className="flex ">
                      <img
                        src="./india-icon.png"
                        className="mx-2"
                        width={22}
                        height={22}
                      />
                      <p className="text-white font-medium text-lg">India</p>
                    </div>
                    <p className="text-white font-normal text-xs">
                      FF03, 03A MGF Megacity Mall, Sector 28, Gurugram, Haryana
                      122002
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="flex ">
                      <img
                        src="./usa-icon.png"
                        className="mx-2"
                        width={22}
                        height={22}
                      />
                      <p className="text-white  font-medium text-lg">USA</p>
                    </div>
                    <p className="text-white font-normal text-xs">
                      2310, 23rd floor, Regus Business Centre, Damac Smart
                      heights, Barsha Heights, New York
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-normal text-xs">
                      +91 XXXXXXXXXX
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-white font-normal text-xs">
                      +971 XXXXXXXXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-lightGray sm:mx-auto  lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-center">
            <p className="text-lightGray font-light text-lg">
              hireecom® | All Rights Reserved | Copyright © 2010 — 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
