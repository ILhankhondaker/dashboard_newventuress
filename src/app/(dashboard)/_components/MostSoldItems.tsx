<<<<<<< HEAD
import React from 'react'

async function getData() {
    return [
      { name: "Flower", percentage: 70 },
      { name: "Topical", percentage: 40 },
      { name: "Apprel", percentage: 60 },
      { name: "Edibels", percentage: 80 },
      { name: "Vape Products", percentage: 20 },
      { name: "Concentrations", percentage: 20 },
      { name: "Others", percentage: 60 },
    ]
  }
  async function MostSoldItems () {

    const items = await getData()
  return (
    <div className="bg-white rounded-[8px] p-6 w-full col-span-2 mb-[30px]">
    <h2 className="text-[28px] text-gradient font-semibold mb-6">Most Sold Items</h2>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.name}>
          <div className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>{item.percentage}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-[#1a237e] rounded-full transition-all"
              style={{ width: `${item.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>



  </div>
  )
}

export default MostSoldItems
=======
const items = [
  { name: "Flower", percentage: 70 },
  { name: "Topical", percentage: 40 },
  { name: "Apprel", percentage: 60 },
  { name: "Edibels", percentage: 80 },
  { name: "Vape Products", percentage: 20 },
  { name: "Concentrations", percentage: 20 },
  { name: "Others", percentage: 60 },
];
async function MostSoldItems() {
  return (
    <div className="bg-white rounded-[8px] p-6 w-full  mb-[30px]">
      <h2 className="text-[28px] text-[#494949] font-semibold mb-6">Most Sold Items</h2>
      <div className="space-y-4 text-[#000000] font-semibold">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-2 ">
              <span>{item.name}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full">
              <div
                className="h-4 bg-[#1a237e] rounded-full transition-all "
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostSoldItems;
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
