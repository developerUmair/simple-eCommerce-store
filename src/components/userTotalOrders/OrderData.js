import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import LaunchIcon from "@mui/icons-material/Launch";

// function createData(order_id, calories, fat, carbs, protein) {
//   return {
//     order_id,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

const ordersData = [
  {
    order_id: "AKN12508",
    customer_name: "Selena Olivera",
    product_title: "Nike Tshirt",
    delivery_date: "12.04.2021",
    delivery_price: "24.90",
    delivery_status: "Resitute",
    delivery_payment: "Credit Card",
    icon: <LaunchIcon />,
  },
  {
    order_id: "SRT32123",
    customer_name: "Alexandre Selinelli",
    product_title: "Adidas Hat",
    delivery_date: "22.05.2021",
    delivery_price: "19.90",
    delivery_status: "Complete",
    delivery_payment: "Back Transfer",
    icon: <LaunchIcon />,
  },
  {
    order_id: "TML30321",
    customer_name: "Selman Kalman",
    product_title: "Hummel Sneakers",
    delivery_date: "08.03.2021",
    delivery_price: "89.90",
    delivery_status: "Complete",
    delivery_payment: "Credit Card",
    icon: <LaunchIcon />,
  },
  {
    order_id: "KKA45012",
    customer_name: "David Dorenli",
    product_title: "Puma Shorts",
    delivery_date: "16.06.2021",
    delivery_price: "19.90",
    delivery_status: "Restitute",
    delivery_payment: "Credit Card",
    icon: <LaunchIcon />,
  },
  {
    order_id: "NNP23421",
    customer_name: "Marcus Genihales",
    product_title: "Nike Gloves",
    delivery_date: "24.04.2021",
    delivery_price: "39.90",
    delivery_status: "Continue",
    delivery_payment: "Bank Transfer",
    icon: <LaunchIcon />,
  },
  {
    order_id: "TTS23089",
    customer_name: "Kemal Solomon",
    product_title: "Nike Hat",
    delivery_date: "14.04.2021",
    delivery_price: "29.90",
    delivery_status: "Canceled",
    delivery_payment: "Bank Transfer",
    icon: <LaunchIcon />,
  },
  {
    order_id: "KLB24010",
    customer_name: "Henry Kweale",
    product_title: "Adidas Sneakers",
    delivery_date: "12.05.2021",
    delivery_price: "99.90",
    delivery_status: "Complete",
    delivery_payment: "Credit Card",
    icon: <LaunchIcon />,
  },
  {
    order_id: "ABL90821",
    customer_name: "Hanna Marina",
    product_title: "Puma Bag",
    delivery_date: "01.06.2021",
    delivery_price: "39.90",
    delivery_status: "Continue",
    delivery_payment: "Paypal",
    icon: <LaunchIcon />,
  },
  {
    order_id: "HJS09213",
    customer_name: "Stevan Kolman",
    product_title: "Nike Bag",
    delivery_date: "30.02.2021",
    delivery_price: "49.90",
    delivery_status: "Canceled",
    delivery_payment: "Bank Transfer",
    icon: <LaunchIcon />,
  },
  {
    order_id: "HP030421",
    customer_name: "Haruna Mahmudi",
    product_title: "Adidas Sneakers",
    delivery_date: "24.06.2021",
    delivery_price: "79.90",
    delivery_status: "Restitute",
    delivery_payment: "Credit Card",
    icon: <LaunchIcon />,
  },
  {
    order_id: "HRS12040",
    customer_name: "Selen Selman",
    product_title: "Hummel Hat",
    delivery_date: "12.06.2021",
    delivery_price: "14.90",
    delivery_status: "Complete",
    delivery_payment: "Bank Transfer",
    icon: <LaunchIcon />,
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "order_id",
    numeric: false,
    disablePadding: true,
    label: "Order ID",
  },
  {
    id: "customer_name",
    numeric: true,
    disablePadding: false,
    label: "Cusotmer",
  },
  {
    id: "product_title",
    numeric: true,
    disablePadding: false,
    label: "Order",
  },
  {
    id: "delivery_date",
    numeric: true,
    disablePadding: false,
    label: "Delivery Date",
  },
  {
    id: "delivery_price",
    numeric: true,
    disablePadding: false,
    label: "Delivery Pricing",
  },
  {
    id: "delivery_status",
    numeric: true,
    disablePadding: false,
    label: "Delivery Status",
  },
  {
    id: "delivery_payment",
    numeric: true,
    disablePadding: false,
    label: "Payment",
  },
  {
    id: "icon",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            style={{ fontWeight: "bold" }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Customer order details
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const OrderData = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = ordersData.map((n) => n.order_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, order_id) => {
    const selectedIndex = selected.indexOf(order_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, order_id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (order_id) => selected.indexOf(order_id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ordersData.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={ordersData.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(ordersData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.order_id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.order_id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.order_id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        style={{ color: "gray", fontWeight: "bold" }}
                      >
                        {row.order_id}
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        {row.customer_name}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "gray", fontWeight: "bold" }}
                      >
                        {row.product_title}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "gray", fontWeight: "bold" }}
                      >
                        {row.delivery_date}
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bold" }}>
                        ${row.delivery_price}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "gray", fontWeight: "bold" }}
                      >
                        {row.delivery_status}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "gray", fontWeight: "bold" }}
                      >
                        {row.delivery_payment}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ color: "gray", fontWeight: "bold" }}
                      >
                        {row.icon}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={ordersData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};

export default OrderData;
