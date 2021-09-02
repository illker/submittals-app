import TableData from "../components/TableData";
import SubmittalsLogo from '../assets/img/submittals-logo.svg'

const Dashboard = () => {
  return (
    <div>
      <img
          src={SubmittalsLogo}
          alt="Submittals logo App"
          style={{
            width: "250px",
            padding: "5px",
            margin: "15px",
          }}
        />
      <TableData />
    </div>
  );
};


export default Dashboard;
