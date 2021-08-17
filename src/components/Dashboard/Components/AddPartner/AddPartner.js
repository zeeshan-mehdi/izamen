





import { Formik } from "formik";
import * as Yup from "yup";

import { Container, Row, Col, Modal, Button } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';

import axios from "axios";
import globalvariables from '../../../../globalvariables';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const emal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
const eye = <FontAwesomeIcon icon={faEye} />;
const urlreg=/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*$)/

// let extensionCheck = false;

const AddPartner = (props) => (
    <>
        <Container>
            <div className="app">
                <Formik
                    initialValues={
                        (
                            {
                                name: "",
                                email: "",
                                url:"",
                                contactno: "",
                                address: "",
                                city: "",
                                country: "",
                                postalcode: "",
                            })
                    }

                    onSubmit={async (values) => {


                        await new Promise((resolve) => setTimeout(resolve, 500));
                        const headers = {
                            "Content-Type": 'application/json',
                        };
                        let data = {
                            'name': values.name,
                            'url': values.url,
                            'email': values.email,
                            'contactNo': values.contactno,
                            'address': values.address,
                            'city': values.city,
                            'country': values.country,
                            'postalCode': values.postalcode
                        };
                    
                        //IF AGENT IS BEING UPDATED



                        await axios
                            .post(globalvariables.data.Basicapi + "addPartner", data, {
                                headers: headers,
                            })
                            .then(() => {
                                props.fordatareferesh();
                                props.forclosingmodal();
                                // props.onCloseModal();
                                // props.forupdatesuccessmsg();
                            })
                            .catch((error) => {
                                // console.log(error);
                                alert(error.toString());
                            });


                    }}


                    validationSchema={Yup.object().shape({
                        name: Yup.string().required("Required"),
                        url:Yup.string().matches(urlreg, 'Url is not valid'),
                        email: Yup.string().matches(emal, 'email is not valid').email().required("Required"),
                        contactno: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
                        address: Yup.string().required("Required"),
                        city: Yup.string().required('Required'),
                        country: Yup.string().required("Required"),
                        postalcode: Yup.string().required("Required")
                    })}
                >
                    {(props) => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset,
                        } = props;
                        // const [passHidden, togglePassHidden] = useState(true);

                        return (
                            <form onSubmit={handleSubmit} style={{ marginTop: '2.5%' }}>
                                <Row>
                                    <Col md={6}>
                                        <label htmlFor="name" style={{ display: "block" }}>
                                            Name <span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField id="name"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter Name"
                                            type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.name && touched.name
                                                    ? "text-input error"
                                                    : "text-input"
                                            } />

                             
                                        {errors.name && touched.name && (
                                            <div className="input-feedback">{errors.name}</div>
                                        )}
                                    </Col>
                                    <Col md={6}>
                                        <label htmlFor="url" style={{ display: "block" }}>
                                        URL<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="url"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter URL"
                                            type="text"
                                            value={values.url}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.url && touched.url
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.lastname && touched.lastname && (
                                            <div className="input-feedback">{errors.url}</div>
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <label htmlFor="email" style={{ display: "block" }}>
                                            Email<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="email"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter Email"
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.email && touched.email
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}
                                    </Col>
                                    <Col md={6}>
                                        <label htmlFor="contactno" style={{ display: "block" }}>
                                            Contact No<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="contactno"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter Contact"
                                            type="text"
                                            value={values.contactno}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.contactno && touched.contactno
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.contactno && touched.contactno && (
                                            <div className="input-feedback">{errors.contactno}</div>
                                        )}
                                    </Col>
                                   
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <label htmlFor="address" style={{ display: "block" }}>
                                            Address<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="address"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter address"
                                            type="text"
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.address && touched.address
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.address && touched.address && (
                                            <div className="input-feedback">{errors.address}</div>
                                        )}
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <label htmlFor="city" style={{ display: "block" }}>
                                            City<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="city"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter city"
                                            type="text"
                                            value={values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.city && touched.city
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.city && touched.city && (
                                            <div className="input-feedback">{errors.city}</div>
                                        )}
                                    </Col>
                                    <Col md={4}>
                                        <label htmlFor="country" style={{ display: "block" }}>
                                            Country<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="country"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter country"
                                            type="text"
                                            value={values.country}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.country && touched.country
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.country && touched.country && (
                                            <div className="input-feedback">{errors.country}</div>
                                        )}
                                    </Col>
                                    <Col md={4}>
                                        <label htmlFor="postalcode" style={{ display: "block" }}>
                                            Postal Code<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="postalcode"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter postalcode"
                                            type="text"
                                            value={values.postalcode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.postalcode && touched.postalcode
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.postalcode && touched.postalcode && (
                                            <div className="input-feedback">{errors.postalcode}</div>
                                        )}
                                    </Col>
                                </Row>



                                <Row style={{ marginTop: '2.5%', marginLeft: '2%' }}>

                                    <Button
                                        type="button"
                                        className="outline"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >
                                        Reset
              </Button>
                                    <Button type="submit" disabled={isSubmitting} style={{ marginLeft: '2%' }}>
                                        Submit
              </Button>
                                </Row>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </Container>

    </>
);

export default AddPartner;
