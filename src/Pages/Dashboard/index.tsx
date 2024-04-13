import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

export default function DashboardPage() {
  const { getToken } = useAuth();

  async function callApi() {
    await axios.post(
      "http://localhost:5062/api/v1/auth",
      {
        guizin: "osapeca",
      },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
  }

  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li>
          <Link to="/dashboard/invoices">Invoices</Link>
        </li>
        <li>
          <Button onClick={callApi}>Call API</Button>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
}
