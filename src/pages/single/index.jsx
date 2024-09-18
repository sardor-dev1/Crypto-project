import React from 'react'
import LineChart from '../../components/line-chart';

export default function index() {
  return (
    <main className="pt-[80px] bg-[#14161A]">
      <div className="grid grid-cols-7 h-[100vh] w-full max-w-[1900px] mx-auto ">
        <div className="border-r-2 border-gray-400 px-[20px] col-span-2">
          <div className="flex items-center justify-center">
            <img
              className="object-contain w-[200px] h-[200px]"
              src={
                "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
              }
              alt="bitcoin"
            />
          </div>
          <h1 className="text-[48px] font-[700] text-white text-center py-[20px]">
            Bitcoin
          </h1>
          <p className="text-[18px] font-[400] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consequatur perferendis expedita perspiciatis quod error obcaecati
            cum aliquid natus esse ea hic provident, aspernatur recusandae.
            Repudiandae ipsa fuga vitae voluptate?
          </p>
          <div className="py-[15px]">
            <p className="text-[24px] font-[700] text-white">
              Rank: <span className="font-[400]">1</span>
            </p>
            <p className="text-[24px] font-[700] text-white">
              Current Price: ₹<span className="font-[400]">3,046,956</span>
            </p>
            <p className="text-[24px] font-[700] text-white">
              Market Cap: ₹<span className="font-[400]">59,518,057</span>
            </p>
          </div>
        </div>
        <div className='col-span-5 p-[40px]'>
              <LineChart/>
        </div>
      </div>
    </main>
  );
}
