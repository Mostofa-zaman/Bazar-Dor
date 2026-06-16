import React from "react";
import Container from "../common/Container";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const CopyrightComponent = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20">
      <Container>
        <div className="px-4 sm:px-6 md:px-0 max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h1 className="heading-one text-black font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl">
              © ২০২৫ আজকের বাজার দর
            </h1>
            <p className="para-normal text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              আমরা বাংলাদেশের কৃষি বাজারকে ডিজিটালাইজ করার মাধ্যমে স্বচ্ছতা এবং ন্যায্য ব্যবসা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          {/* Company Info / Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            
            <div className="bg-white rounded-2xl border border-[#e8f5ef] p-5 sm:p-6 hover:shadow-lg transition-all duration-300">
              <h2 className="heading-three text-black font-bold mb-3 text-lg sm:text-xl">
                কোম্পানি তথ্য
              </h2>
              <p className="para-normal text-gray-700 mb-2 text-sm sm:text-base">
                “আজকের বাজার দর” একটি স্বচ্ছ ও নির্ভরযোগ্য প্ল্যাটফর্ম যা প্রতিদিন আপডেটেড কৃষি বাজারের তথ্য সরবরাহ করে।
              </p>
              <p className="para-normal text-gray-700 text-sm sm:text-base">
                আমাদের লক্ষ্য কৃষক, ব্যবসায়ী এবং ভোক্তার মধ্যে একটি সরাসরি ও কার্যকর যোগাযোগ স্থাপন করা।
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#e8f5ef] p-5 sm:p-6 hover:shadow-lg transition-all duration-300">
              <h2 className="heading-three text-black font-bold mb-3 text-lg sm:text-xl">
                যোগাযোগ করুন
              </h2>

              <p className="para-normal text-gray-700 flex items-start gap-2 mb-2 text-sm sm:text-base">
                <MdLocationOn className="text-[#3bb77e] mt-1" />
                <span>123, উত্তরা, ঢাকা 1230, বাংলাদেশ</span>
              </p>

              <p className="para-normal text-gray-700 flex items-center gap-2 mb-2 text-sm sm:text-base">
                <MdPhone className="text-[#3bb77e]" />
                <span>+880 1234 567890</span>
              </p>

              <p className="para-normal text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                <MdEmail className="text-[#3bb77e]" />
                <span>info@bazardor.com</span>
              </p>
            </div>

          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 text-sm sm:text-base">
            <a href="#" className="text-[#3bb77e] hover:underline">Privacy Policy</a>
            <a href="#" className="text-[#3bb77e] hover:underline">Terms & Conditions</a>
            <a href="#" className="text-[#3bb77e] hover:underline">Affiliate Program</a>
          </div>

          {/* Social */}
          <div className="flex items-center justify-center gap-5 sm:gap-6 text-lg">
            <a href="#" className="text-[#3bb77e] hover:text-[#2da26d] transition-colors"><FaFacebookF /></a>
            <a href="#" className="text-[#3bb77e] hover:text-[#2da26d] transition-colors"><FaTwitter /></a>
            <a href="#" className="text-[#3bb77e] hover:text-[#2da26d] transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="text-[#3bb77e] hover:text-[#2da26d] transition-colors"><FaInstagram /></a>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default CopyrightComponent;