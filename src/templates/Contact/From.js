import React from 'react';
import FormInput from "../../components/UI/Input";

const From = () => {
    return (
        <div className="contact-form-wrap">
            <form id="contact-form">
                <div className="row">
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'first_name'}
                            placeholder={'First Name *'}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'last_name'}
                            placeholder={'Last Name *'}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'email_address'}
                            placeholder={'Email address *'}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'phone_no'}
                            placeholder={'Phone No'}
                        />
                    </div>

                    <div className="col-12">
                        <FormInput
                            tag={'textarea'}
                            name={'con_message'}
                            placeholder={'Write Your Message *'}
                        />

                        <FormInput
                            tag={'button'}
                            classes={'btn-outline'}
                        />

                        <div className="form-message"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default From;