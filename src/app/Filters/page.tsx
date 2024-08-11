'use client';
import React from 'react';


const FilterComponent: React.FC = () => {
  return (
    <div className="w-[17rem] h-auto border-4 border-yellow-400 text-yellow-500">
      <section className="pgRLLn _2OLUF3">
        <div className=" w-full text-center border-b border-white">
          <div className=" py-8 text-4xl">
            <span>Filters</span>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <section className="text-white">
          <div className="text-xl ml-4 font-[700]">
            <span>CATEGORIES</span>
          </div>
          <div>
            <div className="flex flex-wrap mt-2">
              <span>
                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="#fff"
                    className="P3pAQJ"
                  />
                </svg>
              </span>
              <a className="flex ml-2" title="Mobiles &amp; Accessories" href="/mobiles-accessories/pr?sid=tyy&amp;otracker=categorytree">
                Mobiles &amp; Accessories
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap mt-2">
              <span>
                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="#fff"
                    className=""
                  />
                </svg>
              </span>
              <a className="ml-2" title="Mobiles" href="/mobiles/pr?sid=tyy,4io&amp;otracker=categorytree">
                Mobiles
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="">
        <div className="mt-8">
          <div className="text-xl ml-4 text-white font-[700]">
            <span>Price</span>
          </div>
        </div>

        <div className="">
          <div className="gFZVDw">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="vVygGr" style={{ height: '25px', width: '22.3398px' }}></div>
            ))}
          </div>
        </div>

        <div className="-suZGK">
          <div className="Oyj7AF">
            <div className="iToJ4v Kaqq1s" style={{ transform: 'translateX(0px)' }}>
              <div className="PYKUdo"></div>
            </div>
            <div className="iToJ4v D0puJn" style={{ transform: 'translateX(-0.561302px)' }}>
              <div className="PYKUdo"></div>
            </div>
            <div className="hZmZbn"></div>
            <div className="hZmZbn AQNm5W" style={{ transform: 'translate(0px) scaleX(0.995)' }}></div>
          </div>

          <div className="C+PahU">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="JxsWRk" style={{ width: '22.3398px' }}>.</div>
            ))}
          </div>
        </div>

        <div className="BXgIa-">
          <div className="suthUA">
            <select className="Gn+jFg">
              <option value="Min" className="_0vP2OD">Min</option>
              <option value="10000" className="_0vP2OD">₹10000</option>
              <option value="15000" className="_0vP2OD">₹15000</option>
              <option value="20000" className="_0vP2OD">₹20000</option>
              <option value="30000" className="_0vP2OD">₹30000</option>
            </select>
          </div>
          <div className="mhoEL5">to</div>
          <div className="tKgS7w">
            <select className="Gn+jFg">
              <option value="10000" className="_0vP2OD">₹10000</option>
              <option value="15000" className="_0vP2OD">₹15000</option>
              <option value="20000" className="_0vP2OD">₹20000</option>
              <option value="30000" className="_0vP2OD">₹30000</option>
              <option value="Max" className="_0vP2OD">₹30000+</option>
            </select>
          </div>
        </div>
      </section>

      {/* The remaining sections can be similarly converted */}
    </div>
  );
};

export default FilterComponent;
