<!-- loginpage.jsx -->     
        
        
        
 
   <div className="mw-xs mt-3">
          <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
            <Image className="logos " alt={getConfig().SITE_NAME} src="https://mycloud.skillassure.com/static/images/logo.64c768235db0.png" style={{height:"50px",width:"200px"}}/>
          </Hyperlink>
          <h1>Hello !</h1>
          <h3>Sign In To Your Account</h3>
            <ThirdPartyAuthAlert
              currentProvider={thirdPartyAuthContext.currentProvider}
              platformName={thirdPartyAuthContext.platformName}
            />

          
          {this.props.loginError ? <LoginFailureMessage loginError={this.props.loginError} /> : null}
          {submitState === DEFAULT_STATE && this.state.isSubmitted ? windowScrollTo({ left: 0, top: 0, behavior: 'smooth' }) : null}
          {activationMsgType && <AccountActivationMessage messageType={activationMsgType} />}
          {this.props.resetPassword && !this.props.loginError ? <ResetPasswordSuccess /> : null}


          <Form name="sign-in-form" id="sign-in-form">
            <h5>Email ID</h5>
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
            <h5>Password</h5>
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
            <div className="forgot_session" style={{display:"flex",flexDirection:"row",justifyContent:"space-between", alignItems:"baseline"}}>
                <div>
                  <input className="inp-chbx" id="chbx" type="checkbox" style={{display:"none"}} />
                  <label className="cust_btn chbx" for="chbx" style={{color:"dodgerblue",fontWeight:"bolder"}}> 
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Remember Me </span>
                  </label>
                </div>

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
            <div className="agreement">
              <div>
                <input className="inp-cbx" id="cbx" type="checkbox" style={{display:"none"}} />
                <label className="cbx" for="cbx" style={{fontSize:"15px",fontWeight:"bold"}}> 
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>By signing in, you agree to the Terms and Services and Privacy Policy</span>
                </label>
              </div>
            </div>
            
              

            {this.renderThirdPartyAuth(providers, secondaryProviders, currentProvider, thirdPartyAuthApiStatus, intl)}
          </Form>
        </div>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 openedx/core/djangoapps/user_authn/views or urls
