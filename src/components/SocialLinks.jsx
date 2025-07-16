import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import animationData1 from "../assets/Animation - 1731684875975.json";
import Lottie from "lottie-react";
const SocialLinks = () => {
  return (
    <div data-aos="zoom-in">
      <div className="flex flex-col h-[50vh] justify-center items-center">
        <Lottie
          animationData={animationData1}
          className="w-[30%] h-[50%]"
          loop={true}
        />

        <div className="text-blue-500">Want to know more..?</div>

        <div className="flex space-x-6 mt-6">

          {/* LinkedIn */}
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/sandeep-penumala/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined className="text-white text-3xl hover:text-blue-400 transform transition-transform duration-300 hover:scale-125" />
            </a>
          </Tooltip>

          {/* GitHub */}
          <Tooltip title="GitHub">
            <a
              href="https://github.com/PenumalaSandeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="text-white text-3xl hover:text-blue-400 transform transition-transform duration-300 hover:scale-125" />
            </a>
          </Tooltip>

          {/* Mobile Number */}
          <Tooltip title="Mobile Number">
            <a href="tel:+918897338391">
              <MobileOutlined className="text-white text-3xl hover:text-blue-400 transform transition-transform duration-300 hover:scale-125" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
