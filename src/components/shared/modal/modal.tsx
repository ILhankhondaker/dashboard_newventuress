import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {

  return (
    <section className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
      <div className="relative w-[343px] md:w-[551px] bg-white rounded-[16px] px-[25px] pb-[25px] border ">
        {/* Full Visible Background Image */}
        <div className="absolute inset-0 z-0 bg-[url('/assets/img/modalbg.png')] bg-no-repeat bg-cover rounded-[16px] opacity-100 filter brightness-110 contrast-125" />
        
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </section>
  );
};

export default Modal;
