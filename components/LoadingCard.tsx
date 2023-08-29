const LoadingCard: React.FC = () => {
  return (
    <div
      className="
      flex gap-[1em] border px-[1em] py-[1em] w-[19em] desktop:h-[200px]
      rounded-lg desktop:hover:scale-105 transition 
      desktop:hover:border-thirdh-[200px] mobile:w-full mobile:h-[200px]"
    >
      <div className="flex flex-col gap-[.5em] w-full animate-pulse opacity-25">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[.5em]">
            <div className="bg-second rounded-md w-[151px] h-[16px]"></div>
            <div className="bg-second rounded-md w-[151px] h-[16px]"></div>
          </div>
          <div className="flex items-center">
            <div className="bg-second rounded-full w-[32px] h-[32px]"></div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-[83px] h-[16px] bg-second rounded-md"></div>
        </div>
        <div className="inline-grid grid-cols-4 gap-[0.5em]">
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
          <div className="bg-second w-[60px] h-[16px] rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[22px] h-[28px] bg-second rounded-md"></div>
          <div className="w-[222px] h-[37px] bg-second rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingCard;