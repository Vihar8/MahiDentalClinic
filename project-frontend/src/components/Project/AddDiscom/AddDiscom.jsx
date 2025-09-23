import React from "react";
import classes from "../Subscriber.module.scss";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import InputBox from "../../../commoncomponents/InputBox/InputBox";

function AddDiscom() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    discom_id: yup.string().required("This field is required"),
    consumer_no: yup.string().required("This field is required"),
  });

  // Create ticket formik form
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

  const discomList = [
    { id: "1", title: "Discom 1" },
    { id: "2", title: "Discom 2" },
    { id: "3", title: "Discom 3" },
    ];

  const handleClick = () => {
    navigate("/project");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <h1 className={`${classes.loginheading}`}>Add Discom</h1>

        <Card>
          <CardContent className="border-[1px] border-[#F3F3F3] rounded-lg">
            <Grid
              container
              justifyContent="center"
              gap={2}
              className="mx-12 my-7"
            >
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={10} sm={10} md={5} lg={5}>
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
                <Grid item xs={10} sm={10} md={5} lg={5}>
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
                    // error={
                    //   formik.touched.consumer_no &&
                    //   Boolean(formik.errors.consumer_no)
                    // }
                    // helperText={
                    //   formik.touched.consumer_no && formik.errors.consumer_no
                    // }
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={3} sm={3} md={4} lg={4}>
                  <Button
                    type="button"
                    variant="outlined"
                    size="medium"
                    className={`${classes.cancelButton}`}
                    onClick={handleClick}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  display="flex"
                  justifyContent="right"
                >
                  <Button
                    variant="contained"
                    size="medium"
                    type="submit"
                    className={`${classes.submitButton}`}
                    onClick={submitForm}
                  >
                    Verify
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddDiscom;
