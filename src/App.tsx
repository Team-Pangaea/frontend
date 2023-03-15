import React from 'react';

function App() {
  return (
    <div
      className={"w-screen h-screen flex flex-col"}
    >
      <header className={"absolute inset-x-0 top-0 h-[60px] flex flex-row align-center bg-white"}>
        <div className={"container mx-auto flex flex-row items-center space-x-[44px]"}>
          <img 
            src={"/logo.svg"}
          />
          <div
            className={"flex flex-row space-x-[36px]"}
          >
            <p
              className={"text-[14px] text-charcoal"}
            >
              Pods
            </p>
            <p
                className={"text-[14px] text-charcoal"}
            >
              Workspace
            </p>
            <p
                className={"text-[14px] text-charcoal"}
            >
              Explore
            </p>
          </div>
        </div>
      </header>
      <div 
        className={"h-[60px]"}
      />
      <div
        className={"container mx-auto flex flex-col"}
      >
        <div
          className={"mt-[180px] flex flex-col items-center space-y-[36px]"}
        >
          <img 
            src={"/toyota-logo.svg"}
          />
          <div
            className={"flex flex-col items-center space-y-[64px]"}
          >
            <div
                className={"flex flex-col items-center space-y-[28px]"}
            >
              <p
                className={"text-[36px] leading-[45px] text-black text-center"}
              >
                Welcome! <br />
                Start Your Impossible
              </p>
              <p
                className={"text-[18px] leading-[23px] text-mono-500"}
              >
                Pangaea supports polkadot network only
              </p>
            </div>
            <button
                className={
              "bg-black text-white text-[14px] px-[24px] py-[12px] " +
                    "rounded-[18px] w-[358px] flex flex-row items-center " +
                    "justify-center space-x-[12px] rounded-lg"}
            >
              <img 
                src={"/polkadot-js.svg"}
              />
              <p
                className={"text-[18px] leading-[23px] text-mono-white"}
              >
                Polkadot.Js
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
