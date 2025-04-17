import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <iframe
        title="SMA_Sales_pretty"
        src="https://app.powerbi.com/reportEmbed?reportId=5ddbc341-8e81-41db-ab90-64a76c5d84dc&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1"
        frameborder="0"
        allowFullScreen="true"
        className=" reportClass"
      ></iframe>
    </>
  );
};

export default Dashboard;
