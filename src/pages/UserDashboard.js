import Dashboard from "@/Components/userDashboard";
import ChoosingArea from "@/Components/userDashboard/widget/areasChoice";
import ChoosingPayAmount from "@/Components/userDashboard/widget/choosingPayAmount/ChoosingPayAmount";
import Date_Time from "@/Components/userDashboard/widget/date-time";
import ConfirmInfo from "@/Components/userDashboard/widget/informationConfirm";
import UserInformation from "@/Components/userDashboard/widget/registerForm";
import ReservationDone from "@/Components/userDashboard/widget/reservationDone/ReservationDone";
import Unsucces_Transaction from "@/Components/userDashboard/widget/unsuccessfull-transaction/Unsucces_Transaction";
import React from "react";

const UserDashboard = () => {
  const [page, setPage] = React.useState(0);
  const success = true;
  return (
    <>
      {page === 0 ? <Dashboard page={page} setPage={setPage} /> : null}
      {page === 1 ? <ChoosingArea page={page} setPage={setPage} /> : null}
      {page === 2 ? <Date_Time page={page} setPage={setPage} /> : null}
      {page === 3 ? <UserInformation page={page} setPage={setPage} /> : null}
      {page === 4 ? <ConfirmInfo page={page} setPage={setPage} /> : null}
      {page === 5 ? <ChoosingPayAmount page={page} setPage={setPage} /> : null}
      {success
        ? page === 6 && <ReservationDone page={page} setPage={setPage} />
        : page === 6 && <Unsucces_Transaction page={page} setPage={setPage} />}
    </>
  );
};

export default UserDashboard;
