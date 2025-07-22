import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Tabs, Tab, Box, Typography, Paper, Grid, Avatar, IconButton,
  Divider, Button, Fab, Zoom,
} from '@mui/material';
import {
  Edit as EditIcon,
  Add as AddIcon,
  KeyboardArrowUp as UpIcon,
  Email, Phone, AddLocationAlt,
} from '@mui/icons-material';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { green } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import CartComponent from '../Home/AddToCart/CartComponent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { logout, userAllData } from '../../store/reduxSlice';

// TabPanel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

// FAB color map
const colors = {
  0: green[500],
  1: '#1976d2',
  2: '#f50057',
  3: '#ff9800',
};

export default function UserDashboard() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  const [user,setUser] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Placeholder modals control
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openAddressModal, setOpenAddressModal] = React.useState(false);


  const handleLogout =async ()=>{
    try{

      let res = await axios.get('http://localhost:3000/api/users/logout',{
        withCredentials:true
      });
      console.log(res)

      localStorage.setItem('userID',"");

      alert("Logged Out Successfully...")
      navigate('/')
      dispatch(logout());


    }catch(err)
    {
      alert("Something went wrong...")
    }
  }

  // Example User Data
//   const user = {
//     name: 'Jane Doe',
//     email: 'jane.doe@example.com',
//     mobile: '+1 234 567 8901',
//     profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
//     address: [
//       {
//         street: '123 Main St',
//         city: 'Springfield',
//         state: 'IL',
//         zip: '62704',
//         country: 'USA',
//         isDefault: true,
//       },
//     ],
//     cart: [
//       { id: 1, name: 'Wireless Headphones', quantity: 1, price: 99.99 },
//       { id: 2, name: 'Smart Watch', quantity: 2, price: 149.99 },
//     ],
//     orders: [
//       {
//         id: 'ORD123',
//         status: 'Delivered',
//         summary: 'Wireless Headphones, Smart Watch',
//         total: 399.97,
//         date: '2024-06-01',
//       },
//     ],
//   };


React.useEffect(()=>{

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users/auth", {
        withCredentials: true,
      });
      setUser(res.data);
      dispatch(userAllData(res.data));
    } catch (err) {
      console.error("Error fetching user:", err);
      alert("Failed to load user data.");
    }
  };

  fetchUser();

},[])


  const fabs = [
    {
      icon: <EditIcon />,
      label: 'Edit Profile',
    },
    {
      icon: <AddIcon />,
      label: 'Add to Cart',
    },
    {
      icon: <UpIcon />,
      label: 'Scroll to Top',
    },
    {
      icon: <EditIcon />,
      label: 'Edit Address',
    },
  ];

  return (
    <Box sx={{ width: '100%', position: 'relative', minHeight: 600 }}>
      <AppBar position="static" color="default" elevation={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="User Dashboard Tabs"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Cart Items" {...a11yProps(1)} />
          <Tab label="My Orders" {...a11yProps(2)} />
          <Tab label="Addresses" {...a11yProps(3)} />
          <Button color='error' onClick={handleLogout}>Logout</Button>
        </Tabs>
      </AppBar>

      {/* Profile Tab */}
  
<TabPanel value={value} index={0}>
  <Paper
    elevation={4}
    sx={{
      p: 4,
      borderRadius: 4,
      maxWidth: 500,
      mx: "auto",
      textAlign: "center",
      background: "linear-gradient(to right, #f9f9f9, #f1f1f1)",
    }}
  >
    <Avatar
      src={user.profileImage}
      alt={user.name}
      sx={{
        width: 100,
        height: 100,
        mx: "auto",
        mb: 2,
        boxShadow: 3,
        border: "3px solid #1976d2",
      }}
    />
    
    <Typography variant="h5" fontWeight={600} gutterBottom>
      {user.name}
      <IconButton
        size="small"
        onClick={() => setOpenEditModal(true)}
        sx={{ ml: 1 }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </Typography>

    <Divider sx={{ my: 2 }} />

    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      mb={1}
    >
      <EmailIcon color="primary" />
      <Typography variant="body1">{user.email}</Typography>
    </Box>

    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <PhoneIcon color="primary" />
      <Typography variant="body1">{user.mobile}</Typography>
    </Box>
  </Paper>
</TabPanel>

      {/* Cart Tab */}
      <TabPanel value={value} index={1}>
      <CartComponent/>
      </TabPanel>

      {/* Orders Tab */}
      <TabPanel value={value} index={2}>
        <Typography variant="h6">Your Orders</Typography>
        <Grid container spacing={2} mt={1}>
          {user.orders?.map((order) => (
            <Grid key={order.id} item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Typography>Order ID: {order.id}</Typography>
                <Typography>Status: {order.status}</Typography>
                <Typography>Total: ${order.total}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Address Tab */}
      <TabPanel value={value} index={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Saved Addresses</Typography>
          <Button startIcon={<AddLocationAlt />} onClick={() => setOpenAddressModal(true)}>
            Add Address
          </Button>
        </Box>
        <Grid container spacing={2} mt={1}>
          {user.address?.map((addr, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  border: addr.isDefault ? '2px solid #1976d2' : '1px solid #ccc',
                  borderRadius: 2,
                }}
              >
                <Typography>
                  {addr.street}, {addr.city}, {addr.state} {addr.zip}, {addr.country}
                </Typography>
                {addr.isDefault && (
                  <Typography color="primary" variant="caption">
                    Default Address
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Floating Action Buttons */}
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.label}
          in={value === index}
          timeout={{ enter: 300, exit: 300 }}
          unmountOnExit
        >
          <Fab
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              bgcolor: colors[index],
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              },
            }}
            color="primary"
            aria-label={fab.label}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
}
