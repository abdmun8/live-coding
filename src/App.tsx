import React, { useState } from 'react';
import _ from 'underscore'
import './App.css';

// color data
const colorDatas:{ category: string, color: string, colorDarker: string }[] = [
  { category: 'Red', color: '#ff0000', colorDarker: '#dd0000' },
  { category: 'Red', color: '#ff0011', colorDarker: '#dd0011' },
  { category: 'Red', color: '#ff0022', colorDarker: '#dd0022' },
  { category: 'Red', color: '#ff0033', colorDarker: '#dd0033' },
  { category: 'Red', color: '#ff0044', colorDarker: '#dd0044' },
  { category: 'Red', color: '#ff1111', colorDarker: '#dd1111' },
  { category: 'Red', color: '#ff1122', colorDarker: '#dd1122' },
  { category: 'Red', color: '#ff1133', colorDarker: '#dd1133' },
  { category: 'Red', color: '#ff1144', colorDarker: '#dd1144' },
  { category: 'Red', color: '#ff2222', colorDarker: '#dd2222' },
  { category: 'Green', color: "#448011", colorDarker: "#446011" },
  { category: 'Green', color: "#008000", colorDarker: "#006000" },
  { category: 'Green', color: "#008011", colorDarker: "#006011" },
  { category: 'Green', color: "#008022", colorDarker: "#006022" },
  { category: 'Green', color: "#008033", colorDarker: "#006033" },
  { category: 'Green', color: "#008044", colorDarker: "#006044" },
  { category: 'Green', color: "#118044", colorDarker: "#116044" },
  { category: 'Green', color: "#228044", colorDarker: "#226044" },
  { category: 'Green', color: "#338044", colorDarker: "#336044" },
  { category: 'Green', color: "#448044", colorDarker: "#446044" },
  { category: 'Blue', color: "#0000ff", colorDarker: "#0000cc" },
  { category: 'Blue', color: "#1100ff", colorDarker: "#1100cc" },
  { category: 'Blue', color: "#1111ff", colorDarker: "#1111cc" },
  { category: 'Blue', color: "#1122ff", colorDarker: "#1122cc" },
  { category: 'Blue', color: "#1133ff", colorDarker: "#1133cc" },
  { category: 'Blue', color: "#1144ff", colorDarker: "#1144cc" },
  { category: 'Blue', color: "#2244ff", colorDarker: "#2244cc" },
  { category: 'Blue', color: "#2233ff", colorDarker: "#2233cc" },
  { category: 'Blue', color: "#2211ff", colorDarker: "#2211cc" },
  { category: 'Blue', color: "#2200ff", colorDarker: "#2200cc" },
  { category: 'Yellow', color: "#ffff00", colorDarker: "#ffee00" },
  { category: 'Yellow', color: "#ffff11", colorDarker: "#ffee11" },
  { category: 'Yellow', color: "#ffff22", colorDarker: "#ffee22" },
  { category: 'Yellow', color: "#ffff33", colorDarker: "#ffee33" },
  { category: 'Yellow', color: "#ffff44", colorDarker: "#ffee44" },
  { category: 'Yellow', color: "#ffff55", colorDarker: "#ffee55" },
  { category: 'Yellow', color: "#ffff66", colorDarker: "#ffee66" },
  { category: 'Yellow', color: "#ffff77", colorDarker: "#ffee77" },
  { category: 'Yellow', color: "#ffff88", colorDarker: "#ffee88" },
  { category: 'Yellow', color: "#ffff99", colorDarker: "#ffee99" },
  { category: 'Violet', color: "#800080", colorDarker: "#700070" },
  { category: 'Violet', color: "#801180", colorDarker: "#701170" },
  { category: 'Violet', color: "#802280", colorDarker: "#702270" },
  { category: 'Violet', color: "#803380", colorDarker: "#703370" },
  { category: 'Violet', color: "#804480", colorDarker: "#704470" },
  { category: 'Violet', color: "#804580", colorDarker: "#704570" },
  { category: 'Violet', color: "#803580", colorDarker: "#703570" },
  { category: 'Violet', color: "#802580", colorDarker: "#702570" },
  { category: 'Violet', color: "#801580", colorDarker: "#701570" },
  { category: 'Violet', color: "#800580", colorDarker: "#700570" },
];


function App() {
  // filter color category
  const [filterSelect, setFilterSelect] = useState("all");
  // darker color
  const [colorDarker, setColordarker] = useState(false);
  // handle filter selected
  const _handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => setFilterSelect(event.target.value);

  return (
    <div className="app-container">
      <div className="filter-container">
        {/* filter input filter */}
        <select value={filterSelect} name="filterColor" onChange={_handleSelect}>
          <option value="all">All Color</option>
          {/* loop grouped data by category */}
          {Object.keys(_.groupBy(colorDatas, 'category')).map((item, index) => {
            return (
              <option value={item} key={index}>{item}</option>
            )
          })}
        </select>
        {/* end filter input filter */}
        {/* checkbox input filter */}
        <label>Darker
          <input type="checkbox" checked={colorDarker} onChange={() => setColordarker(!colorDarker)}></input>
        </label>
        {/* end checkbox input filter */}
      </div>
      {/* box */}
      <div className="box-container">
        {/* loop through data */}
        {colorDatas.filter(item => {
          if (filterSelect === 'all') {
            return true
          } else {
            return item.category === filterSelect
          }
        }).map((item, index) => {
          return <div style={{backgroundColor: colorDarker ? item.colorDarker : item.color}} className="box" key={index}></div>
        })}
      </div>
    </div>
  );
}


export default App;
