  import { useEffect } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import { useRecoilValue } from "recoil";
  import { authAtom } from "../store/atoms/authAtom";
  import useRefreshToken from "./useRefreshToken";

  const useAuthRedirect = () => {
    const refresh = useRefreshToken();
    const auth = useRecoilValue(authAtom);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
      const verifyRefreshToken = async () => {
        try {
          await refresh();
        } catch (err) {
          console.error(err);
        }
      };

      if (!auth?.accessToken) {
        verifyRefreshToken();
      } else {
        navigate(from);
      }
    }, [auth, refresh, navigate, from]);

    return null;
  };

  export default useAuthRedirect;