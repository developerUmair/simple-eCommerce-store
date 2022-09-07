import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Avatar, Checkbox, TablePagination, Typography } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Stack } from "@mui/system";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ReplayCircleFilledRoundedIcon from "@mui/icons-material/ReplayCircleFilledRounded";

const userData = [
  {
    id: 1,
    hash: "1019",
    date: "1 Oct, 14:42",
    status: "Paid",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    image_url: "../assets/images/user-1.jpg",
    customer_name: "Gracyn Schaefer",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 2,
    hash: "1018",
    date: "30 Sep, 23:01",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-2.jpg",
    customer_name: "Anthan Travis",
    purchased: "Mastering the Grid + 2 more,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 3,
    hash: "1017",
    date: "30 Sep, 21:21",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-3.jpg",
    customer_name: "veryberry@gmail.com",
    purchased: "Splashify 2.0,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 4,
    hash: "1016",
    date: "29 Sep, 09:32",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-4.jpg",
    customer_name: "meloncholy@yahoo.com",
    purchased: "plashify 2.0",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 5,
    hash: "1015",
    date: "28 Sep, 04:20",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-5.jpg",
    customer_name: "Lian Oneill",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 6,
    hash: "1014",
    date: "28 Sep, 07:11",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-6.jpg",
    customer_name: "Jason Schuller",
    purchased: "plashify 2.0",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 6,
    hash: "1013",
    date: "28 Sep, 01:00",
    status_icon: <ReplayCircleFilledRoundedIcon color="primary" />,
    status: "Refunded",
    image_url: "../assets/images/user-7.jpg",
    customer_name: "nopulp@email.com",
    purchased: "plashify 2.0 + 1 more",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 7,
    hash: "1012",
    date: "27, Sep, 22:46",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-8.jpg",
    customer_name: "Eva Calvert",
    purchased: "Mastering the Grid",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 8,
    hash: "1011",
    date: "27 Sep, 17:12",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-9.jpg",
    customer_name: "citrus4eva@gmail.com",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 9,
    hash: "1010",
    date: "27 Sep, 11:58",
    status_icon: <CancelOutlinedIcon sx={{ color: "red" }} />,
    status: "Chargeback",
    image_url: "../assets/images/user-10.jpg",
    customer_name: "Monroe Bond",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 10,
    hash: "1009",
    date: "26 Sep, 10:19",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-11.jpg",
    customer_name: "Ricardo Lunsford",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 11,
    hash: "1008",
    date: "23 Sep, 07:23",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-12.jpg",
    customer_name: "Dustin Mock",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 12,
    hash: "1007",
    date: "21 Seo, 23:11",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-13.jpg",
    customer_name: "Lauren Trujillo",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 13,
    hash: "1006",
    date: "20 Sep, 08:17",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-14.jpg",
    customer_name: "Make Lemonade",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 14,
    hash: "1005",
    date: "05, Oct, 10:00",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-15.jpg",
    customer_name: "Leonardo",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 15,
    hash: "1004",
    date: "19 Oct, 16:42",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-16.jpg",
    customer_name: "Maxmillian",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 16,
    hash: "1003",
    date: "1 Dec, 09:42",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-17.jpg",
    customer_name: "Arnold Schwartz..",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 17,
    hash: "1002",
    date: "05 Mar, 05:00",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-18.jpg",
    customer_name: "Biggy boy",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
  {
    id: 18,
    hash: "1001",
    date: "10 Nov, 09:30",
    status_icon: <CheckCircleOutlineRoundedIcon color="success" />,
    status: "Paid",
    image_url: "../assets/images/user-19.jpg",
    customer_name: "CS Jackie",
    purchased: "Wifeframing kit for figma,",
    price: 9.99,
    more: <MoreHorizIcon />,
  },
];

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell align="left">
              <TagIcon />
            </TableCell>

            <TableCell align="left">
              <Stack direction="row" spacing={2} fontWeight={"bold"}>
                Date
                <ArrowDownwardIcon />
              </Stack>
            </TableCell>

            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Customer
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Purchased
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Revenue
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data) => (
              <TableRow
                key={data.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Checkbox />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "gray", fontWeight: "bold" }}
                >
                  #{data.hash}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "gray", fontWeight: "bold" }}
                >
                  {data.date}
                </TableCell>
                <TableCell align="left">
                  <Stack direction="row" spacing={2}>
                    {data.status_icon}
                    <Typography fontSize={"15px"} sx={{ fontWeight: "bold" }}>
                      {data.status}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell align="left">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Cindy Baker"
                      sx={{ width: 30, height: 30, cursor: "pointer" }}
                      src={data.image_url}
                    />
                    <Typography fontSize={"15px"} sx={{ fontWeight: "bold" }}>
                      {data.customer_name}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "gray", fontWeight: "bold" }}
                >
                  {data.purchased}
                </TableCell>
                <TableCell align="left" sx={{ fontWeight: "bold" }}>
                  ${data.price}
                </TableCell>
                <TableCell align="left" sx={{ color: "gray" }}>
                  {data.more}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        sx={{ backgroundColor: "#eeeeee" }}
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
