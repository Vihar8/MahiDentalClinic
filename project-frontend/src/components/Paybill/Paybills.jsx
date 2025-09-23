import React, { useEffect, useState } from 'react';
import {
  CloseOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditFilled,
  EditOutlined,
  EyeOutlined,
  FileTextOutlined,
  MoreOutlined,
  PlusOutlined,
  SearchOutlined,
  ShareAltOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Breadcrumb from "../../commoncomponents/Breadcrumb/Breadcrumb";
import CloseIcon from '@mui/icons-material/Close';
import TableSorting from "../../commoncomponents/TableSorting/TableSorting";
import classes from "./paybill.module.scss";
import AddModal from '../../commoncomponents/AddModal/AddModal';
import InputBox from "../../commoncomponents/InputBox/InputBox";
import { useFormik } from "formik";
import * as yup from "yup";
import TotalRecords from '../../commoncomponents/TablePagination/TotalRecords';
import TablePagination from "../../commoncomponents/TablePagination/TablePagination";
import BadgeStatus from "../../commoncomponents/BadgeStatus/BadgeStatus";
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  // discom_id: yup.string().required("Discom Name is required"),
  // consumer_no: yup.string().required("Consumer No. is required"),
});

const Paybills = () => {
  const [open, setOpen] = useState(false);
  const [eleOpen, setEleOpen] = useState(false);
  const [disOpen, setDisOpen] = useState(false);
  const [disdeOpen, setDisdeOpen] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [selectedPage, setselectedPage] = useState(1);
  const [paginationSize, setPaginationSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Electricity modal
  const handleOpenele = () => setEleOpen(true);
  const handleCloseele = () => setEleOpen(false);

  //discom modal
  const handleOpendis = () => setDisOpen(true);
  const handleClosedis = () => setDisOpen(false);

  //discomde modal
  const handleOpendisde = () => setDisdeOpen(true);
  const handleClosedisde = () => setDisdeOpen(false);

  const empListingdata = {
    title: "Bill Pay",
  };

  const empListingtitle = {
    title: "Pay Bill Receipt List",
  };

  const discomList = [
    { id: "1", title: "Discom 1" },
    { id: "2", title: "Discom 2" },
    { id: "3", title: "Discom 3" },
  ];


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
    { id: "date", header: "Date" },
    { id: "discomname", header: "Discom Name" },
    { id: "receiptno", header: "Receipt No." },
    { id: "paymentmode", header: "Payment Mode" },
    { id: "action", header: "View Reciept" },
  ];



  const [visibleColumns, setVisibleColumns] = useState(
    tableHeading.reduce((acc, column) => {
      acc[column.id] = true;
      return acc;
    }, {})
  );


  useEffect(() => {
    // Mock data with 5 entries
    const mockData = [
      {
        date: "12-10-2024",
        discomname: "Torrent Pvt Ltd",
        paymentmode: "Internet Banking",
        receiptno: "AH2354111",
      },
      {
        date: "12-10-2024",
        discomname: "Torrent Pvt Ltd",
        paymentmode: "Internet Banking",
        receiptno: "AH2354111",
      },
      {
        date: "12-10-2024",
        discomname: "Torrent Pvt Ltd",
        paymentmode: "Internet Banking",
        receiptno: "AH2354111",
      },
      {
        date: "12-10-2024",
        discomname: "Torrent Pvt Ltd",
        paymentmode: "Internet Banking",
        receiptno: "AH2354111",
      },
      {
        date: "12-10-2024",
        discomname: "Torrent Pvt Ltd",
        paymentmode: "Internet Banking",
        receiptno: "AH2354111",
      },
    ];
    setDataList(mockData);
  }, []);

  const demoData = [
    { id: 1, name: "Torrents Pvt Ltd" },
    { id: 2, name: "Discom Name-2" },
    { id: 3, name: "Discom Name-3" },
  ];

  const handleProceedToPay = () => {
    handleClose(); // Close the Bill Details modal
    handleOpenele(); // Open the Electricity Settings modal
  }

  // Move the useFormik hook inside the component
  const formik = useFormik({
    initialValues: {
      discom_id: "",
      consumer_no: "",
    },
    validationSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const submitForm = (values) => {
    handleOpen()
    console.log(values); // Replace this with your form submission logic
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={12} className="headingSeparate">
          <Grid item xs={12} sm={4} md={3} lg={1.5}>
            <Breadcrumb {...empListingdata} />
          </Grid>
        </Grid>

        <Grid item xs={12} className={`${classes.maincontainer}`}>
          <Grid container direction="column">
            {demoData.map((item) => (
              <Grid key={item.id} container alignItems="center" justifyContent="space-between" className="p-4">
                {/* Text Content */}
                <Grid item container alignItems="center" spacing={2} xs>
                  <Grid item className='p-2'>
                    <p className={`${classes.title}`}>{item.name}</p>
                    <p className={`${classes.subtitle}`}>View or change Discom information</p>
                  </Grid>
                </Grid>

                {/* View Button */}
                <Grid item >
                  <Button variant="contained" color="success" size="small" className="btnStyle roundedBtn" sx={{ mr: 2 }}>
                    View
                  </Button>
                  <Button variant="contained" color="success" size="small" className="btnStyle roundedBtn" onClick={handleOpen}>
                    Pay Bill
                  </Button>
                </Grid>

                {/* Divider */}
                <Grid item sx={{ width: "100%", height: "1px", backgroundColor: "#D3D3D3", mt: 1 }}></Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* page heading */}
        <Grid container item xs={12} mt={2} className="headingSeparate">
          <Grid item xs={12} sm={4} md={3} lg={1.5}>
            <Breadcrumb {...empListingtitle} />
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
            {/* <Tooltip title="Excel Upload" placement="bottom" arrow>
                          <Button
                          variant="outlined"
                          color="warning"
                          size="small"
                          className="buttonStyle !mr-2"
                          onClick={() => handleOpen()}
                          >
                          <UploadOutlined className="mr-0" />
                          </Button>
                      </Tooltip>
              
                      <Tooltip title="Sample" placement="bottom" arrow>
                          <Button
                          variant="outlined"
                          color="warning"
                          size="small"
                          className="buttonStyle !mr-2"
                          >
                          <FileTextOutlined className="mr-0" />
                          </Button>
                      </Tooltip> */}

            {/* <Link className="mr-2" to={"/plant-add"}>
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
                      </Link> */}

            {/* <Tooltip title="Download" placement="bottom" arrow>
                              <Button
                                  onClick={() => setCsvDownload(true)}
                                  variant="contained"
                                  color="success"
                                  size="small"
                                  className="buttonStyle"
                              >
                                  <DownloadOutlined className="mr-0" />
                              </Button>
                          </Tooltip> */}
          </Grid>
        </Grid>
        <div className="mb-5 w-full">
          <TotalRecords
            totalRecords={totalRecords}
          />
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
                                      <Link>
                                        <BadgeStatus variant="active">
                                          Active
                                        </BadgeStatus>
                                      </Link>
                                    ) : (
                                      <Link>
                                        <BadgeStatus variant="deactive">
                                          Inactive
                                        </BadgeStatus>
                                      </Link>
                                    )
                                  ) : column.id === "sNo" ? (
                                    index + 1 + (selectedPage - 1) * paginationSize
                                  ) : column.id === "created_at" ? (
                                    formatDateTime(row.created_at)
                                  ) : column.id === "amount" ? ( // Assuming the amount column is identified as "amount"
                                    <span
                                      style={{
                                        color: row.amount.startsWith('-') ? 'red' : 'green'
                                      }}
                                    >
                                      {row.amount}
                                    </span>
                                  ) : column.id === "specify" ? (
                                    <Link className="flex items-center gap-3">
                                      <Tooltip title="View" arrow>
                                        <EyeOutlined className="viewIcons" />
                                      </Tooltip>
                                    </Link>
                                  ) : column.id === "photo_1" ? (
                                    <div className="flex">
                                      <Link className="flex items-center gap-3">
                                        <Tooltip title="View Photo 1" arrow>
                                          <EyeOutlined className="viewIcons" />
                                        </Tooltip>
                                      </Link>
                                      <Link className="flex items-center gap-3">
                                        <Tooltip title="View Photo 2" arrow>
                                          <EyeOutlined className="viewIcons" />
                                        </Tooltip>
                                      </Link>
                                      {row?.photo_3 && (
                                        <Link className="flex items-center gap-3">
                                          <Tooltip title="View Photo 3" arrow>
                                            <EyeOutlined className="viewIcons" />
                                          </Tooltip>
                                        </Link>
                                      )}
                                      {row?.photo_4 && (
                                        <Link className="flex items-center gap-3">
                                          <Tooltip title="View Photo 4" arrow>
                                            <EyeOutlined className="viewIcons" />
                                          </Tooltip>
                                        </Link>
                                      )}
                                    </div>
                                  ) : column.id !== "action" ? (
                                    row[column.id]
                                  ) : (
                                    <>
                                      {/* <Link
                                        to={{
                                          pathname: `/plant-edit/${row.id}`,
                                        }}
                                        state={{ row }}
                                      >
                                        <Tooltip title="Edit" arrow>
                                          <EditOutlined className="editIcons" />
                                        </Tooltip>
                                      </Link> */}
                                      <Tooltip title="View" arrow>
                                        <EyeOutlined className="viewIcons" />
                                      </Tooltip>
                                      {/* <Tooltip title="Delete" arrow>
                                        <Link>
                                          <DeleteOutlined className="deleteIcons" />
                                        </Link>
                                      </Tooltip> */}
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

        {/* file upload modal */}
        {/* <AddModal open={isModalOpen} handleClose={handleClose} classname="">
                      <div>
                      <h1 className="modalHeading">Excel Upload</h1>
                      </div>
                      <div className="mt-5">
                      <FileUpload
                          onFileSelect={handleFileSelect1}
                          fileId="file1"
                          buttonLabel="Upload Excel"
                          acceptedFileTypes=".xlsx, .xls"
                      />
                      {selectedFile?.name && (
                          <p className="fileNames">{selectedFile?.name}</p>
                      )}
                      </div>
                      <div item xs={12} className="flex mt-5 gap-4 flex-row justify-end">
                      <Button
                          variant="contained"
                          color="success"
                          size="small"
                          className="buttonStyle"
                          onClick={handleClose}
                      >
                          <UploadOutlined className="mr-1" />
                          Upload
                      </Button>
              
                      <Button
                          variant="contained"
                          color="info"
                          size="small"
                          className="buttonStyle"
                          onClick={handleClose}
                      >
                          <CloseOutlined className="mr-1" />
                          Cancel
                      </Button>
                      </div>
                  </AddModal> */}

        {/* status update Dialog */}
        {/* <CommonDialog
                      open={statusDialog}
                      onClose={statusClose}
                      title=""
                      content={MessageActiveTitle.ApplyContent}
                      actions={
                      <>
                          <Button
                          type="button"
                          variant="outlined"
                          className="!mr-1"
                          color="primary"
                          size="small"
                          onClick={() => statusClose("no")}
                          >
                          No
                          </Button>
                          <Button
                          type="button"
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={() => statusClose("yes")}
                          >
                          Yes, sure
                          </Button>
                      </>
                      }
                      errorAlert={statusAlert}
                  /> */}

        {/* Delete Confirmation Dialog */}
        {/* <CommonDialog
                      open={dialogOpen}
                      onClose={deleteClose}
                      title=""
                      content={MessageAndTitle.ApplyContent}
                      actions={
                      <>
                          <Button
                          type="button"
                          variant="outlined"
                          className="!mr-1"
                          color="primary"
                          size="small"
                          onClick={() => deleteClose("no")}
                          >
                          No
                          </Button>
                          <Button
                          type="button"
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={() => handleDelete(brandToDelete)}
                          >
                          Yes, sure
                          </Button>
                      </>
                      }
                      errorAlert={errorAlert}
                  /> */}
      </Grid>


      {/* Modal for  bill details*/}
      <AddModal open={open} handleClose={handleClose} classname={classes.modal}>


        <Grid
          className={`${classes.modalHeader}`}
        >
          <h2 className={`${classes.modalHeaderTitle}`}>Bill Details</h2>
          <CloseIcon
            onClick={handleClose}
            style={{ cursor: "pointer" }}
            className={`${classes.modalCloseIcon}`} />
        </Grid>


        <Grid
          style={{
            display: "grid",
            gridTemplateRows: "auto auto 1fr",
            // padding: "20px",
            // gap: "15px",
          }}
        >
          <Grid style={{ display: "grid", gap: "16px" }}>

            {/* Green Banner */}
            <Grid
              container
              className={`${classes.creditcard}`}
              sx={{ backgroundColor: "#E2F8ED", padding: 2 }}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* Left Section: Labels & Amounts */}
              <div className="flex items-end gap-4">
                <div>
                  <p className={`${classes.label}`}>Bill Amount</p>
                  <p className={`${classes.label}`}>Credits Added</p>
                </div>
                <div>
                  <p className={`${classes.value}`}>₹125.00</p>
                  <p className={`${classes.value}`}>₹100.00</p>
                </div>
              </div>

              <Grid item>
                <img
                  src="/assets/adminIcons/greenthunder.svg"
                  alt="User Icon"
                  className="bg-[#F6BE54] rounded-full w-16 h-16"
                />
              </Grid>
            </Grid>

            <p className={`${classes.para}`}>Electricity Account No.</p>

            {/* Account Number & Amount */}
            <p className={`${classes.pa}`}>123435655123</p>


            {/* Amount */}
            <Grid style={{ display: "grid", gap: "16px" }}>

              {/* Green Banner */}
              <Grid
                container
                className={`${classes.creditcard}`}
                alignItems="center"
                justifyContent="space-between"
              >
                {/* Left Section: Labels & Amounts */}
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-[#000000] text-xl">Final Payable</p>
                  <p className="text-[#1F467D] font-normal text-lg">₹25.00</p>
                </div>

                <Grid item>
                  <img
                    src="/assets/torrentpower.png"
                    alt="User Icon"
                    className="bg-[#F6BE54] rounded-full w-16 h-16 border-[1px]"
                  />
                </Grid>
              </Grid>
            </Grid>



            {/* input for enter amount */}

            {/* <InputBox
              fullWidth
              variant="outlined"
              name="amount"
              type="text"
              placeholder=""
              label={
                <span>
                  Enter Amount<span className="lableStar">*</span>
                </span>
              }
              InputProps={{
                style: { borderRadius: "599px" },
                shrink: true,
                startAdornment: (
                  <InputAdornment position="start">
                    ₹
                  </InputAdornment>
                )
              }}
              InputLabelProps={{
                        shrink: true,
                      }}
            /> */}

            <TextField
              fullWidth
              variant="outlined"
              name="amount"
              type="text"
              placeholder="Enter Amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#B8B8B8" }}>₹</span>
                      <span
                        style={{
                          height: "20px",
                          width: "1px",
                          backgroundColor: "#ccc",
                          display: "inline-block",
                        }}
                      />
                    </span>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "599px",
                  height: "40px",
                  background: "#fff",
                },
              }}
              inputProps={{
                style: { paddingLeft: "5px", color: "#B8B8B8" }, // Placeholder color
              }}
            />

            {/* Credit Used Button */}
            <Grid item xs={12}>
              <Button
                onClick={handleProceedToPay}
                // type="submit"
                style={{
                  backgroundColor: "#1F467D",
                  color: "white",
                  border: "none",
                  borderRadius: "999px",
                  padding: "3px",
                  fontSize: "24px",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: "400",
                }}
              >
                Proceed to Pay
              </Button>
            </Grid>


          </Grid>
        </Grid>
      </AddModal>


      {/* Modal for viewing Electricity setting*/}
      <AddModal open={eleOpen} handleCloseele={handleCloseele} classname={classes.modal}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid #f0f0f0",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          {/* Title */}
          <h2 style={{ fontWeight: "bold", fontSize: "20px", color: "#434343" }}>
            Electric Bill Receipt
          </h2>

          {/* Logo */}
          <div style={{ position: "absolute", right: "50px" }}>
            <img
              src="/assets/torrentpower.png"
              alt="Company Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              className='border-[1px]'
            />
          </div>

          {/* Close Button */}
          <CloseIcon
            onClick={handleCloseele}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "12px",
              width: "28px",
              height: "28px",
            }}
            className='w-9 h-9 text-[#6A6A72]'
          />
        </div>

        <Grid
          style={{
            display: "grid",
            gridTemplateRows: "auto auto 1fr",
            // padding: "20px",
            // gap: "15px",
          }}
        >
          <Grid style={{ display: "grid", gap: "16px" }}>

            {/* Green Banner */}
            <Grid
              container
              className={`${classes.creditcard}`}
              sx={{ backgroundColor: "#E2F8ED", padding: 2 }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <p className={`${classes.creditamount}`}>₹ 28.18</p>
                <p className={`${classes.creditlabel}`}>
                  Saving so far
                </p>
              </Grid>
              <Grid item>
                <img
                  src="/assets/adminIcons/greenthunder.svg"
                  alt="User Icon"
                  className="bg-[#F6BE54] rounded-full w-16 h-16"
                />
              </Grid>
            </Grid>

            {/* Electricity Account Details */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p className={`${classes.para}`}>Electricity Account No.</p>
              <div className={`${classes.div}`}>
                <ShareAltOutlined style={{ fontSize: "16px", color: "#1F467D" }} />
                <span className={`${classes.span}`}>Share</span>
              </div>
            </div>

            {/* Account Number & Amount */}
            <p className={`${classes.pa}`}>123435655123</p>


            {/* Amount */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p className={`${classes.pa}`}>₹100</p>
              <p className={`${classes.date}`}>10 Feb, 2025</p>
            </div>


            {/* Credit Used Button */}
            <button className={`${classes.btn}`}
              onClick={() => {
                handleOpendis(); // Open Discom Modal
                handleCloseele(); // Close Electricity Modal
              }}
            >
              Credit Used: ₹ 100.00
            </button>

          </Grid>

        </Grid>
        {/* </Grid> */}
      </AddModal>

      {/* Discom modal */}
      <AddModal open={disOpen} handleCloseele={handleClosedis} classname={classes.modal}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid #f0f0f0",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          {/* Title */}
          <div className='flex flex-col'>
            <h2 style={{ fontWeight: "bold", fontSize: "33px", color: "#434343" }}>
              Discom Details
            </h2>
            <h2 style={{ fontWeight: "semibold", fontSize: "16px", color: "#030303" }}>
              Your Saved Bills
            </h2>
          </div>

          {/* Close Button */}
          <CloseIcon
            onClick={handleClosedis}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "12px",
              width: "28px",
              height: "28px",
            }}
            className='w-9 h-9 text-[#6A6A72]'
          />
        </div>

        {/* Main Container */}
        <Grid item xs={12} className="flex justify-center">
          <Grid item className="bg-white p-5 rounded-lg border-[1px] border-[#DADADA] w-full">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Bill Pay</h2>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  {/* <InputBox
                  fullWidth
                  variant="outlined"
                  name="discom_name"
                  type="text"
                  label={
                    <span>
                      Discom Name<span className="lableStar">*</span>
                    </span>
                  }
                  InputProps={{
                    style: { borderRadius: "599px" },
                    shrink: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.discom_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.discom_name &&
                    Boolean(formik.errors.discom_name)
                  }
                  helperText={
                    formik.touched.discom_name && formik.errors.discom_name
                  }
                /> */}
                  <Autocomplete
                    fullWidth
                    size="small"
                    className="searchAutoBox"
                    options={Array.isArray(discomList) ? discomList : []}
                    value={
                      Array.isArray(discomList)
                        ? discomList.find((item) => item.id === formik.values.discom_id) || null
                        : null
                    }
                    onChange={(event, value) => {
                      formik.setFieldValue("Discom", value ? value.id : "");
                      setBrandName(value ? value.title : "");  // Update discom_id
                    }}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label={
                          <span>
                            Discom
                            <span className="lableStar">*</span>
                          </span>
                        }
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "599px", // Border-radius applied here
                          },
                        }}
                      // error={Boolean(formik.touched.discom_id && formik.errors.discom_id)}
                      // helperText={formik.touched.discom_id && formik.errors.discom_id}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <InputBox
                    fullWidth
                    variant="outlined"
                    name="consumer_no"
                    type="text"
                    label={
                      <span>
                        Consumer No.<span className="lableStar">*</span>
                      </span>
                    }
                    InputProps={{
                      style: { borderRadius: "599px" },
                      shrink: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formik.values.consumer_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.consumer_no &&
                      Boolean(formik.errors.consumer_no)
                    }
                    helperText={
                      formik.touched.consumer_no && formik.errors.consumer_no
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={() => {
                      handleOpendisde(); // Open Discom Modal
                      handleClosedis();
                      handleCloseele(); // Close Electricity Modal
                    }}
                    // type="submit"
                    style={{
                      backgroundColor: "#1F467D",
                      color: "white",
                      border: "none",
                      borderRadius: "999px",
                      padding: "3px",
                      fontSize: "24px",
                      cursor: "pointer",
                      width: "100%",
                      fontWeight: "400",
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </AddModal>

      {/* Discom Details modal */}
      <AddModal open={disdeOpen} handleCloseele={handleClosedisde} classname={classes.modal}>
        {/* Header */}
        <div className={`${classes.modalHeader}`}>
          <div className="flex flex-col">
            <h2 className={`${classes.modalHeaderTitle}`}>Discom Details</h2>
            <h3 className={`${classes.modalHeaderValue}`}>Your Saved Bills</h3>
          </div>
          {/* Close Button */}
          <IconButton onClick={handleClosedisde} className="absolute top-4 right-4">
            <CloseIcon className={`${classes.modalCloseIcon}`} />
          </IconButton>
        </div>

        {/* Discom Card */}
        <Card className={`${classes.discomcard}`}>
          <CardContent>
            {/* Header */}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={10}>
                <p className={`${classes.scheduleCardContent}`}>
                  Name of Location/ Home or Office
                </p>
              </Grid>
              {/* More Options */}
              <Grid item xs={2} textAlign="right">
                <IconButton onClick={handleMenuClick}>
                  <MoreOutlined />
                </IconButton>
                <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
                  <MenuItem onClick={handleMenuClose}>
                    <EditOutlined fontSize="small" className="mr-1 text-blue-600" /> Edit
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <DeleteOutlined fontSize="small" className="mr-1 text-red-600" /> Remove
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>

            {/* Content */}
            <Grid container alignItems="center" spacing={2} mt={1}>
              <Grid item>
                <Avatar src="/assets/torrentpower.png" className="w-10 h-10" />
              </Grid>
              <Grid item>
                <p className={`${classes.para}`}>
                  Electricity Provider Discom
                </p>
                <p className='font-normal text-sm text-[#030303]'>
                  7878127525
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Grid item xs={12}>
          <Button
            onClick={() => {
              handleOpendisde(); // Open Discom Modal
              handleClosedis();
              handleCloseele(); // Close Electricity Modal
            }}
            // type="submit"
            style={{
              backgroundColor: "#1F467D",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "3px",
              fontSize: "24px",
              cursor: "pointer",
              width: "100%",
              fontWeight: "400",
            }}
          >
            Save
          </Button>
        </Grid>
      </AddModal>



    </React.Fragment>
  );
}

export default Paybills;