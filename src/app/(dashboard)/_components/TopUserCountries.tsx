<<<<<<< HEAD
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

// Define our data type
interface CountryData {
  country: string
  code: string
  percentage: number
  flag: string
}

// Sample data for different years
const countryDataByYear: { [key: string]: CountryData[] } = {
  "2024": [
    { country: "United States", code: "US", percentage: 90, flag: "🇺🇸" },
    { country: "Canada", code: "CA", percentage: 26, flag: "🇨🇦" },
    { country: "Mexico", code: "MX", percentage: 18, flag: "🇲🇽" },
    { country: "Thailand", code: "TH", percentage: 14, flag: "🇹🇭" },
    { country: "Germany", code: "DE", percentage: 92, flag: "🇩🇪" },
  ],
  "2023": [
    { country: "United States", code: "US", percentage: 28, flag: "🇺🇸" },
    { country: "Canada", code: "CA", percentage: 24, flag: "🇨🇦" },
    { country: "Brazil", code: "BR", percentage: 20, flag: "🇧🇷" },
    { country: "India", code: "IN", percentage: 16, flag: "🇮🇳" },
    { country: "Australia", code: "AU", percentage: 12, flag: "🇦🇺" },
  ],
  "2022": [
    { country: "United States", code: "US", percentage: 25, flag: "🇺🇸" },
    { country: "United Kingdom", code: "GB", percentage: 22, flag: "🇬🇧" },
    { country: "Japan", code: "JP", percentage: 20, flag: "🇯🇵" },
    { country: "France", code: "FR", percentage: 18, flag: "🇫🇷" },
    { country: "Spain", code: "ES", percentage: 15, flag: "🇪🇸" },
  ],
}

// Color scheme for all years
const colorScheme = ["#e8eaf6", "#1a237e"]

declare global {
  interface Window {
 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any
=======
"use client";

import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/SidebarScrollArea";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

// Define our data type
interface CountryData {
  country: string;
  code: string;
  percentage: number;
  flag: string;
}

interface Response {
  status: boolean;
  message: string;
  data: {
    [key: string]: CountryData[];
  };
}

// Sample data for different years

// Color scheme for all years
const colorScheme = ["#e8eaf6", "#1a237e"];

declare global {
  interface Window {
    google: any;
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
  }
}

export default function GeoChart() {
<<<<<<< HEAD
  const [year, setYear] = useState("2024")
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script")
      script.src = "https://www.gstatic.com/charts/loader.js"
=======
  const [year, setYear] = useState("2025");
  const [zoom, setZoom] = useState(1);
  const [activeButton, setActiveButton] = useState<"plus" | "minus" | null>(
    null
  );

  const { isLoading, data, isError, error } = useQuery<Response>({
    queryKey: ["top-user-countries", year],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/country-percentage?year=${year}`
      ).then((res) => res.json()),
  });

  const countryDataByYear: { [key: string]: CountryData[] } = useMemo(() => {
    return data?.data || {};
  }, [data?.data]);

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
      script.onload = () => {
        if (window.google) {
          window.google.charts.load("current", {
            packages: ["geochart"],
<<<<<<< HEAD
          })
          window.google.charts.setOnLoadCallback(drawChart)
        }
      }
      document.head.appendChild(script)
    }

    const drawChart = () => {
      if (!window.google || !window.google.visualization) return

      const data = new window.google.visualization.DataTable()
      data.addColumn("string", "Country")
      data.addColumn("number", "Percentage")

      countryDataByYear[year].forEach(({ code, percentage }) => {
        data.addRow([code, percentage])
      })

      const chart = new window.google.visualization.GeoChart(document.getElementById("geo-chart"))
=======
          });
          window.google.charts.setOnLoadCallback(drawChart);
        }
      };
      document.head.appendChild(script);
    };

    const drawChart = () => {
      if (!window.google || !window.google.visualization) return;

      const data = new window.google.visualization.DataTable();
      data.addColumn("string", "Country");
      data.addColumn("number", "Percentage");

      countryDataByYear[year]?.forEach(({ code, percentage }) => {
        data.addRow([code, percentage]);
      });

      const chart = new window.google.visualization.GeoChart(
        document.getElementById("geo-chart")
      );
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e

      const options = {
        colorAxis: { colors: colorScheme },
        backgroundColor: "#ffffff",
        datalessRegionColor: "#f5f5f5",
        defaultColor: "#f5f5f5",
        legend: "none",
        zoom,
<<<<<<< HEAD
      }

      chart.draw(data, options)
    }

    loadGoogleCharts()

    const handleResize = () => {
      if (window.google && window.google.visualization) {
        drawChart()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [zoom, year])

  return (
    <Card className="w-full max-w-5xl mx-auto col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-[28px] text-gradient font-bold">Top User Countries</CardTitle>
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-[90px] bg-primary text-white focus:ring-0">
            <SelectValue>{year}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <div className="relative">
          <div id="geo-chart" className="w-full h-[400px]" />
          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            <Button variant="secondary" size="icon" onClick={() => setZoom((prev) => Math.min(prev + 0.5, 4))}>
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={() => setZoom((prev) => Math.max(prev - 0.5, 1))}>
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {countryDataByYear[year].map(({ country, percentage, flag }) => (
            <div key={country} className="flex items-center gap-2">
              <span className="w-8">{flag}</span>
              <span className="w-32">{country}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: colorScheme[1],
                  }}
                />
             
              </div>
              <span className="w-12 text-right font-medium">{percentage}%</span>
            </div>
          ))}
        </div>
        
      </CardContent>
    </Card>
  )
}

=======
      };

      chart.draw(data, options);
    };

    loadGoogleCharts();

    const handleResize = () => {
      if (window.google && window.google.visualization) {
        drawChart();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [zoom, year, data?.data, countryDataByYear]);

  let content;

  if (isLoading) {
    content = (
      <div className="w-full max-w-5xl mx-auto col-span-4 h-[300px] flex gap-x-2 justify-center items-center">
        <Loader2 className="animate-spin" />
        <p>Loading...</p>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Failed to get data"} />
    );
  } else if (data) {
    content = (
      <Card className="w-full max-w-5xl mx-auto col-span-4">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-[28px] font-semibold text-[#494949]">
            Top User Countries
          </CardTitle>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[90px] bg-primary text-white focus:ring-0">
              <SelectValue>{year}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent>
          <div className="relative">
            <div id="geo-chart" className="w-full h-[576px]" />
            <div className="absolute">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => {
                  setZoom((prev) => Math.min(prev + 0.5, 4));
                  setActiveButton("plus");
                }}
                className={
                  activeButton === "plus" ? "bg-primary text-white" : ""
                }
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => {
                  setZoom((prev) => Math.max(prev - 0.5, 1));
                  setActiveButton("minus");
                }}
                className={`ml-4 ${
                  activeButton === "minus" ? "bg-primary text-white" : ""
                }`}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[254px] w-full">
            <div className="mt-16 space-y-4">
              {countryDataByYear[year]?.map(({ country, percentage, flag }) => (
                <div key={country} className="flex items-center gap-2">
                  <Image
                    src={flag}
                    alt={`${country} flag`}
                    width={24}
                    height={18}
                    className="w-8 h-auto rounded-sm"
                  />
                  <span className="w-32">{country}</span>
                  <div className="flex-1 h-[18px] bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: colorScheme[1],
                      }}
                    />
                  </div>
                  <span className="w-12 text-right  font-medium z-40">
                    {percentage}%
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    );
  }

  return content;
}
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
