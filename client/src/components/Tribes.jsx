import Tribe from "./Tribe";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTheTribes } from "../store/actions/tribes";
import Spinner from "react-bootstrap/Spinner";

export default function Tribes() {
  const dispatch = useDispatch();
  const tribes = useSelector((state) => state.tribes.tribesList);
  const loading = useSelector((state) => state.tribes.loading);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(fetchTheTribes());
    }
    return () => {
      ignore = true;
    };
  }, [dispatch]);

  const tribesList = tribes.map((tribe) => (
    <Tribe
      key={tribe.id}
      id={tribe.id}
      name={tribe.name}
      department={tribe.department}
    ></Tribe>
  ));

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div className="container-fluid main-employees p-10 align-items-center ">
        <table className="table table-hover shadow p-3 mb-5 bg-body rounded my-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>{tribesList}</tbody>
        </table>
      </div>
    );
  }
}
