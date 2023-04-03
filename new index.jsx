<div className="mw-xs mt-3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 

          <div className="form-login" style={{marginTop:"80px",maxWidth:"300px"}}>
              <div className="logo" style={{display:"flex",justifyContent:"center"}}> 
              <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
                  <img alt={getConfig().SITE_NAME} src="https://mycloud.skillassure.com/static/images/logo.64c768235db0.png" style={{height:"35px"}}/>
              </Hyperlink>
              </div>
              <div className="header">
              <span style={{fontSize:"18px",fontWeight:"bold"}}>Login</span>
                  <p style={{fontSize:"12px",color:"grey"}}>Please Provide Your Login Details </p>
                  <ThirdPartyAuthAlert
          currentProvider={thirdPartyAuthContext.currentProvider} 
          platformName={thirdPartyAuthContext.platformName}
        />
            {this.props.loginError ? <LoginFailureMessage loginError={this.props.loginError} /> : null}
      {submitState === DEFAULT_STATE && this.state.isSubmitted ? windowScrollTo({ left: 0, top: 0, behavior: 'smooth' }) : null}
      {activationMsgType && <AccountActivationMessage messageType={activationMsgType} />}
      {this.props.resetPassword && !this.props.loginError ? <ResetPasswordSuccess /> : null}

              </div>
              <Form name="sign-in-form" id="sign-in-form"></Form>
                  <div className="log_forms">
                      <div className="email-col">
                          <span style={{fontSize:"14px"}}>Email Id</span>
                          <input type="text" className="email-col-id" name="emailId" placeholder="eg. abc@gmail.com" style={{border: "1px solid #a8a4a4",borderRadius:"5px",minWidth:"-moz-available",fontSize:"13px",minHeight: "35px"}}/>


                          <FormGroup
          name="emailOrUsername"
          value={this.state.emailOrUsername}
          autoComplete="on"
          handleChange={(e) => this.setState({ emailOrUsername: e.target.value, isSubmitted: false })}
          handleFocus={this.handleOnFocus}
          handleBlur={this.handleOnBlur}
          errorMessage={this.state.errors.emailOrUsername}
          floatingLabel={intl.formatMessage(messages['login.user.identity.label'])}
        />

                          
                      </div>
                      <div className="password-col">
                          <span style="font-size:14px;">Password</span>
                          <input type="password" className="password-col-id" name="passwordId" style={{border: "1px solid #a8a4a4",borderRadius:"5px",minWidth:"-moz-available",fontSize:"13px",minHeight: "35px"}}/>
                          <PasswordField
          name="password"
          value={this.state.password}
          autoComplete="off"
          showRequirements={false}
          handleChange={(e) => this.setState({ password: e.target.value, isSubmitted: false })}
          handleFocus={this.handleOnFocus}
          handleBlur={this.handleOnBlur}
          errorMessage={this.state.errors.password}
          floatingLabel={intl.formatMessage(messages['login.password.label'])}
        />
                      </div>
                  </div>
                  <div className="forgot_password" style={{display:"flex",justifyContent:"end",marginTop:"20px",marginBottom:"10px"}}>
                      <span style={{color:"orange",fontWeight:"bold",fontSize:"13px"}}>  Forgot Password ? </span>

          <Link
            id="forgot-password"
            name="forgot-password"
            className="cust_btn btn-link"
            to={updatePathWithQueryParams(RESET_PAGE)}
            onClick={this.handleForgotPasswordLinkClickEvent}
            style={{color:"dodgerblue",fontWeight:"bolder"}}
          >
            {intl.formatMessage(messages['forgot.password'])}
            
          </Link>
                  </div>
                  <div className="buttons_log" style={{display:"flex",justifyContent:"center",minWidth:"100%",display:"flex",flexDirection:"column"}}>


                      <button className="btn btn-log" type="submit" style={{marginBottom:"10px",background:"#014384",color:"white"}}>Login</button>
                      <StatefulButton
          name="sign-in"
          id="sign-in"
          type="submit"
          variant="brand"
          className="login-button-width"
          style={{minWidth:"100%",background:"linear-gradient(45deg,#14426f,#02d5d5)",borderColor:"dodgerblue"}}
          state={submitState}
          labels={{
            default: intl.formatMessage(messages['sign.in.button']),
            pending: '',
          }}
          onClick={this.handleSubmit}
          onMouseDown={(e) => e.preventDefault()}
        />



                      <button className="btn btn-google" type="submit" style="border:1px solid grey">
                          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" style={{height:"25px"}}/>
                          Sign with Google</button>

                          <p style="font-size:12px; font-weight:bold;text-align:center;">Don't Have an Account? <span style={{color:"orange",fontWeight:"bold"}}> Create Account </span> </p>

                          <div className="reg_link" style={{display:"flex",flexDirection:"row",alignItems:"baseline"}}>
          <p style={{fontSize:"13px",fontWeight:"bolder"}}>Didn't have an account ? </p>
          <Link
              id="register_page"
              name="register_page"
              to={updatePathWithQueryParams(REGISTER_PAGE)}
              onClick={this.handleRegisterAccount}
              style={{color:"dodgerblue",fontWeight:"bolder",marginLeft:"5px"}}
            >
              Register
            </Link>
        </div>
                  </div>
                  {this.renderThirdPartyAuth(providers, secondaryProviders, currentProvider, thirdPartyAuthApiStatus, intl)}
              <Form/>
          </div>


      </div>
