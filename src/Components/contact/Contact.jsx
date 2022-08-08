// React
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

// Components & elements
import { StaticIconTypes } from 'types/StaticIcon';
import Boy from 'assets/img//Person/Boy.png';
import Label from 'Elements/label/Label';
import MyButton from 'Elements/Button/MyButton';
import InfoCard from 'Elements/infoCard/InfoCard';
import Modal from 'Elements/modal/Modal';

// Style
import styles from './Contact.module.scss';
import global from '../../styles/global/global.module.scss';
import classNames from 'classnames';

// consts

const Erorrs = {
  REQIRED: 'this field is required',
};

const Contact = () => {
  const [modalActive, setModalActive] = useState(null);
  const [modalErrorActive, setModalErrorActive] = useState(null);
  console.log(modalActive);
  const [modalName, setModalName] = useState('');
  const [modalError, setModalError] = useState('');

  // Start Value Inputs
  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: '',
    language: 'en',
  };

  // Validate Form
  const validate = (values) => {
    const errors = {};
    // Password Validate
    if (!values.password) {
      errors.password = Erorrs.REQIRED;
    } else if (values.password.length <= 5) {
      errors.password = 'Password is too short';
    }
    // Email Validate
    if (!values.email) {
      errors.email = Erorrs.REQIRED;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // First Name Vlidate
    if (!values.firstName) {
      errors.firstName = Erorrs.REQIRED;
    }
    // Last Name Vlidate
    if (!values.lastName) {
      errors.lastName = Erorrs.REQIRED;
    }
    // Username Vlidate
    if (!values.username) {
      errors.username = Erorrs.REQIRED;
    }

    return errors;
  };

  // Submit Form
  const submit = (values, { setSubmitting, resetForm }) => {
    setModalName(values.firstName);
    const apiUrl =
      'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';
    axios
      .post(apiUrl, values)
      .then((res) => {
        setModalActive(true);
        setSubmitting(false);
        resetForm({ values: ''});
      })
      .catch((errors) => {
        // console.log(errors);
        setModalError(errors.response.data.message[values.language]);
        setModalErrorActive(true);
        setSubmitting(false);
        resetForm({ values: ''});

      });

    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));

    // }, 400);
  };

  return (
    <div className={styles.contact}>
      <div className={classNames(styles.wrapper, global.container)}>
        {/* Cards Block */}
        <div className={styles.cards}>
          <InfoCard
            mode={StaticIconTypes.marker}
            title={'Address'}
            firstInfo={'Express Chambers II Spaces'}
            secondInfo={'Works, Level 5, Royapettah, Chennai – 600014'}
          />
          <InfoCard
            mode={StaticIconTypes.notebook}
            title={'Phone'}
            firstInfo={'Enquiry: 1800-123-4567'}
            secondInfo={'Order: 2400-480-894'}
          />
          <InfoCard
            mode={StaticIconTypes.message}
            title={'Email'}
            firstInfo={'help@brandexponent.com'}
            secondInfo={'support@brandexponent.com'}
          />
        </div>
        {/* Form Block */}
        <div className={styles.formBlock}>
          {/* Image */}
          <div className={styles.image}>
            <img src={Boy} alt='Boy' />
          </div>
          {/* Form */}
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Enquiry Form</h2>
            <div className={styles.text}>
              Dont be shy, Just tell us about yourself and we’ll figure out the
              best option for you and your project. Dont like Filling up forms ?
              Mail us then
              <sup className={global.yellow}> Company@gmail.com</sup>
            </div>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={submit}
              
            >
            
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formInputBlock}>
                    <Label
                      text={'Your firstName'}
                      name={'firstName'}
                      type={'text'}
                      placeholder={'Example: Vadym'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                      }
                    />

                    <Label
                      text={'Your lastName'}
                      name={'lastName'}
                      type={'text'}
                      placeholder={'Example: Stepanets'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.lastName && touched.lastName && errors.lastName
                      }
                    />

                    <Label
                      text={'Your email'}
                      name={'email'}
                      type={'email'}
                      placeholder={'Example: some-name@gmail.com'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.email && touched.email && errors.email
                      }
                    />

                    <Label
                      text={'Your username'}
                      name={'username'}
                      type={'text'}
                      placeholder={'Example: Aliensky'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.username && touched.username && errors.username
                      }
                    />
                    <Label
                      text={'Your password'}
                      name={'password'}
                      type={'password'}
                      placeholder={'It must be reliable'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMessage={
                        errors.password && touched.password && errors.password
                      }
                    />

                    <Field
                      className={styles.select}
                      component='select'
                      name='language'
                    >
                      <option value='en'>English</option>
                      <option value='ua'>Ukraine</option>
                    </Field>
                  </div>
                  <textarea className={styles.textarea} placeholder='Message' />

                  <div className={styles.btnBlock}>
                    {' '}
                    <MyButton
                      title='Submit'
                      type='submit'
                      disabled={isSubmitting}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {modalActive ? (
          <Modal
            active={modalActive}
            setActive={setModalActive}
            name={modalName}
            messages={
              'The application has been successfully completed, wait for the call.'
            }
          />
        ) : null}
        {modalErrorActive ? (
          <Modal
            active={modalErrorActive}
            setActive={setModalErrorActive}
            name={modalName}
            messages={modalError}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
