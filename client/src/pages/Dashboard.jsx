import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import { API_ROOT, TAB_URLS } from "~/utils/constants";
import { Button } from "@mui/material";
import authorizedAxiosInstance from "~/utils/authorizedAxios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { handleLogoutAPI } from "~/apis";
import BgAutumn from "~/assets/bg-huy.jpg";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Function  đơn giản có nhiệm vụ lấy ra các giá trị tab dựa theo url sau khi refresh trang
  const getDefaultActivetab = () => {
    let activeTab = "dashboard";
    TAB_URLS.forEach((tab) => {
      if (location.pathname.includes(tab.value)) activeTab = tab.value;
    });
    return activeTab;
  };
  const [tab, setTab] = useState(getDefaultActivetab());
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        `${API_ROOT}/v1/dashboards/access`
      );
      const userInfoFromLocalStorage = localStorage.getItem("userInfo");

      setUser(res.data);
    };
    fetchData();
  }, []);

  if (!user) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress />
        <Typography>Loading dashboard user...</Typography>
      </Box>
    );
  }

  const handleLogout = async () => {
    await handleLogoutAPI();
    //navigate ve trang login
    navigate("/login");
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 1em",
        gap: "2",
      }}
    >
      <Box
        as={Link}
        to="https://www.facebook.com/nguyen.huy.136310?locale=vi_VN"
        target="blank"
      >
        <Box
          component={"img"}
          sx={{
            width: "100%",
            height: "100px",
            borderRadius: "6px",
            objectFit: "cover",
          }}
          src={BgAutumn}
        />
      </Box>
      <Alert
        severity="info"
        sx={{
          ".MuiAlert-message": { overflow: "hidden" },
          width: { md: "max-content" },
        }}
      >
        Đây là trang Dashboard sau khi user:&nbsp;
        <Typography
          variant="span"
          sx={{ fontWeight: "bold", "&:hover": { color: "#fdba26" } }}
        >
          {user?.email}
        </Typography>
        &nbsp; đăng nhập thành công thì mới cho truy cập vào.
      </Alert>
      <Alert
        severity="success"
        variant="outlined"
        sx={{
          ".MuiAlert-message": { overflow: "hidden" },
          width: { md: "max-content" },
          marginTop: "8px",
        }}
      >
        Role hiện tại đang đăng nhập là:&nbsp;
        <Typography
          variant="span"
          sx={{ fontWeight: "bold", "&:hover": { color: "#fdba26" } }}
        >
          {user?.role}
        </Typography>
      </Alert>

      {/* Phân quyền truy cập. Sử dụng MUI tabs cho đơn giản để test các trang khác nhau. */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {TAB_URLS.map((item) => (
                <Tab
                  key={item.value}
                  label={item.name}
                  value={item.value}
                  component={Link}
                  to={item.route}
                />
              ))}
            </TabList>
          </Box>
          {TAB_URLS.map((item) => (
            <TabPanel key={item.value} value={item.value}>
              <Alert severity="success" sx={{ width: "max-content" }}>
                Nội dung trang {item.name}
              </Alert>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Button
        type="button"
        variant="contained"
        color="info"
        size="large"
        sx={{ mt: 2, maxWidth: "min-content", alignSelf: "flex-end" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Dashboard;
