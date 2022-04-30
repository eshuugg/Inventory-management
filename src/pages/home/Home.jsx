import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import Chart from "../../components/charts/Chart"
import { userData } from "../../dummyData";


export default function Home() {  

  return (
    <div className="home">
      <FeaturedInfo className />
      {/* <Chart data={userData} title="User Analytics" grid dataKey={"Active User"} /> */}
      <div className="homeWidget">
      </div>
    </div>
  )
}
