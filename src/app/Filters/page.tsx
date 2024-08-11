'use client';
import React, { useState } from 'react';

const Filters: React.FC = () => {
  return (
    <div className="DOjaWF YJG4Cf">
      <div className="cPHDOP col-2-12" style={{ padding: '0px 16px 0px 0px' }}>
        <div className="_0BvurA">
          <section className="pgRLLn _2OLUF3">
            <div className="_3Owiq+">
              <div className="rgHxCQ"><span>Filters</span></div>
            </div>
          </section>
          <div className="GSeM5C">
            <section className="Iu4qXa">
              <div className="WCyB2K"><span>CATEGORIES</span></div>
              <div>
                <div className="esFpML">
                  <span>
                    <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="IZmjtf">
                      <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="P3pAQJ"></path>
                    </svg>
                  </span>
                  <a className="k17cBJ WyLc0s" title="Mobiles & Accessories" href="/mobiles-accessories/pr?sid=tyy&otracker=categorytree">
                    Mobiles & Accessories
                  </a>
                </div>
              </div>
              <div>
                <div className="esFpML">
                  <span>
                    <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="IZmjtf">
                      <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"></path>
                    </svg>
                  </span>
                  <a className="hEjLuS WyLc0s" title="Mobiles" href="/mobiles/pr?sid=tyy,4io&otracker=categorytree">
                    Mobiles
                  </a>
                </div>
              </div>
            </section>
          </div>
          <section className="FR+9+z _2OLUF3">
            <div className="WNK7UT _3Owiq+">
              <div className="RCE7R3 rgHxCQ"><span>Price</span></div>
            </div>
            <div className="rkYFq7">
              <div className="gFZVDw">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="vVygGr" style={{ height: '25px', width: '22.3398px' }}></div>
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
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="JxsWRk" style={{ width: '22.3398px' }}>.</div>
                ))}
                <div className="JxsWRk" style={{ width: '0px' }}>.</div>
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
          {/* Additional sections omitted for brevity */}
        </div>
      </div>
    </div>
  );
};

export default Filters;