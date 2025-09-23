import {
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  FileTextOutlined,
  PlusOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TablePagination from "../../../commoncomponents/TablePagination/TablePagination";
import BadgeStatus from "../../../commoncomponents/BadgeStatus/BadgeStatus";
import InputBox from "../../../commoncomponents/InputBox/InputBox";
import { Link } from "react-router-dom";
import TableSorting from "../../../commoncomponents/TableSorting/TableSorting";
//   import AddModal from "../../commoncomponents/AddModal/AddModal";
//   import FileUpload from "../../commoncomponents/FileUpload/FileUpload";
//   import CommonDialog from "../../pages/CommonDialog";
import {
  commonPatchValueForFile,
  formatDateTime,
  MessageActiveTitle,
  MessageAndTitle,
  StatusCode,
} from "../../../utils/commonEnum";
import Breadcrumb from "../../../commoncomponents/Breadcrumb/Breadcrumb";
import { useSnackbar } from "../../../utils/SnackbarProvider";
import { useFormik } from "formik";
import * as Yup from "yup";
import TotalRecords from "../../../commoncomponents/TablePagination/TotalRecords";

const PlantsSubscriberList = () => {
  const { showSnackbar } = useSnackbar();
  const [pageCount, setPageCount] = useState(0);
  const [paginationSize, setPaginationSize] = useState(10);
  const [selectedPage, setselectedPage] = useState(1);
  const [dataList, setDataList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(null);

  useEffect(() => {
    // Mock data with 5 entries
    const mockData = [
      {
        plantName: "Green Valley Solar Plant",
        subscriberName: "Adam",
        address: "123 Maple Street, Springfield, IL",
        phone_number: "9874232353",
        email: "adam@gmail.com",
        subscription_date: "25-02-2025",
        payment_method: "Razorpay",
        subscriberAmount: "$1,200,000",
        status: "Active",
      },
      {
        plantName: "Sunrise Energy Hub",
        subscriberName: "Sophia",
        address: "456 Solar Avenue, Phoenix, AZ",
        phone_number: "8745632145",
        email: "sophia@mail.com",
        subscription_date: "10-03-2025",
        payment_method: "PayPal",
        subscriberAmount: "$980,000",
        status: "Pending",
      },
      {
        plantName: "Eco Power Solutions",
        subscriberName: "James",
        address: "789 Renewable Road, Denver, CO",
        phone_number: "7854123698",
        email: "james@outlook.com",
        subscription_date: "18-01-2025",
        payment_method: "Stripe",
        subscriberAmount: "$1,500,000",
        status: "Active",
      },
      {
        plantName: "SolarTech Innovations",
        subscriberName: "Olivia",
        address: "321 Innovation Lane, San Diego, CA",
        phone_number: "9658741256",
        email: "olivia@yahoo.com",
        subscription_date: "05-02-2025",
        payment_method: "Google Pay",
        subscriberAmount: "$850,000",
        status: "Inactive",
      },
      {
        plantName: "Blue Horizon Solar",
        subscriberName: "William",
        address: "159 Eco Street, Austin, TX",
        phone_number: "7412589632",
        email: "william@example.com",
        subscription_date: "22-04-2025",
        payment_method: "Apple Pay",
        subscriberAmount: "$1,100,000",
        status: "Active",
      },
      {
        plantName: "Bright Future Energy",
        subscriberName: "Emma",
        address: "753 Solar Boulevard, Orlando, FL",
        phone_number: "8523697412",
        email: "emma@company.com",
        subscription_date: "15-06-2025",
        payment_method: "Bank Transfer",
        subscriberAmount: "$920,000",
        status: "Pending",
      },
      {
        plantName: "Golden Rays Power",
        subscriberName: "Michael",
        address: "852 Renewable Lane, Sacramento, CA",
        phone_number: "9632587415",
        email: "michael@services.com",
        subscription_date: "01-07-2025",
        payment_method: "Credit Card",
        subscriberAmount: "$1,800,000",
        status: "Active",
      },
    ];

    setDataList(mockData);
  }, []);

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    // validationSchema: Yup.object({
    //   search: Yup.string().required("Brand Name/Brand Model is required"),
    // }),
    onSubmit: () => {
      // if(csvDownload){
      //     downloadBrandModelInfo()
      // }else{
      //     fetchBrandDetails();
      // }
    },
  });


  // change select dropdown pagination size
  function getPageSize(paginationValue) {
    setPaginationSize(paginationValue);
  }

  // change textfield pagination values
  function getPageCount(changeValues) {
    setselectedPage(parseInt(changeValues));
  }

  const tableHeading = [
    { id: "sNo", header: "S.No." },
    { id: "plantName", header: "Plant Name" },
    { id: "subscriberName", header: "Subscriber Name" },
    { id: "phone_number", header: "Mobile" },
    { id: "email", header: "Email" },
    { id: "subscription_date", header: "Subscription Date" },
    { id: "payment_method", header: "Payment Method" },
    { id: "action", header: "Action" },
  ];



  const [visibleColumns, setVisibleColumns] = useState(
    tableHeading.reduce((acc, column) => {
      acc[column.id] = true;
      return acc;
    }, {})
  );


  const empListingdata = {
    title: "Plant's Subscribers",
  };

  return (
    <React.Fragment>
      <>
        {/* page heading */}
        <Grid container item xs={12} className="headingSeparate">
          <Grid item xs={12} sm={4} md={3} lg={1.5}>
            <Breadcrumb {...empListingdata} />
          </Grid>

          <Grid item xs={12} sm={5} md={5} lg={3.5} className="!mt-4 md:!mt-0">
            <InputBox
              size="small"
              type="text"
              className="bg-primary-Color6"
              label="Search"
              InputLabelProps={{
                shrink: true,
              }}
              name="search"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.search}
              // error={formik?.touched?.search && Boolean(formik?.errors?.search)}
              // helperText={formik?.touched?.search && formik?.errors?.search}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => formik.handleSubmit()}>
                    <SearchOutlined className="text-lg" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>

          <Grid item xs={12} sm={3} md={4} lg={7} className="rightSection">

            <Link className="mr-2" to={"/plant-add"}>
              <Tooltip title="Add Ticket" placement="bottom" arrow>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  className="buttonStyle"
                >
                  <PlusOutlined className="mr-0" />
                </Button>
              </Tooltip>
            </Link>
           
          </Grid>
        </Grid>
        <div className="mb-5 w-full">
          <TotalRecords totalRecords={totalRecords} />
        </div>

        {/* listing */}
        <Grid item xs={12}>
          <TableContainer component={Paper} className="tableShadow">
            <TableSorting tableData={dataList} initialOrderBy="brandName">
              {({ order, orderBy, tablesBody, handleSortRequest }) => (
                <Table size="small" aria-label="a dense table">
                  <TableHead className="tableHeads">
                    <TableRow>
                      {tableHeading.map(
                        (column) =>
                          visibleColumns[column.id] && (
                            <TableCell
                              className="tableAdminStyle"
                              key={column.id}
                              sortDirection={
                                orderBy === column.id ? order : false
                              }
                            >
                              {column.header !== "Action" ? (
                                <TableSortLabel
                                  active={orderBy === column.id}
                                  direction={
                                    orderBy === column.id ? order : "asc"
                                  }
                                  // onClick={() => handleSortRequest(column.id)}
                                >
                                  {column.header}
                                </TableSortLabel>
                              ) : (
                                column.header
                              )}
                            </TableCell>
                          )
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tablesBody && tablesBody.length > 0 ? (
                      tablesBody?.map((row, index) => (
                        <TableRow key={index} className="tableOdd">
                          {tableHeading.map(
                            (column) =>
                              visibleColumns[column.id] && (
                                <TableCell
                                  key={column.id}
                                  className="tableAdminCellStyle"
                                >
                                  {column.id === "status" ? (
                                    row.status === 1 ? (
                                      <Link
                                      // onClick={() => changeStatusClick(row)}
                                      >
                                        <BadgeStatus variant="active">
                                          Active
                                        </BadgeStatus>
                                      </Link>
                                    ) : (
                                      <Link
                                      // onClick={() => changeStatusClick(row)}
                                      >
                                        <BadgeStatus variant="deactive">
                                          Inactive
                                        </BadgeStatus>
                                      </Link>
                                    )
                                  ) 
                                  : column.id === "sNo" ? (
                                    index +
                                    1 +
                                    (selectedPage - 1) * paginationSize
                                  ) : column.id === "created_at" ? (
                                    formatDateTime(row.created_at)
                                  ) : column.id === "specify" ? (
                                    <Link
                                      className="flex items-center gap-3"
                                     
                                    >
                                      <Tooltip title="View" arrow>
                                        <EyeOutlined className="viewIcons" />
                                      </Tooltip>
                                    </Link>
                                  ) : 
                                  column.id !== "action" ? (
                                    row[column.id]
                                  ) : (
                                    <>
                                      

                                      <Link
                                        to={{
                                          pathname: `/plant-edit/${row.id}`,
                                        }}
                                        state={{ row }}
                                      >
                                        <Tooltip title="View" arrow>
                                          <EyeOutlined className="viewIcons" />
                                        </Tooltip>
                                      </Link>
                                     
                                    </>
                                  )}
                                </TableCell>
                              )
                          )}
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={tableHeading.length}
                          className="!text-center"
                        >
                          No data available
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
            </TableSorting>
          </TableContainer>

          <TablePagination
            pageCount={pageCount}
            selectedPage={selectedPage}
            paginationSize={paginationSize}
            getPageSize={getPageSize}
            getPageCount={getPageCount}
            maxPage={pageCount}
            totalRecords={totalRecords}
          />
        </Grid>

      </>
    </React.Fragment>
  );
};

export default PlantsSubscriberList;
