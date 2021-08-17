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

// let extensionCheck = false;

const AddLawOfTheLand = (props) => (
    <>
        <Container>
            <div className="app">
                <Formik
                    initialValues={
                        (
                            {
                                title: "",
                                description: "",

                            })
                    }

                    onSubmit={async (values) => {


                        await new Promise((resolve) => setTimeout(resolve, 500));
                        const headers = {
                            "Content-Type": 'application/json',
                        };
                        let data = {
                            'title': values.title,
                            'description': values.description,

                        };

                        //IF AGENT IS BEING UPDATED



                        await axios
                            .post(globalvariables.data.Basicapi + "postLaw", data, {
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
                        title: Yup.string().required("Required"),
                        description: Yup.string().required("Required"),

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
                                    <Col md={12}>
                                        <label htmlFor="title" style={{ display: "block" }}>
                                            Title <span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField id="title"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter Title"
                                            type="text"
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.title && touched.title
                                                    ? "text-input error"
                                                    : "text-input"
                                            } />


                                        {errors.title && touched.title && (
                                            <div className="input-feedback">{errors.title}</div>
                                        )}
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <label htmlFor="description" style={{ display: "block" }}>
                                        Description<span style={{ color: "red" }}>(*)</span>
                                        </label>
                                        <TextField
                                            id="description"
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Enter Description"
                                            type="text"
                                            value={values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.description && touched.description
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.description && touched.description && (
                                            <div className="input-feedback">{errors.description}</div>
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

export default AddLawOfTheLand;
